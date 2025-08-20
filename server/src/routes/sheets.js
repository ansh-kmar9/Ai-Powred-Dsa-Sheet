import express from "express";
import SheetController from "../controllers/sheetController.js";
import { optionalAuth } from "../middleware/auth.js";

const router = express.Router();

// Public routes
router.get("/", SheetController.getAllSheets);
router.get("/:sheetName", optionalAuth, SheetController.getSheetByName);
router.get("/:sheetName/stats", SheetController.getSheetStats);

// Admin routes (for creating sheets)
router.post("/", SheetController.createSheet);

export default router;
