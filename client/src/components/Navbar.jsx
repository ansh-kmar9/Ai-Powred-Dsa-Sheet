import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "./Button";
import {
  LogOut,
  User,
  Home,
  BarChart3,
  ChevronDown,
  Code,
  Layers,
  Database,
  Map,
  FileCheck,
  FileText,
  Network,
  Server,
  Bot,
} from "lucide-react";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const [exploreOpen, setExploreOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const exploreRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (exploreRef.current && !exploreRef.current.contains(event.target)) {
        setExploreOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setProfileOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const exploreItems = [
    { name: "Sheets", icon: FileText, href: "/sheets" },
    { name: "Mock Test", icon: FileCheck, href: "/mock-test" },
    { name: "Computer Networks", icon: Network, href: "/computer-networks" },
    { name: "Operating Systems", icon: Server, href: "/operating-systems" },
    { name: "OOPs", icon: Layers, href: "/oops" },
    { name: "DBMS", icon: Database, href: "/database-management-systems" },
    // { name: "Roadmap", icon: Map, href: "/roadmap" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/logo2.png"
                alt="Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold text-white">DSA Sheet</span>
            </Link>
          </div>

          {/* Right side - AI Bot, Explore, Profile/Login */}
          <div className="flex items-center space-x-2">
            {/* AI Doubt Solver Bot Icon */}
            <Link
              to="/ai-doubt-solver"
              className="p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
              title="AI Doubt Solver"
            >
              <Bot className="h-5 w-5" />
            </Link>

            {/* Explore Dropdown */}
            <div className="relative" ref={exploreRef}>
              <button
                onClick={() => setExploreOpen(!exploreOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
              >
                <span>Explore</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    exploreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {exploreOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-zinc-900 border border-zinc-800 rounded-md shadow-lg py-1 z-50">
                  {exploreItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                      onClick={() => setExploreOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Profile/Login Section */}
            {isAuthenticated ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-zinc-900 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    {user?.picture ? (
                      <img
                        src={user.picture}
                        alt={user.name}
                        className="h-8 w-8 rounded-full border border-zinc-600"
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center">
                        <User className="h-4 w-4 text-zinc-400" />
                      </div>
                    )}
                    <span className="hidden sm:inline-block text-sm font-medium text-zinc-400">
                      Profile
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-zinc-500 transition-transform ${
                      profileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-1 w-48 bg-zinc-900 border border-zinc-800 rounded-md shadow-lg py-1 z-50">
                    <div className="px-3 py-2 border-b border-zinc-800">
                      <p className="text-sm font-medium text-white truncate">
                        {user?.name || "User"}
                      </p>
                      <p className="text-xs text-zinc-500 truncate">
                        {user?.email}
                      </p>
                    </div>

                    <Link
                      to="/dashboard"
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                      onClick={() => setProfileOpen(false)}
                    >
                      <Home className="h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-zinc-100 text-black-400 hover:text-black bg-zinc-100 hover:bg-zinc-200"
                >
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {isAuthenticated && (
            <div className="border-t border-zinc-800 py-2">
              <Link
                to="/dashboard"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === "/dashboard"
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-500 hover:text-white hover:bg-zinc-900"
                }`}
              >
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
