export const operatingSystemsData = {
  "Introduction to Operating Systems": {
    id: "intro-os",
    topics: [
      {
        id: "what-is-os",
        title: "What is an Operating System?",
        content: `
          **Definition**: An Operating System (OS) is system software that manages computer hardware and software resources and provides common services for computer programs.

          **Key Functions**:
          - **Process Management**: Creating, scheduling, and terminating processes
          - **Memory Management**: Allocating and deallocating memory space
          - **File System Management**: Managing files and directories
          - **Device Management**: Controlling and coordinating hardware devices
          - **Security**: Protecting system resources and user data

          **User Interface**: Provides interface between user and hardware, making computer usage easier and more efficient.
        `,
        diagrams: [
          {
            title: "Operating System Architecture",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=OS+Architecture",
          },
        ],
      },
      {
        id: "types-of-os",
        title: "Types of Operating Systems",
        content: `
          **Batch Operating Systems**:
          - Jobs are collected and processed in batches
          - No direct interaction with users
          - High throughput, low response time

          **Time-Sharing Operating Systems**:
          - Multiple users share system resources simultaneously
          - Each user gets a time slice
          - Examples: Unix, Linux

          **Real-Time Operating Systems (RTOS)**:
          - Guarantees response within specified time constraints
          - Hard real-time vs Soft real-time
          - Used in embedded systems, robotics

          **Distributed Operating Systems**:
          - Manages resources across multiple machines
          - Appears as single system to users
          - Load balancing and fault tolerance

          **Mobile Operating Systems**:
          - Designed for mobile devices
          - Examples: Android, iOS
          - Touch interfaces, power management
        `,
        diagrams: [
          {
            title: "Types of Operating Systems",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=OS+Types",
          },
        ],
      },
    ],
  },
  "Process Management": {
    id: "process-management",
    topics: [
      {
        id: "processes-threads",
        title: "Processes and Threads",
        content: `
          **Process**:
          - **Definition**: A program in execution
          - **Components**: Program code, data, stack, heap, process control block (PCB)
          - **States**: New, Ready, Running, Waiting, Terminated
          - **Isolation**: Processes are isolated from each other

          **Thread**:
          - **Definition**: Lightweight process, unit of execution within a process
          - **Shared Resources**: Code, data, and heap with other threads in same process
          - **Private Resources**: Register set, stack pointer, program counter
          - **Types**: User-level threads, Kernel-level threads

          **Process vs Thread**:
          - **Creation Time**: Thread creation is faster
          - **Context Switching**: Thread switching is faster
          - **Communication**: Threads share memory, processes use IPC
          - **Isolation**: Processes are isolated, threads are not
        `,
        diagrams: [
          {
            title: "Process vs Thread Architecture",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Process+vs+Thread",
          },
        ],
      },
      {
        id: "cpu-scheduling",
        title: "CPU Scheduling",
        content: `
          **Purpose**: Determines which process gets CPU time and for how long

          **Scheduling Algorithms**:

          **First-Come, First-Served (FCFS)**:
          - Non-preemptive
          - Simple but can cause convoy effect
          - Average waiting time can be high

          **Shortest Job Next (SJN)**:
          - Non-preemptive
          - Minimizes average waiting time
          - Requires knowledge of job lengths

          **Round Robin (RR)**:
          - Preemptive
          - Time quantum-based
          - Fair for all processes

          **Priority Scheduling**:
          - Higher priority processes execute first
          - Can be preemptive or non-preemptive
          - May cause starvation

          **Multilevel Queue**:
          - Multiple queues with different priorities
          - Each queue has its own scheduling algorithm
        `,
        diagrams: [
          {
            title: "CPU Scheduling Algorithms",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=CPU+Scheduling",
          },
        ],
      },
    ],
  },
  "Memory Management": {
    id: "memory-management",
    topics: [
      {
        id: "memory-hierarchy",
        title: "Memory Hierarchy",
        content: `
          **Memory Levels** (from fastest to slowest):

          **Registers**:
          - Built into CPU
          - Fastest access time (nanoseconds)
          - Very limited capacity

          **Cache Memory**:
          - L1, L2, L3 caches
          - Fast access, small capacity
          - Stores frequently used data

          **Main Memory (RAM)**:
          - Primary storage for active programs
          - Volatile memory
          - Larger capacity than cache

          **Secondary Storage**:
          - Hard drives, SSDs
          - Non-volatile, large capacity
          - Slower access times

          **Principles**:
          - **Locality of Reference**: Temporal and spatial locality
          - **Cache Hit/Miss**: Performance optimization
          - **Memory Management Unit (MMU)**: Handles address translation
        `,
        diagrams: [
          {
            title: "Memory Hierarchy Structure",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Memory+Hierarchy",
          },
        ],
      },
      {
        id: "virtual-memory",
        title: "Virtual Memory",
        content: `
          **Concept**: Technique that allows execution of processes that may not be completely in physical memory

          **Benefits**:
          - **Larger Address Space**: Programs can be larger than physical memory
          - **Memory Protection**: Processes isolated from each other
          - **Memory Sharing**: Code and data can be shared between processes
          - **Efficient Use**: Only needed pages loaded in memory

          **Implementation Techniques**:

          **Paging**:
          - Memory divided into fixed-size pages
          - Page table maps virtual to physical addresses
          - Page faults when page not in memory

          **Segmentation**:
          - Memory divided into variable-size segments
          - Each segment has base address and limit
          - Logical organization of memory

          **Page Replacement Algorithms**:
          - **FIFO**: First In, First Out
          - **LRU**: Least Recently Used
          - **Optimal**: Replace page that won't be used for longest time
        `,
        diagrams: [
          {
            title: "Virtual Memory Management",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Virtual+Memory",
          },
        ],
      },
    ],
  },
  "File Systems": {
    id: "file-systems",
    topics: [
      {
        id: "file-system-structure",
        title: "File System Structure",
        content: `
          **File System Components**:

          **Files**:
          - **Attributes**: Name, type, size, timestamps, permissions
          - **Operations**: Create, read, write, delete, rename
          - **Access Methods**: Sequential, direct, indexed

          **Directories**:
          - **Structure**: Tree-like hierarchy
          - **Operations**: Create, delete, list, search
          - **Implementation**: As special files containing file entries

          **File Allocation Methods**:

          **Contiguous Allocation**:
          - Files stored in contiguous blocks
          - Fast access, external fragmentation problem

          **Linked Allocation**:
          - Files stored as linked list of blocks
          - No external fragmentation, slow random access

          **Indexed Allocation**:
          - Index block contains pointers to data blocks
          - Fast random access, index overhead

          **File System Types**:
          - **FAT32**: Simple, widely compatible
          - **NTFS**: Advanced features, security
          - **ext4**: Linux default, journaling
          - **APFS**: Apple's modern file system
        `,
        diagrams: [
          {
            title: "File System Structure",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=File+System",
          },
        ],
      },
    ],
  },
  Synchronization: {
    id: "synchronization",
    topics: [
      {
        id: "critical-section",
        title: "Critical Section Problem",
        content: `
          **Definition**: Section of code where shared resources are accessed and must be executed atomically

          **Requirements for Solution**:
          - **Mutual Exclusion**: Only one process in critical section at a time
          - **Progress**: Selection of next process cannot be postponed indefinitely
          - **Bounded Waiting**: Limit on waiting time for any process

          **Synchronization Mechanisms**:

          **Semaphores**:
          - **Binary Semaphore**: 0 or 1 value (mutex)
          - **Counting Semaphore**: Can have values > 1
          - **Operations**: wait() and signal()

          **Monitors**:
          - High-level synchronization construct
          - Encapsulates shared data and procedures
          - Automatic mutual exclusion

          **Classic Problems**:
          - **Producer-Consumer**: Buffer synchronization
          - **Readers-Writers**: Database access control
          - **Dining Philosophers**: Resource allocation deadlock
        `,
        diagrams: [
          {
            title: "Synchronization Mechanisms",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Synchronization",
          },
        ],
      },
      {
        id: "deadlocks",
        title: "Deadlocks",
        content: `
          **Definition**: Situation where processes wait indefinitely for resources held by other processes

          **Necessary Conditions** (all must be true):
          - **Mutual Exclusion**: Resources cannot be shared
          - **Hold and Wait**: Process holding resources waits for more
          - **No Preemption**: Resources cannot be forcibly taken
          - **Circular Wait**: Circular chain of waiting processes

          **Deadlock Handling Strategies**:

          **Prevention**:
          - Eliminate one of the four necessary conditions
          - Conservative but may reduce system utilization

          **Avoidance**:
          - **Banker's Algorithm**: Check if resource allocation leads to safe state
          - Requires advance knowledge of resource requirements

          **Detection and Recovery**:
          - Periodically check for deadlocks
          - Recovery by process termination or resource preemption

          **Ignorance** (Ostrich Algorithm):
          - Assume deadlocks are rare
          - Restart system if deadlock occurs
        `,
        diagrams: [
          {
            title: "Deadlock Detection and Prevention",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Deadlock+Management",
          },
        ],
      },
    ],
  },
};
