import User from "../models/User.js";
import Sheet from "../models/Sheet.js";

class ProgressController {
  // Get user progress for a specific sheet
  static getSheetProgress = async (req, res) => {
    try {
      const { sheetName } = req.params;
      const userId = req.user._id;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const progress = user.progress[sheetName];
      if (!progress) {
        return res.status(404).json({ message: "Sheet progress not found" });
      }

      res.json({ progress });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

  // Toggle question solved status
  static toggleQuestionStatus = async (req, res) => {
    try {
      const { sheetName, questionId } = req.params;
      const userId = req.user._id;

      console.log("ProgressController: Toggle request received", {
        sheetName,
        questionId,
        userId: userId.toString(),
      });

      // Verify sheet exists
      const sheet = await Sheet.findOne({ name: sheetName });
      if (!sheet) {
        console.log("ProgressController: Sheet not found", sheetName);
        return res.status(404).json({ message: "Sheet not found" });
      }

      // Find the question in the sheet
      let questionExists = false;
      sheet.topics.forEach((topic) => {
        topic.questions.forEach((question) => {
          if (question._id.toString() === questionId) {
            questionExists = true;
          }
        });
      });

      if (!questionExists) {
        console.log("ProgressController: Question not found", {
          sheetName,
          questionId,
        });
        return res.status(404).json({ message: "Question not found" });
      }

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Initialize progress for sheet if it doesn't exist
      if (!user.progress[sheetName]) {
        user.progress[sheetName] = { solvedCount: 0, questions: [] };
      }

      const sheetProgress = user.progress[sheetName];

      // Find existing question progress
      const existingQuestionIndex = sheetProgress.questions.findIndex(
        (q) => q.questionId.toString() === questionId
      );

      let isSolved = false;

      if (existingQuestionIndex >= 0) {
        // Toggle existing question status
        const currentStatus =
          sheetProgress.questions[existingQuestionIndex].isSolved;
        sheetProgress.questions[existingQuestionIndex].isSolved =
          !currentStatus;
        sheetProgress.questions[existingQuestionIndex].solvedAt = !currentStatus
          ? new Date()
          : null;
        isSolved = !currentStatus;

        // Update solved count
        if (isSolved) {
          sheetProgress.solvedCount++;
        } else {
          sheetProgress.solvedCount--;
        }
      } else {
        // Add new question progress
        sheetProgress.questions.push({
          questionId,
          isSolved: true,
          solvedAt: new Date(),
        });
        sheetProgress.solvedCount++;
        isSolved = true;
      }

      await user.save();

      console.log("ProgressController: Question status toggled successfully", {
        sheetName,
        questionId,
        isSolved,
        solvedCount: sheetProgress.solvedCount,
      });

      res.json({
        message: `Question ${
          isSolved ? "marked as solved" : "marked as unsolved"
        }`,
        isSolved,
        solvedCount: sheetProgress.solvedCount,
      });
    } catch (error) {
      console.error(
        "ProgressController: Error toggling question status:",
        error
      );
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

  // Get overall progress summary
  static getOverallProgress = async (req, res) => {
    try {
      const userId = req.user._id;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Get total questions for each sheet
      const sheets = await Sheet.find({}, "name topics");
      const progressSummary = {};

      sheets.forEach((sheet) => {
        let totalQuestions = 0;
        sheet.topics.forEach((topic) => {
          totalQuestions += topic.questions.length;
        });

        const userProgress = user.progress[sheet.name] || { solvedCount: 0 };
        progressSummary[sheet.name] = {
          solved: userProgress.solvedCount,
          total: totalQuestions,
          percentage:
            totalQuestions > 0
              ? Math.round((userProgress.solvedCount / totalQuestions) * 100)
              : 0,
        };
      });

      res.json({ progressSummary });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

  // Reset progress for a specific sheet
  static resetSheetProgress = async (req, res) => {
    try {
      const { sheetName } = req.params;
      const userId = req.user._id;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      user.progress[sheetName] = { solvedCount: 0, questions: [] };
      await user.save();

      res.json({ message: "Sheet progress reset successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
}

export default ProgressController;
