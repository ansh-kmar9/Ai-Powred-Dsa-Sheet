import mongoose from "mongoose";

const questionProgressSchema = new mongoose.Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  isSolved: {
    type: Boolean,
    default: false,
  },
  solvedAt: {
    type: Date,
  },
});

const sheetProgressSchema = new mongoose.Schema({
  solvedCount: {
    type: Number,
    default: 0,
  },
  questions: [questionProgressSchema],
});

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    picture: {
      type: String,
    },
    progress: {
      DSA360: {
        type: sheetProgressSchema,
        default: { solvedCount: 0, questions: [] },
      },
      SDE: {
        type: sheetProgressSchema,
        default: { solvedCount: 0, questions: [] },
      },
      Blind75: {
        type: sheetProgressSchema,
        default: { solvedCount: 0, questions: [] },
      },
      Interview: {
        type: sheetProgressSchema,
        default: { solvedCount: 0, questions: [] },
      },
      Supreme: {
        type: sheetProgressSchema,
        default: { solvedCount: 0, questions: [] },
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
