import React from "react";
import { Github, Heart, Mail, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/dsatracker",
      icon: Github,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/dsatracker",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/dsatracker",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:hello@dsatracker.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center">
            <p className="text-zinc-500 text-sm flex items-center">
              © {currentYear} DSA Sheet. Made with
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              for developers.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
