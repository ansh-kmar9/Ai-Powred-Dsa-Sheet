import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  isSolved: {
    type: Boolean,
    default: false,
  },
});

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  questions: [questionSchema],
});

const sheetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    topics: [topicSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Sheet", sheetSchema);
