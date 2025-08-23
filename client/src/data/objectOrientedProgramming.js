export const oopsData = {
  "Introduction to OOP": {
    id: "introduction-to-oop",
    topics: [
      {
        id: "what-is-oop",
        title: "What is Object-Oriented Programming (OOP)?",
        content:
          '**Definition**: Object-Oriented Programming (OOP) is a programming paradigm that revolves around the concept of **"objects"**. These objects are instances of **"classes"** and can contain both data (attributes or properties) and code (methods or functions).\n\n' +
          '**Core Idea**: Instead of focusing on procedures and logic, OOP focuses on modeling real-world entities. It organizes complex software into simple, reusable pieces of code blueprints (classes) from which individual objects are created.\n\n' +
          '**C++ Class Example**:\n' +
          '```cpp\n' +
          '#include <iostream>\n' +
          '#include <string>\n\n' +
          '// Class (Blueprint)\n' +
          'class Car {\n' +
          'public:\n' +
          '    std::string brand;\n' +
          '    std::string model;\n' +
          '    int year;\n\n' +
          '    void displayInfo() {\n' +
          '        std::cout << "Brand: " << brand << ", Model: " << model << ", Year: " << year << std::endl;\n' +
          '    }\n' +
          '};\n\n' +
          'int main() {\n' +
          '    // Object (Instance of the class)\n' +
          '    Car myCar;\n' +
          '    myCar.brand = "Toyota";\n' +
          '    myCar.model = "Corolla";\n' +
          '    myCar.year = 2022;\n\n' +
          '    myCar.displayInfo(); // Output: Brand: Toyota, Model: Corolla, Year: 2022\n' +
          '    return 0;\n' +
          '}\n' +
          '```',
      },
      {
        id: "advantages-over-procedural",
        title: "Advantages Over Procedural Programming",
        content:
          '**Procedural Programming**: Focuses on a sequence of instructions (procedures or functions) that operate on data. Data and functions are typically separate.\n\n' +
          '**Object-Oriented Programming**: Bundles data and the functions that operate on that data into objects. This provides several key advantages:\n\n' +
          '- **Modularity & Reusability**: Code is organized into self-contained objects. A class defined for one project (e.g., `Customer`) can be easily reused in another.\n' +
          '- **Data Hiding (Encapsulation)**: Protects data from accidental modification. In procedural programming, global data can be changed by any function, leading to bugs. OOP restricts direct access to data, providing safer, more controlled modification through methods.\n' +
          '- **Maintainability & Scalability**: It\'s easier to update or maintain OOP code. If you need to change how a `Car` object works, you only need to modify the `Car` class, and the changes won\'t break other unrelated parts of the program. This makes managing large, complex systems much simpler.\n' +
          '- **Real-World Modeling**: OOP allows developers to model complex, real-world problems more intuitively. You can create objects like `Employee`, `Invoice`, and `Product` that directly correspond to entities in the problem domain.',
      },
    ],
  },
  "Core Principles of OOP (The 4 Pillars)": {
    id: "core-principles-of-oop",
    topics: [
      {
        id: "encapsulation",
        title: "Encapsulation",
        content:
          '**Definition**: Encapsulation is the bundling of data (attributes) and the methods that operate on that data into a single unit (a class). It also involves restricting direct access to an object\'s internal state, which is known as **data hiding**.\n\n' +
          '**How it works**: In C++, this is achieved using access specifiers: `public`, `private`, and `protected`.\n' +
          '- **`private` members**: Can only be accessed by member functions of the same class. This is the primary mechanism for data hiding.\n' +
          '- **`public` members**: Can be accessed from anywhere outside the class. This forms the public interface of the object.\n' +
          '- **Getters & Setters**: Public methods used to retrieve (`get`) and update (`set`) the values of private attributes, allowing for validation and control.\n\n' +
          '**C++ Example**:\n' +
          '```cpp\n' +
          'class Employee {\n' +
          'private:\n' +
          '    int salary; // Private attribute\n\n' +
          'public:\n' +
          '    // Setter with validation\n' +
          '    void setSalary(int s) {\n' +
          '        if (s > 0) {\n' +
          '            salary = s;\n' +
          '        }\n' +
          '    }\n\n' +
          '    // Getter\n' +
          '    int getSalary() {\n' +
          '        return salary;\n' +
          '    }\n' +
          '};\n\n' +
          'int main() {\n' +
          '    Employee emp;\n' +
          '    // emp.salary = 50000; // Compile Error: salary is private\n' +
          '    emp.setSalary(50000); // OK\n' +
          '    std::cout << "Salary: " << emp.getSalary() << std::endl;\n' +
          '    return 0;\n' +
          '}\n' +
          '```',
      },
      {
        id: "abstraction",
        title: "Abstraction",
        content:
          '**Definition**: Abstraction is the concept of hiding complex implementation details and showing only the essential features of the object. It focuses on **what** an object does rather than **how** it does it.\n\n' +
          '**Analogy**: Think of a car. You interact with the steering wheel, pedals, and gearstick (the public interface). You don\'t need to know the complex mechanics of the engine or transmission (the hidden implementation) to drive it.\n\n' +
          '**How it works**: In C++, abstraction is often achieved using **Abstract Classes** and **Interfaces** (implemented as classes with only pure virtual functions).\n' +
          '- **Abstract Class**: A class that cannot be instantiated and is meant to be inherited by other classes. It contains at least one **pure virtual function**.\n' +
          '- **Pure Virtual Function**: A function declared in a base class that has no definition and must be implemented by derived classes. It is declared with `= 0;`.\n\n' +
          '**C++ Example**:\n' +
          '```cpp\n' +
          '// Abstract Base Class (Interface)\n' +
          'class Shape {\n' +
          'public:\n' +
          '    // Pure virtual function provides an interface\n' +
          '    virtual double getArea() = 0;\n' +
          '};\n\n' +
          '// Derived classes provide the implementation\n' +
          'class Circle : public Shape {\n' +
          'private:\n' +
          '    double radius;\n' +
          'public:\n' +
          '    Circle(double r) : radius(r) {}\n' +
          '    double getArea() override {\n' +
          '        return 3.14159 * radius * radius;\n' +
          '    }\n' +
          '};\n\n' +
          'int main() {\n' +
          '    // Shape s; // Compile Error: cannot instantiate abstract class\n' +
          '    Circle c(5.0);\n' +
          '    std::cout << "Area: " << c.getArea() << std::endl;\n' +
          '    return 0;\n' +
          '}\n' +
          '```',
      },
      {
        id: "inheritance",
        title: "Inheritance",
        content:
          '**Definition**: Inheritance is a mechanism where a new class (derived or child class) acquires the properties and behaviors (methods and attributes) of an existing class (base or parent class). It represents an **"is-a"** relationship (e.g., a `Dog` **is an** `Animal`).\n\n' +
          '**Types of Inheritance in C++**:\n' +
          '- **Single Inheritance**: A class inherits from only one base class.\n' +
          '- **Multiple Inheritance**: A class inherits from more than one base class.\n' +
          '- **Multilevel Inheritance**: A class inherits from another derived class (forming a chain).\n' +
          '- **Hierarchical Inheritance**: Multiple classes inherit from a single base class.\n' +
          '- **Hybrid Inheritance**: A combination of two or more types of inheritance (e.g., hierarchical and multiple).\n\n' +
          '**C++ Example (Single Inheritance)**:\n' +
          '```cpp\n' +
          '// Base Class\n' +
          'class Animal {\n' +
          'public:\n' +
          '    void eat() {\n' +
          '        std::cout << "This animal eats food." << std::endl;\n' +
          '    }\n' +
          '};\n\n' +
          '// Derived Class\n' +
          'class Dog : public Animal {\n' +
          'public:\n' +
          '    void bark() {\n' +
          '        std::cout << "The dog barks." << std::endl;\n' +
          '    }\n' +
          '};\n\n' +
          'int main() {\n' +
          '    Dog myDog;\n' +
          '    myDog.eat();  // Inherited from Animal\n' +
          '    myDog.bark(); // Defined in Dog\n' +
          '    return 0;\n' +
          '}\n' +
          '```',
      },
      {
        id: "polymorphism",
        title: "Polymorphism",
        content:
          '**Definition**: Polymorphism, meaning "many forms," is the ability of an object, variable, or function to take on multiple forms. In OOP, it allows objects of different classes to be treated as objects of a common base class.\n\n' +
          '**Types of Polymorphism in C++**:\n\n' +
          '1. **Compile-Time Polymorphism (Static Binding)**: The decision on which function to call is made at compile time.\n' +
          '   - **Method Overloading**: Defining multiple methods in the same class with the same name but different parameters (type, number, or order).\n' +
          '   - **Operator Overloading**: Giving special meaning to an operator for a user-defined type (e.g., using `+` to add two `Complex` number objects).\n\n' +
          '2. **Runtime Polymorphism (Dynamic Binding)**: The decision on which function to call is delayed until runtime.\n' +
          '   - **Method Overriding**: A derived class provides a specific implementation for a method that is already defined in its base class. This is achieved using **`virtual` functions**.\n\n' +
          '**C++ Example (Runtime Polymorphism)**:\n' +
          '```cpp\n' +
          'class Animal {\n' +
          'public:\n' +
          '    // virtual function\n' +
          '    virtual void makeSound() {\n' +
          '        std::cout << "Some generic animal sound" << std::endl;\n' +
          '    }\n' +
          '};\n\n' +
          'class Dog : public Animal {\n' +
          'public:\n' +
          '    // Override the base class method\n' +
          '    void makeSound() override {\n' +
          '        std::cout << "Woof woof" << std::endl;\n' +
          '    }\n' +
          '};\n\n' +
          'class Cat : public Animal {\n' +
          'public:\n' +
          '    // Override the base class method\n' +
          '    void makeSound() override {\n' +
          '        std::cout << "Meow" << std::endl;\n' +
          '    }\n' +
          '};\n\n' +
          'int main() {\n' +
          '    Animal* ptr;\n' +
          '    Dog dogObj;\n' +
          '    Cat catObj;\n\n' +
          '    ptr = &dogObj;\n' +
          '    ptr->makeSound(); // Calls Dog\'s makeSound()\n\n' +
          '    ptr = &catObj;\n' +
          '    ptr->makeSound(); // Calls Cat\'s makeSound()\n\n' +
          '    return 0;\n' +
          '}\n' +
          '```',
      },
    ],
  },
  "Classes & Objects": {
    id: "classes-and-objects",
    topics: [
      {
        id: "defining-classes",
        title: "Defining Classes and Creating Objects",
        content:
          '**Class**: A user-defined blueprint from which objects are created. It consists of data members (attributes) and member functions (methods).\n' +
          '**Object**: An instance of a class. When a class is defined, no memory is allocated; memory is allocated only when an object is created.\n\n' +
          '**Instance vs. `static` members**:\n' +
          '- **Instance Members**: Belong to an individual object. Each object has its own copy of instance variables.\n' +
          '- **`static` Members**: Belong to the class itself, not to any single object. There is only one copy of a static member, shared by all objects of that class.\n\n' +
          '**The `this` keyword**:\n' +
          '- The `this` keyword is a pointer that holds the memory address of the current object. It\'s used to differentiate between instance variables and local parameters when they have the same name.\n\n' +
          '**C++ Example**:\n' +
          '```cpp\n' +
          'class Box {\n' +
          'private:\n' +
          '    double length; // Instance member\n' +
          'public:\n' +
          '    static int objectCount; // Static member\n\n' +
          '    Box(double length) {\n' +
          '        this->length = length; // Using \'this\' to refer to instance member\n' +
          '        objectCount++;\n' +
          '    }\n' +
          '    static int getCount() { // Static method\n' +
          '        return objectCount;\n' +
          '    }\n' +
          '};\n' +
          '// Initialize static member outside the class\n' +
          'int Box::objectCount = 0;\n\n' +
          'int main() {\n' +
          '    Box box1(10.0);\n' +
          '    Box box2(5.0);\n' +
          '    // Access static member using the class name\n' +
          '    std::cout << "Total objects: " << Box::getCount() << std::endl; // Output: 2\n' +
          '    return 0;\n' +
          '}\n' +
          '```',
      },
      {
        id: "constructors-destructors",
        title: "Constructors and Destructors",
        content:
          '**Constructor**: A special member function that is automatically called when an object of a class is created. It is used to initialize the object\'s data members.\n' +
          '- **Default Constructor**: A constructor that takes no arguments.\n' +
          '- **Parameterized Constructor**: A constructor that accepts arguments for initialization.\n' +
          '- **Copy Constructor**: A constructor that creates an object by initializing it with an another object of the same class.\n\n' +
          '**Destructor**: A special member function that is automatically called when an object goes out of scope or is explicitly deleted. Its purpose is to release resources (like memory) that the object may have acquired during its lifetime. It is denoted by a tilde (`~`) followed by the class name.\n\n' +
          '**C++ Example**:\n' +
          '```cpp\n' +
          'class MyClass {\n' +
          'public:\n' +
          '    // Default Constructor\n' +
          '    MyClass() {\n' +
          '        std::cout << "Default Constructor called!" << std::endl;\n' +
          '    }\n\n' +
          '    // Parameterized Constructor\n' +
          '    MyClass(int val) {\n' +
          '        std::cout << "Parameterized Constructor called with value: " << val << std::endl;\n' +
          '    }\n\n' +
          '    // Copy Constructor\n' +
          '    MyClass(const MyClass &obj) {\n' +
          '        std::cout << "Copy Constructor called!" << std::endl;\n' +
          '    }\n\n' +
          '    // Destructor\n' +
          '    ~MyClass() {\n' +
          '        std::cout << "Destructor called!" << std::endl;\n' +
          '    }\n' +
          '};\n\n' +
          'int main() {\n' +
          '    MyClass obj1;           // Calls Default Constructor\n' +
          '    MyClass obj2(100);      // Calls Parameterized Constructor\n' +
          '    MyClass obj3 = obj1;    // Calls Copy Constructor\n' +
          '    return 0; // Destructors for obj3, obj2, obj1 will be called here\n' +
          '}\n' +
          '```',
      },
    ],
  },
  "Access Specifiers & Modifiers": {
    id: "access-specifiers",
    topics: [
      {
        id: "public-private-protected",
        title: "public, private, protected",
        content:
          'Access specifiers in C++ define the visibility and accessibility of class members.\n\n' +
          '- **`public`**: Members are accessible from outside the class, through an object of the class. This forms the interface for the class.\n' +
          '\n' +
          '- **`private`**: Members cannot be accessed (or viewed) from outside the class. They can only be accessed by member functions and friend functions of the class. This is the default access specifier for class members.\n' +
          '\n' +
          '- **`protected`**: Members are similar to `private` members, but they can be accessed by derived classes (child classes). This is useful in inheritance when you want to give child classes access to the base class implementation details but keep them hidden from the outside world.\n\n' +
          '**`const` and `static` Modifiers**:\n' +
          '- **`const`**: When applied to a member function, it indicates that the function will not modify any data members of the object. When applied to a data member, it makes it a read-only property that must be initialized in the constructor initializer list.\n' +
          '- **`static`**: When applied to a data member, it is shared among all objects of the class. When applied to a member function, it can be called without an object of the class and can only access static data members.\n\n' +
          '**C++ Example**:\n' +
          '```cpp\n' +
          'class Base {\n' +
          'public:\n' +
          '    int publicVar = 1;\n' +
          'protected:\n' +
          '    int protectedVar = 2;\n' +
          'private:\n' +
          '    int privateVar = 3;\n' +
          '};\n\n' +
          'class Derived : public Base {\n' +
          'public:\n' +
          '    void accessMembers() {\n' +
          '        std::cout << publicVar << std::endl;     // OK: public is accessible\n' +
          '        std::cout << protectedVar << std::endl;  // OK: protected is accessible in derived class\n' +
          '        // std::cout << privateVar << std::endl; // Compile Error: private is not accessible\n' +
          '    }\n' +
          '};\n\n' +
          'int main() {\n' +
          '    Derived d;\n' +
          '    std::cout << d.publicVar << std::endl;      // OK\n' +
          '    // std::cout << d.protectedVar << std::endl; // Error: protected is like private outside\n' +
          '    return 0;\n' +
          '}\n' +
          '```',
      },
    ],
  },
  "Methods & Functions": {
    id: "methods-and-functions",
    topics: [
      {
        id: "overloading-vs-overriding",
        title: "Function Overloading vs. Overriding",
        content:
          '**Function Overloading (Compile-Time Polymorphism)**:\n' +
          '- **What it is**: Defining two or more functions with the **same name** within the **same scope** (e.g., in the same class), but with different parameters (different number, type, or order of arguments).\n' +
          '- **When it happens**: The compiler decides which version of the function to call at compile time based on the arguments provided.\n\n' +
          '**Function Overriding (Runtime Polymorphism)**:\n' +
          '- **What it is**: A derived class provides a specific implementation for a function that is already defined in its base class. The function signature (name, parameters, and return type) must be the same.\n' +
          '- **How it works**: The base class function must be declared as `virtual`. When a virtual function is called through a base class pointer pointing to a derived class object, the derived class\'s version of the function is executed. The decision is made at runtime.\n\n' +
          '**C++ Example**:\n' +
          '```cpp\n' +
          'class Base {\n' +
          'public:\n' +
          '    // Overloaded function\n' +
          '    void print() { std::cout << "Base print()" << std::endl; }\n' +
          '    void print(int x) { std::cout << "Base print(int)" << std::endl; }\n\n' +
          '    // Function to be overridden\n' +
          '    virtual void show() { std::cout << "Base show()" << std::endl; }\n' +
          '};\n\n' +
          'class Derived : public Base {\n' +
          'public:\n' +
          '    // Overriding the base class show() method\n' +
          '    void show() override { std::cout << "Derived show()" << std::endl; }\n' +
          '};\n\n' +
          'int main() {\n' +
          '    Base b;\n' +
          '    b.print();       // Overloading: calls Base::print()\n' +
          '    b.print(5);      // Overloading: calls Base::print(int)\n\n' +
          '    Base* ptr = new Derived();\n' +
          '    ptr->show();     // Overriding: calls Derived::show()\n' +
          '    delete ptr;\n' +
          '    return 0;\n' +
          '}\n' +
          '```',
      },
      {
        id: "virtual-functions",
        title: "Virtual and Pure Virtual Functions",
        content:
          '**Virtual Function**:\n' +
          '- A member function in a base class that you expect to be redefined (overridden) in derived classes.\n' +
          '- When you refer to a derived class object using a pointer or a reference to the base class, you can call a virtual function for that object and execute the derived class\'s version of the function.\n' +
          '- Declared using the `virtual` keyword in the base class.\n' +
          '- This is the mechanism that enables runtime polymorphism.\n\n' +
          '**Pure Virtual Function (`= 0`)**:\n' +
          '- A virtual function for which we don’t have an implementation in the base class. The base class only declares the function.\n' +
          '- It is declared by assigning `= 0` at the end of its declaration.\n' +
          '- Any class containing one or more pure virtual functions becomes an **abstract class**, which means it cannot be instantiated.\n' +
          '- Derived classes **must** provide an implementation for all pure virtual functions, or they too will become abstract classes.\n\n' +
          '**C++ Example**:\n' +
          '```cpp\n' +
          '// Abstract Base Class\n' +
          'class Shape {\n' +
          'public:\n' +
          '    // Pure virtual function\n' +
          '    virtual float calculateArea() = 0;\n\n' +
          '    // Regular virtual function with a default implementation\n' +
          '    virtual void display() {\n' +
          '        std::cout << "This is a shape." << std::endl;\n' +
          '    }\n' +
          '};\n\n' +
          'class Rectangle : public Shape {\n' +
          'public:\n' +
          '    // Must implement the pure virtual function\n' +
          '    float calculateArea() override {\n' +
          '        return 5.0 * 4.0;\n' +
          '    }\n\n' +
          '    // Can optionally override the regular virtual function\n' +
          '    void display() override {\n' +
          '        std::cout << "This is a rectangle." << std::endl;\n' +
          '    }\n' +
          '};\n' +
          '```',
      },
    ],
  },
  "Advanced Inheritance Concepts": {
    id: "advanced-inheritance",
    topics: [
      {
        id: "diamond-problem",
        title: "Multiple Inheritance and The Diamond Problem",
        content:
          '**Multiple Inheritance**: A feature of C++ where a class can inherit from more than one base class. While powerful, it can lead to ambiguity.\n\n' +
          '**The Diamond Problem**: A classic ambiguity that arises in multiple inheritance. It occurs when two classes (e.g., `B` and `C`) inherit from a common base class (e.g., `A`), and another class (e.g., `D`) inherits from both `B` and `C`.\n' +
          '- The problem is that class `D` will have two copies of the members of class `A` (one through `B` and one through `C`). This causes ambiguity when you try to access a member of `A` from an object of `D`.\n\n' +
          '**Solution: Virtual Inheritance**\n' +
          '- C++ solves the diamond problem using the `virtual` keyword in the inheritance declaration.\n' +
          '- When classes `B` and `C` inherit from `A` using `virtual public A`, they are indicating that they are sharing a single common subobject of `A`.\n' +
          '- This ensures that class `D` gets only one copy of `A`\'s members.\n\n' +
          '**C++ Example**:\n' +
          '```cpp\n' +
          'class GrandParent {\n' +
          'public:\n' +
          '    int value = 10;\n' +
          '};\n\n' +
          '// Use virtual inheritance to solve the diamond problem\n' +
          'class Parent1 : virtual public GrandParent {};\n' +
          'class Parent2 : virtual public GrandParent {};\n\n' +
          'class Child : public Parent1, public Parent2 {};\n\n' +
          'int main() {\n' +
          '    Child c;\n' +
          '    // Without virtual inheritance, this line would be ambiguous:\n' +
          '    // error: request for member \'value\' is ambiguous\n' +
          '    std::cout << c.value << std::endl; // OK, prints 10\n' +
          '    return 0;\n' +
          '}\n' +
          '```',
      },
      {
        id: "constructor-destructor-order",
        title: "Constructor and Destructor Execution Order",
        content:
          'In inheritance, the order in which constructors and destructors are called is well-defined and important to understand.\n\n' +
          '**Constructor Execution Order**:\n' +
          '1. Constructors of **base classes** are executed first.\n' +
          '2. Constructors are called in the order of inheritance (if multiple base classes).\n' +
          '3. The constructor of the **derived class** is executed last.\n' +
          '*Reasoning*: A derived class object depends on its base class parts, so the base must be fully constructed before the derived class can be built.\n\n' +
          '**Destructor Execution Order**:\n' +
          'The order is the exact reverse of the constructor order.\n' +
          '1. The destructor of the **derived class** is executed first.\n' +
          '2. Destructors of **base classes** are executed last, in the reverse order of their construction.\n' +
          '*Reasoning*: The derived class must be dismantled before its underlying base components can be destroyed safely.\n\n' +
          '**C++ Example**:\n' +
          '```cpp\n' +
          'class Base {\n' +
          'public:\n' +
          '    Base() { std::cout << "Base Constructor" << std::endl; }\n' +
          '    ~Base() { std::cout << "Base Destructor" << std::endl; }\n' +
          '};\n\n' +
          'class Derived : public Base {\n' +
          'public:\n' +
          '    Derived() { std::cout << "Derived Constructor" << std::endl; }\n' +
          '    ~Derived() { std::cout << "Derived Destructor" << std::endl; }\n' +
          '};\n\n' +
          'int main() {\n' +
          '    Derived d;\n' +
          '    return 0;\n' +
          '}\n' +
          '/* Output:\n' +
          '   Base Constructor\n' +
          '   Derived Constructor\n' +
          '   Derived Destructor\n' +
          '   Base Destructor\n' +
          '*/\n' +
          '```',
      },
    ],
  },
  "Interfaces & Abstract Classes": {
    id: "interfaces-abstract-classes",
    topics: [
      {
        id: "interface-vs-abstract",
        title: "Difference between Interface and Abstract Class",
        content:
          'In C++, there is no specific `interface` keyword like in Java or C#. The concept of an interface is implemented using an abstract class that contains only pure virtual functions.\n\n' +
          '**Abstract Class**:\n' +
          '- **Purpose**: To provide a base class from which other classes can be derived. It provides a common definition but is not a complete implementation.\n' +
          '- **Content**: Can contain both regular functions (with implementation) and pure virtual functions (`= 0`). It can also have data members.\n' +
          '- **Instantiation**: Cannot be instantiated.\n' +
          '- **Usage**: Use when you want to provide a common, implemented functionality that derived classes can share, while also forcing them to implement certain other functions.\n\n' +
          '**Interface (in C++)**:\n' +
          '- **Purpose**: To define a "contract" of what a class can do, without specifying anything about how it will do it.\n' +
          '- **Content**: A class with **only pure virtual functions** and typically no data members. All functions are abstract.\n' +
          '- **Instantiation**: Cannot be instantiated.\n' +
          '- **Usage**: Use when you want to define a role or capability that different, unrelated classes can implement (e.g., `ISerializable`, `IPrintable`). C++ allows multiple inheritance, so a class can implement multiple interfaces.\n\n' +
          '**C++ Example**:\n' +
          '```cpp\n' +
          '// Interface: Defines a contract for logging\n' +
          'class ILogger {\n' +
          'public:\n' +
          '    virtual ~ILogger() {}\n' +
          '    virtual void logMessage(const std::string& message) = 0;\n' +
          '};\n\n' +
          '// Abstract Class: Provides some base functionality for storage\n' +
          'class BaseStorage {\n' +
          'protected:\n' +
          '    std::string connectionString;\n' +
          'public:\n' +
          '    virtual ~BaseStorage() {}\n' +
          '    void connect() { /* Common connection logic */ }\n' +
          '    virtual void saveData(const std::string& data) = 0; // Derived must implement\n' +
          '};\n\n' +
          '// A class can inherit from an abstract class and implement an interface\n' +
          'class Database : public BaseStorage, public ILogger {\n' +
          'public:\n' +
          '    void saveData(const std::string& data) override { /* DB specific save logic */ }\n' +
          '    void logMessage(const std::string& message) override { /* Log to DB table */ }\n' +
          '};\n' +
          '```',
      },
    ],
  },
  "Operator Overloading & Type Conversion": {
    id: "operator-overloading",
    topics: [
      {
        id: "overloading-unary-binary",
        title: "Unary and Binary Operator Overloading",
        content:
          '**Operator Overloading**: A form of compile-time polymorphism where you can provide a special meaning to most C++ operators for user-defined types (classes and structures). It allows you to use operators with objects in an intuitive way.\n\n' +
          '**Unary Operator Overloading**: Operates on a single operand (e.g., `++`, `--`, `-`). Can be overloaded as a member function with no parameters or as a non-member function with one parameter.\n\n' +
          '**Binary Operator Overloading**: Operates on two operands (e.g., `+`, `-`, `*`, `==`). Can be overloaded as a member function with one parameter (the right-hand side operand) or as a non-member function with two parameters.\n\n' +
          '**C++ Example**:\n' +
          '```cpp\n' +
          '#include <iostream>\n\n' +
          'class Complex {\n' +
          'private:\n' +
          '    double real, imag;\n' +
          'public:\n' +
          '    Complex(double r = 0, double i = 0) : real(r), imag(i) {}\n\n' +
          '    // Overloading binary operator + as a member function\n' +
          '    Complex operator+(const Complex& other) {\n' +
          '        return Complex(real + other.real, imag + other.imag);\n' +
          '    }\n\n' +
          '    // Overloading unary operator - as a member function\n' +
          '    Complex operator-() {\n' +
          '        return Complex(-real, -imag);\n' +
          '    }\n\n' +
          '    void display() {\n' +
          '        std::cout << real << " + " << imag << "i" << std::endl;\n' +
          '    }\n' +
          '};\n\n' +
          'int main() {\n' +
          '    Complex c1(3.0, 4.0);\n' +
          '    Complex c2(2.0, 5.0);\n' +
          '    Complex c3 = c1 + c2; // Calls c1.operator+(c2)\n' +
          '    Complex c4 = -c1;     // Calls c1.operator-()\n\n' +
          '    c3.display(); // Output: 5 + 9i\n' +
          '    c4.display(); // Output: -3 + -4i\n' +
          '    return 0;\n' +
          '}\n' +
          '```',
      },
    ],
  },
  "Exception Handling in OOP": {
    id: "exception-handling",
    topics: [
      {
        id: "try-catch-throw",
        title: "Try, Catch, Throw, Finally",
        content:
          '**Exception Handling**: A mechanism to handle runtime errors in a structured way, allowing the program to continue execution or terminate gracefully instead of crashing.\n\n' +
          '- **`try`**: A block of code that may throw an exception is placed inside a `try` block.\n' +
          '- **`throw`**: When an error occurs, the program can "throw" an exception object. This transfers control to an exception handler.\n' +
          '- **`catch`**: A block that "catches" and handles the exception thrown by the `try` block. You can have multiple `catch` blocks to handle different types of exceptions.\n' +
          '- **`finally`**: C++ does not have a `finally` keyword. The equivalent functionality (ensuring code is always executed, whether an exception occurs or not) is achieved through a programming pattern called **RAII (Resource Acquisition Is Initialization)**, where resource cleanup is done in the destructor of a stack-allocated object.\n\n' +
          '**Custom Exception Classes**:\n' +
          'You can create your own exception classes, usually by inheriting from `std::exception`. This allows you to throw more specific and informative errors.\n\n' +
          '**C++ Example**:\n' +
          '```cpp\n' +
          '#include <iostream>\n' +
          '#include <stdexcept>\n\n' +
          '// Custom exception class\n' +
          'class MyException : public std::exception {\n' +
          'public:\n' +
          '    const char* what() const noexcept override {\n' +
          '        return "Something bad happened in my function!";\n' +
          '    }\n' +
          '};\n\n' +
          'double divide(int a, int b) {\n' +
          '    if (b == 0) {\n' +
          '        throw std::runtime_error("Division by zero error!");\n' +
          '    }\n' +
          '    return static_cast<double>(a) / b;\n' +
          '}\n\n' +
          'int main() {\n' +
          '    try {\n' +
          '        double result = divide(10, 0);\n' +
          '        std::cout << "Result: " << result << std::endl;\n' +
          '    } catch (const std::runtime_error& e) {\n' +
          '        // Catch a specific standard exception type\n' +
          '        std::cerr << "Caught an exception: " << e.what() << std::endl;\n' +
          '    } catch (const MyException& e) {\n' +
          '        // Catch a custom exception type\n' +
          '        std::cerr << "Caught a custom exception: " << e.what() << std::endl;\n' +
          '    }\n' +
          '    return 0;\n' +
          '}\n' +
          '```',
      },
    ],
  },
  "Object-Oriented Design & Patterns": {
    id: "ood-patterns",
    topics: [
      {
        id: "solid-principles",
        title: "SOLID Principles",
        content:
          'SOLID is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible, and maintainable.\n\n' +
          '1.  **S - Single Responsibility Principle (SRP)**:\n' +
          '    - A class should have only one reason to change, meaning it should have only one job or responsibility.\n' +
          '    - *Example*: A `Report` class should only be responsible for the content of the report, not for printing or saving it. Those should be handled by `ReportPrinter` and `ReportSaver` classes.\n\n' +
          '2.  **O - Open/Closed Principle (OCP)**:\n' +
          '    - Software entities (classes, modules, functions) should be open for extension, but closed for modification.\n' +
          '    - *Example*: Instead of modifying an existing `ShapeCalculator` class every time you add a new shape, you can use polymorphism. New shapes can be added (extension) without changing the calculator code (modification).\n\n' +
          '3.  **L - Liskov Substitution Principle (LSP)**:\n' +
          '    - Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.\n' +
          '    - *Example*: If you have a function that works with a `Bird` object, it should also work correctly if you pass it a `Duck` object (a subclass of `Bird`) without any unexpected behavior.\n\n' +
          '4.  **I - Interface Segregation Principle (ISP)**:\n' +
          '    - No client should be forced to depend on methods it does not use. It\'s better to have many small, specific interfaces than one large, general-purpose one.\n' +
          '    - *Example*: Instead of one large `IWorker` interface with `work()` and `eat()` methods, create separate `IWorkable` and `IEatable` interfaces. A `Robot` class can implement `IWorkable` without being forced to implement `eat()`.\n\n' +
          '5.  **D - Dependency Inversion Principle (DIP)**:\n' +
          '    - High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces).\n' +
          '    - *Example*: A `PasswordReminder` class should not directly create a `MySQLConnection` object. Instead, it should depend on a `DBConnectionInterface` abstraction, which can be implemented by `MySQLConnection` or `PostgreSQLConnection`.',
      },
      {
        id: "design-patterns",
        title: "Common Design Patterns",
        content:
          '**Design Patterns** are reusable solutions to commonly occurring problems within a given context in software design. They are not finished designs that can be transformed directly into code but rather templates for how to solve a problem.\n\n' +
          '**Singleton Pattern**:\n' +
          '- **Purpose**: Ensures a class has only one instance and provides a global point of access to it.\n' +
          '- **Use Case**: Useful for managing a shared resource, like a database connection or a logger, where you want to ensure there is only one instance handling all operations.\n' +
          '- **C++ Implementation**: Involves a private constructor, a private static instance of the class, and a public static method to get the instance.\n\n' +
          '**Factory Pattern**:\n' +
          '- **Purpose**: Creates objects without exposing the instantiation logic to the client and refers to the newly created object using a common interface.\n' +
          '- **Use Case**: When a class cannot anticipate the class of objects it must create. For example, a `DocumentFactory` that can create `WordDocument`, `PdfDocument`, etc., based on an input string, without the client knowing the concrete class names.\n\n' +
          '**Strategy Pattern**:\n' +
          '- **Purpose**: Defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from clients that use it.\n' +
          '- **Use Case**: When you need different variations of an algorithm. For example, a `ShoppingCart` class can use different `PaymentStrategy` objects (e.g., `CreditCardStrategy`, `PayPalStrategy`) to process payments.\n\n' +
          '**Observer Pattern**:\n' +
          '- **Purpose**: Defines a one-to-many dependency between objects so that when one object (the subject) changes state, all its dependents (observers) are notified and updated automatically.\n' +
          '- **Use Case**: Implementing event-handling systems. For instance, in a spreadsheet application, when a cell\'s value (subject) changes, all cells that use its value in formulas (observers) are automatically updated.',
      },
    ],
  },
  "Advanced OOP Concepts": {
    id: "advanced-oop-concepts",
    topics: [
      {
        id: "templates-generics",
        title: "Templates / Generics",
        content:
          '**Templates** are a powerful feature in C++ that allow you to write generic programs. They enable you to define functions and classes that can work with any data type, without having to rewrite the code for each type.\n\n' +
          '**Function Templates**:\n' +
          '- A blueprint for creating a function that can operate on different data types. The compiler generates the appropriate function code at compile time based on the types used in the function call.\n\n' +
          '**Class Templates**:\n' +
          '- A blueprint for creating a generic class. Useful for data structures like stacks, queues, and vectors that need to store elements of any type.\n\n' +
          '**C++ Example (Function and Class Template)**:\n' +
          '```cpp\n' +
          '#include <iostream>\n\n' +
          '// Function Template\n' +
          'template <typename T>\n' +
          'T add(T a, T b) {\n' +
          '    return a + b;\n' +
          '}\n\n' +
          '// Class Template\n' +
          'template <class T>\n' +
          'class Pair {\n' +
          'private:\n' +
          '    T first, second;\n' +
          'public:\n' +
          '    Pair(T a, T b) : first(a), second(b) {}\n' +
          '    T getFirst() { return first; }\n' +
          '};\n\n' +
          'int main() {\n' +
          '    // Using function template with int and double\n' +
          '    std::cout << "Int sum: " << add(5, 10) << std::endl;\n' +
          '    std::cout << "Double sum: " << add(3.5, 7.2) << std::endl;\n\n' +
          '    // Using class template with int\n' +
          '    Pair<int> myPair(10, 20);\n' +
          '    std::cout << "First value: " << myPair.getFirst() << std::endl;\n' +
          '    return 0;\n' +
          '}\n' +
          '```',
      },
      {
        id: "serialization",
        title: "File Handling and Serialization of Objects",
        content:
          '**Serialization**: The process of converting an object\'s state into a format (like a byte stream, JSON, or XML) that can be stored (e.g., in a file or memory buffer) or transmitted across a network and then recreated later in the same or another environment.\n\n' +
          '**Deserialization**: The reverse process of recreating the object from the stored format.\n\n' +
          '**Why it\'s useful**: It allows you to save the state of your program and restore it later, or to send complex data between different applications.\n\n' +
          '**File Handling in C++**:\n' +
          'C++ provides the `<fstream>` library for file operations.\n' +
          '- `ofstream`: Output file stream, used for writing to files.\n' +
          '- `ifstream`: Input file stream, used for reading from files.\n\n' +
          '**C++ Example (Simple Serialization)**:\n' +
          '```cpp\n' +
          '#include <iostream>\n' +
          '#include <fstream>\n' +
          '#include <string>\n\n' +
          'class Player {\n' +
          'public:\n' +
          '    std::string name;\n' +
          '    int score;\n\n' +
          '    // Method to write object state to a file stream\n' +
          '    void serialize(std::ostream& os) const {\n' +
          '        os << name << std::endl;\n' +
          '        os << score << std::endl;\n' +
          '    }\n\n' +
          '    // Method to read object state from a file stream\n' +
          '    void deserialize(std::istream& is) {\n' +
          '        std::getline(is, name);\n' +
          '        is >> score;\n' +
          '    }\n' +
          '};\n\n' +
          'int main() {\n' +
          '    Player p1_write; \n' +
          '    p1_write.name = "Alice";\n' +
          '    p1_write.score = 1500;\n\n' +
          '    // Serialize object to file\n' +
          '    std::ofstream outFile("player.dat");\n' +
          '    p1_write.serialize(outFile);\n' +
          '    outFile.close();\n\n' +
          '    // Deserialize object from file\n' +
          '    Player p2_read;\n' +
          '    std::ifstream inFile("player.dat");\n' +
          '    p2_read.deserialize(inFile);\n' +
          '    inFile.close();\n\n' +
          '    std::cout << "Read Player: " << p2_read.name << ", Score: " << p2_read.score << std::endl;\n' +
          '    return 0;\n' +
          '}\n' +
          '```',
      },
    ],
  },
  "UML & Object Modeling": {
    id: "uml-object-modeling",
    topics: [
      {
        id: "uml-diagrams",
        title: "Class, Object, and Sequence Diagrams",
        content:
          '**UML (Unified Modeling Language)**: A standardized modeling language used to visualize, specify, construct, and document the artifacts of a software system.\n\n' +
          '**Class Diagram**:\n' +
          '- **Purpose**: Describes the static structure of a system. It shows the system\'s classes, their attributes, methods, and the relationships between the classes (like inheritance, aggregation, composition).\n' +
          '- **Key Components**: A rectangle representing a class, divided into three parts: Class Name, Attributes, and Methods. Lines between classes represent relationships.\n\n' +
          '**Object Diagram**:\n' +
          '- **Purpose**: A snapshot of the instances in a system at a particular point in time. It shows a set of objects and their relationships.\n' +
          '- **Relation to Class Diagram**: While a class diagram shows the "blueprint," an object diagram shows the "actual houses" created from that blueprint. It models the static design view of a system from a practical, real-world perspective.\n\n' +
          '**Sequence Diagram**:\n' +
          '- **Purpose**: Shows object interactions arranged in a time sequence. It depicts the objects involved in a scenario and the sequence of messages exchanged between the objects needed to carry out the functionality of the scenario.\n' +
          '- **Key Components**: Lifelines (vertical lines representing an object over time) and Messages (horizontal arrows representing communication between objects).\n\n' +
          '**Use Case Diagram**:\n' +
          '- **Purpose**: Captures the dynamic behavior of a system. It describes the high-level functions of the system and its interactions with external users (actors).\n' +
          '- **Usage**: Helps in gathering requirements and understanding what the system is supposed to do from a user\'s perspective.',
      },
    ],
  },
  "Interview-Focused Topics": {
    id: "interview-focused-topics",
    topics: [
      {
        id: "interview-class-vs-object",
        title: "Differences: Class vs. Object",
        content:
          '- **Class**: A logical entity, a blueprint, or a template. It defines the properties (attributes) and behaviors (methods) that objects of its type will have. No memory is allocated when a class is defined.\n' +
          '- **Object**: A physical entity, an instance of a class. It is a concrete entity that has state (values for its attributes) and behavior. Memory is allocated on the heap or stack when an object is created.',
      },
      {
        id: "interview-abstract-vs-interface",
        title: "Differences: Abstract Class vs. Interface",
        content:
          'In C++:\n' +
          '- **Abstract Class**: A class intended to be a base for other classes. It can contain data members, implemented methods, and pure virtual methods (`= 0`). A class becomes abstract if it has at least one pure virtual function.\n' +
          '- **Interface**: A concept, not a keyword. It is implemented as a class that contains **only** pure virtual functions and typically no data members. It defines a pure "contract" of behavior.\n' +
          '- **Key Difference**: An abstract class can provide some default implementation, whereas an interface provides none. A class can inherit from only one abstract class with implementation but can "implement" multiple interfaces (via multiple inheritance).',
      },
      {
        id: "interview-polymorphism-types",
        title: "Polymorphism and its Types with Examples",
        content:
          '**Polymorphism** means "many forms." It allows objects to be treated as instances of their parent class.\n\n' +
          '1.  **Compile-Time (Static) Polymorphism**:\n' +
          '    - **Function Overloading**: Same function name, different parameters. `void print(int a);` vs `void print(double a);`.\n' +
          '    - **Operator Overloading**: Giving new meaning to operators for objects. `Complex c3 = c1 + c2;`.\n\n' +
          '2.  **Runtime (Dynamic) Polymorphism**:\n' +
          '    - **Function Overriding**: A derived class redefines a `virtual` function from its base class. A base class pointer `Animal* ptr = new Dog();` calling `ptr->makeSound();` will execute the `Dog` version at runtime.',
      },
      {
        id: "interview-overloading-vs-overriding",
        title: "Differences: Overloading vs. Overriding",
        content:
          '- **Parameters**: Overloading requires different function signatures (different parameters). Overriding requires the exact same function signature.\n' +
          '- **Scope**: Overloading occurs within the same class. Overriding occurs between a base class and a derived class.\n' +
          '- **Binding**: Overloading is resolved at compile-time (static binding). Overriding is resolved at runtime using `virtual` functions (dynamic binding).\n' +
          '- **Purpose**: Overloading provides multiple ways to perform a similar action with different inputs. Overriding provides a specific implementation of an action for a subclass.',
      },
      {
        id: "interview-composition-vs-inheritance",
        title: "Differences: Composition vs. Inheritance",
        content:
          'Both are ways to achieve code reuse.\n\n' +
          '- **Inheritance (`is-a` relationship)**: A `Car` **is a** `Vehicle`. It creates a tight coupling. Changes in the base class can easily break the derived class. Use it when a subclass is a true specialization of the base class.\n\n' +
          '- **Composition (`has-a` relationship)**: A `Car` **has an** `Engine`. It involves creating objects of other classes inside your class. It creates a loose coupling and is more flexible. This is generally preferred over inheritance.\n\n' +
          '**Real-world Scenario**: A `Car` class. Should it inherit from an `Engine` class? No, that\'s illogical (a Car is not an Engine). Instead, the `Car` class should contain an `Engine` object as a member variable (composition). However, a `SportsCar` class could inherit from the `Car` class, because a Sports Car **is a** type of Car.',
      },
      {
        id: "interview-object-lifecycle",
        title: "Object Lifecycle and Memory Management",
        content:
          'The lifecycle of an object in C++ consists of four main stages:\n\n' +
          '1.  **Memory Allocation**: Space for the object is allocated. This can be on the **stack** (for local variables, e.g., `MyClass obj;`) or on the **heap** (for dynamically allocated objects, e.g., `MyClass* ptr = new MyClass();`).\n' +
          '2.  **Construction**: The class constructor is called to initialize the object and its members.\n' +
          '3.  **Usage**: The object is used, its methods are called, and its data is accessed/modified.\n' +
          '4.  **Destruction**: The destructor is called to clean up resources.\n' +
          '5.  **Memory Deallocation**: The allocated memory is freed. For stack objects, this is automatic when they go out of scope. For heap objects, you must manually call `delete ptr;` to deallocate memory and prevent memory leaks.',
      },
    ],
  },
};