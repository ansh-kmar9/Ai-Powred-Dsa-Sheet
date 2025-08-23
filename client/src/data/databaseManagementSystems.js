export const dbmsData = {
  "Foundations & Introductory Concepts": {
    id: "foundations-introductory-concepts",
    topics: [
      {
        id: "purpose-of-dbms",
        title: "Purpose of DBMS & Advantages Over File Systems",
        content:
          "**Definition**: A Database Management System (DBMS) is software that manages databases, providing a structured way to create, retrieve, update, and manage data. Think of it as a highly organized digital librarian for your information. 📚\n\n" +
          "**File System Approach (The Old Way)**: Data was stored in individual flat files. This is like keeping business records in separate, unrelated paper folders in a filing cabinet. This led to major problems.\n\n" +
          "**Advantages of DBMS over File Systems**:\n" +
          "- **Reduced Data Redundancy**: Data is stored centrally, minimizing duplication. For example, a customer's address is stored once, not in multiple sales, shipping, and billing files.\n" +
          "- **Data Consistency**: By reducing redundancy, the risk of inconsistencies (e.g., an updated address in one file but not another) is eliminated.\n" +
          "- **Concurrent Access**: A DBMS uses locking and transaction management to allow multiple users to access and modify data simultaneously without corrupting it.\n" +
          "- **Data Integrity**: Enforces rules (constraints) on data, like ensuring an 'Age' column only accepts numbers or a 'StudentID' is unique.\n" +
          "- **Security**: Provides robust security features, controlling who can view, add, edit, or delete data.\n" +
          "- **Backup and Recovery**: Offers automated procedures to back up data and recover from system crashes, ensuring data durability.\n" +
          "- **Data Abstraction**: Hides complex storage details from users, simplifying interaction.",
        diagrams: [
          {
            title: "DBMS vs File System",
            link: "https://static.javatpoint.com/dbms/images/dbms-vs-file-system.png",
          },
        ],
      },
      {
        id: "dbms-architecture",
        title: "Database System Architecture, Schemas vs Instances",
        content:
          "**Data Abstraction** is a key concept, hiding the complexity of how data is stored. This is achieved through the **Three-Schema Architecture**:\n\n" +
          "- **1. Physical or Internal Level**: Describes **how** the data is physically stored (e.g., on disks, file organization, indexes). This is the most complex level, handled by the DBMS itself.\n" +
          "- **2. Logical or Conceptual Level**: Describes **what** data is stored and the relationships between the data. This is the overall view of the database, defining tables, columns, and constraints. This is the domain of Database Administrators (DBAs).\n" +
          "- **3. View or External Level**: Describes a **part** of the database for a particular user group. It creates simplified \"views\" to enhance security and ease of use. For example, a student might only see their own grades, not the entire gradebook.\n\n" +
          "**Schemas vs. Instances**:\n" +
          "- **Schema**: The **blueprint** or structural description of the database. It is designed during the database design phase and doesn't change frequently. (e.g., The definition of a 'Students' table with columns: StudentID, Name, Major).\n" +
          "- **Instance**: A **snapshot** of the data in the database at a specific moment. It changes whenever data is added, updated, or deleted. (e.g., The actual 500 rows of student data in the 'Students' table right now).",
        diagrams: [
          {
            title: "Three-Schema Architecture",
            link: "https://media.geeksforgeeks.org/wp-content/uploads/20220420144122/ArchitectureofDBMS.png",
          },
        ],
      },
      {
        id: "types-of-dbms",
        title: "Types of DBMS",
        content:
          "- **RDBMS (Relational DBMS)**: The most common type. Data is stored in tables with rows and columns. Uses SQL. **Use Case**: Financial systems, booking systems (anything requiring strong consistency). **Examples**: MySQL, PostgreSQL, Oracle.\n" +
          "- **NoSQL (Not Only SQL)**: A class of databases that don't use the relational model. They are flexible, scalable, and designed for large-scale data. See Section 9 for details.\n" +
          "- **NewSQL**: A modern category that combines the scalability and flexibility of NoSQL with the strong consistency (ACID) guarantees of a traditional RDBMS. **Use Case**: High-throughput OLTP systems that need to scale. **Examples**: CockroachDB, TiDB.\n" +
          "- **In-memory DBMS**: Stores data primarily in main memory (RAM) instead of on disk, providing extremely fast data access. **Use Case**: Real-time analytics, caching layers. **Examples**: Redis, SAP HANA.\n" +
          "- **Cloud-based DBMS**: A database delivered as a managed service (DBaaS) from a cloud provider. The provider handles infrastructure, maintenance, and scaling. **Use Case**: Any application built on the cloud. **Examples**: Amazon RDS, Azure SQL Database.\n" +
          "- **Graph DBMS**: Designed to store and navigate relationships. Data is modeled as nodes (entities) and edges (relationships). **Use Case**: Social networks, fraud detection, recommendation engines. **Examples**: Neo4j, Amazon Neptune.\n" +
          "- **Multi-model DBMS**: A single database engine that supports multiple data models (e.g., document, graph, key-value). **Use Case**: Applications with diverse data needs. **Example**: ArangoDB.",
        diagrams: [],
      },
    ],
  },
  "Data Modeling & Design": {
    id: "data-modeling-design",
    topics: [
      {
        id: "er-model",
        title: "ER Model & EER",
        content:
          "The **Entity-Relationship (ER) Model** is a high-level conceptual data model used to visualize the structure of a database.\n\n" +
          "**Core Components of an ER Diagram**:\n" +
          "- **Entity**: A real-world object or concept (e.g., 'Student', 'Course'). Represented by a rectangle.\n" +
          "- **Attribute**: A property of an entity (e.g., 'StudentName', 'CourseID'). Represented by an oval.\n" +
          "- **Relationship**: An association between entities (e.g., a 'Student' *enrolls in* a 'Course'). Represented by a diamond.\n\n" +
          "**Enhanced ER (EER) Model** adds concepts for more complex designs:\n" +
          "- **Generalization**: A bottom-up approach where entities with common features are combined into a more general entity (a superclass). For example, 'Car' and 'Truck' can be generalized into 'Vehicle'.\n" +
          "- **Specialization**: A top-down approach where an entity is broken down into more specialized sub-entities (subclasses). For example, a 'Person' entity can be specialized into 'Student' and 'Professor'.",
        diagrams: [
          {
            title: "Simple ER Diagram",
            link: "https://media.geeksforgeeks.org/wp-content/uploads/20200424161139/ER-Diagram-Example1.png",
          },
        ],
      },
      {
        id: "relational-model",
        title: "Relational Model & Keys",
        content:
          "The **Relational Model** represents a database as a collection of tables (relations). Each table has columns (attributes) and rows (tuples).\n\n" +
          "**Keys** are crucial for enforcing uniqueness and linking tables:\n" +
          "- **Super Key**: A set of one or more attributes that can uniquely identify a row in a table.\n" +
          "- **Candidate Key**: A minimal super key (no attribute can be removed without losing the uniqueness property). A table can have multiple candidate keys.\n" +
          "- **Primary Key**: The one candidate key chosen to be the main identifier for a table. It cannot be NULL.\n" +
          "- **Alternate Key**: A candidate key that was not chosen to be the primary key.\n" +
          "- **Foreign Key**: An attribute in one table that refers to the primary key of another table. It's the glue that connects your data.",
        diagrams: [],
      },
      {
        id: "functional-dependencies",
        title: "Functional Dependencies & Attribute Closure",
        content:
          "A **Functional Dependency (FD)** is a constraint that describes the relationship between attributes in a table. An FD is denoted as **X -> Y**, which means the values of attribute set X uniquely determine the values of attribute set Y.\n" +
          "*Example: `StudentID -> StudentName` (A student's ID determines their name).*\n\n" +
          "- **Attribute Closure (X+)**: The set of all attributes that are functionally determined by a given attribute set X. This is calculated using Armstrong's Axioms and is used to find candidate keys.\n\n" +
          "- **Armstrong’s Axioms**: A set of rules for inferring all FDs on a relational database.\n" +
          "  1. **Reflexivity**: If Y is a subset of X, then X -> Y. (Trivial)\n" +
          "  2. **Augmentation**: If X -> Y, then XZ -> YZ.\n" +
          "  3. **Transitivity**: If X -> Y and Y -> Z, then X -> Z. (This is the basis for 3NF).\n\n" +
          "- **Canonical Cover**: A minimal set of functional dependencies that is equivalent to the original set. It's a simplified version of FDs used in database design.",
        diagrams: [],
      },
    ],
  },
  "Normalization & Schema Refinement": {
    id: "normalization-schema-refinement",
    topics: [
      {
        id: "normal-forms",
        title: "Normal Forms (1NF, 2NF, 3NF, BCNF, etc.)",
        content:
          "**Normalization** is the process of organizing tables to minimize data redundancy and avoid undesirable characteristics like insertion, update, and deletion anomalies.\n\n" +
          "- **1NF (First Normal Form)**: A table is in 1NF if all its attribute values are **atomic**. This means no repeating groups or multi-valued columns. (e.g., a 'PhoneNumber' column can't contain '555-1234, 555-5678').\n" +
          "- **2NF (Second Normal Form)**: Must be in 1NF. Every non-key attribute must be **fully functionally dependent** on the *entire* primary key. It eliminates partial dependencies. (This form is only relevant for tables with composite primary keys).\n" +
          "- **3NF (Third Normal Form)**: Must be in 2NF. There should be **no transitive dependencies**, meaning no non-key attribute can be dependent on another non-key attribute. (e.g., If StudentID -> DeptID and DeptID -> DeptName, this is a transitive dependency).\n" +
          "- **BCNF (Boyce-Codd Normal Form)**: A stricter version of 3NF. For any non-trivial dependency X -> Y, X must be a **super key**. Most tables in 3NF are also in BCNF.\n" +
          "- **Higher Forms (4NF, 5NF, DKNF)**: Address more advanced issues like multi-valued dependencies and join dependencies. They are less commonly used in practice.\n\n" +
          "**Denormalization**: The process of intentionally introducing redundancy to a normalized database to improve read performance by avoiding costly joins.\n\n" +
          "**Decomposition Goals**:\n" +
          "- **Lossless Join**: When a table is split, you must be able to rejoin the parts to get the original table back without creating extra rows.\n" +
          "- **Dependency Preservation**: All original functional dependencies must still be enforceable after the split.",
        diagrams: [
          {
            title: "Normalization Steps",
            link: "https://www.scaler.com/topics/media/normalization-in-dbms-1.webp",
          },
        ],
      },
    ],
  },
  "Query Languages & Algebra": {
    id: "query-languages-algebra",
    topics: [
      {
        id: "relational-algebra-calculus",
        title: "Relational Algebra & Calculus",
        content:
          "These are the formal, mathematical foundations upon which SQL is built.\n\n" +
          "- **Relational Algebra**: A **procedural** query language. It provides a set of operations that take one or more tables as input and produce a new table as output. You specify *how* to get the result.\n" +
          "  *Key operations: Select (σ), Project (π), Union (∪), Set Difference (-), Join (⨝).*\n" +
          "- **Relational Calculus**: A **non-procedural** or **declarative** query language. You describe *what* result you want without specifying the procedure to obtain it. SQL is based on this declarative principle.\n" +
          "  *Types: Tuple Relational Calculus (TRC) and Domain Relational Calculus (DRC).*",
        diagrams: [],
      },
      {
        id: "sql-ddl-dml-dcl",
        title: "SQL: DDL, DML, DCL & Complex Queries",
        content:
          "**SQL (Structured Query Language)** is the standard language for relational databases.\n\n" +
          "- **DDL (Data Definition Language)**: Defines the database schema.\n" +
          "  * `CREATE`, `ALTER`, `DROP`\n" +
          "- **DML (Data Manipulation Language)**: Manipulates the data itself.\n" +
          "  * `SELECT`, `INSERT`, `UPDATE`, `DELETE`\n" +
          "- **DCL (Data Control Language)**: Manages user access and permissions.\n" +
          "  * `GRANT`, `REVOKE`\n\n" +
          "**Complex SELECT Queries**:\n" +
          "```sql\n" +
          "SELECT\n" +
          "    d.department_name,\n" +
          "    COUNT(e.employee_id) AS number_of_employees,\n" +
          "    AVG(e.salary) AS average_salary\n" +
          "FROM\n" +
          "    employees e\n" +
          "JOIN\n" +
          "    departments d ON e.department_id = d.department_id\n" +
          "WHERE\n" +
          "    e.hire_date > '2020-01-01'\n" +
          "GROUP BY\n" +
          "    d.department_name\n" +
          "HAVING\n" +
          "    COUNT(e.employee_id) > 5\n" +
          "ORDER BY\n" +
          "    average_salary DESC;\n" +
          "```\n" +
          "- **Views**: A virtual table based on the result of a SELECT query. Used to simplify complex queries and enforce security.\n" +
          "- **Triggers**: A stored procedure that automatically runs when a specific event (like INSERT, UPDATE) occurs on a table.\n" +
          "- **Stored Procedures**: A pre-compiled set of one or more SQL statements that can be saved and reused.",
        diagrams: [],
      },
    ],
  },
  "Transaction Management & Concurrency": {
    id: "transaction-management-concurrency",
    topics: [
      {
        id: "acid-properties",
        title: "Transactions and ACID Properties",
        content:
          "A **Transaction** is a single logical unit of work, which may consist of multiple operations. A classic example is a bank transfer: debiting one account and crediting another.\n\n" +
          "**ACID Properties** guarantee that transactions are processed reliably:\n" +
          '- **Atomicity (A)**: "All or nothing." The entire transaction is treated as a single, indivisible unit. It either completes fully, or it doesn\'t happen at all (it is rolled back).\n' +
          "- **Consistency (C)**: A transaction must bring the database from one valid state to another. It must preserve all integrity constraints.\n" +
          "- **Isolation (I)**: Transactions are executed independently of one another. The intermediate state of one transaction is hidden from others until it is committed. This prevents concurrency issues.\n" +
          "- **Durability (D)**: Once a transaction is successfully committed, its changes are permanent and will survive system failures (like a power outage or crash).",
        diagrams: [],
      },
      {
        id: "serializability-concurrency",
        title: "Serializability & Concurrency Control",
        content:
          "**Concurrency Control** is needed to manage simultaneous operations without them interfering with each other. The goal is **Serializability** - ensuring that the outcome of concurrent transactions is the same as if they were executed one after another in some serial order.\n\n" +
          "- **Schedule**: The chronological order of operations from concurrent transactions.\n" +
          "- **Conflict Serializability**: A schedule is conflict serializable if it can be transformed into a serial schedule by swapping non-conflicting operations. This can be tested using a **precedence graph**.\n" +
          "- **Concurrency Control Protocols**:\n" +
          "  - **Lock-Based Protocols**: Transactions acquire locks on data items before accessing them (e.g., Shared/Read lock, Exclusive/Write lock). Two-Phase Locking (2PL) is a common protocol.\n" +
          "  - **Timestamp-Based Protocols**: Each transaction is assigned a unique timestamp, and operations are ordered based on these timestamps.\n" +
          "  - **Validation-Based (Optimistic) Protocols**: Transactions are allowed to proceed without locking. Before committing, a validation check is performed to see if there are any conflicts.",
        diagrams: [],
      },
    ],
  },
  "Recovery, Backup & Storage": {
    id: "recovery-backup-storage",
    topics: [
      {
        id: "recovery-mechanisms",
        title: "Recovery Mechanisms (Log-based, Checkpointing)",
        content:
          "**Recovery Management** is the process of restoring the database to a consistent state after a failure.\n\n" +
          "- **Log-Based Recovery**: The DBMS maintains a **log file** containing records of all modifying operations (e.g., START, UPDATE, COMMIT, ABORT). If a failure occurs, the log is used to:\n" +
          "  - **UNDO**: Roll back the changes of uncommitted transactions.\n" +
          "  - **REDO**: Re-apply the changes of committed transactions to ensure their durability.\n" +
          "- **Checkpointing**: A process that periodically saves a consistent state of the database to disk. This shortens recovery time because the system only needs to process the part of the log that comes after the most recent checkpoint.\n" +
          "- **ARIES (Algorithm for Recovery and Isolation Exploiting Semantics)**: A popular and robust algorithm used in many industrial-strength DBMS for recovery.",
        diagrams: [],
      },
      {
        id: "indexing-hashing",
        title: "File Organization, Indexing (B+ Tree), Hashing",
        content:
          "**File Organization** refers to how records are physically stored on disk.\n\n" +
          "**Indexing** is a data structure technique used to quickly locate and access data in a database. It's like the index in the back of a book. Without an index, the DBMS would have to scan the entire table (a \"full table scan\") to find a specific row.\n\n" +
          "- **B+ Tree**: The most widely used index structure in databases. It is a balanced tree that keeps data sorted and allows for efficient search, insertion, deletion, and sequential access. Its structure is optimized for disk-based storage, minimizing the number of disk reads required.\n" +
          "- **Hashing**: A method where a hash function is applied to a key to compute the address of the record directly. It's very fast for equality lookups but not efficient for range queries.",
        diagrams: [
          {
            title: "B+ Tree Index Structure",
            link: "https://www.scaler.com/topics/media/b-plus-tree-in-dbms.webp",
          },
        ],
      },
    ],
  },
  "Query Processing & Optimization": {
    id: "query-processing-optimization",
    topics: [
      {
        id: "query-optimization",
        title: "Query Processing & Optimization",
        content:
          "This is the process a DBMS follows to execute a SQL query.\n\n" +
          "1. **Parsing & Validation**: The DBMS checks the query for correct syntax and verifies that the referenced tables and columns exist.\n" +
          "2. **Optimization**: This is the crucial step. A single SQL query can often be executed in many different ways (e.g., which table to read first in a join, whether to use an index). The **Query Optimizer**'s job is to find the most efficient execution plan.\n" +
          "3. **Execution**: The DBMS executes the chosen plan using the execution engine.\n\n" +
          '- **Cost-Based Optimizer**: The most common type of optimizer. It generates multiple possible execution plans, estimates the "cost" (CPU, I/O, memory) of each plan based on internal statistics, and selects the plan with the lowest estimated cost.',
        diagrams: [],
      },
    ],
  },
  "Advanced Database Systems": {
    id: "advanced-database-systems",
    topics: [
      {
        id: "parallel-distributed-dbms",
        title: "Parallel and Distributed DBMS",
        content:
          "- **Parallel DBMS**: Utilizes multiple CPUs and disks on a single machine or a tightly coupled cluster to execute database operations in parallel, improving performance for complex queries.\n" +
          "- **Distributed DBMS**: Consists of multiple, interconnected databases that are spread across different physical locations. The system manages the distributed data as if it were all stored in one single location. This provides scalability and high availability.",
        diagrams: [],
      },
      {
        id: "olap-vs-oltp",
        title: "OLAP vs OLTP, Data Warehousing",
        content:
          "- **OLTP (Online Transaction Processing)**: Systems that handle a large number of short, fast transactions (e.g., INSERT, UPDATE, DELETE). These are the operational systems that run a business day-to-day. **Focus**: Fast writes, data integrity. **Example**: An ATM system, an e-commerce order entry system.\n" +
          "- **OLAP (Online Analytical Processing)**: Systems designed for complex analytical queries on large datasets. These systems are used for business intelligence, reporting, and data mining. **Focus**: Fast reads, complex aggregations. **Example**: A system analyzing sales trends over the past five years.\n\n" +
          "- **Data Warehousing**: The practice of creating a central repository of integrated data from multiple sources. This data warehouse is specifically designed for OLAP and analytical queries, separating the analytical workload from the operational OLTP systems.",
        diagrams: [],
      },
    ],
  },
  "Security, Integrity & NoSQL": {
    id: "security-integrity-nosql",
    topics: [
      {
        id: "database-security-integrity",
        title: "Security, Integrity & SQL Injection",
        content:
          "- **Authorization**: Controlling access privileges using commands like `GRANT` and `REVOKE`. **Role-Based Access Control (RBAC)** is a common model where permissions are assigned to roles, and roles are assigned to users.\n" +
          "- **Authentication**: Verifying the identity of a user (e.g., with a username and password).\n" +
          "- **Integrity Constraints**: Rules that ensure data accuracy and consistency.\n" +
          "  * `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `NOT NULL`, `CHECK`.\n" +
          '- **SQL Injection**: A major security vulnerability where an attacker can "inject" malicious SQL code into an application\'s input fields to manipulate the backend database. **Mitigation**: The best defense is to use **prepared statements (parameterized queries)**, which treat user input as data, not as executable code.',
        diagrams: [],
      },
      {
        id: "nosql-models-cap-theorem",
        title: "NoSQL Models & CAP Theorem",
        content:
          '**NoSQL** ("Not Only SQL") databases provide flexible schemas and are designed for massive scalability.\n\n' +
          "**Four Main Models**:\n" +
          "- **Document Stores**: Data is stored in JSON-like documents. Flexible and intuitive. **Example**: MongoDB.\n" +
          "- **Key-Value Stores**: The simplest model; data is stored as key-value pairs. Extremely fast. **Example**: Redis.\n" +
          "- **Column-Family Stores**: Data is stored in columns instead of rows, optimized for wide datasets and fast aggregations. **Example**: Cassandra.\n" +
          "- **Graph Databases**: Data is stored as nodes and edges, optimized for querying relationships. **Example**: Neo4j.\n\n" +
          "**CAP Theorem**:\n" +
          "A fundamental theorem for distributed systems, stating that it's impossible for a system to simultaneously provide more than two of these three guarantees:\n" +
          "- **Consistency (C)**: Every read receives the most recent write.\n" +
          "- **Availability (A)**: Every request gets a response, even if some nodes are down.\n" +
          "- **Partition Tolerance (P)**: The system continues to work despite network partitions.\n\n" +
          "Since network partitions are a fact of life, a distributed system must choose between being CP (Consistent and Partition-Tolerant) or AP (Available and Partition-Tolerant).",
        diagrams: [
          {
            title: "CAP Theorem Triangle",
            link: "https://miro.medium.com/v2/resize:fit:1400/1*RR_3TC2SPSq_3T52p_fP4w.png",
          },
        ],
      },
    ],
  },
  "Interview-Focused Essentials": {
    id: "interview-focused-essentials",
    topics: [
      {
        id: "interview-core-concepts",
        title: "Interview Core Concepts",
        content:
          "- **DBMS vs. File Systems**: DBMS offers data consistency, concurrency, integrity, and security, which are difficult to achieve with raw files.\n" +
          "- **ACID Properties**: Be ready to explain each property with a real-world example like a bank transfer or an airline booking.\n" +
          "- **Normalization**: Explain its purpose (reduce redundancy, prevent anomalies) and be able to normalize a simple table up to 3NF.\n" +
          "- **Indexing**: Explain *how* an index (like a B+ Tree) speeds up queries. Understand the trade-off: indexes speed up reads but slow down writes.\n" +
          "- **ER Modeling**: Be able to draw a simple ER diagram for a given scenario (e.g., students, courses, professors).\n" +
          "- **Concurrency Issues**: Understand dirty reads, lost updates, and phantom reads. Explain how locking helps prevent them.\n" +
          "- **SQL vs. NoSQL**: There's no \"better,\" only trade-offs. Use SQL for structured data needing strong consistency. Use NoSQL for unstructured data needing high scalability and flexibility.",
        diagrams: [],
      },
      {
        id: "interview-deep-dives",
        title: "Topics for a Deep Dive",
        content:
          "- **Explaining Normal Forms in Practice**: Discuss when you might *denormalize* a database. For instance, in a reporting system, you might add a redundant `product_name` column to a `sales` table to avoid joining with the `products` table on every query, thus speeding up analytics.\n" +
          "- **Deep Dive on ACID with Scenarios**: For **Isolation**, explain different isolation levels (e.g., Read Committed, Serializable) and the trade-offs between performance and consistency.\n" +
          "- **SQL vs. NoSQL Trade-offs**: Discuss the CAP Theorem. Relational databases typically prioritize Consistency (CP), while many NoSQL databases prioritize Availability (AP).\n" +
          '- **Query Optimization**: Explain what an "execution plan" is and how a cost-based optimizer uses statistics to choose the cheapest plan. Mention the importance of `EXPLAIN` or similar commands to analyze query performance.\n' +
          "- **Handling Deadlocks**: A deadlock occurs when two transactions are waiting for each other to release locks. Explain that DBMSs detect this (e.g., using a wait-for graph) and resolve it by aborting one of the transactions.\n" +
          "- **Architecture-Level Thinking**:\n" +
          "  - **Sharding**: Splitting a large database horizontally across multiple servers.\n" +
          "  - **Replication**: Creating copies of a database to improve read performance and provide high availability (failover).",
        diagrams: [],
      },
    ],
  },
};