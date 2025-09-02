import express from "express";
import ProgressController from "../controllers/progressController.js";
import { requireHybridAuth } from "../middleware/auth.js";

const router = express.Router();

// All progress routes require authentication (JWT or Session)
router.use(requireHybridAuth);

// Progress routes
router.get("/overview", ProgressController.getOverallProgress);
router.post("/revision/mark", ProgressController.markQuestionRevision);
router.post("/revision/update", ProgressController.updateRevisionStatus);
router.get("/:sheetName", ProgressController.getSheetProgress);
router.post("/:sheetName/:questionId", ProgressController.toggleQuestionStatus);
router.delete("/:sheetName", ProgressController.resetSheetProgress);

export default router;
