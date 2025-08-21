import jwt from "jsonwebtoken";
import User from "../models/User.js";

// JWT Authentication middleware
export const requireJWTAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-__v");

    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("JWT Auth Error:", error.message);
    return res.status(401).json({ message: "Authentication required" });
  }
};

// Session Authentication middleware (for Passport)
export const requireAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(401).json({ message: "Authentication required" });
};

// Hybrid authentication middleware (JWT or Session)
export const requireHybridAuth = async (req, res, next) => {
  // Try JWT first
  const token = req.headers.authorization?.split(" ")[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId).select("-__v");

      if (user) {
        req.user = user;
        return next();
      }
    } catch (error) {
      console.error("JWT Auth failed, trying session:", error.message);
    }
  }

  // Fallback to session auth
  if (req.isAuthenticated()) {
    return next();
  }

  return res.status(401).json({ message: "Authentication required" });
};

// Optional authentication middleware
export const optionalAuth = (req, res, next) => {
  // Always proceed, but user info will be available if authenticated
  next();
};
