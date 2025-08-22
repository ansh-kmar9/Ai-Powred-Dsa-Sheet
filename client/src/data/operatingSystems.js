export const operatingSystemsData = {
  "Introduction to Operating Systems": {
    id: "intro-os",
    topics: [
      {
        id: "what-is-os",
        title: "What is an Operating System?",
        content: `
          **Definition**: An Operating System (OS) is system software that manages all hardware and software resources of a computer system. It acts as an intermediary between the user and the computer hardware, providing an environment for programs to run efficiently and conveniently by hiding the underlying hardware complexity.

          **Why have an OS?** Without an OS:
          - Applications would be bulky and complex, needing to include code to interact directly with hardware.
          - A single application could monopolize all system resources.
          - There would be no memory protection between applications.

          **Key Functions**:
          - **Resource Management**: Manages and allocates resources like memory, CPU, files, and devices.
          - **Abstraction**: Hides the complex details of hardware from the user.
          - **Process Management**: Facilitates the execution, isolation, and protection of application programs.
          - **Hardware Access**: Provides a controlled way for programs to access computer hardware.

          **Primary Goals**:
          - Maximize CPU utilization.
          - Minimize process starvation.
          - Ensure high-priority jobs are executed first.
        `,
        diagrams: [
          {
            title: "Operating System Layered Architecture",
            link: "https://i.imgur.com/8aJ7z8d.png",
          },
        ],
      },
      {
        id: "types-of-os",
        title: "Types of Operating Systems",
        content: `
          **Batch Processing OS**:
          - Users submit jobs (e.g., on punch cards) to an operator.
          - The operator groups jobs with similar needs into batches to run sequentially.
          - **Drawbacks**: No priority scheduling, may lead to starvation, and the CPU can become idle during I/O operations.

          **Multiprogramming OS**:
          - Aims to increase CPU utilization by keeping multiple jobs in memory at once.
          - When one job performs I/O, the CPU switches to another job, reducing idle time.
          - Uses context switching when a process enters a wait state.

          **Multitasking OS**:
          - A logical extension of multiprogramming that allows users to run multiple tasks simultaneously.
          - It uses time-sharing and frequent context switching to provide better responsiveness.

          **Multi-processing OS**:
          - Utilizes more than one CPU in a single computer system.
          - **Benefits**: Increased throughput and reliability (if one CPU fails, others can continue working).

          **Distributed OS**:
          - Manages a collection of independent, networked, and physically separate computers, making them appear as a single system.
          - Resources like CPUs, memory, and GPUs are distributed across the nodes.

          **Real-Time OS (RTOS)**:
          - Designed for systems that require computations to be performed within strict time boundaries.
          - Used in critical systems like air traffic control and robotics.
        `,
        diagrams: [
          {
            title: "Batch Processing Workflow",
            link: "https://i.imgur.com/k2x2Bvj.png",
          },
        ],
      },
    ],
  },
  "System Internals": {
    id: "system-internals",
    topics: [
      {
        id: "os-components",
        title: "Components of an OS",
        content: `
          An OS is broadly divided into two main parts: the Kernel and the User Space.

          **1. Kernel**:
          - The core component of the OS that interacts directly with the hardware.
          - It is the first part of the OS to be loaded into memory during startup.
          - **Kernel Functions**:
            - **Process Management**: Scheduling, creating, and deleting processes.
            - **Memory Management**: Allocating and deallocating memory space.
            - **File Management**: Creating, deleting, and mapping files to secondary storage.
            - **I/O Management**: Managing I/O devices and operations like buffering and caching.

          **2. User Space**:
          - The environment where user applications run.
          - Applications in user space do not have privileged access to hardware and must interact with the kernel to perform such operations.
          - It includes user interfaces like the Graphical User Interface (GUI) and Command-Line Interface (CLI).
        `,
        diagrams: [],
      },
      {
        id: "kernel-types",
        title: "Types of Kernels",
        content: `
          **Monolithic Kernel**:
          - All OS services (process, memory, file management) run in the kernel space. 
          - **Pros**: High performance due to fast internal communication. 
          - **Cons**: Bulky, less reliable (a crash in one module can bring down the whole system), and requires more memory. 
          - **Examples**: Linux, Unix. 

          **Microkernel**:
          - Only essential functions like process and memory management are in the kernel.  Other services run in user space. 
          - **Pros**: More reliable and stable, smaller size. 
          - **Cons**: Slower performance due to the overhead of switching between user and kernel modes for communication. 
          - **Examples**: Symbian OS, MINIX. 

          **Hybrid Kernel**:
          - A combination of monolithic and microkernel designs. 
          - It aims for the speed of a monolithic kernel and the modularity/stability of a microkernel. 
          - **Examples**: macOS, Windows. 
        `,
        diagrams: [],
      },
      {
        id: "system-calls",
        title: "System Calls",
        content: `
          **Definition**: A system call is the mechanism by which a user program requests a service from the kernel.  It's the only way for a process to transition from user mode to kernel mode. 

          **How it works**:
          1. A user application executes, needing a kernel service (e.g., creating a file).
          2. The application invokes a system call, which triggers a software interrupt. 
          3. The system transitions from user mode to kernel mode.
          4. The kernel's System Call Interface (SCI) identifies and executes the requested service.
          5. Control is returned to the user application in user mode. 

          **Types of System Calls**:
          - **Process Control**: \`fork()\`, \`exit()\`, \`wait()\`
          - **File Management**: \`open()\`, \`read()\`, \`write()\`, \`close()\`
          - **Device Management**: \`ioctl()\`, \`read()\`, \`write()\`
          - **Information Maintenance**: \`getpid()\`, \`sleep()\`
          - **Communication**: \`pipe()\`, \`shmget()\`
        `,
        diagrams: [
          {
            title: "User Mode to Kernel Mode Transition via System Call",
            link: "https://i.imgur.com/G4Yt0kU.png",
          },
        ],
      },
      {
        id: "boot-process",
        title: "The Boot Process",
        content: `
          When you turn on your computer, a sequence of events occurs to load the operating system:

          1.  **Power On**: The CPU initializes itself. 
          2.  **BIOS/UEFI Execution**: The CPU runs a firmware program called BIOS (Basic Input/Output System) or UEFI (Unified Extensible Firmware Interface) stored on a motherboard chip. 
          3.  **POST (Power-On Self-Test)**: The firmware tests and initializes system hardware like RAM. If an error is detected, the boot process stops. 
          4.  **Bootloader Identification**: The firmware searches storage devices for a bootloader, typically located in the Master Boot Record (MBR) or an EFI System Partition. 
          5.  **Bootloader Execution**: The firmware executes the bootloader (e.g., GRUB for Linux, Windows Boot Manager for Windows). 
          6.  **OS Loading**: The bootloader's job is to load the OS kernel into memory and hand over control to it, which then proceeds to load the rest of the system (user space). 
        `,
        diagrams: [],
      },
    ],
  },
  "Process and Thread Management": {
    id: "process-thread-management",
    topics: [
      {
        id: "processes-threads-intro",
        title: "Processes and Threads",
        content: `
          **Program**: An executable file containing a set of instructions, stored on disk.  It is passive code.

          **Process**: A program in execution.  It is an active entity that resides in the computer's main memory (RAM). 
          - **Process Architecture**:
            - **Stack**: Stores local variables, function arguments, and return values. 
            - **Heap**: For dynamically allocated memory during runtime. 
            - **Data**: Contains global and static variables. 
            - **Text**: The compiled program code loaded from disk. 
          - **Process Control Block (PCB)**: A data structure used by the OS to store all information about a process, such as its ID, state, program counter, and registers. 

          **Thread**:
          - An independent path of execution within a process.  It is often called a lightweight process. 
          - Threads within the same process share resources like code, data, and open files, but each has its own program counter, registers, and stack.
          - Used to achieve parallelism and responsiveness, e.g., multiple tabs in a web browser. 
        `,
        diagrams: [
          {
            title: "Process Memory Layout",
            link: "https://i.imgur.com/L5zX7Wb.png",
          },
        ],
      },
      {
        id: "multitasking-vs-multithreading",
        title: "Multi-Tasking vs. Multi-Threading",
        content: `
          **Multi-Tasking**:
          - **Concept**: The execution of more than one task (process) simultaneously by context switching between them. 
          - **Memory**: The OS allocates separate memory and resources to each process. 
          - **Isolation**: Strong isolation and memory protection exist between processes. 
          - **Switching**: Process context switching is slow as it involves switching the memory address space, and the CPU cache is flushed. 

          **Multi-Threading**:
          - **Concept**: A single process is divided into multiple threads, each with its own execution path. 
          - **Memory**: Threads of the same process share the same memory and resources. 
          - **Isolation**: No isolation between threads of the same process. 
          - **Switching**: Thread context switching is fast because it does not involve changing the memory address space, and the CPU's cache state is preserved. 
        `,
        diagrams: [],
      },
      {
        id: "process-states-queues",
        title: "Process States and Queues",
        content: `
          A process changes state as it executes. The primary states are:
          - **New**: The process is being created. 
          - **Ready**: The process is in memory and waiting to be assigned to a CPU. 
          - **Running**: Instructions are being executed on a CPU. 
          - **Waiting**: The process is waiting for an event to occur, such as an I/O operation to complete. 
          - **Terminated**: The process has finished execution. 

          The OS manages processes in different states using queues:
          - **Job Queue**: Contains all processes in the system, typically stored in secondary memory.  The Long-Term Scheduler (LTS) selects processes from this queue to load into memory. 
          - **Ready Queue**: Contains all processes that are in main memory and ready to execute.  The Short-Term Scheduler (STS) selects a process from this queue for the CPU. 
          - **Waiting Queue**: Contains processes that are in a waiting state for a specific I/O device or event. 
        `,
        diagrams: [
          {
            title: "Process State Transition Diagram",
            link: "https://i.imgur.com/T0b4R2p.png",
          },
        ],
      },
      {
        id: "special-processes",
        title: "Special Processes & Concepts",
        content: `
          **Swapping**:
          - A mechanism where a process can be temporarily moved from main memory to secondary storage (disk) to free up memory for other processes. 
          - Later, the process is swapped back into main memory to continue execution.  This is typically managed by a Medium-Term Scheduler. 

          **Orphan Process**:
          - A running process whose parent process has terminated. 
          - In Unix-like systems, orphan processes are adopted by the 'init' process (the first process started by the OS). 

          **Zombie Process (or Defunct Process)**:
          - A process that has completed its execution but still has an entry in the process table. 
          - This occurs because the parent process needs to read its child's exit status via the \`wait()\` system call.  Once the parent does this (an action called 'reaping'), the zombie process is removed from the process table. 
        `,
        diagrams: [
          {
            title: "Swapping of a Process",
            link: "https://i.imgur.com/3q1lE2m.png",
          },
        ],
      },
    ],
  },
  "CPU Scheduling": {
    id: "cpu-scheduling",
    topics: [
      {
        id: "scheduling-concepts",
        title: "Scheduling Concepts",
        content: `
          **CPU Scheduling**: The basis of multiprogramming.  It's the process of selecting a process from the ready queue and allocating the CPU to it. 

          **Scheduling Types**:
          - **Non-Preemptive**: Once a process is allocated the CPU, it keeps it until it either terminates or switches to a waiting state.  Can lead to starvation and low CPU utilization. 
          - **Preemptive**: The CPU can be taken away from a process (e.g., after its time quantum expires) and allocated to another.  Leads to better CPU utilization and less starvation. 

          **Performance Metrics**:
          - **Throughput**: Number of processes completed per unit time. 
          - **Turnaround Time (TAT)**: Total time from process arrival to completion (CT - AT). 
          - **Waiting Time (WT)**: Total time a process spends waiting in the ready queue (TAT - BT). 
          - **Response Time**: Time from process arrival to it getting the CPU for the first time. 
        `,
        diagrams: [],
      },
      {
        id: "scheduling-algorithms",
        title: "CPU Scheduling Algorithms",
        content: `
          **First-Come, First-Served (FCFS)**:
          - Non-preemptive. The process that requests the CPU first gets it first. 
          - **Issue**: Suffers from the **Convoy Effect**, where a long process can make many short processes wait, leading to high average waiting times. 

          **Shortest Job First (SJF)**:
          - The process with the smallest burst time (BT) is scheduled next. 
          - Can be **non-preemptive** or **preemptive** (Shortest Remaining Time First).
          - Optimal in minimizing average waiting time but can lead to starvation for long processes. 

          **Priority Scheduling**:
          - Each process has a priority, and the CPU is allocated to the process with the highest priority. 
          - Can be preemptive or non-preemptive. 
          - **Issue**: Can cause indefinite starvation for low-priority processes. This can be solved using **Ageing**, where the priority of waiting processes is gradually increased. 

          **Round Robin (RR)**:
          - Preemptive algorithm designed for time-sharing systems. 
          - Each process gets the CPU for a small time slice called a **time quantum (TQ)**. 
          - Prevents starvation as no process waits for more than (n-1) * TQ time units. 

          **Multilevel Queue (MLQ)**:
          - The ready queue is partitioned into several separate queues (e.g., for system, interactive, and batch processes). 
          - Processes are permanently assigned to a queue. 
          - Scheduling between queues is typically fixed-priority preemptive, which can cause starvation for lower-priority queues. 

          **Multilevel Feedback Queue (MLFQ)**:
          - An enhancement of MLQ that allows processes to move between queues. 
          - If a process uses too much CPU time, it's moved to a lower-priority queue. If it waits too long, it can be moved to a higher-priority queue (ageing). 
          - This approach is more flexible and prevents starvation. 
        `,
        diagrams: [
          {
            title: "Multilevel Queue Scheduling",
            link: "https://i.imgur.com/dK3fR2w.png",
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
        title: "The Critical Section Problem",
        content: `
          **Concurrency**: The execution of multiple instruction sequences at the same time, often involving several process threads running in parallel. 

          **Critical Section (CS)**: A segment of code where a process or thread accesses shared resources (e.g., shared variables).  To maintain data consistency, only one thread should be allowed to execute in its critical section at a time. 

          **Race Condition**:
          - Occurs when two or more threads access shared data and try to modify it concurrently. 
          - The final result of the data depends on the unpredictable order in which the threads are scheduled, leading to inconsistent or incorrect outcomes. 
        `,
        diagrams: [],
      },
      {
        id: "sync-mechanisms",
        title: "Synchronization Mechanisms",
        content: `
          Solutions to the critical section problem to avoid race conditions.

          **Mutex (Mutual Exclusion) Locks**:
          - A lock is used to guard a critical section, ensuring that only one thread can access it at a time. 
          - A thread acquires the lock before entering the CS and releases it upon exiting.
          - **Disadvantages**: Can lead to **contention** (busy waiting), **deadlocks**, and **starvation** of high-priority threads. 

          **Semaphores**:
          - A synchronization tool that is an integer variable, accessed only through two atomic operations: \`wait()\` and \`signal()\`. 
          - **Counting Semaphore**: Can range over an unrestricted domain. Used to control access to a resource with a finite number of instances. 
          - **Binary Semaphore**: Can only be 0 or 1. Functionally equivalent to a mutex lock. 
          - Semaphores can be implemented to block processes instead of busy waiting, improving efficiency. 

          **Conditional Variables**:
          - A synchronization primitive that allows a thread to wait until a specific condition becomes true. 
          - It works with a mutex lock. A thread must hold the lock to wait on a condition variable. When it waits, it releases the lock, avoiding busy waiting. 
        `,
        diagrams: [],
      },
      {
        id: "dining-philosophers",
        title: "Classic Problem: Dining Philosophers",
        content: `
          **The Problem**:
          - Five philosophers are sitting around a circular table. They spend their lives alternating between thinking and eating. 
          - In the center of the table is a bowl of noodles, and between each pair of adjacent philosophers is a single fork. 
          - To eat, a philosopher must pick up both the left and right forks. 

          **The Challenge**:
          - The problem is to design a protocol that allows the philosophers to eat without causing a **deadlock**.
          - A deadlock can occur if all five philosophers pick up their left fork simultaneously. They will then be stuck waiting forever for their right fork, which is held by their neighbor. 

          **Solutions**:
          - A simple semaphore-based solution (one for each fork) is prone to deadlock. 
          - To avoid deadlock, additional rules are needed:
            - Allow at most four philosophers to sit at the table simultaneously. 
            - A philosopher can pick up forks only if both are available (done in a critical section). 
            - Use an odd-even rule: odd-numbered philosophers pick left then right, while even-numbered philosophers pick right then left. 
        `,
        diagrams: [
          {
            title: "The Dining Philosophers Problem",
            link: "https://i.imgur.com/k6x3f9y.png",
          },
        ],
      },
    ],
  },
  Deadlocks: {
    id: "deadlocks",
    topics: [
      {
        id: "deadlock-intro",
        title: "Introduction to Deadlocks",
        content: `
          **Definition**: A deadlock is a situation where two or more processes are blocked forever, each waiting for a resource that is held by another waiting process.  The system resources are tied up, preventing other jobs from executing. 

          **Necessary Conditions**: A deadlock can arise if and only if the following four conditions hold simultaneously:
          1.  **Mutual Exclusion**: At least one resource must be held in a non-sharable mode; only one process can use the resource at a time. 
          2.  **Hold and Wait**: A process must be holding at least one resource and waiting to acquire additional resources held by other processes. 
          3.  **No Preemption**: A resource can be released only voluntarily by the process holding it after that process has completed its task. 
          4.  **Circular Wait**: A set of waiting processes {P0, P1, ..., Pn} must exist such that P0 is waiting for a resource held by P1, P1 is waiting for a resource held by P2, ..., and Pn is waiting for a resource held by P0. 
        `,
        diagrams: [
          {
            title: "Circular Wait Deadlock Example",
            link: "https://i.imgur.com/pYxY8lP.png",
          },
        ],
      },
      {
        id: "deadlock-handling",
        title: "Deadlock Handling Strategies",
        content: `
          There are several ways to handle deadlocks:

          **1. Deadlock Prevention**:
          - Ensure that at least one of the four necessary conditions for deadlock can never hold. 
          - **Breaking Mutual Exclusion**: Not always possible, as some resources are inherently non-sharable. 
          - **Breaking Hold and Wait**: Require a process to request all its resources before execution begins, or release all resources before requesting new ones. 
          - **Breaking No Preemption**: If a process holding resources requests another that cannot be allocated, preempt the currently held resources. 
          - **Breaking Circular Wait**: Impose a total ordering of all resource types and require that each process requests resources in an increasing order. 

          **2. Deadlock Avoidance**:
          - Requires the OS to be given advance information about the resources a process will need. 
          - The system allocates resources in a way that it always remains in a **safe state** (a state from which there is at least one sequence of execution that allows all processes to finish). 
          - The **Banker's Algorithm** is a common deadlock avoidance algorithm. 

          **3. Deadlock Detection and Recovery**:
          - Allow the system to enter a deadlocked state, then detect it and recover. 
          - **Detection**: Use algorithms like a wait-for graph to detect cycles. 
          - **Recovery**:
            - **Process Termination**: Abort one or all deadlocked processes. 
            - **Resource Preemption**: Successively preempt resources from processes and give them to other processes until the deadlock cycle is broken. 

          **4. Deadlock Ignorance (Ostrich Algorithm)**:
          - Ignore the problem altogether, assuming deadlocks are very rare.  This is the approach taken by many modern operating systems.
        `,
        diagrams: [],
      },
    ],
  },
  "Memory Management": {
    id: "memory-management",
    topics: [
      {
        id: "address-spaces",
        title: "Address Spaces",
        content: `
          **Logical Address**:
          - An address generated by the CPU; also known as a virtual address. 
          - It is the address of instructions or data from the process's perspective.  The set of all logical addresses generated by a program is its Logical Address Space. 

          **Physical Address**:
          - The address seen by the memory unit; a location in physical main memory. 
          - The user never directly deals with physical addresses.  The set of all physical addresses is the Physical Address Space. 

          **Memory-Management Unit (MMU)**:
          - A hardware device that performs the run-time mapping from logical (virtual) addresses to physical addresses. 
          - It uses a **relocation register** (or base register) and a **limit register** to translate addresses and protect memory. The logical address must be less than the limit register, and the physical address is calculated by adding the logical address to the relocation register value. 
        `,
        diagrams: [
          {
            title: "Logical to Physical Address Translation",
            link: "https://i.imgur.com/vHq7F3X.png",
          },
        ],
      },
      {
        id: "contiguous-allocation",
        title: "Contiguous Memory Allocation",
        content: `
          A memory allocation method where each process is contained in a single contiguous section of memory. 

          **Fixed Partitioning**:
          - Main memory is divided into multiple fixed-size partitions. 
          - **Limitations**:
            - **Internal Fragmentation**: Occurs when the memory allocated to a process is larger than the process itself, wasting space within the partition. 
            - **External Fragmentation**: Total free memory space exists to satisfy a request, but it is not contiguous. 
            - **Process Size Limitation**: A process cannot be larger than the largest partition. 

          **Dynamic Partitioning**:
          - Partitions are created dynamically to be the exact size needed by each process. 
          - **Advantages**: No internal fragmentation, no limit on process size, and a better degree of multiprogramming. 
          - **Limitation**: Suffers from external fragmentation as processes are loaded and removed, leaving small, non-contiguous holes. 
        `,
        diagrams: [
          {
            title: "Internal and External Fragmentation",
            link: "https://i.imgur.com/U8V1L5f.png",
          },
        ],
      },
      {
        id: "non-contiguous-allocation",
        title: "Non-Contiguous Allocation: Paging & Segmentation",
        content: `
          Allows a process's physical address space to be non-contiguous, solving the problem of external fragmentation.

          **Paging**:
          - Physical memory is divided into fixed-size blocks called **frames**, and logical memory is divided into blocks of the same size called **pages**. 
          - A **Page Table** is used to map each page of a process to a frame in physical memory.  The CPU-generated logical address is split into a page number (index into the page table) and an offset. 
          - **Advantage**: Eliminates external fragmentation. 
          - **Translation Look-aside Buffer (TLB)**: A fast hardware cache that stores recent page-to-frame translations to speed up the address translation process. 

          **Segmentation**:
          - A memory management scheme that supports the user's view of memory. 
          - The logical address space is a collection of variable-sized **segments** (e.g., code, data, stack). 
          - A **Segment Table** maps the segment number to a physical base address and limit. 
          - **Advantages**: No internal fragmentation, aligns with logical program structure. 
          - **Disadvantage**: Can suffer from external fragmentation. 
        `,
        diagrams: [
          {
            title: "Paging Model of Memory",
            link: "https://i.imgur.com/c5c8W8C.png",
          },
          {
            title: "Segmentation Hardware",
            link: "https://i.imgur.com/Gj3jB5N.png",
          },
        ],
      },
    ],
  },
  "Virtual Memory": {
    id: "virtual-memory",
    topics: [
      {
        id: "virtual-memory-intro",
        title: "Introduction to Virtual Memory",
        content: `
          **Concept**: A technique that allows the execution of processes that are not completely loaded into physical memory.  It creates the illusion for the user of having a very large main memory by using a part of secondary storage (swap space) as an extension of main memory. 

          **Advantages**:
          - **Larger Program Size**: Programs can be larger than the available physical memory. 
          - **Increased Multiprogramming**: More programs can be run concurrently as each program takes up less physical memory. 
          - **Higher CPU Utilization**: With more programs in memory, the CPU is less likely to be idle. 
        `,
        diagrams: [],
      },
      {
        id: "demand-paging",
        title: "Demand Paging",
        content: `
          A popular method for implementing virtual memory. It uses a **lazy swapper** (or pager) that never brings a page into memory unless it is needed. 

          **How it works**:
          - When a process starts, only a few of its pages are loaded into memory. 
          - The page table uses a **valid-invalid bit** to indicate whether a page is in memory (valid) or on disk (invalid). 
          - **Page Fault**: If a process tries to access a page with an invalid bit, a trap to the OS occurs, known as a page fault. 
          - **Handling a Page Fault**:
            1. The OS checks if the memory reference is valid.
            2. If valid, it finds a free frame in physical memory.
            3. It schedules a disk operation to read the required page from the swap space into the free frame. 
            4. The page table is updated to mark the page as valid. 
            5. The instruction that caused the fault is restarted. 
        `,
        diagrams: [
          {
            title: "Page Fault Handling Steps",
            link: "https://i.imgur.com/W2d5w4D.png",
          },
        ],
      },
      {
        id: "page-replacement-algorithms",
        title: "Page Replacement Algorithms",
        content: `
          If a page fault occurs and there are no free frames, the OS must choose a victim page to swap out to free a frame for the new page.  The goal is to select the page that is least likely to be needed soon, minimizing future page faults. 

          **FIFO (First-In, First-Out)**:
          - Replaces the oldest page in memory. 
          - Simple to implement but can perform poorly.
          - Suffers from **Belady's Anomaly**, where increasing the number of frames can paradoxically increase the number of page faults. 

          **Optimal Page Replacement**:
          - Replaces the page that will not be used for the longest period of time. 
          - Guarantees the lowest possible page-fault rate but is impossible to implement in practice as it requires future knowledge. 

          **LRU (Least Recently Used)**:
          - Replaces the page that has not been used for the longest period. 
          - It's an approximation of the optimal algorithm and generally performs well.
          - Can be implemented using counters with timestamps or a stack. 
        `,
        diagrams: [],
      },
      {
        id: "thrashing",
        title: "Thrashing",
        content: `
          **Definition**: A condition in which a system spends more time paging (servicing page faults) than executing processes. 
          - It occurs when a process does not have enough frames allocated to it to hold its working set of pages (pages in active use). 
          - This leads to a high rate of page faults, causing the CPU utilization to plummet as the system is constantly swapping pages in and out. 

          **Handling Thrashing**:
          - **Working-Set Model**: This model is based on the principle of locality. The OS monitors the set of actively used pages (the working set) for each process and allocates enough frames to hold it. 
          - **Page-Fault Frequency (PFF)**: The OS controls the page-fault rate directly. If the rate is too high, the process is allocated more frames. If it's too low, frames may be taken away. 
        `,
        diagrams: [
          {
            title: "CPU Utilization vs. Degree of Multiprogramming",
            link: "https://i.imgur.com/x0R7Z4A.png",
          },
        ],
      },
    ],
  },
};
