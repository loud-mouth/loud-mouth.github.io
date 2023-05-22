---
layout: post
author: Anant
---

Because this will be my primary job for the next few years.

### Modules, Libraries, Facets and Artefacts -- SO many terms.
Java Modules, Libraries, Facets, and Artifacts serve different purposes in the Java development ecosystem. Here's an explanation of each term:

Java Modules: Java modules are a feature introduced in Java 9 as part of the Java Platform Module System (JPMS). Modules allow you to define explicit dependencies between different parts of your Java application and enforce encapsulation boundaries. They provide a way to organize and structure your codebase, improve modularity, and manage dependencies at a finer granularity than traditional JAR-based dependencies.

Libraries: Libraries, in the context of Java, are collections of pre-compiled code modules that provide reusable functionality to Java applications. They contain pre-written code and resources that developers can utilize to perform specific tasks or implement certain features in their Java programs. Libraries are typically distributed as JAR (Java Archive) files and can be included in Java projects to access their functionality.

Facets: Facets, specifically in the context of IntelliJ IDEA (an integrated development environment), represent different aspects or capabilities of a project. Facets allow you to add specific frameworks, technologies, or features to your project, enabling IDE support, code assistance, and integration for those specific aspects. For example, you might add a web facet to enable web development support or a JPA facet for Java Persistence API integration. Facets provide a way to customize the development environment based on the requirements of your project.

Artifacts: Artifacts are the output of the build process in a Java project. They represent the compiled and packaged form of your project, ready for deployment or distribution. Artifacts can take different forms, such as JAR files, WAR files (for web applications), or EAR files (for enterprise applications). They contain the compiled Java bytecode, resources, and other necessary files to run the application.

These concepts are not specific to Gradle or any specific build tool.

### The dependencies you include can be both pre-compiled or not compiled
You can include both types in your project by opening Project Structure in Intellij (`Cmd + ↓`) and going to Modules and then Dependencies and adding there.

## Intellij IDEA Things
In Intellij IDEA the run configurations menu for gradle projects has a field for specifying the command that will be run.

### Why 'Invalidate Caches' is indespensible
