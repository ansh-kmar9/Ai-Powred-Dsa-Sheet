import passport from "passport";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

class AuthController {
  // Google OAuth login
  static googleAuth = passport.authenticate("google", {
    scope: ["profile", "email"],
  });

  // Google OAuth callback
  static googleCallback = (req, res, next) => {
    passport.authenticate("google", (err, user) => {
      if (err) {
        return res.redirect(
          `${process.env.CLIENT_URL}/login?error=auth_failed`
        );
      }
      if (!user) {
        return res.redirect(
          `${process.env.CLIENT_URL}/login?error=auth_cancelled`
        );
      }

      req.logIn(user, (err) => {
        if (err) {
          return res.redirect(
            `${process.env.CLIENT_URL}/login?error=login_failed`
          );
        }

        // Generate JWT token
        const token = jwt.sign(
          { userId: user._id, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: "7d" }
        );

        // Log for debugging
        console.log(
          "Redirecting to:",
          `${process.env.CLIENT_URL}/dashboard?token=${token.substring(
            0,
            20
          )}...`
        );

        // Redirect to frontend with token
        return res.redirect(
          `${process.env.CLIENT_URL}/dashboard?token=${token}`
        );
      });
    })(req, res, next);
  };

  // Get current user
  static getCurrentUser = async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Not authenticated" });
      }

      const user = {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        picture: req.user.picture,
        progress: req.user.progress,
      };

      res.json({ user });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

  // Logout
  static logout = (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      req.session.destroy((err) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Session destruction failed" });
        }
        res.clearCookie("connect.sid");
        res.json({ message: "Logged out successfully" });
      });
    });
  };

  // Verify JWT token
  static verifyToken = async (req, res) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        return res.status(401).json({ message: "No token provided" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId).select("-__v");

      if (!user) {
        return res.status(401).json({ message: "Invalid token" });
      }

      res.json({ valid: true, user });
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  };
}

export default AuthController;
