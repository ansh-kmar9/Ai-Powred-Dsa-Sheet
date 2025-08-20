import mongoose from "mongoose";
import User from "./src/models/User.js";
import Sheet from "./src/models/Sheet.js";

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/dsa-tracker");

async function testDatabase() {
  try {
    console.log("Testing database connection...");

    // Check if sheets exist
    const sheets = await Sheet.find({});
    console.log(`Found ${sheets.length} sheets in database`);

    // Check if any users exist
    const users = await User.find({});
    console.log(`Found ${users.length} users in database`);

    if (users.length > 0) {
      console.log("First user:", users[0].email);
      console.log("First user progress:", users[0].progress);
    }

    // Test creating a new user progress entry
    if (users.length > 0) {
      const user = users[0];
      console.log("Testing progress update...");

      // Initialize progress for DSA360 if it doesn't exist
      if (!user.progress["DSA360"]) {
        user.progress["DSA360"] = { solvedCount: 0, questions: [] };
      }

      // Add a test question
      const testQuestionId = "507f1f77bcf86cd799439011"; // Sample ObjectId
      user.progress["DSA360"].questions.push({
        questionId: testQuestionId,
        isSolved: true,
        solvedAt: new Date(),
      });
      user.progress["DSA360"].solvedCount++;

      await user.save();
      console.log("Progress updated successfully");
      console.log("Updated progress:", user.progress["DSA360"]);
    }
  } catch (error) {
    console.error("Database test error:", error);
  } finally {
    mongoose.connection.close();
  }
}

testDatabase();
