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

### Random Facts
<ul>
    <li> 
        You CANNOT use integers in boolean tests. while (x) where x is an integer is not allowed.
    </li>
    <li>
        Math.random() outputs values in the range [0, 1).
    </li>
    <li> 
        Say an object of the Animal class refers to an instance of Animal's subclass Dog. If both the classes have the same function defined, say speak(), then in Java the Dog class's speak() method will be called. In C++, by default 
    </li>
</ul> 