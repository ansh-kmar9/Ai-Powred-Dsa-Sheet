export const oopsData = {
  "Introduction to OOP": {
    id: "intro-oop",
    topics: [
      {
        id: "what-is-oop",
        title: "What is Object-Oriented Programming?",
        content: `
          **Definition**: Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects" which contain data (attributes) and code (methods).

          **Key Principles**:
          - **Encapsulation**: Bundling data and methods that operate on that data
          - **Inheritance**: Creating new classes based on existing classes
          - **Polymorphism**: Objects of different types can be treated as instances of the same type
          - **Abstraction**: Hiding complex implementation details

          **Benefits of OOP**:
          - **Modularity**: Code organization into discrete objects
          - **Reusability**: Objects can be reused across different programs
          - **Maintainability**: Easier to modify and extend existing code
          - **Scalability**: Better structure for large applications

          **Basic Class Example**:
          \`\`\`python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
        self.speed = 0
    
    def accelerate(self):
        self.speed += 10
        print(f"{self.brand} {self.model} accelerating to {self.speed} mph")
    
    def brake(self):
        self.speed = max(0, self.speed - 10)
        print(f"{self.brand} {self.model} slowing to {self.speed} mph")

# Creating objects
my_car = Car("Toyota", "Camry")
my_car.accelerate()  # Output: Toyota Camry accelerating to 10 mph
          \`\`\`

          **Real-world Analogy**: Think of a class as a blueprint for a house, and objects as actual houses built from that blueprint.
        `,
        diagrams: [
          {
            title: "OOP Concepts Overview",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=OOP+Concepts",
          },
        ],
      },
      {
        id: "classes-objects",
        title: "Classes and Objects",
        content: `
          **Class**: A blueprint or template for creating objects

          **Object**: An instance of a class with specific values

          **Class Components**:

          **Attributes (Data Members)**:
          - **Instance Variables**: Unique to each object
          - **Class Variables**: Shared among all instances

          **Methods (Member Functions)**:
          - **Instance Methods**: Operate on instance data
          - **Class Methods**: Operate on class data
          - **Static Methods**: Independent utility functions

          **Constructor and Destructor**:
          \`\`\`java
public class Student {
    // Class variable
    private static int totalStudents = 0;
    
    // Instance variables
    private String name;
    private int age;
    private double gpa;
    
    // Constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
        this.gpa = 0.0;
        totalStudents++;
    }
    
    // Instance method
    public void setGPA(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) {
            this.gpa = gpa;
        }
    }
    
    // Class method
    public static int getTotalStudents() {
        return totalStudents;
    }
    
    // Method overloading
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
    
    public void displayInfo(boolean includeGPA) {
        displayInfo();
        if (includeGPA) {
            System.out.println("GPA: " + gpa);
        }
    }
}

// Usage
Student student1 = new Student("Alice", 20);
Student student2 = new Student("Bob", 19);
student1.setGPA(3.8);
student1.displayInfo(true);
System.out.println("Total students: " + Student.getTotalStudents());
          \`\`\`

          **Memory Allocation**:
          - **Stack**: Stores object references and method calls
          - **Heap**: Stores actual object data
        `,
        diagrams: [
          {
            title: "Class vs Object Relationship",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Class+vs+Object",
          },
        ],
      },
    ],
  },
  Encapsulation: {
    id: "encapsulation",
    topics: [
      {
        id: "data-hiding",
        title: "Data Hiding and Access Modifiers",
        content: `
          **Encapsulation**: Bundling data and methods together while hiding internal implementation details

          **Access Modifiers**:

          **Private**: Accessible only within the same class
          **Protected**: Accessible within the same package and subclasses
          **Public**: Accessible from anywhere
          **Package-private (Default)**: Accessible within the same package

          **Implementation Example**:
          \`\`\`cpp
class BankAccount {
private:
    string accountNumber;
    double balance;
    string ownerName;
    
public:
    // Constructor
    BankAccount(string accNum, string owner, double initialBalance) {
        accountNumber = accNum;
        ownerName = owner;
        balance = (initialBalance >= 0) ? initialBalance : 0;
    }
    
    // Public methods to access private data
    double getBalance() const {
        return balance;
    }
    
    string getOwnerName() const {
        return ownerName;
    }
    
    // Controlled access to modify balance
    bool deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            return true;
        }
        return false;
    }
    
    bool withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }
    
private:
    // Private helper method
    bool validateAmount(double amount) {
        return amount > 0;
    }
};

// Usage
BankAccount account("12345", "John Doe", 1000.0);
account.deposit(500.0);    // Valid
// account.balance = -100; // ERROR: Cannot access private member
cout << "Balance: $" << account.getBalance() << endl;
          \`\`\`

          **Benefits**:
          - **Data Protection**: Prevents unauthorized access
          - **Controlled Access**: Methods can validate input
          - **Flexibility**: Internal implementation can change without affecting external code
          - **Debugging**: Easier to track data modifications
        `,
        diagrams: [
          {
            title: "Encapsulation and Access Control",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Encapsulation",
          },
        ],
      },
    ],
  },
  Inheritance: {
    id: "inheritance",
    topics: [
      {
        id: "inheritance-basics",
        title: "Inheritance Fundamentals",
        content: `
          **Inheritance**: Mechanism that allows a class to inherit properties and methods from another class

          **Terminology**:
          - **Base Class (Parent/Super Class)**: Class being inherited from
          - **Derived Class (Child/Sub Class)**: Class that inherits
          - **IS-A Relationship**: Derived class "is a" type of base class

          **Types of Inheritance**:

          **Single Inheritance**: One child class inherits from one parent class

          \`\`\`python
# Base class
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
        self.is_alive = True
    
    def eat(self):
        print(f"{self.name} is eating")
    
    def sleep(self):
        print(f"{self.name} is sleeping")
    
    def make_sound(self):
        print("Some generic animal sound")

# Derived class
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Canine")  # Call parent constructor
        self.breed = breed
    
    # Method overriding
    def make_sound(self):
        print(f"{self.name} barks: Woof!")
    
    # Additional method specific to Dog
    def fetch(self):
        print(f"{self.name} is fetching the ball")

class Cat(Animal):
    def __init__(self, name, indoor=True):
        super().__init__(name, "Feline")
        self.indoor = indoor
    
    def make_sound(self):
        print(f"{self.name} meows: Meow!")
    
    def climb(self):
        print(f"{self.name} is climbing")

# Usage
dog = Dog("Buddy", "Golden Retriever")
cat = Cat("Whiskers", True)

dog.eat()        # Inherited method
dog.make_sound() # Overridden method
dog.fetch()      # Dog-specific method

cat.sleep()      # Inherited method
cat.make_sound() # Overridden method
cat.climb()      # Cat-specific method
          \`\`\`

          **Multiple Inheritance**: One class inherits from multiple parent classes

          \`\`\`python
class Flyable:
    def fly(self):
        print("Flying through the air")

class Swimmable:
    def swim(self):
        print("Swimming in water")

class Duck(Animal, Flyable, Swimmable):
    def __init__(self, name):
        super().__init__(name, "Waterfowl")
    
    def make_sound(self):
        print(f"{self.name} quacks: Quack!")

# Usage
duck = Duck("Donald")
duck.eat()   # From Animal
duck.fly()   # From Flyable
duck.swim()  # From Swimmable
          \`\`\`

          **Benefits**:
          - **Code Reusability**: Don't repeat common functionality
          - **Hierarchy**: Natural modeling of relationships
          - **Extensibility**: Easy to add new features
          - **Polymorphism**: Enables treating objects uniformly
        `,
        diagrams: [
          {
            title: "Inheritance Hierarchy",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Inheritance+Tree",
          },
        ],
      },
      {
        id: "method-overriding",
        title: "Method Overriding and Super",
        content: `
          **Method Overriding**: Redefining a parent class method in a child class

          **Rules for Method Overriding**:
          - Method signature must be identical
          - Access modifier cannot be more restrictive
          - Cannot override static, final, or private methods
          - Use @Override annotation in Java for compiler checking

          **Advanced Example**:
          \`\`\`java
// Base class
abstract class Shape {
    protected String color;
    
    public Shape(String color) {
        this.color = color;
    }
    
    // Abstract method - must be overridden
    public abstract double calculateArea();
    
    // Concrete method that can be overridden
    public void displayInfo() {
        System.out.println("This is a " + color + " shape");
        System.out.println("Area: " + calculateArea());
    }
    
    // Final method - cannot be overridden
    public final String getColor() {
        return color;
    }
}

class Rectangle extends Shape {
    private double width, height;
    
    public Rectangle(String color, double width, double height) {
        super(color);  // Call parent constructor
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double calculateArea() {
        return width * height;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();  // Call parent method
        System.out.println("Dimensions: " + width + " x " + height);
    }
}

class Circle extends Shape {
    private double radius;
    
    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Radius: " + radius);
    }
}

// Usage
Shape[] shapes = {
    new Rectangle("Red", 5.0, 3.0),
    new Circle("Blue", 4.0)
};

for (Shape shape : shapes) {
    shape.displayInfo();  // Polymorphic method call
    System.out.println("---");
}
          \`\`\`

          **Super Keyword Uses**:
          - **super()**: Call parent constructor
          - **super.method()**: Call parent method
          - **super.variable**: Access parent variable (if not overridden)

          **Dynamic Method Dispatch**: Runtime determination of which method to call based on object type
        `,
        diagrams: [
          {
            title: "Method Overriding Process",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Method+Overriding",
          },
        ],
      },
    ],
  },
  Polymorphism: {
    id: "polymorphism",
    topics: [
      {
        id: "polymorphism-types",
        title: "Types of Polymorphism",
        content: `
          **Polymorphism**: Ability of objects of different types to be treated as instances of the same type through a common interface

          **Types of Polymorphism**:

          **Compile-time Polymorphism (Static)**:

          **Method Overloading**: Multiple methods with same name but different parameters

          \`\`\`java
class Calculator {
    // Method overloading examples
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    public String add(String a, String b) {
        return a + b;
    }
}

// Usage
Calculator calc = new Calculator();
System.out.println(calc.add(5, 3));        // int version
System.out.println(calc.add(5.5, 3.2));    // double version
System.out.println(calc.add(1, 2, 3));     // three parameter version
System.out.println(calc.add("Hello", " World")); // string version
          \`\`\`

          **Operator Overloading**: Giving additional meanings to operators (C++, Python)

          \`\`\`python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

# Usage
v1 = Vector(3, 4)
v2 = Vector(1, 2)
v3 = v1 + v2  # Uses __add__ method
print(v3)     # Uses __str__ method
print(v1 == Vector(3, 4))  # Uses __eq__ method
          \`\`\`

          **Runtime Polymorphism (Dynamic)**:

          **Method Overriding with Inheritance**:

          \`\`\`cpp
#include <iostream>
#include <vector>
#include <memory>

class Animal {
public:
    virtual void makeSound() const {
        std::cout << "Some animal sound" << std::endl;
    }
    
    virtual ~Animal() = default;  // Virtual destructor
};

class Dog : public Animal {
public:
    void makeSound() const override {
        std::cout << "Woof! Woof!" << std::endl;
    }
};

class Cat : public Animal {
public:
    void makeSound() const override {
        std::cout << "Meow! Meow!" << std::endl;
    }
};

class Cow : public Animal {
public:
    void makeSound() const override {
        std::cout << "Moo! Moo!" << std::endl;
    }
};

// Polymorphic function
void animalSounds(const std::vector<std::unique_ptr<Animal>>& animals) {
    for (const auto& animal : animals) {
        animal->makeSound();  // Polymorphic call
    }
}

// Usage
int main() {
    std::vector<std::unique_ptr<Animal>> farm;
    farm.push_back(std::make_unique<Dog>());
    farm.push_back(std::make_unique<Cat>());
    farm.push_back(std::make_unique<Cow>());
    
    animalSounds(farm);  // Each animal makes its own sound
    return 0;
}
          \`\`\`

          **Interface-based Polymorphism**:

          \`\`\`java
interface Drawable {
    void draw();
    double getArea();
}

class Square implements Drawable {
    private double side;
    
    public Square(double side) {
        this.side = side;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a square with side " + side);
    }
    
    @Override
    public double getArea() {
        return side * side;
    }
}

class Triangle implements Drawable {
    private double base, height;
    
    public Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a triangle");
    }
    
    @Override
    public double getArea() {
        return 0.5 * base * height;
    }
}

// Polymorphic usage
public static void renderShapes(Drawable[] shapes) {
    for (Drawable shape : shapes) {
        shape.draw();
        System.out.println("Area: " + shape.getArea());
    }
}
          \`\`\`
        `,
        diagrams: [
          {
            title: "Polymorphism Types",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Polymorphism+Types",
          },
        ],
      },
    ],
  },
  Abstraction: {
    id: "abstraction",
    topics: [
      {
        id: "abstract-classes-interfaces",
        title: "Abstract Classes and Interfaces",
        content: `
          **Abstraction**: Hiding complex implementation details while exposing only essential features

          **Abstract Classes**: Classes that cannot be instantiated and may contain abstract methods

          **When to Use Abstract Classes**:
          - Share code among closely related classes
          - Require classes to define specific methods
          - Need to declare non-public members
          - Want to provide default implementation for some methods

          \`\`\`java
abstract class Vehicle {
    protected String brand;
    protected int year;
    protected double fuelCapacity;
    
    public Vehicle(String brand, int year, double fuelCapacity) {
        this.brand = brand;
        this.year = year;
        this.fuelCapacity = fuelCapacity;
    }
    
    // Concrete method with implementation
    public void displayInfo() {
        System.out.println(year + " " + brand);
        System.out.println("Fuel capacity: " + fuelCapacity + " liters");
    }
    
    // Abstract methods - must be implemented by subclasses
    public abstract void start();
    public abstract void stop();
    public abstract double calculateFuelEfficiency();
    
    // Abstract method with default behavior
    public void honk() {
        System.out.println("Beep! Beep!");
    }
}

class Car extends Vehicle {
    private int numberOfDoors;
    
    public Car(String brand, int year, double fuelCapacity, int doors) {
        super(brand, year, fuelCapacity);
        this.numberOfDoors = doors;
    }
    
    @Override
    public void start() {
        System.out.println("Car engine started with key ignition");
    }
    
    @Override
    public void stop() {
        System.out.println("Car engine stopped");
    }
    
    @Override
    public double calculateFuelEfficiency() {
        // Simple calculation based on car type
        return 25.0; // km per liter
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Number of doors: " + numberOfDoors);
    }
}

class Motorcycle extends Vehicle {
    private boolean hasSidecar;
    
    public Motorcycle(String brand, int year, double fuelCapacity, boolean hasSidecar) {
        super(brand, year, fuelCapacity);
        this.hasSidecar = hasSidecar;
    }
    
    @Override
    public void start() {
        System.out.println("Motorcycle started with kick/electric start");
    }
    
    @Override
    public void stop() {
        System.out.println("Motorcycle engine stopped");
    }
    
    @Override
    public double calculateFuelEfficiency() {
        return hasSidecar ? 35.0 : 45.0; // km per liter
    }
    
    @Override
    public void honk() {
        System.out.println("Beep beep! (motorcycle horn)");
    }
}
          \`\`\`

          **Interfaces**: Contracts that define what methods a class must implement

          **When to Use Interfaces**:
          - Unrelated classes need to implement same methods
          - Support multiple inheritance of type
          - Specify behavior for data types
          - Achieve loose coupling

          \`\`\`java
interface Flyable {
    // All methods are public and abstract by default
    void takeOff();
    void land();
    double getMaxAltitude();
    
    // Default method (Java 8+)
    default void fly() {
        takeOff();
        System.out.println("Flying at altitude: " + getMaxAltitude());
        land();
    }
    
    // Static method (Java 8+)
    static void checkWeatherConditions() {
        System.out.println("Weather conditions checked for flying");
    }
}

interface Swimmable {
    void dive();
    void surface();
    double getMaxDepth();
}

// Class implementing multiple interfaces
class Duck implements Flyable, Swimmable {
    private String name;
    
    public Duck(String name) {
        this.name = name;
    }
    
    // Implementing Flyable interface
    @Override
    public void takeOff() {
        System.out.println(name + " takes off from water surface");
    }
    
    @Override
    public void land() {
        System.out.println(name + " lands on water");
    }
    
    @Override
    public double getMaxAltitude() {
        return 1000.0; // meters
    }
    
    // Implementing Swimmable interface
    @Override
    public void dive() {
        System.out.println(name + " dives underwater");
    }
    
    @Override
    public void surface() {
        System.out.println(name + " surfaces from underwater");
    }
    
    @Override
    public double getMaxDepth() {
        return 5.0; // meters
    }
}

// Usage
Duck mallard = new Duck("Mallard");
mallard.fly();    // Uses default implementation
mallard.dive();
mallard.surface();

Flyable.checkWeatherConditions(); // Static method call
          \`\`\`

          **Abstract Classes vs Interfaces**:

          | Feature | Abstract Class | Interface |
          |---------|----------------|-----------|
          | Instantiation | Cannot be instantiated | Cannot be instantiated |
          | Inheritance | Single inheritance | Multiple inheritance |
          | Methods | Can have concrete and abstract | All abstract (except default/static) |
          | Variables | Can have instance variables | Only constants (public static final) |
          | Access Modifiers | Any access modifier | Public by default |
          | Constructor | Can have constructors | Cannot have constructors |
        `,
        diagrams: [
          {
            title: "Abstract Classes vs Interfaces",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Abstract+vs+Interface",
          },
        ],
      },
    ],
  },
};
