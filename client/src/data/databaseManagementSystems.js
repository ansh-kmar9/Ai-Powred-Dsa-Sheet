export const dbmsData = {
  "Introduction to DBMS": {
    id: "intro-dbms",
    topics: [
      {
        id: "what-is-dbms",
        title: "What is a Database Management System?",
        content: `
          **Definition**: A Database Management System (DBMS) is software that provides an interface to interact with databases, managing data storage, retrieval, and organization.

          **Key Components**:
          - **Database Engine**: Core service for storing and retrieving data
          - **Database Schema**: Structure that defines data organization
          - **Query Processor**: Interprets and executes database queries
          - **Transaction Manager**: Ensures data consistency and integrity
          - **Storage Manager**: Manages physical storage of data

          **Purpose**: DBMS provides efficient, reliable, convenient, and safe multi-user storage and access to massive amounts of persistent data.

          **Advantages**:
          - **Data Independence**: Applications independent of data storage details
          - **Efficient Data Access**: Optimized data retrieval and storage
          - **Data Integrity**: Maintains accuracy and consistency
          - **Concurrent Access**: Multiple users can access data simultaneously
          - **Security**: Access control and data protection
        `,
        diagrams: [
          {
            title: "DBMS Architecture",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=DBMS+Architecture",
          },
        ],
      },
      {
        id: "types-of-databases",
        title: "Types of Databases",
        content: `
          **Relational Databases (RDBMS)**:
          - **Structure**: Tables with rows and columns
          - **Relationships**: Foreign keys link tables
          - **Examples**: MySQL, PostgreSQL, Oracle, SQL Server
          - **ACID Properties**: Atomicity, Consistency, Isolation, Durability

          **NoSQL Databases**:
          - **Document Stores**: MongoDB, CouchDB
          - **Key-Value Stores**: Redis, DynamoDB
          - **Column-Family**: Cassandra, HBase
          - **Graph Databases**: Neo4j, Amazon Neptune

          **In-Memory Databases**:
          - **Purpose**: High-speed data processing
          - **Examples**: Redis, SAP HANA
          - **Use Cases**: Caching, real-time analytics

          **Distributed Databases**:
          - **Distribution**: Data spread across multiple locations
          - **Advantages**: Scalability, fault tolerance
          - **Challenges**: Consistency, network latency

          **Cloud Databases**:
          - **Database as a Service (DBaaS)**
          - **Examples**: Amazon RDS, Google Cloud SQL
          - **Benefits**: Managed infrastructure, automatic scaling
        `,
        diagrams: [
          {
            title: "Database Types Comparison",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Database+Types",
          },
        ],
      },
    ],
  },
  "Database Design": {
    id: "database-design",
    topics: [
      {
        id: "er-model",
        title: "Entity-Relationship Model",
        content: `
          **Entity-Relationship (ER) Model**: Conceptual design tool for database design

          **Components**:

          **Entities**:
          - **Definition**: Real-world objects or concepts
          - **Examples**: Student, Course, Department
          - **Types**: Strong entities (independent), Weak entities (dependent)

          **Attributes**:
          - **Simple**: Cannot be divided further (Name, Age)
          - **Composite**: Can be divided (Address = Street + City + ZIP)
          - **Derived**: Calculated from other attributes (Age from Birth Date)
          - **Key Attributes**: Uniquely identify entities

          **Relationships**:
          - **Definition**: Associations between entities
          - **Cardinality**: One-to-One, One-to-Many, Many-to-Many
          - **Participation**: Total (mandatory) or Partial (optional)

          **ER Diagram Symbols**:
          - **Rectangles**: Entities
          - **Ovals**: Attributes
          - **Diamonds**: Relationships
          - **Lines**: Connect components
        `,
        diagrams: [
          {
            title: "ER Diagram Example",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=ER+Diagram",
          },
        ],
      },
      {
        id: "normalization",
        title: "Database Normalization",
        content: `
          **Purpose**: Organize data to reduce redundancy and improve data integrity

          **Normal Forms**:

          **First Normal Form (1NF)**:
          - **Rule**: Each cell contains only atomic (indivisible) values
          - **Eliminates**: Repeating groups and arrays
          - **Example**: Separate multiple phone numbers into different rows

          **Second Normal Form (2NF)**:
          - **Prerequisites**: Must be in 1NF
          - **Rule**: No partial dependencies on composite primary key
          - **Eliminates**: Attributes dependent on part of primary key

          **Third Normal Form (3NF)**:
          - **Prerequisites**: Must be in 2NF
          - **Rule**: No transitive dependencies
          - **Eliminates**: Attributes dependent on non-key attributes

          **Boyce-Codd Normal Form (BCNF)**:
          - **Prerequisites**: Must be in 3NF
          - **Rule**: Every determinant must be a candidate key
          - **Stronger version** of 3NF

          **Benefits**:
          - **Reduced Redundancy**: Less duplicate data
          - **Data Integrity**: Fewer update anomalies
          - **Storage Efficiency**: Optimized space usage
        `,
        diagrams: [
          {
            title: "Normalization Process",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Normalization",
          },
        ],
      },
    ],
  },
  "SQL Fundamentals": {
    id: "sql-fundamentals",
    topics: [
      {
        id: "sql-basics",
        title: "SQL Basics and DDL",
        content: `
          **Structured Query Language (SQL)**: Standard language for relational database management

          **SQL Categories**:

          **Data Definition Language (DDL)**:
          - **CREATE**: Create database objects
          - **ALTER**: Modify existing structures
          - **DROP**: Delete database objects
          - **TRUNCATE**: Remove all data from table

          **Basic Syntax Examples**:

          **CREATE TABLE**:
          \`\`\`sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100) UNIQUE,
    EnrollmentDate DATE
);
          \`\`\`

          **ALTER TABLE**:
          \`\`\`sql
ALTER TABLE Students 
ADD COLUMN Phone VARCHAR(15);
          \`\`\`

          **Data Types**:
          - **Numeric**: INT, DECIMAL, FLOAT
          - **String**: VARCHAR, CHAR, TEXT
          - **Date/Time**: DATE, TIME, DATETIME
          - **Boolean**: BOOLEAN, BIT

          **Constraints**:
          - **PRIMARY KEY**: Unique identifier
          - **FOREIGN KEY**: References another table
          - **UNIQUE**: No duplicate values
          - **NOT NULL**: Value required
          - **CHECK**: Value validation
        `,
        diagrams: [
          {
            title: "SQL DDL Commands",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=SQL+DDL",
          },
        ],
      },
      {
        id: "sql-dml",
        title: "SQL DML and Queries",
        content: `
          **Data Manipulation Language (DML)**: Commands for data modification and retrieval

          **Core DML Commands**:

          **SELECT**: Retrieve data
          \`\`\`sql
SELECT column1, column2 FROM table_name 
WHERE condition 
ORDER BY column1;
          \`\`\`

          **INSERT**: Add new records
          \`\`\`sql
INSERT INTO Students (FirstName, LastName, Email) 
VALUES ('John', 'Doe', 'john.doe@email.com');
          \`\`\`

          **UPDATE**: Modify existing records
          \`\`\`sql
UPDATE Students 
SET Email = 'new.email@domain.com' 
WHERE StudentID = 1;
          \`\`\`

          **DELETE**: Remove records
          \`\`\`sql
DELETE FROM Students 
WHERE StudentID = 1;
          \`\`\`

          **Advanced Query Features**:

          **JOINs**:
          - **INNER JOIN**: Matching records from both tables
          - **LEFT JOIN**: All records from left table
          - **RIGHT JOIN**: All records from right table
          - **FULL OUTER JOIN**: All records from both tables

          **Aggregate Functions**:
          - **COUNT()**: Count rows
          - **SUM()**: Calculate total
          - **AVG()**: Calculate average
          - **MAX()/MIN()**: Find maximum/minimum

          **GROUP BY and HAVING**:
          \`\`\`sql
SELECT Department, COUNT(*) 
FROM Students 
GROUP BY Department 
HAVING COUNT(*) > 5;
          \`\`\`
        `,
        diagrams: [
          {
            title: "SQL JOIN Types",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=SQL+JOINs",
          },
        ],
      },
    ],
  },
  "Transactions and Concurrency": {
    id: "transactions-concurrency",
    topics: [
      {
        id: "acid-properties",
        title: "ACID Properties",
        content: `
          **ACID Properties**: Fundamental principles ensuring reliable database transactions

          **Atomicity**:
          - **Definition**: Transaction is all-or-nothing
          - **Implementation**: Either all operations succeed or all fail
          - **Example**: Bank transfer - both debit and credit must succeed
          - **Rollback**: Undo all changes if any operation fails

          **Consistency**:
          - **Definition**: Database remains in valid state before and after transaction
          - **Rules**: All integrity constraints must be satisfied
          - **Example**: Account balance cannot be negative
          - **Validation**: Checks performed before committing changes

          **Isolation**:
          - **Definition**: Concurrent transactions don't interfere with each other
          - **Levels**: Read Uncommitted, Read Committed, Repeatable Read, Serializable
          - **Problems**: Dirty reads, non-repeatable reads, phantom reads
          - **Locking**: Mechanisms to ensure isolation

          **Durability**:
          - **Definition**: Committed changes persist even after system failure
          - **Implementation**: Write-ahead logging, checkpoints
          - **Recovery**: Ability to restore committed transactions
          - **Storage**: Changes written to non-volatile storage

          **Transaction States**:
          - **Active**: Transaction is executing
          - **Partially Committed**: Final statement executed
          - **Committed**: Transaction completed successfully
          - **Failed**: Transaction cannot proceed
          - **Aborted**: Transaction rolled back
        `,
        diagrams: [
          {
            title: "ACID Properties Visualization",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=ACID+Properties",
          },
        ],
      },
      {
        id: "concurrency-control",
        title: "Concurrency Control",
        content: `
          **Purpose**: Manage simultaneous access to database by multiple transactions

          **Concurrency Problems**:

          **Lost Update Problem**:
          - **Scenario**: Two transactions update same data simultaneously
          - **Result**: One update overwrites another
          - **Solution**: Locking mechanisms

          **Dirty Read Problem**:
          - **Scenario**: Transaction reads uncommitted data from another transaction
          - **Result**: Reading invalid or rolled-back data
          - **Solution**: Read committed isolation level

          **Non-Repeatable Read**:
          - **Scenario**: Same query returns different results within transaction
          - **Cause**: Another transaction modifies data between reads
          - **Solution**: Repeatable read isolation level

          **Phantom Read**:
          - **Scenario**: New rows appear between identical queries
          - **Cause**: Another transaction inserts matching records
          - **Solution**: Serializable isolation level

          **Locking Mechanisms**:

          **Shared Lock (S-Lock)**:
          - **Purpose**: Multiple transactions can read simultaneously
          - **Restriction**: No writing allowed while shared lock exists

          **Exclusive Lock (X-Lock)**:
          - **Purpose**: Only one transaction can write
          - **Restriction**: No other reads or writes allowed

          **Two-Phase Locking (2PL)**:
          - **Growing Phase**: Acquire locks, no releases
          - **Shrinking Phase**: Release locks, no acquisitions
          - **Ensures**: Serializability of transactions
        `,
        diagrams: [
          {
            title: "Concurrency Control Mechanisms",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Concurrency+Control",
          },
        ],
      },
    ],
  },
  "Database Performance": {
    id: "database-performance",
    topics: [
      {
        id: "indexing",
        title: "Database Indexing",
        content: `
          **Purpose**: Improve query performance by creating fast access paths to data

          **Index Types**:

          **Primary Index**:
          - **Based on**: Primary key
          - **Uniqueness**: Guaranteed unique values
          - **Structure**: Usually B+ tree
          - **Automatic**: Created with primary key

          **Secondary Index**:
          - **Based on**: Non-key attributes
          - **Uniqueness**: May contain duplicates
          - **Purpose**: Speed up searches on non-key columns
          - **Example**: Index on LastName column

          **Clustered Index**:
          - **Data Storage**: Physical order matches index order
          - **Limitation**: One per table (data can be physically ordered only one way)
          - **Performance**: Very fast for range queries

          **Non-Clustered Index**:
          - **Data Storage**: Logical order, separate from physical storage
          - **Multiple**: Can have many per table
          - **Structure**: Points to actual data rows

          **Index Structures**:

          **B+ Tree**:
          - **Characteristics**: Balanced tree, all leaves at same level
          - **Advantages**: Consistent performance, good for range queries
          - **Usage**: Most common index type

          **Hash Index**:
          - **Characteristics**: Fast equality searches
          - **Limitation**: Not suitable for range queries
          - **Usage**: Memory-based storage engines

          **Performance Considerations**:
          - **Query Speed**: Faster SELECT operations
          - **Storage Overhead**: Additional space required
          - **Update Cost**: Slower INSERT, UPDATE, DELETE operations
          - **Maintenance**: Index updates with data changes
        `,
        diagrams: [
          {
            title: "Index Types and Structures",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Database+Indexing",
          },
        ],
      },
    ],
  },
};
