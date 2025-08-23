export const computerNetworksData = {
  "Fundamentals": {
    id: "fundamentals",
    topics: [
      {
        id: "intro-networks-terminology",
        title: "Introduction to Networks & Terminology",
        content: "**Definition**: A computer network is a system of interconnected computers and peripheral devices that communicate with each other to share data and resources.\n\n**Core Purpose**:\n- **Resource Sharing**: Sharing hardware (printers, scanners) and software (applications, files).\n- **Communication**: Enabling instant communication through email, video conferencing, etc.\n- **Data Access**: Providing remote access to information and data storage.\n- **Distributed Computing**: Distributing tasks among multiple computers on the network.\n\n**Key Terminology**:\n- **Node/Host**: Any device on a network (e.g., computer, server, printer, phone).\n- **Link/Channel**: The physical or wireless medium connecting nodes (e.g., Ethernet cable, radio waves).\n- **Protocol**: A set of rules that governs data communication between devices.\n- **Bandwidth**: The maximum rate of data transfer across a given path, measured in bits per second (bps).\n- **Throughput**: The actual rate of successful data transfer, which is often lower than bandwidth.\n- **Latency (Delay)**: The time it takes for a data packet to travel from its source to its destination.\n- **Jitter**: The variation in latency over time.\n- **Packet**: A small segment of a larger message; data is broken into packets for transmission.",
        diagrams: [
          {
            title: "Basic Network Components",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Network+Components",
          },
        ],
      },
      {
        id: "network-types-topologies",
        title: "Network Types & Topologies",
        content: "**Network Types (by geographical scale)**:\n- **PAN (Personal Area Network)**: Smallest network, for connecting personal devices (e.g., Bluetooth). Range is typically within 10 meters.\n- **LAN (Local Area Network)**: Covers a limited area like a single building or campus. Characterized by high speed and low latency. (e.g., home Wi-Fi, office Ethernet network).\n- **MAN (Metropolitan Area Network)**: Spans a city or a large campus. Connects multiple LANs together. (e.g., a city-wide public Wi-Fi network).\n- **WAN (Wide Area Network)**: Covers a large geographical area, often across countries or continents. The Internet is the largest WAN. Connects LANs and MANs.\n\n**Network Topologies (The physical or logical layout of a network)**:\n- **Bus**: All nodes are connected to a single central cable, called the backbone. **Pros**: Simple, cheap. **Cons**: The entire network fails if the backbone fails.\n- **Star**: All nodes are connected to a central device (hub or switch). **Pros**: Easy to manage, failure of one node doesn't affect others. **Cons**: Central device is a single point of failure.\n- **Ring**: Nodes are connected in a closed loop. Data travels in one direction. **Pros**: Performs well under heavy load. **Cons**: Difficult to add/remove nodes, one node failure can break the ring.\n- **Mesh**: Every node is connected to every other node (full mesh) or some nodes are connected to multiple others (partial mesh). **Pros**: Extremely fault-tolerant and reliable. **Cons**: Very expensive and complex to implement.\n- **Hybrid**: A combination of two or more different topologies. **Pros**: Flexible and scalable. **Cons**: Complex design and maintenance.",
        diagrams: [
          {
            title: "Network Topologies Visualized",
            link: "https://media.geeksforgeeks.org/wp-content/uploads/20230214120812/Network-Topologies.png",
          },
        ],
      },
      {
        id: "osi-tcp-ip-models",
        title: "OSI & TCP/IP Models",
        content: "Network models provide a framework for standardizing network communication.\n\n**OSI (Open Systems Interconnection) Model**: A 7-layer conceptual model.\n- **7. Application**: Network services for applications (HTTP, FTP).\n- **6. Presentation**: Data translation, encryption, compression (SSL/TLS).\n- **5. Session**: Manages sessions between applications (APIs, Sockets).\n- **4. Transport**: End-to-end connection and reliability (TCP, UDP).\n- **3. Network**: Path determination and logical addressing (IP, Routers).\n- **2. Data Link**: Physical addressing and framing (MAC, Switches).\n- **1. Physical**: Transmits raw bits over a medium (Cables, Hubs).\n*Mnemonic: **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way*\n\n**TCP/IP Model**: A 4-layer model that is more practical and widely used.\n- **4. Application**: Combines OSI's Application, Presentation, and Session layers.\n- **3. Transport**: Corresponds to the OSI Transport layer (TCP, UDP).\n- **2. Internet**: Corresponds to the OSI Network layer (IP, ICMP).\n- **1. Network Access (or Link)**: Combines OSI's Data Link and Physical layers.\n\n**Comparison**:\n- **OSI** is a generic, protocol-independent standard; it's a theoretical model.\n- **TCP/IP** is a practical model upon which the Internet is based. It is less prescriptive about the layers below Transport.",
        diagrams: [
          {
            title: "OSI vs TCP/IP Model Comparison",
            link: "https://www.comptia.org/content/images/default-source/blogs/00643-osi-model-7-layers-v2.png",
          },
        ],
      },
      {
        id: "network-devices-media",
        title: "Network Devices & Transmission Media",
        content: "**Common Network Devices**:\n- **NIC (Network Interface Card)**: Hardware that connects a computer to a network.\n- **Hub**: A basic device that connects multiple devices in a LAN. It broadcasts all incoming data to all connected ports (Layer 1).\n- **Repeater**: Regenerates and retransmits signals to extend the distance they can travel (Layer 1).\n- **Switch**: A smarter device than a hub. It forwards data only to the specific destination port based on MAC addresses (Layer 2).\n- **Router**: Connects different networks together. It forwards data packets between networks based on IP addresses (Layer 3).\n- **Bridge**: Connects two separate LAN segments into one larger LAN (Layer 2).\n- **Modem (Modulator-Demodulator)**: Converts digital signals from a computer to analog signals for transmission over phone lines, and vice versa.\n\n**Transmission Media**:\n- **Guided Media (Wired)**:\n  - **Twisted-Pair Cable**: Two insulated copper wires twisted together (e.g., Ethernet cables like Cat5e, Cat6).\n  - **Coaxial Cable**: A central copper core with layers of insulation and shielding (e.g., Cable TV).\n  - **Fiber-Optic Cable**: Transmits data as pulses of light through thin strands of glass or plastic. Offers the highest bandwidth and is immune to electromagnetic interference.\n- **Unguided Media (Wireless)**:\n  - **Radio Waves**: Used for Wi-Fi, Bluetooth, and cellular communication.\n  - **Microwaves**: Used for long-distance point-to-point communication (e.g., satellite links).\n  - **Infrared**: Used for short-range communication (e.g., TV remotes).",
        diagrams: [],
      },
    ],
  },
  "Data Link & Physical Layer": {
    id: "data-link-physical-layer",
    topics: [
      {
        id: "ethernet-framing-error-flow-control",
        title: "Ethernet, Framing, Error & Flow Control",
        content: "**Ethernet**: The dominant technology for wired LANs. It defines how data is formatted and transmitted over a physical medium. It operates at both Layer 1 (Physical) and Layer 2 (Data Link).\n\n**Framing**: The process of encapsulating a network layer packet into a Data Link layer frame. An Ethernet frame includes:\n- **Preamble**: For synchronization.\n- **Destination & Source MAC Addresses**: 6-byte physical addresses.\n- **Type/Length Field**: Indicates the protocol of the encapsulated payload (e.g., IPv4).\n- **Payload**: The actual data from the upper layer (e.g., an IP packet).\n- **FCS (Frame Check Sequence)**: A value (usually from a CRC calculation) used for error detection.\n\n**Error Control**: Detects (and sometimes corrects) errors that occur during transmission.\n- **Cyclic Redundancy Check (CRC)**: The sender calculates a checksum value based on the frame data and appends it as the FCS. The receiver performs the same calculation. If the results don't match, the frame is considered corrupted and is discarded.\n\n**Flow Control**: Manages the rate of data transmission between two nodes to prevent a fast sender from overwhelming a slow receiver.\n- **Stop-and-Wait**: The sender sends one frame and waits for an acknowledgment (ACK) from the receiver before sending the next one. Very simple but inefficient.\n- **Sliding Window**: Allows the sender to transmit multiple frames before needing an acknowledgment, improving efficiency.",
        diagrams: [
          {
            title: "Ethernet Frame Structure",
            link: "https://www.techtarget.com/searchnetworking/definition/Ethernet-frame",
          },
        ],
      },
      {
        id: "mac-vlans-switching-nics-hubs",
        title: "MAC, VLANs, Switching, NICs, Repeater/Hubs",
        content: "**MAC (Media Access Control) Address**: A unique 48-bit hardware identifier assigned to a NIC. It's used for addressing within a local network segment (Layer 2). It's typically represented in hexadecimal format (e.g., 00:1A:2B:3C:4D:5E).\n\n**VLANs (Virtual LANs)**: A method of logically segmenting a single physical LAN into multiple separate broadcast domains.\n- **Purpose**: Improves security (isolates traffic), reduces broadcast traffic, and simplifies network management.\n- **Mechanism**: Frames are \"tagged\" with a VLAN ID (IEEE 802.1Q). Switches use these tags to forward frames only to ports belonging to the same VLAN.\n\n**Switching**: The process a switch uses to forward frames.\n1.  **Learning**: The switch inspects incoming frames and learns the MAC addresses of devices connected to its ports, building a MAC address table.\n2.  **Forwarding**: When a frame arrives, the switch looks up the destination MAC address in its table and forwards the frame only to the corresponding port.\n3.  **Flooding**: If the destination MAC is not in the table, the switch broadcasts the frame to all ports except the one it came from.\n\n**NICs (Network Interface Cards)**: The physical device that implements Layer 2 functionality, providing the connection point to the network and the MAC address.\n\n**Repeater/Hubs**:\n- **Repeater**: A Layer 1 device that regenerates a signal to extend its range. It doesn't understand frames or addresses.\n- **Hub**: A multi-port repeater. It takes an incoming signal on one port and broadcasts it out to all other ports, creating a single collision domain and a single broadcast domain.",
        diagrams: [],
      },
    ],
  },
  "Network Layer & Routing": {
    id: "network-layer-routing",
    topics: [
      {
        id: "ipv4-ipv6-subnetting-cidr",
        title: "IPv4/IPv6, Subnetting, CIDR",
        content: "**IP (Internet Protocol)**: The principal protocol at the Network Layer, responsible for logical addressing and routing packets between networks.\n\n**IPv4**:\n- **Address Size**: 32-bit (e.g., 192.168.1.1).\n- **Address Space**: Approximately 4.3 billion addresses (now largely exhausted).\n- **Structure**: Dotted-decimal notation (four 8-bit octets).\n\n**IPv6**:\n- **Address Size**: 128-bit (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).\n- **Address Space**: Vastly larger (2^128), effectively inexhaustible.\n- **Structure**: Hexadecimal notation, separated by colons. Includes features like simplified header and built-in security (IPsec).\n\n**Subnetting**: The process of dividing a large IP network into smaller sub-networks (subnets).\n- **Purpose**: To improve performance by reducing broadcast traffic and to simplify network management.\n- **Mechanism**: A subnet mask is used to \"borrow\" bits from the host portion of an IP address to create subnet identifiers. For example, a /24 network (255.255.255.0) can be subnetted into two /25 networks (255.255.255.128).\n\n**CIDR (Classless Inter-Domain Routing)**: Replaced the old classful addressing system (Class A, B, C).\n- **Mechanism**: Uses a prefix notation (e.g., 192.168.1.0/24) where the number after the '/' indicates how many bits are part of the network prefix.\n- **Benefit**: Allows for more flexible and efficient allocation of IP addresses.",
        diagrams: [
          {
            title: "IPv4 vs IPv6 Header",
            link: "https://www.researchgate.net/profile/R-M-Chandima-Ratnayake/publication/262211993/figure/fig1/AS:667615962001416@1536183424160/The-IPv4-and-IPv6-headers.png",
          },
        ],
      },
      {
        id: "arp-dhcp-icmp-packet-structure",
        title: "ARP, DHCP, ICMP, Packet Structure",
        content: "**ARP (Address Resolution Protocol)**: A protocol used to map a known IP address to its corresponding MAC address on a local network.\n- **Process**: When a host needs to send a packet to an IP address on its LAN, it sends an ARP request broadcast saying \"Who has this IP address?\". The device with that IP replies with an ARP response containing its MAC address.\n\n**DHCP (Dynamic Host Configuration Protocol)**: Automates the process of assigning IP addresses and other network configuration settings (like subnet mask, default gateway, DNS servers) to devices on a network.\n- **Process (DORA)**:\n  1.  **D**iscover: Client broadcasts a DHCP Discover message to find a DHCP server.\n  2.  **O**ffer: DHCP server(s) reply with a DHCP Offer message, offering an IP address.\n  3.  **R**equest: Client selects an offer and broadcasts a DHCP Request message.\n  4.  **A**cknowledgment: The chosen server sends a DHCP ACK to confirm the lease.\n\n**ICMP (Internet Control Message Protocol)**: A network diagnostic and error reporting protocol. It's used by network devices, like routers, to send error messages and operational information.\n- **Examples**: `ping` uses ICMP Echo Request/Reply messages to test connectivity. `traceroute` uses ICMP messages to map the path a packet takes to a destination.\n\n**IP Packet Structure (Simplified)**:\n- **Header**: Contains source and destination IP addresses, Time-To-Live (TTL), protocol number (e.g., 6 for TCP, 17 for UDP), and other control information.\n- **Payload**: Contains the data from the upper layer (e.g., a TCP segment).",
        diagrams: [],
      },
      {
        id: "routing-protocols",
        title: "Routing: Static, RIP, OSPF, BGP, MPLS, Multicast",
        content: "**Routing** is the process of selecting a path for traffic in a network, or between or across multiple networks.\n\n**Static Routing**: Routes are manually configured by a network administrator. Simple and secure, but doesn't adapt to network changes.\n\n**Dynamic Routing**: Routers automatically learn about network paths by exchanging information with other routers.\n- **RIP (Routing Information Protocol)**: A distance-vector protocol that uses hop count as its metric. Simple, but slow to converge and has a 15-hop limit.\n- **OSPF (Open Shortest Path First)**: A link-state protocol. Each router builds a complete map of the network and calculates the best path. Fast to converge and more scalable than RIP. Used for intra-domain routing (within an autonomous system).\n- **BGP (Border Gateway Protocol)**: A path-vector protocol that is the backbone of the Internet. It makes routing decisions based on paths, network policies, or rule-sets. Used for inter-domain routing (between autonomous systems).\n\n**MPLS (Multiprotocol Label Switching)**: A technique that speeds up and shapes traffic flows across networks. It forwards packets based on short path labels rather than complex lookups in a routing table.\n\n**Multicast Routing**: A method for sending a single packet from one source to multiple interested destinations simultaneously, conserving bandwidth. Protocols like PIM (Protocol Independent Multicast) are used.",
        diagrams: [],
      },
    ],
  },
  "Transport Layer": {
    id: "transport-layer",
    topics: [
      {
        id: "udp-vs-tcp",
        title: "UDP vs TCP",
        content: "The Transport Layer provides logical communication between application processes running on different hosts.\n\n**TCP (Transmission Control Protocol)**:\n- **Type**: Connection-oriented.\n- **Reliability**: Guarantees that data will be delivered in order and without errors, using acknowledgments and retransmissions.\n- **Features**: Flow control, congestion control, sequencing.\n- **Overhead**: Higher, due to its reliability features.\n- **Use Cases**: Web browsing (HTTP/S), email (SMTP), file transfers (FTP), where reliability is critical.\n\n**UDP (User Datagram Protocol)**:\n- **Type**: Connectionless.\n- **Reliability**: Unreliable, \"best-effort\" delivery. No guarantee of delivery, order, or error checking.\n- **Features**: Minimalist protocol; its main job is to add port numbers to the IP packet.\n- **Overhead**: Lower, making it faster than TCP.\n- **Use Cases**: Live streaming video, online gaming, DNS, VoIP, where speed is more important than perfect reliability.",
        diagrams: [
          {
            title: "TCP vs UDP Key Differences",
            link: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=TCP+vs+UDP",
          },
        ],
      },
      {
        id: "tcp-3-way-handshake",
        title: "Connection Establishment (3-way handshake)",
        content: "TCP uses a three-way handshake to establish a reliable connection before any data is sent.\n\n**Process**:\n1.  **SYN (Synchronize)**: The client wants to start a connection, so it sends a TCP segment with the SYN flag set to the server. This packet includes an initial sequence number (e.g., Seq=X).\n2.  **SYN-ACK (Synchronize-Acknowledge)**: The server receives the SYN packet and, if it accepts the connection, it responds with a TCP segment that has both the SYN and ACK flags set. It acknowledges the client's sequence number (Ack=X+1) and sends its own initial sequence number (e.g., Seq=Y).\n3.  **ACK (Acknowledge)**: The client receives the SYN-ACK packet and completes the connection by sending a final segment with the ACK flag set. This packet acknowledges the server's sequence number (Ack=Y+1).\n\nOnce this process is complete, the connection is established, and data transfer can begin. A similar process called a four-way handshake is used to terminate the connection.",
        diagrams: [
          {
            title: "TCP 3-Way Handshake",
            link: "https://media.geeksforgeeks.org/wp-content/uploads/20220223165213/TCP3WayHandshake.png",
          },
        ],
      },
      {
        id: "flow-congestion-control",
        title: "Flow & Congestion Control Mechanisms",
        content: "These are key TCP mechanisms for ensuring reliable data transfer.\n\n**Flow Control**:\n- **Purpose**: To prevent a fast sender from overwhelming a slow receiver.\n- **Mechanism**: The receiver advertises a \"receive window\" size in its ACK packets. This window size tells the sender the amount of data (in bytes) that it can send before it must wait for another acknowledgment. This is a form of the **sliding window** protocol. If the receiver's buffer is full, it can advertise a window size of 0, telling the sender to stop transmitting.\n\n**Congestion Control**:\n- **Purpose**: To prevent the network itself from becoming overloaded. A sender infers congestion when packets are lost (indicated by timeouts or duplicate ACKs).\n- **Mechanisms**: TCP uses several algorithms to manage its sending rate:\n  - **Slow Start**: Begins by sending a small number of segments (the congestion window, or `cwnd`) and exponentially increases this number for every ACK received, until it reaches a threshold.\n  - **Congestion Avoidance**: After the threshold, the `cwnd` increases linearly (additive increase) to probe for available bandwidth more gently.\n  - **Fast Retransmit & Fast Recovery**: If the sender receives three duplicate ACKs, it assumes a packet was lost and retransmits it immediately without waiting for a timeout. It then halves the `cwnd` (multiplicative decrease) and enters a recovery phase.",
        diagrams: [],
      },
    ],
  },
  "Application Layer Protocols": {
    id: "application-layer-protocols",
    topics: [
      {
        id: "common-app-protocols",
        title: "HTTP/S, FTP, DNS, SMTP, Telnet, SSH, DHCP, SNMP",
        content: "Application layer protocols define the rules for communication between applications.\n\n- **HTTP (Hypertext Transfer Protocol)**: Port 80. The foundation of the World Wide Web, used for requesting and transmitting web pages.\n- **HTTPS (HTTP Secure)**: Port 443. The secure version of HTTP, which encrypts the communication using TLS/SSL.\n- **FTP (File Transfer Protocol)**: Ports 20, 21. Used for transferring files between a client and a server. It uses two separate connections: one for control (commands) and one for data.\n- **DNS (Domain Name System)**: Port 53. Translates human-readable domain names (e.g., www.google.com) into machine-readable IP addresses.\n- **SMTP (Simple Mail Transfer Protocol)**: Port 25. Used for sending emails from a client to a server and between mail servers.\n- **Telnet**: Port 23. Provides a command-line interface to a remote host. It is insecure as all data is sent in plain text.\n- **SSH (Secure Shell)**: Port 22. A secure replacement for Telnet. It provides an encrypted channel for remote command-line access and other network services.\n- **DHCP (Dynamic Host Configuration Protocol)**: Ports 67, 68. Automates the assignment of IP addresses and network configuration to devices.\n- **SNMP (Simple Network Management Protocol)**: Port 161. Used for managing and monitoring network devices like routers, switches, and servers.",
        diagrams: [],
      },
    ],
  },
  "Network Security": {
    id: "network-security",
    topics: [
      {
        id: "firewalls-vpns-encryption-tls-ssl",
        title: "Firewalls, VPNs, Encryption, TLS/SSL",
        content: "**Firewalls**: A network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules.\n- **Types**: Packet-filtering, stateful inspection, proxy firewalls, Next-Generation Firewalls (NGFW).\n\n**VPNs (Virtual Private Networks)**: Creates a secure, encrypted \"tunnel\" over a public network (like the Internet) to a private network. This allows users to access private resources remotely and securely.\n- **Protocols**: Common VPN protocols include IPsec and OpenVPN.\n\n**Encryption**: The process of converting data into a coded format (ciphertext) to prevent unauthorized access.\n- **Symmetric Encryption**: Uses the same key for both encryption and decryption (e.g., AES). Fast and efficient.\n- **Asymmetric Encryption (Public-Key Cryptography)**: Uses a pair of keys: a public key (for encryption) and a private key (for decryption) (e.g., RSA). Key to secure key exchange and digital signatures.\n\n**TLS/SSL (Transport Layer Security / Secure Sockets Layer)**: Cryptographic protocols that provide secure communication over a computer network. SSL is the predecessor to TLS.\n- **Function**: They use a combination of symmetric and asymmetric encryption to provide:\n  1.  **Confidentiality**: Encrypting the data.\n  2.  **Integrity**: Ensuring the data has not been tampered with.\n  3.  **Authentication**: Verifying the identity of the communicating parties (e.g., verifying a website's identity via a digital certificate).",
        diagrams: [],
      },
      {
        id: "common-attacks-mitigation",
        title: "Common Attacks & Mitigation",
        content: "**Denial-of-Service (DoS) / Distributed DoS (DDoS)**:\n- **Attack**: Overwhelming a server or network with traffic to make it unavailable to legitimate users. DDoS uses many compromised computers (a botnet) to launch the attack.\n- **Mitigation**: Traffic filtering, rate limiting, using DDoS mitigation services.\n\n**Man-in-the-Middle (MitM) Attack**:\n- **Attack**: An attacker secretly intercepts and relays communication between two parties who believe they are directly communicating with each other.\n- **Mitigation**: Using encrypted protocols like HTTPS (TLS/SSL) and VPNs, which authenticate the server and encrypt the data.\n\n**Phishing**:\n- **Attack**: A social engineering attack where attackers deceive people into revealing sensitive information (like passwords or credit card numbers) by masquerading as a trustworthy entity in an electronic communication.\n- **Mitigation**: User education, email filters, multi-factor authentication (MFA).\n\n**SQL Injection**:\n- **Attack**: Injecting malicious SQL code into web form inputs to manipulate a backend database.\n- **Mitigation**: Using prepared statements and parameterized queries, input validation.\n\n**Cross-Site Scripting (XSS)**:\n- **Attack**: Injecting malicious scripts into trusted websites, which then get executed in the victim's browser.\n- **Mitigation**: Input sanitization, output encoding, Content Security Policy (CSP).",
        diagrams: [],
      },
    ],
  },
  "Wireless, Mobile & IoT Networks": {
    id: "wireless-mobile-iot",
    topics: [
      {
        id: "wifi-cellular-pan-iot-protocols",
        title: "Wi-Fi, Cellular, PAN, IoT Protocols",
        content: "**Wi-Fi (Wireless Fidelity)**: Based on the IEEE 802.11 standards, it's the primary technology for wireless LANs (WLANs).\n- **Standards**: 802.11ac (Wi-Fi 5), 802.11ax (Wi-Fi 6), operate in 2.4 GHz and 5 GHz bands. Wi-Fi 6 offers higher speeds, lower latency, and better performance in congested environments.\n\n**Cellular Networks**: Mobile networks that provide connectivity for mobile devices over a large geographical area.\n- **Generations**:\n  - **4G LTE (Long-Term Evolution)**: Provided fast mobile broadband.\n  - **5G (Fifth Generation)**: Offers significantly higher speeds (Gbps), ultra-low latency, and massive device connectivity, enabling new applications like autonomous vehicles and advanced IoT.\n\n**PAN (Personal Area Network) Technologies**: For short-range wireless communication.\n- **Bluetooth**: Used for connecting peripherals like headsets, keyboards, and for data transfer between nearby devices. Bluetooth Low Energy (BLE) is optimized for low-power IoT devices.\n- **Zigbee / Z-Wave**: Low-power, low-data-rate wireless protocols designed for home automation and smart devices.\n\n**IoT (Internet of Things) Protocols**: Lightweight protocols designed for constrained devices.\n- **MQTT (Message Queuing Telemetry Transport)**: A publish/subscribe messaging protocol. It's very lightweight and efficient, making it ideal for IoT communication where bandwidth and battery power are limited.\n- **CoAP (Constrained Application Protocol)**: Designed to work with HTTP-based web services but in a much more lightweight manner for constrained devices and networks.",
        diagrams: [],
      },
    ],
  },
  "Advanced Topics": {
    id: "advanced-topics",
    topics: [
      {
        id: "congestion-control-algorithms",
        title: "Congestion Control Algorithms",
        content: "Beyond the basic AIMD (Additive Increase, Multiplicative Decrease) model, several TCP congestion control algorithms exist.\n\n- **TCP Tahoe and Reno**: Early versions. Tahoe would always reset its congestion window to 1 after a packet loss (slow start). Reno introduced \"fast recovery,\" which avoided slow start after a minor loss (indicated by 3 duplicate ACKs), making it more efficient.\n- **TCP NewReno**: An improvement on Reno that performs better when multiple packets are dropped from a window of data.\n- **CUBIC**: The default congestion control algorithm in Linux. It's a more aggressive and scalable algorithm designed for high-bandwidth, high-latency networks (\"long fat networks\"). Its window growth is a cubic function, allowing it to probe for bandwidth more quickly and stabilize more effectively.",
        diagrams: [],
      },
      {
        id: "routing-router-architecture",
        title: "Intra/Inter-domain Routing, Router Architecture",
        content: "**Autonomous System (AS)**: A collection of connected IP routing prefixes under the control of one or more network operators that presents a common, clearly defined routing policy to the Internet.\n\n**Intra-domain Routing (IGP - Interior Gateway Protocol)**:\n- **Purpose**: Used for routing *within* a single Autonomous System.\n- **Goal**: Find the best path quickly and efficiently within the local network.\n- **Examples**: OSPF, RIP, EIGRP.\n\n**Inter-domain Routing (EGP - Exterior Gateway Protocol)**:\n- **Purpose**: Used for routing *between* different Autonomous Systems.\n- **Goal**: Make policy-based routing decisions, not just find the \"shortest\" path. For example, a network might choose a longer but cheaper path.\n- **Example**: BGP is the sole EGP used on the internet today.\n\n**Router Architecture (Simplified)**:\n1.  **Input Ports**: Receive incoming packets, perform link-layer decapsulation, and look up the destination address in the forwarding table to determine the output port.\n2.  **Switching Fabric**: The \"heart\" of the router that connects input ports to output ports. It's responsible for transferring the packet from its input to its designated output.\n3.  **Output Ports**: Queue the packets (if necessary), perform link-layer encapsulation, and transmit the packet onto the outgoing link.\n4.  **Routing Processor (Control Plane)**: Executes the routing protocols (like OSPF, BGP), maintains the routing tables, and computes the forwarding table that is used by the input ports.",
        diagrams: [],
      },
      {
        id: "sdn-nfv-openflow",
        title: "SDN, NFV, OpenFlow",
        content: "**SDN (Software-Defined Networking)**: A network architecture that decouples the network's control and forwarding planes.\n- **Control Plane**: The \"brain\" of the network that decides how traffic should be handled (routing, policies). In SDN, this is centralized in a software-based SDN controller.\n- **Data Plane (Forwarding Plane)**: The \"muscle\" of the network, composed of switches and routers that actually forward the traffic based on instructions from the control plane.\n- **Benefit**: Makes networks more agile, programmable, and centrally manageable.\n\n**NFV (Network Function Virtualization)**: The concept of virtualizing network services (like firewalls, load balancers, routers) that have traditionally run on proprietary hardware. These services can now run as software on standard commercial off-the-shelf (COTS) servers.\n- **Benefit**: Reduces costs, increases flexibility, and speeds up service deployment.\n\n**OpenFlow**: A key protocol in SDN environments. It is the communication interface between the SDN controller (control plane) and the network switches (data plane). The controller uses OpenFlow to program the forwarding tables of the switches.",
        diagrams: [
          {
            title: "Traditional vs SDN Architecture",
            link: "https://www.cio.com/wp-content/uploads/2023/10/sdn_software-defined-networking_controller_forwarding_control_management-100787034-orig.jpg",
          },
        ],
      },
      {
        id: "multicast-qos",
        title: "Multicast & QoS",
        content: "**Multicast**: A communication method where a single sender transmits data to a group of interested receivers in a single transmission.\n- **Comparison**:\n  - **Unicast**: One-to-one communication.\n  - **Broadcast**: One-to-all communication.\n  - **Multicast**: One-to-many (but only to those who have \"subscribed\").\n- **Use Case**: Efficiently distributing streaming video (IPTV) or stock market data. It uses special multicast IP addresses (224.0.0.0 to 239.255.255.255) and protocols like IGMP (Internet Group Management Protocol).\n\n**QoS (Quality of Service)**: The use of mechanisms or technologies to control traffic and ensure the performance of critical applications to a certain level.\n- **Goal**: To manage network resources and provide different priorities to different applications, users, or data flows. For example, ensuring that a video conference call (latency-sensitive) gets priority over a large file download (not latency-sensitive).\n- **Mechanisms**:\n  - **Classification & Marking**: Identifying and tagging packets based on their priority (e.g., DSCP).\n  - **Queuing**: Placing packets in different queues based on priority. High-priority queues are serviced first.\n  - **Traffic Shaping/Policing**: Controlling the rate of traffic being sent into the network.",
        diagrams: [],
      },
      {
        id: "cloud-networking-cdn",
        title: "Cloud Networking & CDN",
        content: "**Cloud Networking**: Refers to the networking services and resources offered by cloud providers (like AWS, Azure, GCP).\n- **VPC (Virtual Private Cloud)**: A logically isolated section of a public cloud where you can launch resources in a virtual network that you define. It gives you control over your virtual networking environment, including IP address ranges, subnets, route tables, and network gateways.\n- **Cloud Services**: Include virtual routers, load balancers, DNS, and firewalls, all delivered as a service.\n\n**CDN (Content Delivery Network)**: A geographically distributed network of proxy servers and their data centers.\n- **Purpose**: To provide high availability and performance by distributing content closer to end-users.\n- **How it works**: When a user requests content (e.g., an image or video) from a website using a CDN, the request is redirected to the CDN server that is geographically closest to the user. This reduces latency and offloads traffic from the origin server.\n- **Benefits**: Faster load times, reduced bandwidth costs, increased content availability, and improved security (by absorbing DDoS attacks).",
        diagrams: [
          {
            title: "How a CDN Works",
            link: "https://www.cloudflare.com/img/learning/what-is-a-cdn/what-is-a-cdn.svg",
          },
        ],
      },
      {
        id: "emerging-protocols-quic",
        title: "Emerging Protocols (e.g., QUIC)",
        content: "**QUIC (Quick UDP Internet Connections)**: A modern transport layer network protocol designed by Google. It's the foundation of HTTP/3.\n- **Motivation**: To solve major problems with TCP, such as head-of-line blocking and slow connection setup.\n- **Key Features**:\n  - **Built on UDP**: Avoids the inflexibility of TCP, which is often baked into operating system kernels and is slow to evolve.\n  - **Faster Connection Establishment**: Combines the transport and cryptographic handshakes, often achieving a 0-RTT (zero round-trip time) connection setup for returning clients.\n  - **Multiplexing without Head-of-Line (HOL) Blocking**: If multiple streams of data are sent over a single TCP connection, a lost packet in one stream will block all other streams until it's retransmitted. QUIC's streams are independent, so a lost packet only affects its own stream.\n  - **Built-in Encryption**: Encryption (TLS 1.3) is a fundamental part of the protocol, not an add-on layer like with TCP.",
        diagrams: [],
      },
      {
        id: "ai-ml-in-networking",
        title: "AI/ML in Networking Analytics",
        content: "Artificial Intelligence (AI) and Machine Learning (ML) are being increasingly used to manage and analyze complex modern networks.\n\n**Applications**:\n- **Predictive Analytics**: ML models can analyze historical network data to predict future traffic patterns, potential hardware failures, or network congestion. This allows for proactive maintenance and resource allocation.\n- **Anomaly Detection**: AI can learn the baseline of \"normal\" network behavior and automatically flag unusual patterns that might indicate a security breach (like a DDoS attack) or a performance issue.\n- **Intelligent Traffic Management**: AI-driven systems can dynamically route traffic based on real-time network conditions, application requirements, and QoS policies, optimizing for latency, bandwidth, or cost.\n- **Root Cause Analysis**: When a network issue occurs, ML algorithms can analyze vast amounts of log and telemetry data from various devices to quickly pinpoint the root cause, reducing troubleshooting time.\n- **Security**: AI is used to enhance threat detection, identify sophisticated malware, and automate security responses.",
        diagrams: [],
      },
    ],
  },
};