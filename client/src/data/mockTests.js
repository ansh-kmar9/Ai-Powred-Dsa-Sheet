export const mockTestsData = {
  "OS for Placement": {
    id: "os-placement",
    icon: "Monitor",
    description: "Operating Systems concepts for placement preparation",
    sets: {
      1: [
        {
          id: 1,
          question: "What is the main function of an operating system?",
          options: [
            "To provide a user interface",
            "To manage hardware and software resources",
            "To compile programs",
            "To provide internet connectivity",
          ],
          correctAnswer: 1,
        },
        {
          id: 2,
          question:
            "Which scheduling algorithm gives the best average waiting time?",
          options: ["FCFS", "SJF", "Round Robin", "Priority Scheduling"],
          correctAnswer: 1,
        },
        {
          id: 3,
          question: "What is a deadlock in operating systems?",
          options: [
            "A situation where processes wait indefinitely",
            "A type of scheduling algorithm",
            "A memory management technique",
            "A file system error",
          ],
          correctAnswer: 0,
        },
        {
          id: 4,
          question: "Which of the following is not a process state?",
          options: ["Ready", "Running", "Waiting", "Compiling"],
          correctAnswer: 3,
        },
        {
          id: 5,
          question: "What is virtual memory?",
          options: [
            "Physical RAM memory",
            "Cache memory",
            "A memory management technique using disk space",
            "Graphics memory",
          ],
          correctAnswer: 2,
        },
        {
          id: 6,
          question: "What does FIFO stand for in page replacement?",
          options: [
            "First In First Out",
            "Fast In Fast Out",
            "First Index First Operation",
            "File Input File Output",
          ],
          correctAnswer: 0,
        },
        {
          id: 7,
          question: "Which system call is used to create a new process?",
          options: ["exec()", "fork()", "wait()", "exit()"],
          correctAnswer: 1,
        },
        {
          id: 8,
          question: "What is thrashing in virtual memory?",
          options: [
            "Excessive page faulting",
            "Memory fragmentation",
            "Process termination",
            "CPU scheduling error",
          ],
          correctAnswer: 0,
        },
        {
          id: 9,
          question:
            "Which of the following is a non-preemptive scheduling algorithm?",
          options: [
            "Round Robin",
            "Priority Scheduling",
            "FCFS",
            "Multilevel Queue",
          ],
          correctAnswer: 2,
        },
        {
          id: 10,
          question: "What is a semaphore in operating systems?",
          options: [
            "A type of memory",
            "A synchronization primitive",
            "A scheduling algorithm",
            "A file system",
          ],
          correctAnswer: 1,
        },
        {
          id: 11,
          question: "What is the purpose of the kernel?",
          options: [
            "User interface management",
            "Core operating system functions",
            "Application development",
            "Network management",
          ],
          correctAnswer: 1,
        },
        {
          id: 12,
          question:
            "Which memory allocation technique reduces external fragmentation?",
          options: [
            "Fixed partitioning",
            "Dynamic partitioning",
            "Paging",
            "Segmentation",
          ],
          correctAnswer: 2,
        },
        {
          id: 13,
          question: "What is the role of a device driver?",
          options: [
            "Manage user accounts",
            "Interface between OS and hardware",
            "Compile source code",
            "Manage network connections",
          ],
          correctAnswer: 1,
        },
        {
          id: 14,
          question: "Which algorithm is used to avoid deadlock?",
          options: ["Banker's algorithm", "Round Robin", "FCFS", "SJF"],
          correctAnswer: 0,
        },
        {
          id: 15,
          question: "What is a thread?",
          options: [
            "A process",
            "A lightweight process",
            "A memory segment",
            "A file system",
          ],
          correctAnswer: 1,
        },
        {
          id: 16,
          question: "Which of the following is not a deadlock condition?",
          options: [
            "Mutual exclusion",
            "Hold and wait",
            "Preemption",
            "Circular wait",
          ],
          correctAnswer: 2,
        },
        {
          id: 17,
          question: "What is a page fault?",
          options: [
            "Hardware error",
            "Page not in memory",
            "Disk failure",
            "Network error",
          ],
          correctAnswer: 1,
        },
        {
          id: 18,
          question:
            "Which scheduling algorithm is used in time-sharing systems?",
          options: ["FCFS", "SJF", "Round Robin", "Priority"],
          correctAnswer: 2,
        },
        {
          id: 19,
          question: "What is the purpose of pagination?",
          options: [
            "File organization",
            "Memory management",
            "Process scheduling",
            "I/O management",
          ],
          correctAnswer: 1,
        },
        {
          id: 20,
          question: "Which inter-process communication method is fastest?",
          options: ["Pipes", "Message queues", "Shared memory", "Sockets"],
          correctAnswer: 2,
        },
      ],
      2: [
        // Set 2 questions (similar structure)
        {
          id: 1,
          question: "What is context switching?",
          options: [
            "Switching between users",
            "Switching between processes",
            "Switching between files",
            "Switching between networks",
          ],
          correctAnswer: 1,
        },
        // ... more questions for set 2
      ],
      // Sets 3, 4, 5 would follow similar pattern
    },
  },
  "DBMS for Placement": {
    id: "dbms-placement",
    icon: "Database",
    description: "Database Management System concepts for placement",
    sets: {
      1: [
        {
          id: 1,
          question: "What does ACID stand for in database transactions?",
          options: [
            "Atomicity, Consistency, Isolation, Durability",
            "Accuracy, Completeness, Integrity, Dependability",
            "Access, Control, Identity, Data",
            "Allocation, Concurrency, Integration, Distribution",
          ],
          correctAnswer: 0,
        },
        {
          id: 2,
          question: "Which normal form eliminates transitive dependencies?",
          options: ["1NF", "2NF", "3NF", "BCNF"],
          correctAnswer: 2,
        },
        // ... more DBMS questions
      ],
    },
  },
  "C for Interview": {
    id: "c-interview",
    icon: "Code",
    description: "C programming concepts for interviews",
    sets: {
      1: [
        {
          id: 1,
          question: "What is the size of int data type in C?",
          options: ["2 bytes", "4 bytes", "8 bytes", "Depends on compiler"],
          correctAnswer: 3,
        },
        // ... more C questions
      ],
    },
  },
  "C++ for Interview": {
    id: "cpp-interview",
    icon: "Code",
    description: "C++ programming concepts for interviews",
    sets: {
      1: [
        {
          id: 1,
          question: "What is polymorphism in C++?",
          options: [
            "Multiple inheritance",
            "Function overloading",
            "Ability to take multiple forms",
            "Template specialization",
          ],
          correctAnswer: 2,
        },
        // ... more C++ questions
      ],
    },
  },
  "Java for Interview": {
    id: "java-interview",
    icon: "Coffee",
    description: "Java programming concepts for interviews",
    sets: {
      1: [
        {
          id: 1,
          question: "What is the difference between JDK and JRE?",
          options: [
            "JDK is for development, JRE is for running",
            "JDK is older version of JRE",
            "No difference",
            "JRE is for development, JDK is for running",
          ],
          correctAnswer: 0,
        },
        // ... more Java questions
      ],
    },
  },
  "Python for Interview": {
    id: "python-interview",
    icon: "Code",
    description: "Python programming concepts for interviews",
    sets: {
      1: [
        {
          id: 1,
          question: "What is the difference between list and tuple in Python?",
          options: [
            "List is mutable, tuple is immutable",
            "List is immutable, tuple is mutable",
            "No difference",
            "List is for numbers, tuple is for strings",
          ],
          correctAnswer: 0,
        },
        // ... more Python questions
      ],
    },
  },
  "JavaScript for Interview": {
    id: "javascript-interview",
    icon: "Globe",
    description: "JavaScript concepts for interviews",
    sets: {
      1: [
        {
          id: 1,
          question: "What is closure in JavaScript?",
          options: [
            "A way to close the browser",
            "Function that has access to outer function's variables",
            "A type of loop",
            "A method to close connections",
          ],
          correctAnswer: 1,
        },
        // ... more JavaScript questions
      ],
    },
  },
  "Quantitative Aptitude": {
    id: "quantitative-aptitude",
    icon: "Calculator",
    description: "Mathematical and quantitative reasoning",
    sets: {
      1: [
        {
          id: 1,
          question: "If 5 books cost $25, what is the cost of 8 books?",
          options: ["$35", "$40", "$45", "$50"],
          correctAnswer: 1,
        },
        // ... more quantitative questions
      ],
    },
  },
  "Logical Aptitude": {
    id: "logical-aptitude",
    icon: "Brain",
    description: "Logical reasoning and problem solving",
    sets: {
      1: [
        {
          id: 1,
          question: "If all roses are flowers and some flowers are red, then:",
          options: [
            "All roses are red",
            "Some roses may be red",
            "No roses are red",
            "All flowers are roses",
          ],
          correctAnswer: 1,
        },
        // ... more logical questions
      ],
    },
  },
  "SQL for Interview": {
    id: "sql-interview",
    icon: "Database",
    description: "SQL query concepts for interviews",
    sets: {
      1: [
        {
          id: 1,
          question: "Which SQL command is used to retrieve data?",
          options: ["GET", "SELECT", "RETRIEVE", "FETCH"],
          correctAnswer: 1,
        },
        // ... more SQL questions
      ],
    },
  },
  "OOPs in Java": {
    id: "oops-java",
    icon: "Coffee",
    description: "Object-oriented programming concepts in Java",
    sets: {
      1: [
        {
          id: 1,
          question: "What is inheritance in Java?",
          options: [
            "A way to hide data",
            "A way to acquire properties of another class",
            "A way to overload methods",
            "A way to handle exceptions",
          ],
          correctAnswer: 1,
        },
        // ... more OOPs Java questions
      ],
    },
  },
  "OOPs in C++": {
    id: "oops-cpp",
    icon: "Code",
    description: "Object-oriented programming concepts in C++",
    sets: {
      1: [
        {
          id: 1,
          question: "What is encapsulation in C++?",
          options: [
            "Hiding implementation details",
            "Creating multiple objects",
            "Inheriting from base class",
            "Overloading operators",
          ],
          correctAnswer: 0,
        },
        // ... more OOPs C++ questions
      ],
    },
  },
};
