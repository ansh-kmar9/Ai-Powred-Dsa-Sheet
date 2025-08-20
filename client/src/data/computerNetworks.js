export const computerNetworksData = {
  "Introduction to Computer Networks": {
    id: "intro-cn",
    topics: [
      {
        id: "what-is-network",
        title: "What is a Network?",
        content: `
          **Definition**: A computer network is a collection of interconnected devices that can communicate and share resources with each other.

          **Key Components**:
          - **Nodes**: Devices like computers, servers, printers, routers
          - **Links**: Physical or wireless connections between nodes
          - **Protocols**: Rules governing communication between devices
          - **Data**: Information being transmitted across the network

          **Purpose**: Networks enable resource sharing, communication, data exchange, and collaborative work across different locations.
        `,
        diagrams: [
          {
            title: "Basic Network Structure",
            link: "https://study-aids.co.uk/dissertation-blog/wp-content/uploads/2017/02/Network_Topology.png",
          },
        ],
      },
      {
        id: "types-of-networks",
        title: "Types of Networks",
        content: `
          **Personal Area Network (PAN)**:
          - Range: Within 10 meters
          - Examples: Bluetooth connections, USB connections
          - Use case: Connecting personal devices

          **Local Area Network (LAN)**:
          - Range: Within a building or campus
          - Examples: Office networks, home Wi-Fi
          - High speed, low latency

          **Metropolitan Area Network (MAN)**:
          - Range: Across a city or metropolitan area
          - Examples: Cable TV networks, city-wide Wi-Fi
          - Connects multiple LANs

          **Wide Area Network (WAN)**:
          - Range: Across countries or continents
          - Examples: Internet, corporate networks
          - Lower speed, higher latency than LAN
        `,
        diagrams: [
          {
            title: "Network Types by Coverage",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Network+Types+Coverage",
          },
        ],
      },
      {
        id: "network-topologies",
        title: "Network Topologies",
        content: `
          **Bus Topology**:
          - All devices connected to a single backbone cable
          - Simple and cost-effective
          - Single point of failure

          **Star Topology**:
          - All devices connected to a central hub/switch
          - Easy to troubleshoot and expand
          - Hub failure affects entire network

          **Ring Topology**:
          - Devices connected in a circular chain
          - Data travels in one direction
          - Failure of one device can affect the entire network

          **Mesh Topology**:
          - Every device connected to every other device
          - Highly reliable and fault-tolerant
          - Expensive and complex to implement

          **Hybrid Topology**:
          - Combination of two or more topologies
          - Flexible and scalable
          - Complex to design and maintain
        `,
        diagrams: [
          {
            title: "Network Topologies Diagram",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Network+Topologies",
          },
        ],
      },
    ],
  },
  "OSI Model": {
    id: "osi-model",
    topics: [
      {
        id: "osi-layers",
        title: "The Seven Layers of OSI Model",
        content: `
          **Layer 7 - Application Layer**:
          - User interface and network services
          - Protocols: HTTP, HTTPS, FTP, SMTP, DNS
          - Examples: Web browsers, email clients

          **Layer 6 - Presentation Layer**:
          - Data encryption, compression, and translation
          - Character encoding (ASCII, Unicode)
          - SSL/TLS encryption

          **Layer 5 - Session Layer**:
          - Establishes, manages, and terminates sessions
          - Session checkpoints and recovery
          - Examples: NetBIOS, RPC

          **Layer 4 - Transport Layer**:
          - End-to-end communication and reliability
          - Protocols: TCP, UDP
          - Port numbers and flow control

          **Layer 3 - Network Layer**:
          - Routing and logical addressing
          - IP addresses and packet forwarding
          - Protocols: IP, ICMP, OSPF

          **Layer 2 - Data Link Layer**:
          - Node-to-node delivery and error detection
          - MAC addresses and frame formatting
          - Examples: Ethernet, Wi-Fi

          **Layer 1 - Physical Layer**:
          - Physical transmission of raw bits
          - Cables, connectors, and electrical signals
          - Examples: Ethernet cables, fiber optics
        `,
        diagrams: [
          {
            title: "OSI Model Stack",
            link: "https://via.placeholder.com/600x500/1a1a1a/ffffff?text=OSI+Model+7+Layers",
          },
        ],
      },
      {
        id: "tcp-vs-udp",
        title: "TCP vs UDP",
        content: `
          **Transmission Control Protocol (TCP)**:
          - **Connection-oriented**: Establishes connection before data transfer
          - **Reliable**: Guarantees delivery and order of packets
          - **Flow control**: Manages data transmission rate
          - **Error detection**: Detects and retransmits lost packets
          - **Use cases**: Web browsing, email, file transfer

          **User Datagram Protocol (UDP)**:
          - **Connectionless**: No connection establishment required
          - **Unreliable**: No guarantee of delivery or order
          - **Faster**: Lower overhead than TCP
          - **No flow control**: Sends data at maximum rate
          - **Use cases**: Live streaming, online gaming, DNS queries

          **Key Differences**:
          - Speed: UDP is faster, TCP is more reliable
          - Overhead: TCP has more overhead due to reliability features
          - Applications: Choose based on reliability vs speed requirements
        `,
        diagrams: [
          {
            title: "TCP vs UDP Comparison",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=TCP+vs+UDP",
          },
        ],
      },
    ],
  },
  "Network Protocols": {
    id: "network-protocols",
    topics: [
      {
        id: "http-https",
        title: "HTTP and HTTPS",
        content: `
          **Hypertext Transfer Protocol (HTTP)**:
          - **Port**: 80
          - **Purpose**: Transfer web pages and resources
          - **Stateless**: Each request is independent
          - **Methods**: GET, POST, PUT, DELETE, PATCH
          - **Not secure**: Data transmitted in plain text

          **HTTP Secure (HTTPS)**:
          - **Port**: 443
          - **Security**: Uses SSL/TLS encryption
          - **Authentication**: Verifies server identity
          - **Data integrity**: Prevents data tampering
          - **Required for**: Sensitive data, login pages, e-commerce

          **HTTP Status Codes**:
          - **2xx Success**: 200 OK, 201 Created
          - **3xx Redirection**: 301 Moved Permanently, 302 Found
          - **4xx Client Error**: 400 Bad Request, 404 Not Found
          - **5xx Server Error**: 500 Internal Server Error, 503 Service Unavailable
        `,
        diagrams: [
          {
            title: "HTTP Request-Response Cycle",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=HTTP+Request-Response",
          },
        ],
      },
      {
        id: "dns",
        title: "Domain Name System (DNS)",
        content: `
          **Purpose**: Translates human-readable domain names to IP addresses

          **DNS Hierarchy**:
          - **Root servers**: Top level of DNS hierarchy
          - **TLD servers**: .com, .org, .net domains
          - **Authoritative servers**: Specific domain information
          - **Local DNS servers**: ISP or organization servers

          **DNS Record Types**:
          - **A Record**: Maps domain to IPv4 address
          - **AAAA Record**: Maps domain to IPv6 address
          - **CNAME**: Canonical name (alias) record
          - **MX Record**: Mail exchange servers
          - **NS Record**: Name server records

          **DNS Resolution Process**:
          1. User enters domain name in browser
          2. Local DNS cache checked first
          3. Query sent to local DNS server
          4. Recursive queries up the DNS hierarchy
          5. IP address returned to client
        `,
        diagrams: [
          {
            title: "DNS Resolution Process",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=DNS+Resolution+Process",
          },
        ],
      },
    ],
  },
  "Network Security": {
    id: "network-security",
    topics: [
      {
        id: "firewalls",
        title: "Firewalls and Security",
        content: `
          **Firewall Types**:
          - **Packet filtering**: Examines individual packets
          - **Stateful inspection**: Tracks connection states
          - **Application gateway**: Operates at application layer
          - **Next-generation**: Advanced threat detection

          **Security Threats**:
          - **Malware**: Viruses, worms, trojans
          - **DDoS attacks**: Distributed denial of service
          - **Man-in-the-middle**: Intercepting communications
          - **Phishing**: Social engineering attacks

          **Security Measures**:
          - **Encryption**: Protect data in transit and at rest
          - **Authentication**: Verify user identity
          - **Access control**: Limit resource access
          - **Monitoring**: Detect suspicious activities
        `,
        diagrams: [
          {
            title: "Network Security Architecture",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Network+Security+Architecture",
          },
        ],
      },
    ],
  },
};
