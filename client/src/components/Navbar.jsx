import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  Compass,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [exploreOpen, setExploreOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  
  const exploreRef = useRef(null);
  const profileRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (exploreRef.current && !exploreRef.current.contains(event.target)) {
        setExploreOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setMobileExploreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
    setExploreOpen(false);
    setProfileOpen(false);
    setMobileMenuOpen(false);
    setMobileExploreOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLogout = async () => {
    try {
      await logout();
      setProfileOpen(false);
      setMobileMenuOpen(false);
      navigate('/');
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
  ];

  const isActiveRoute = (path) => location.pathname === path;

  return (
    <>
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group transition-transform"
            >
              <img
                src="/logo2.png"
                alt="Logo"
                className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
              />
              <span className="text-lg sm:text-xl font-bold text-white">
                DSA Sheet
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* AI Doubt Solver */}
              <Link
                to="/ai-doubt-solver"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActiveRoute("/ai-doubt-solver")
                    ? "bg-zinc-700 text-white shadow-lg border border-zinc-600"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
                title="AI Doubt Solver"
              >
                <Bot className="h-4 w-4" />
                <span className="hidden xl:inline">AI Solver</span>
              </Link>

              {/* Explore Dropdown */}
              <div className="relative" ref={exploreRef}>
                <button
                  onClick={() => setExploreOpen(!exploreOpen)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    exploreOpen || exploreItems.some(item => isActiveRoute(item.href))
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  <Compass className="h-4 w-4" />
                  <span>Explore</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      exploreOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {exploreOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-zinc-900/95 backdrop-blur-sm border border-zinc-700 rounded-xl shadow-2xl py-2 z-50 animate-in slide-in-from-top-2 fade-in duration-200">
                    {exploreItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 text-sm transition-all duration-200 ${
                          isActiveRoute(item.href)
                            ? "bg-zinc-700 text-white border-r-2 border-zinc-400"
                            : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                        }`}
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
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      profileOpen || isActiveRoute("/dashboard")
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }`}
                  >
                    {user?.picture ? (
                      <img
                        src={user.picture}
                        alt={user.name}
                        className="h-8 w-8 rounded-full border-2 border-zinc-600"
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    )}
                    <span className="hidden xl:inline-block text-sm font-medium">
                      {user?.name?.split(' ')[0] || 'Profile'}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        profileOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-zinc-900/95 backdrop-blur-sm border border-zinc-700 rounded-xl shadow-2xl py-2 z-50 animate-in slide-in-from-top-2 fade-in duration-200">
                      <div className="px-4 py-3 border-b border-zinc-800">
                        <p className="text-sm font-medium text-white truncate">
                          {user?.name || "User"}
                        </p>
                        <p className="text-xs text-zinc-400 truncate">
                          {user?.email}
                        </p>
                      </div>

                      <div className="py-2">
                        <Link
                          to="/dashboard"
                          className={`flex items-center space-x-3 px-4 py-3 text-sm transition-colors ${
                            isActiveRoute("/dashboard")
                              ? "bg-zinc-700 text-white border-r-2 border-zinc-400"
                              : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                          }`}
                        >
                          <Home className="h-4 w-4" />
                          <span>Dashboard</span>
                        </Link>

                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center space-x-3 px-4 py-3 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors"
                        >
                          <LogOut className="h-4 w-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-600 text-black-300 hover:text-white bg-zinc-100 hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-200"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-zinc-800 max-h-[80vh] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-4">
              {/* AI Doubt Solver */}
              <Link
                to="/ai-doubt-solver"
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-all duration-200 ${
                  isActiveRoute("/ai-doubt-solver")
                    ? "bg-zinc-700 text-white border border-zinc-600"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-800"
                }`}
              >
                <Bot className="h-5 w-5" />
                <span>AI Doubt Solver</span>
              </Link>

              {/* Explore Section */}
              <div className="mb-2">
                <button
                  onClick={() => setMobileExploreOpen(!mobileExploreOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                    mobileExploreOpen || exploreItems.some(item => isActiveRoute(item.href))
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-300 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Compass className="h-5 w-5" />
                    <span>Explore</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      mobileExploreOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileExploreOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    {exploreItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          isActiveRoute(item.href)
                            ? "bg-zinc-700 text-white border-l-2 border-zinc-400"
                            : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                        }`}
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
                <div className="border-t border-zinc-800 pt-4 mt-4">
                  <div className="flex items-center space-x-3 px-4 py-3 mb-3">
                    {user?.picture ? (
                      <img
                        src={user.picture}
                        alt={user.name}
                        className="h-10 w-10 rounded-full border-2 border-zinc-600"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-medium text-white">
                        {user?.name || "User"}
                      </p>
                      <p className="text-xs text-zinc-400">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                  
                  {/* Dashboard Link in Mobile Profile Section */}
                  <Link
                    to="/dashboard"
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-all duration-200 ${
                      isActiveRoute("/dashboard")
                        ? "bg-zinc-700 text-white border border-zinc-600"
                        : "text-zinc-300 hover:text-white hover:bg-zinc-800"
                    }`}
                  >
                    <Home className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="border-t border-zinc-800 pt-4 mt-4">
                  <Link
                    to="/login"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                  >
                    <User className="h-5 w-5" />
                    <span>Login</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      )}
    </>
  );
};

export default Navbar;