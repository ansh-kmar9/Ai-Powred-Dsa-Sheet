import React from "react";
import { Link } from "react-router-dom";
import { Heart, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Dashboard", href: "/dashboard" },
        { name: "DSA Sheets", href: "/sheets" },
        { name: "Mock Tests", href: "/mock-test" },
      ],
    },
    {
      title: "Computer Science",
      links: [
        { name: "Computer Networks", href: "/computer-networks" },
        { name: "Operating Systems", href: "/operating-systems" },
        { name: "Object Oriented Programming", href: "/oops" },
        { name: "Database Management", href: "/database-management-systems" },
      ],
    },
  ];

  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1: Navigation & Header */}
        <div className="py-4 border-b border-zinc-800">
          <div className="flex flex-col sm:flex-row justify-between items-start">
            {/* Left: Brand */}
            <div className="mb-4 sm:mb-0">
              <div className="flex items-center mb-1">
                <img
                  src="/logo2.png"
                  alt="DSA Sheet Logo"
                  className="h-6 w-6 mr-2"
                />
                <h3 className="text-lg font-bold text-white">DSA Sheet</h3>
              </div>
            </div>

            {/* Right: Navigation Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {navigationSections.map((section, index) => (
                <div key={index}>
                  <h4 className="text-white font-medium text-xs mb-2">
                    {section.title}
                  </h4>
                  <ul className="space-y-1">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.href}
                          className="text-zinc-400 hover:text-white transition-colors duration-200 text-xs block group"
                        >
                          {link.name}
                          <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Contact & Copyright */}
        <div className="py-3">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <a
              href="mailto:anshkmr991@gmail.com"
              className="inline-flex items-center text-zinc-400 hover:text-white transition-colors duration-200 text-xs"
            >
              <Mail className="h-3 w-3 mr-1" />
              anshkmr991@gmail.com
            </a>
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <p className="text-zinc-500 text-xs flex items-center">
                © {currentYear} DSA Sheet. Made with
                <Heart className="h-3 w-3 text-red-500 mx-1" />
                for learners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
