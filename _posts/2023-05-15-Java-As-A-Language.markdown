---
layout: post
author: Anant
---

Mentioning random Java facts that might be useful to me someday.

## Primary Focus on my study of Java these next 2 months:
<ol>
<li>Learn basic Java functionalities from Head First Java.</li>
<li>Learn good Java programming practices from Effective java book.</li>
<li>Learn about the latest version of Java and what are the new things introduced.</li>
<li>Learn the internal workings of the Java language as a whole, advantages/disadvantages compared to other languages.</li>
</ol>

### Java primitive types
For integers : byte(8), short(16). int(32), long(64).
For floating points : float(32), double(64).
`char`s are 16 bits (from \u0000 -> \uffff).
`boolean`s are 1 bit ofcourse.

`String` are immutable and not a primitive data types. 
Default values for everything are 0 except for String which has value `null`.

`0b` starts a binary literal. `0x` starts a hexadecimal literal. Underscores can be added anywhere in numerical literals to make it more readable. (`1_000_000_000`)

### Following are the different types of keywords in java—

Access modifiers − private, protected, public.
Class, method, variable modifiers− abstract, class, extends, final, implements, interface, native, new, static, strictfp, synchronized, transient, volatile.
Flow control− break, case, continue, default, do, else, for, if, instanceof, return, switch, while.
Package control− import, package.
Primitive types− boolean, byte, char, double, float, int, long, short.
Error handling− assert, catch, finally, throw, throws, try.
Enumeration− enum.
Others− super, this, void.
Unused− const, goto.

### Java Compiler vs Java Virtual Machine
The compiler converts the source code into Java Bytecode, it catches a lot of the errors beforehand for example those that violate its strongly typed rule. It however, cannot catch ClassCastExceptions

### Java array declarations
When declaring
```
Dog[] pets = new Dog[7];
```
We are actually creating 7 dog object pointers, not the objects themselves. We still need to execute
```
Dog[i] = new Dog();
```
to complete the creations of 7 dog objects.

### Java passes everything by value. EVERYTHING.
But for objects (reference types), value means the address value that the pointer stores.

### Random Facts
<ul>
    <li> 
        You CANNOT use integers in boolean tests. while (x) where x is an integer is not allowed.
    </li>
    <li>
        Math.random() outputs values in the range [0, 1).
    </li>
    <li>
        & and | operator can be specially used for bit checking. Also, & and | do not cause short circuiting, i.e., not checking both sides of the expression, unlike && and || operators.  
    </li>
    <li> 
        Say an object of the Animal class refers to an instance of Animal's subclass Dog. If both the classes have the same function defined, say speak(), then in Java the Dog class's speak() method will be called. In C++, by default the animal's speak() will be called, unless that has been declared virtual. 
    </li>
    <li>
        The rules of overriding a method state that: The subclass method must use the same parameters and the return type should be same as the original return type or a subclass of the original type since the subclass object returned is guaranteed to have all the data and methods of the original or superclass. The method in the subclass must not be less accessible, a.k.a, private when the original method is public. 
    </li>
    <li>
        To declare a class <code>abstract</code> is to tell the compiler that no objects must be instantiated with this class. However, reference types can be made and functions may be written with them to simplify code writing for its subclasses.
        For example 
        {% include codeblocks.html content="abstract public class Animal{}

public class Cat extends Animal {}

public class Dog extends Animal {}

// this function will work for both Cat and Dog objects
public String speak(Animal animal)
    animal.speak(); 
}" language="java"%}

    Also, an abstract method has no body. Abstract methods means the class in which they're declared must also be abstract. Therefore, if you try to create a concrete (non-abstract) subclass of an abstract class, you WILL BE FORCED to override the abstract method. Otherwise, there's just no way. Neat-o.
    </li>
<li>
    Default Java annotation <code>@Override</code> can be used when overriding, although it's not mandatory. 
</li>
<li>
    All classes that don't explicitly extend a class, implicitly extend the class <code>Object</code>.
    Objects of class <code>Object</code> are primarily used to write methods that will work on every class and also for thread synchronization.  
</li>
</ul> 


### The 2 categories of data-types in Java
 primitives and objects (also known as reference types). Here are the key differences between them:

Declaration and Initialization:

Primitives: Primitive types are declared and initialized directly. For example, int x = 5; initializes the int primitive variable x with the value 5.
Objects: Objects are declared using a class or interface name and initialized using the new keyword. For example, String str = new String("Hello"); creates a new String object and assigns it to the str reference variable.

Memory Allocation:

Primitives: Primitives are allocated on the stack memory and directly store the actual value.
Objects: Objects are allocated on the heap memory, and a reference (address) to the object is stored in the variable. The actual object resides on the heap.

Default Values:

Primitives: Primitives have default values if not explicitly initialized. For example, int defaults to 0, boolean defaults to false, and so on.
Objects: Object references that are not explicitly initialized will have a default value of null.
Behavior and Methods:

Primitives: Primitives represent simple values and have no behavior or methods associated with them.
Objects: Objects have behavior associated with them through methods defined in their class. They can have methods to manipulate the object's data and perform various operations.

Wrapper Classes:

Primitives: Primitives have corresponding wrapper classes (e.g., int has Integer, double has Double) that provide utility methods and allow primitives to be used in object-oriented contexts.
Objects: Objects can be instantiated from classes and can be directly used in object-oriented contexts.

Equality Comparison:

Primitives: Primitives are compared using the == operator, which compares their values.
Objects: Objects are compared using the equals() method, which compares their content or reference equality.
It's important to note that Java 5 introduced the concept of autoboxing and unboxing, which allows automatic conversion between primitives and their corresponding wrapper classes, making the usage more convenient in some cases.