---
layout: post
author: Anant
---

Making sure I do not have to wonder what Docker is anymore.

The whole functioning of Docker is somewhere between locally running and VMs. 

### Docker Containers, Images
Containers are isolated environments that include the source code, the software needed to run it as well as a defined OS.


It can be said that Docker images are blueprints for containers. A Docker image is a read-only, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

When you run a Docker image, Docker creates a container from the image and starts it up.

The `Dockerfile` is a text file that contains instructions on how to build a Docker image. Once you have created a Dockerfile, you can build the image using the docker build command. The `docker build` command will create the image and store it in your local Docker registry.

Once you have built an image, you can run it using the `docker run` command. The `docker run` command will create a container from the image and start it up.

When you use the COPY command in the `Dockerfile`, the copying happens during build, not run, Therefore the code becomes a part of the image.

If your image has proprietary code in it, you should not upload the image to a public repository. If you do, anyone who has access to the repository will be able to download the image and run it. This could allow them to access your proprietary code.

Use `docker build -t <image_name>:latest` to build.
<br>
`-t` : option signifies the tag, i.e., the name and the version. 
<br>
`-f` : This option specifies the path to the Dockerfile that you want to use to build the image. 
<br>
`-c` : This option specifies the command that you want to run when the image is built. The command is run in a shell inside the image and it is used to configure the image or to install software.
<br>
`--no-cache` : This option tells Docker not to use the cache when building the image. This can be useful if you have made changes to the Dockerfile or if you want to force Docker to rebuild the image from scratch.

Use `docker run -it my-gradle-image:latest` to create the container from the image and start it up.
<br>
`-v` : option to mount your local directory into the container. This will allow you to access your project files from inside the container.
<br>
`-p` : option to specify the port that you want to expose from the container. This will allow you to access your application from outside the container.
<br>
`-d` : option to run the container in detached mode. This will allow you to run the container in the background and continue working in your terminal.

### Java (Gradle) + Docker
To run a java gradle project, we should first compress the compiled `.class` files. A good way to do that is to make a `.jar` file. After that the jar file can be run by a JVM like this:

```
    java -jar build/libs/<project_name>-0.0.1-SNAPSHOT-plain.jar 
```

Here is an example of a Dockerfile that runs a Jar file of a gradle project:

```
FROM gradle:7.2.0-jdk17

WORKDIR /app

COPY . .

RUN ./gradlew clean build

CMD ["java", "-jar", "build/libs/gradle-with-docker-0.0.1-SNAPSHOT.jar"]
```


But first the jar file needs to be built. We can accomplish this via command line as well as Intellij IDEA's built-in run build tasks. 

Right clicking on the `build.gradle` file, we can set the run/build configurations for this project.
There are many pre-defined flows we can select like assemble, build, check, clean, jar, test, ...

Left clicking on the `build.gradle` file, we can set some properties of the different run/build configurations. A common error I've encountered here is that once the .jar file is made, Intellij does not automatically tell it what the Main-Class for the application is. 

Add this code to the `build.gradle` file: 

```
jar {
    manifest {
        attributes(
                'Class-Path': configurations.runtimeClasspath.files.collect { it.getName() }.join(' '),
                'Main-Class': 'com.example.gradlewithdocker.GradleWithDockerApplication'
        )
    }
}
```

Another error is that once the .jar file is made, Intellij does not automatically packaage in the dependencies of your project as well inside the .jar. A 'fat jar' (also known as uber-jar) is the term used to describe a .jar file that also has all the dependencies packaged in as well.
In maven you can make a fat jar by including the following dependency in `pom.xml`:

#### Code for Maven (*unchecked)
```
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-jar-plugin</artifactId>
  <configuration>
    <archive>
      <manifest>
        <addClasspath>true</addClasspath>
      </manifest>
    </archive>
  </configuration>
</plugin>
```


In gradle, there are 3 options: either use the guavas (google's open source collection of java classes), or use a gradle based plugin like the `Shadow` plugin or create a separate task in `build.gradle` like this:

#### Code for guavas
```
plugins {
    id 'java'
    id 'org.springframework.boot' version '3.0.6'
    id 'io.spring.dependency-management' version '1.1.0'
}

apply plugin: 'java'
apply plugin: 'com.github.johnrengelman.shadow'
```
Note that the snapshot will be created with the '-all' suffix. Conifgurations of the Gradle type can be set up with the shadowJar command.

#### Code for separate task (checked)
```
task fatJar(type: Jar) {
    manifest {
        attributes 'Implementation-Title': 'Gradle Jar File Example',
                'Main-Class': 'com.example.gradlewithdocker.GradleWithDockerApplication'
    }
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
    from { configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) } }
    with jar
}
```
(IMPORTANT: Note that this fatJar task can later be used from Intellij's run configurations. Also, note the use of duplicateStrategy keyword.)

Guavas is a library that provides a number of utility classes and methods. It can be used to simplify common tasks, such as working with collections, strings, and I/O.

The fatJar task is used to create a JAR file that includes all of the project's dependencies. This can be useful for distributing your application, as it eliminates the need for users to install the dependencies separately.

If you are only using a few dependencies, then using Guavas may be the better option. This is because it will make your code smaller and easier to maintain. However, if you are using a lot of dependencies, then the fatJar task may be the better option. This is because it will make your application easier to distribute.

### Should we be forced to create a new image every time we change the code a little?

Technically, no, what we can do instead is to keep a simple image and load up a volume into whatever container and execute commands on it by accessing its terminal.

So far I have not properly tried this approach because the base image I have been loading (gradle:7.2.0-jdk17) requires that a gradle project must be loaded in through Dockerfile, so before container creation. I cannot do that because my code is going to be mounted as a volume during container creation.


## Intellij IDEA Things
In Intellij IDEA the run configurations menu for gradle projects has a field for specifying the command that will be run.