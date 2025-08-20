import mongoose from "mongoose";
import dotenv from "dotenv";
import Sheet from "../models/Sheet.js";

dotenv.config();

const testDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Check if sheets exist
    const sheets = await Sheet.find({});
    console.log(`Found ${sheets.length} sheets in database:`);

    sheets.forEach((sheet) => {
      console.log(`- ${sheet.name}: ${sheet.topics.length} topics`);
      sheet.topics.forEach((topic) => {
        console.log(`  - ${topic.name}: ${topic.questions.length} questions`);
      });
    });

    process.exit(0);
  } catch (error) {
    console.error("Database test failed:", error);
    process.exit(1);
  }
};

testDatabase();
