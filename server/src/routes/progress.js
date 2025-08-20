import express from "express";
import ProgressController from "../controllers/progressController.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

// All progress routes require authentication
router.use(requireAuth);

// Progress routes
router.get("/overview", ProgressController.getOverallProgress);
router.get("/:sheetName", ProgressController.getSheetProgress);
router.post("/:sheetName/:questionId", ProgressController.toggleQuestionStatus);
router.delete("/:sheetName", ProgressController.resetSheetProgress);

export default router;
