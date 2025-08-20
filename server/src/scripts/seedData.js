import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import Sheet from "../models/Sheet.js";

// Get the current file's directory and resolve the .env path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = join(__dirname, "../../.env");

dotenv.config({ path: envPath });

const seedData = [
  {
    name: "DSA360",
    topics: [
      {
        name: "Arrays",
        questions: [
          {
            title: "Two Sum",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/two-sum/",
          },
          {
            title: "Best Time to Buy and Sell Stock",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
          },
          {
            title: "3Sum",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/3sum/",
          },
          {
            title: "Container With Most Water",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/container-with-most-water/",
          },
          {
            title: "Trapping Rain Water",
            difficulty: "Hard",
            link: "https://leetcode.com/problems/trapping-rain-water/",
          },
        ],
      },
      {
        name: "Linked List",
        questions: [
          {
            title: "Reverse Linked List",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/reverse-linked-list/",
          },
          {
            title: "Merge Two Sorted Lists",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/merge-two-sorted-lists/",
          },
          {
            title: "Add Two Numbers",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/add-two-numbers/",
          },
          {
            title: "Remove Nth Node From End of List",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
          },
        ],
      },
      {
        name: "Dynamic Programming",
        questions: [
          {
            title: "Climbing Stairs",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/climbing-stairs/",
          },
          {
            title: "House Robber",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/house-robber/",
          },
          {
            title: "Longest Increasing Subsequence",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/longest-increasing-subsequence/",
          },
          {
            title: "Edit Distance",
            difficulty: "Hard",
            link: "https://leetcode.com/problems/edit-distance/",
          },
        ],
      },
    ],
  },
  {
    name: "SDE",
    topics: [
      {
        name: "Arrays",
        questions: [
          {
            title: "Maximum Subarray",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/maximum-subarray/",
          },
          {
            title: "Merge Intervals",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/merge-intervals/",
          },
          {
            title: "Rotate Image",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/rotate-image/",
          },
        ],
      },
      {
        name: "Strings",
        questions: [
          {
            title: "Valid Anagram",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/valid-anagram/",
          },
          {
            title: "Group Anagrams",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/group-anagrams/",
          },
          {
            title: "Minimum Window Substring",
            difficulty: "Hard",
            link: "https://leetcode.com/problems/minimum-window-substring/",
          },
        ],
      },
    ],
  },
  {
    name: "Blind75",
    topics: [
      {
        name: "Array",
        questions: [
          {
            title: "Two Sum",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/two-sum/",
          },
          {
            title: "Best Time to Buy and Sell Stock",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
          },
          {
            title: "Contains Duplicate",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/contains-duplicate/",
          },
          {
            title: "Product of Array Except Self",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/product-of-array-except-self/",
          },
          {
            title: "Maximum Subarray",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/maximum-subarray/",
          },
        ],
      },
      {
        name: "Binary",
        questions: [
          {
            title: "Sum of Two Integers",
            difficulty: "Medium",
            link: "https://leetcode.com/problems/sum-of-two-integers/",
          },
          {
            title: "Number of 1 Bits",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/number-of-1-bits/",
          },
          {
            title: "Counting Bits",
            difficulty: "Easy",
            link: "https://leetcode.com/problems/counting-bits/",
          },
        ],
      },
    ],
  },
  {
    name: "Interview",
    topics: [
      {
        name: "System Design",
        questions: [
          {
            title: "Design URL Shortener",
            difficulty: "Medium",
            link: "https://leetcode.com/discuss/interview-question/system-design/",
          },
          {
            title: "Design Chat System",
            difficulty: "Hard",
            link: "https://leetcode.com/discuss/interview-question/system-design/",
          },
        ],
      },
      {
        name: "Behavioral",
        questions: [
          {
            title: "Tell me about yourself",
            difficulty: "Easy",
            link: "#",
          },
          {
            title: "Why do you want to work here?",
            difficulty: "Medium",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    name: "Supreme",
    topics: [
      {
        name: "Advanced Arrays",
        questions: [
          {
            title: "Median of Two Sorted Arrays",
            difficulty: "Hard",
            link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
          },
          {
            title: "First Missing Positive",
            difficulty: "Hard",
            link: "https://leetcode.com/problems/first-missing-positive/",
          },
        ],
      },
      {
        name: "Advanced Trees",
        questions: [
          {
            title: "Serialize and Deserialize Binary Tree",
            difficulty: "Hard",
            link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
          },
          {
            title: "Binary Tree Maximum Path Sum",
            difficulty: "Hard",
            link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
          },
        ],
      },
    ],
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Clear existing data
    await Sheet.deleteMany({});
    console.log("Cleared existing sheets");

    // Insert seed data
    await Sheet.insertMany(seedData);
    console.log("Seed data inserted successfully");

    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedDatabase();
