// Authentication middleware
export const requireAuth = (req, res, next) => {
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
