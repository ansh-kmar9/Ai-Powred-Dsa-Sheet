import express from "express";
import AuthController from "../controllers/authController.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

// Google OAuth routes
router.get("/google", AuthController.googleAuth);
router.get("/google/callback", AuthController.googleCallback);

// User routes
router.get("/user", requireAuth, AuthController.getCurrentUser);
router.post("/logout", requireAuth, AuthController.logout);
router.post("/verify", AuthController.verifyToken);

export default router;
