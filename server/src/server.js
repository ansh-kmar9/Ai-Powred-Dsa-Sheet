import express from "express";
import cors from "cors";
import helmet from// Test route
app.get("/test", (req, res) => {
  res.status(200).json({ 
    message: "Test successful",
    client_url: process.env.CLIENT_URL,
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    timestamp: new Date().toISOString()
  });
});

// Debug environment route
app.get("/debug-env", (req, res) => {
  res.status(200).json({
    CLIENT_URL: process.env.CLIENT_URL || "NOT SET",
    NODE_ENV: process.env.NODE_ENV || "NOT SET",
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL || "NOT SET",
    timestamp: new Date().toISOString()
  });
});
import rateLimit from "express-rate-limit";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import "./config/passport.js";

// Import routes
import authRoutes from "./routes/auth.js";
import sheetRoutes from "./routes/sheets.js";
import progressRoutes from "./routes/progress.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Security middleware
app.use(helmet());

// Rate limiting - disabled for development
if (process.env.NODE_ENV === "production") {
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000, // increased limit for production
  });
  app.use(limiter);
}

// CORS configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Changed to false for testing
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoutes);
app.use("/api/sheets", sheetRoutes);
app.use("/api/progress", progressRoutes);

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

// Test route
app.get("/test", (req, res) => {
  res.status(200).json({
    message: "Test successful",
    client_url: process.env.CLIENT_URL,
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    timestamp: new Date().toISOString()
  });
});

// Debug environment route
app.get("/debug-env", (req, res) => {
  res.status(200).json({
    CLIENT_URL: process.env.CLIENT_URL || "NOT SET",
    NODE_ENV: process.env.NODE_ENV || "NOT SET",
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL || "NOT SET",
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : {},
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
