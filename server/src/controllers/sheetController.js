import Sheet from "../models/Sheet.js";

class SheetController {
  // Get all sheets with basic info
  static getAllSheets = async (req, res) => {
    try {
      const sheets = await Sheet.find({}, "name");
      res.json({ sheets });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

  // Get a specific sheet with all topics and questions
  static getSheetByName = async (req, res) => {
    try {
      const { sheetName } = req.params;
      const sheet = await Sheet.findOne({ name: sheetName });

      if (!sheet) {
        return res.status(404).json({ message: "Sheet not found" });
      }

      res.json({ sheet });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

  // Get sheet statistics
  static getSheetStats = async (req, res) => {
    try {
      const { sheetName } = req.params;
      const sheet = await Sheet.findOne({ name: sheetName });

      if (!sheet) {
        return res.status(404).json({ message: "Sheet not found" });
      }

      let totalQuestions = 0;
      let easyCount = 0;
      let mediumCount = 0;
      let hardCount = 0;

      sheet.topics.forEach((topic) => {
        topic.questions.forEach((question) => {
          totalQuestions++;
          switch (question.difficulty) {
            case "Easy":
              easyCount++;
              break;
            case "Medium":
              mediumCount++;
              break;
            case "Hard":
              hardCount++;
              break;
          }
        });
      });

      const stats = {
        totalQuestions,
        totalTopics: sheet.topics.length,
        difficulty: {
          easy: easyCount,
          medium: mediumCount,
          hard: hardCount,
        },
      };

      res.json({ stats });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

  // Create a new sheet (admin function)
  static createSheet = async (req, res) => {
    try {
      const { name, topics } = req.body;

      const existingSheet = await Sheet.findOne({ name });
      if (existingSheet) {
        return res.status(400).json({ message: "Sheet already exists" });
      }

      const sheet = new Sheet({ name, topics });
      await sheet.save();

      res.status(201).json({ message: "Sheet created successfully", sheet });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
}

export default SheetController;
