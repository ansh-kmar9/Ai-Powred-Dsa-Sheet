// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import { fileURLToPath } from "url";
// import { dirname, join } from "path";
// import Sheet from "../models/Sheet.js";

// // Get the current file's directory and resolve the .env path
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const envPath = join(__dirname, "../../.env");

// dotenv.config({ path: envPath });

// const seedData = [
//   {
//     name: "DSA360",
//     topics: [
//       {
//         name: "Arrays",
//         questions: [
//           {
//             title: "Two Sum",
//             difficulty: "Easy",
//             link: "https://leetcode.com/problems/two-sum/",
//           },
//           {
//             title: "Best Time to Buy and Sell Stock",
//             difficulty: "Easy",
//             link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
//           },
//           {
//             title: "3Sum",
//             difficulty: "Medium",
//             link: "https://leetcode.com/problems/3sum/",
//           },
//           {
//             title: "Container With Most Water",
//             difficulty: "Medium",
//             link: "https://leetcode.com/problems/container-with-most-water/",
//           },
//           {
//             title: "Trapping Rain Water",
//             difficulty: "Hard",
//             link: "https://leetcode.com/problems/trapping-rain-water/",
//           },
//         ],
//       },
//       {
//         name: "Linked List",
//         questions: [
//           {
//             title: "Reverse Linked List",
//             difficulty: "Easy",
//             link: "https://leetcode.com/problems/reverse-linked-list/",
//           },
//           {
//             title: "Merge Two Sorted Lists",
//             difficulty: "Easy",
//             link: "https://leetcode.com/problems/merge-two-sorted-lists/",
//           },
//           {
//             title: "Add Two Numbers",
//             difficulty: "Medium",
//             link: "https://leetcode.com/problems/add-two-numbers/",
//           },
//           {
//             title: "Remove Nth Node From End of List",
//             difficulty: "Medium",
//             link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
//           },
//         ],
//       },
//       {
//         name: "Dynamic Programming",
//         questions: [
//           {
//             title: "Climbing Stairs",
//             difficulty: "Easy",
//             link: "https://leetcode.com/problems/climbing-stairs/",
//           },
//           {
//             title: "House Robber",
//             difficulty: "Medium",
//             link: "https://leetcode.com/problems/house-robber/",
//           },
//           {
//             title: "Longest Increasing Subsequence",
//             difficulty: "Medium",
//             link: "https://leetcode.com/problems/longest-increasing-subsequence/",
//           },
//           {
//             title: "Edit Distance",
//             difficulty: "Hard",
//             link: "https://leetcode.com/problems/edit-distance/",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "SDE",
//     topics: [
//       {
//         name: "Arrays",
//         questions: [
//           {
//             title: "Maximum Subarray",
//             difficulty: "Easy",
//             link: "https://leetcode.com/problems/maximum-subarray/",
//           },
//           {
//             title: "Merge Intervals",
//             difficulty: "Medium",
//             link: "https://leetcode.com/problems/merge-intervals/",
//           },
//           {
//             title: "Rotate Image",
//             difficulty: "Medium",
//             link: "https://leetcode.com/problems/rotate-image/",
//           },
//         ],
//       },
//       {
//         name: "Strings",
//         questions: [
//           {
//             title: "Valid Anagram",
//             difficulty: "Easy",
//             link: "https://leetcode.com/problems/valid-anagram/",
//           },
//           {
//             title: "Group Anagrams",
//             difficulty: "Medium",
//             link: "https://leetcode.com/problems/group-anagrams/",
//           },
//           {
//             title: "Minimum Window Substring",
//             difficulty: "Hard",
//             link: "https://leetcode.com/problems/minimum-window-substring/",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Blind75",
//     topics: [
//       {
//         name: "Array",
//         questions: [
//           {
//             title: "Two Sum",
//             difficulty: "Easy",
//             link: "https://leetcode.com/problems/two-sum/",
//           },
//           {
//             title: "Best Time to Buy and Sell Stock",
//             difficulty: "Easy",
//             link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
//           },
//           {
//             title: "Contains Duplicate",
//             difficulty: "Easy",
//             link: "https://leetcode.com/problems/contains-duplicate/",
//           },
//           {
//             title: "Product of Array Except Self",
//             difficulty: "Medium",
//             link: "https://leetcode.com/problems/product-of-array-except-self/",
//           },
//           {
//             title: "Maximum Subarray",
//             difficulty: "Easy",
//             link: "https://leetcode.com/problems/maximum-subarray/",
//           },
//         ],
//       },
//       {
//         name: "Binary",
//         questions: [
//           {
//             title: "Sum of Two Integers",
//             difficulty: "Medium",
//             link: "https://leetcode.com/problems/sum-of-two-integers/",
//           },
//           {
//             title: "Number of 1 Bits",
//             difficulty: "Easy",
//             link: "https://leetcode.com/problems/number-of-1-bits/",
//           },
//           {
//             title: "Counting Bits",
//             difficulty: "Easy",
//             link: "https://leetcode.com/problems/counting-bits/",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Interview",
//     topics: [
//       {
//         name: "System Design",
//         questions: [
//           {
//             title: "Design URL Shortener",
//             difficulty: "Medium",
//             link: "https://leetcode.com/discuss/interview-question/system-design/",
//           },
//           {
//             title: "Design Chat System",
//             difficulty: "Hard",
//             link: "https://leetcode.com/discuss/interview-question/system-design/",
//           },
//         ],
//       },
//       {
//         name: "Behavioral",
//         questions: [
//           {
//             title: "Tell me about yourself",
//             difficulty: "Easy",
//             link: "#",
//           },
//           {
//             title: "Why do you want to work here?",
//             difficulty: "Medium",
//             link: "#",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Supreme",
//     topics: [
//       {
//         name: "Advanced Arrays",
//         questions: [
//           {
//             title: "Median of Two Sorted Arrays",
//             difficulty: "Hard",
//             link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
//           },
//           {
//             title: "First Missing Positive",
//             difficulty: "Hard",
//             link: "https://leetcode.com/problems/first-missing-positive/",
//           },
//         ],
//       },
//       {
//         name: "Advanced Trees",
//         questions: [
//           {
//             title: "Serialize and Deserialize Binary Tree",
//             difficulty: "Hard",
//             link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
//           },
//           {
//             title: "Binary Tree Maximum Path Sum",
//             difficulty: "Hard",
//             link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
//           },
//         ],
//       },
//     ],
//   },
// ];

// const seedDatabase = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("Connected to MongoDB");

//     // Clear existing data
//     await Sheet.deleteMany({});
//     console.log("Cleared existing sheets");

//     // Insert seed data
//     await Sheet.insertMany(seedData);
//     console.log("Seed data inserted successfully");

//     process.exit(0);
//   } catch (error) {
//     console.error("Seeding failed:", error);
//     process.exit(1);
//   }
// };

// seedDatabase();

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

// Add your new topics here (you can add one by one too)
const newTopics = [
  {
    name: "Programming Fundamentals",
    questions: [
      {
        title: `Say "Hello, World!" with C++`,
        difficulty: "Easy",
        link: "https://www.hackerrank.com/challenges/cpp-hello-world/problem",
      },
      {
        title: "Basic Data Types",
        difficulty: "Easy",
        link: "https://www.hackerrank.com/challenges/c-tutorial-basic-data-types/problem",
      },
      {
        title: "Input and Output",
        difficulty: "Easy",
        link: "https://www.hackerrank.com/challenges/cpp-input-and-output/problem",
      },
      {
        title: "Conditional Statements (if-else)",
        difficulty: "Easy",
        link: "https://www.hackerrank.com/challenges/c-tutorial-conditional-if-else/problem",
      },
      {
        title: "Switch Case Statement",
        difficulty: "Easy",
        link: "https://www.hackerrank.com/challenges/c-tutorial-switch/problem",
      },
      {
        title: "Number System Conversion (decimal to binary)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/program-decimal-binary-conversion/",
      },
      {
        title: "Number System Conversion (binary to decimal)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/program-binary-decimal-conversion/",
      },
      {
        title: "Prime Number",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/c-program-to-check-whether-a-number-is-prime-or-not/",
      },
      {
        title: "Factorial",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/program-for-factorial-of-a-number/",
      },
      {
        title: "Reverse Integer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-integer/",
      },
      {
        title: "Set Kth Bit",
        difficulty: "Easy",
        link: "https://practice.geeksforgeeks.org/problems/set-kth-bit-1587115620/1",
      },
      {
        title: "Convert The Temperature",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-the-temperature/",
      },
      {
        title: "Count all Set Bits",
        difficulty: "Medium",
        link: "https://practice.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1",
      },
      {
        title: "Create Number Using Digits",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/form-minimum-number-from-given-sequence/",
      },
    ],
  },
  {
    name: "Patterns",
    questions: [
      {
        title: "Solid Square Pattern",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/computer-science-fundamentals/program-to-print-solid-and-hollow-square-patterns/", // includes both solid and hollow square patterns :contentReference[oaicite:0]{index=0}
      },
      {
        title: "Solid Rectangle Pattern",
        difficulty: "Easy",
        link: "https://amanxai.com/2020/10/31/pattern-programming-using-c-programming-language/", // examples include rectangle patterns :contentReference[oaicite:1]{index=1}
      },
      {
        title: "Hollow Square Pattern",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/computer-science-fundamentals/program-to-print-solid-and-hollow-square-patterns/", // same page includes hollow square :contentReference[oaicite:2]{index=2}
      },
      {
        title: "Hollow Rectangle Pattern",
        difficulty: "Easy",
        link: "https://amanxai.com/2020/10/31/pattern-programming-using-c-programming-language/", // covers hollow rectangle :contentReference[oaicite:3]{index=3}
      },
      {
        title: "Half Pyramid Pattern",
        difficulty: "Easy",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // includes half pyramid :contentReference[oaicite:4]{index=4}
      },
      {
        title: "Hollow Half Pyramid Pattern",
        difficulty: "Easy",
        link: "https://amanxai.com/2020/10/31/pattern-programming-using-c-programming-language/", // includes hollow half pyramid example :contentReference[oaicite:5]{index=5}
      },
      {
        title: "Inverted Half Pyramid Pattern",
        difficulty: "Easy",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // includes inverted half pyramid :contentReference[oaicite:6]{index=6}
      },
      {
        title: "Inverted Hollow Half Pyramid Pattern",
        difficulty: "Easy",
        link: "https://amanxai.com/2020/10/31/pattern-programming-using-c-programming-language/", // covers inverted hollow half pyramid :contentReference[oaicite:7]{index=7}
      },
      {
        title: "Numeric Half Pyramid Pattern",
        difficulty: "Easy",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // includes numeric half pyramid :contentReference[oaicite:8]{index=8}
      },
      {
        title: "Inverted Numeric Half Pyramid Pattern",
        difficulty: "Easy",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // includes inverted numeric half pyramid :contentReference[oaicite:9]{index=9}
      },
      {
        title: "Full Pyramid Pattern",
        difficulty: "Medium",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // includes full pyramid :contentReference[oaicite:10]{index=10}
      },
      {
        title: "Inverted Full Pyramid Pattern",
        difficulty: "Medium",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // includes inverted full pyramid :contentReference[oaicite:11]{index=11}
      },
      {
        title: "Diamond Pattern",
        difficulty: "Hard",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // includes diamond pattern examples :contentReference[oaicite:12]{index=12}
      },
      {
        title: "Hollow Pyramid Pattern",
        difficulty: "Medium",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // includes hollow pyramid :contentReference[oaicite:13]{index=13}
      },
      {
        title: "Inverted Hollow Full Pyramid Pattern",
        difficulty: "Medium",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // includes inverted hollow pyramid :contentReference[oaicite:14]{index=14}
      },
      {
        title: "Hollow Diamond Pattern",
        difficulty: "Hard",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // includes hollow diamond example :contentReference[oaicite:15]{index=15}
      },
      {
        title: "Mixed Pyramid Pattern",
        difficulty: "Hard",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // includes mixed pyramid patterns :contentReference[oaicite:16]{index=16}
      },
      {
        title: "Fancy 12 Pattern",
        difficulty: "Easy",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // covers fancy numbered pyramids :contentReference[oaicite:17]{index=17}
      },
      {
        title: "Full Fancy 12 Pattern",
        difficulty: "Medium",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // full fancy pattern :contentReference[oaicite:18]{index=18}
      },
      {
        title: "ABCBA Pattern",
        difficulty: "Easy",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // includes ABCBA pattern :contentReference[oaicite:19]{index=19}
      },
      {
        title: "Numeric Hollow Half Pyramid Pattern",
        difficulty: "Easy",
        link: "https://amanxai.com/2020/10/31/pattern-programming-using-c-programming-language/", // includes numeric hollow patterns :contentReference[oaicite:20]{index=20}
      },
      {
        title: "Numeric Hollow Inverted Half Pyramid Pattern",
        difficulty: "Easy",
        link: "https://amanxai.com/2020/10/31/pattern-programming-using-c-programming-language/", // includes numeric hollow inverted half pyramid :contentReference[oaicite:21]{index=21}
      },
      {
        title: "Numeric Palindrome Equilateral Pyramid Pattern",
        difficulty: "Medium",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // includes palindrome pattern :contentReference[oaicite:22]{index=22}
      },
      {
        title: "Solid Half Diamond Pattern",
        difficulty: "Easy",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // includes solid half diamond :contentReference[oaicite:23]{index=23}
      },
      {
        title: "Fancy Pattern 1",
        difficulty: "Medium",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // fancy pattern examples :contentReference[oaicite:24]{index=24}
      },
      {
        title: "Fancy Pattern 2",
        difficulty: "Medium",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // more fancy patterns :contentReference[oaicite:25]{index=25}
      },
      {
        title: "Fancy Pattern 3",
        difficulty: "Medium",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // even more fancy patterns :contentReference[oaicite:26]{index=26}
      },
      {
        title: "Floyd's Triangle Pattern",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/cpp/cpp-program-to-print-floyds-triangle/", // detailed Floyd's Triangle C++ program :contentReference[oaicite:27]{index=27}
      },
      {
        title: "Pascal's Triangle Pattern",
        difficulty: "Easy",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // includes Pascal's triangle :contentReference[oaicite:28]{index=28}
      },
      {
        title: "Butterfly Pattern",
        difficulty: "Medium",
        link: "https://www.programiz.com/cpp-programming/examples/pyramid-pattern", // includes butterfly pattern :contentReference[oaicite:29]{index=29}
      },
    ],
  },
  {
    name: "Arrays",
    questions: [
      {
        title: "Linear Search Algorithm",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/cpp/cpp-program-for-linear-search/", // real C++ implementation with explanation :contentReference[oaicite:0]{index=0}
      },
      {
        title: "Find max/largest element in array",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/dsa/program-to-find-largest-element-in-an-array/", // real example and code :contentReference[oaicite:1]{index=1}
      },
      {
        title: "Count the Zeros",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/count-zeroes-on-either-side-of-a-binary-array/", // real C++ problem for counting zeros
      },
      {
        title: "Swap Two Numbers",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/program-swap-two-numbers-without-using-temporary-variable/", // real example swaps two numbers :contentReference[oaicite:2]{index=2}
      },
      {
        title: "Reverse Array",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/", // official tutorial for reversing an array
      },
      {
        title: "Single Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/single-number/", // classic LeetCode practice (valid)
      },
      {
        title: "Sort 0s and 1s",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/", // covers sort of 0s and 1s (and 2s) :contentReference[oaicite:3]{index=3}
      },
      {
        title: "Make Pairs",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/count-pairs-whose-sum-is-equal-to-k/", // count pairs with sum = K :contentReference[oaicite:4]{index=4}
      },
      {
        title: "Lower triangular and Upper triangular pair of an array",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/program-print-upper-triangular-lower-triangular-matrix/", // example for matrix triangular printing
      },
      {
        title: "Two Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/", // standard LeetCode practice
      },
      {
        title: "Three Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum/", // popular LeetCode medium problem
      },
      {
        title: "Rotate Array",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/array-rotation/", // tutorial for rotating array :contentReference[oaicite:5]{index=5}
      },
      {
        title: "Search an element in 2D array (for practice)",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/search-in-row-wise-and-column-wise-sorted-matrix/", // search in 2D matrix
      },
      {
        title: "Find minimum value in 2d array (for practice)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/find-minimum-element-in-a-2d-array/", // tutorial for min in 2D array
      },
      {
        title: "Find maximum value in 2d array",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/find-maximum-element-in-a-matrix/", // tutorial for max in 2D array
      },
      {
        title: "Row Wise Sum in 2D array (for practice)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/sum-of-row-elements-of-a-matrix/", // sum rows
      },
      {
        title: "Column Wise Sum in 2D array (for practice)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/sum-of-column-elements-of-a-matrix/", // sum columns
      },
      {
        title: "Diagonal Sum in 2D array (for practice)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/sum-of-primary-and-secondary-diagonal-elements-of-a-matrix/", // diagonal sums
      },
      {
        title: "Transpose of 2D matrix (for practice)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/program-to-find-transpose-of-a-matrix/", // matrix transpose
      },
      {
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", // LeetCode practice
      },
      {
        title: "Find Pivot Index",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-pivot-index/", // LeetCode practice
      },
      {
        title: "Missing Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/missing-number/", // LeetCode practice
      },
      {
        title: "Maximum Average Subarray I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-average-subarray-i/", // LeetCode practice
      },
      {
        title: "Sort Colors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-colors/", // LeetCode medium problem
      },
      {
        title:
          "Move Negative Nos. to Left of Array (Dutch National Flag Algorithm)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/move-negative-numbers-end-array/", // demonstrates DNF variant
      },
      {
        title: "Find Duplicate Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-duplicate-number/", // LeetCode practice
      },
      {
        title: "Missing Elements from an array with duplicates (for practice)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/find-the-missing-number/", // finds missing number with duplicates
      },
      {
        title: "First Repeating Element (for practice)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/first-repeating-element-in-an-array/", // tutorial finds first repeating
      },
      {
        title: "Common in 3 sorted arrays (for practice)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/find-common-elements-in-three-sorted-arrays/", // common in three sorted
      },
      {
        title: "Wave Print a Matrix",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/print-matrix-in-wave-form/", // wave print pattern
      },
      {
        title: "Spiral Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix/", // LeetCode spiral
      },
      {
        title: "Add two numbers represented by two arrays (for practice)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/sum-two-numbers-represented-array-digits/", // sum arrays as numbers
      },
      {
        title: "Factorial of Large Numbers",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/factorial-large-number/", // large factorial
      },
      {
        title: "Two's Complement (for practice)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/twos-complement-of-a-number/", // two’s complement
      },
      {
        title: "Rotate Image",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-image/", // LeetCode rotate image
      },
      {
        title: "Maximum Subarray (Kadane's Algorithm)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-subarray/", // LeetCode practice
      },
    ],
  },
  {
    name: "Searching & Sorting",
    questions: [
      {
        title: "Binary Search",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/dsa/binary-search/", // iterative & recursive C++ implementations :contentReference[oaicite:0]{index=0}
      },
      {
        title: "Find First and Last Position of Element in Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", // LeetCode problem
      },
      {
        title: "Missing Number (using binary search)",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/missing-number/", // classic LeetCode practice :contentReference[oaicite:1]{index=1}
      },
      {
        title: "Peak Index in a Mountain Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/", // LeetCode Problem 852 :contentReference[oaicite:2]{index=2}
      },
      {
        title: "Search in Rotated Sorted Array (Pivot Index)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", // rotated array search
      },
      {
        title: "Sqrt(x) (Search space pattern)",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sqrtx/", // LeetCode problem
      },
      {
        title: "Search a 2D Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix/", // matrix binary search
      },
      {
        title: "Find Quotient (for practice)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/divide-two-integers/", // related problem: divide two integers
      },
      {
        title: "Search in a Nearly Sorted Array",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/search-nearly-sorted-array/", // GeeksforGeeks tutorial
      },
      {
        title: "Single Element in a Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-element-in-a-sorted-array/", // LeetCode problem
      },
      {
        title: "Odd Occurring Element",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/find-the-number-occurring-odd-number-of-times/", // GF tutorial
      },
      {
        title: "Square root with precision",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/square-root-of-a-perfect-square/", // GF approximation methods
      },
      {
        title: "Binary Search with precision",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/binomial-series-root-finding-methods/", // GF detailed methods
      },
      {
        title: "Divide Two Integers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/divide-two-integers/", // LeetCode problem
      },
      {
        title: "Bubble Sort (practice)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/bubble-sort/", // GF bubble sort tutorial
      },
      {
        title: "Selection Sort",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/selection-sort/", // GF selection sort tutorial
      },
      {
        title: "Insertion Sort (practice)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/insertion-sort/", // GF insertion sort tutorial
      },
      {
        title: "K-diff Pairs in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-diff-pairs-in-an-array/", // LeetCode problem
      },
      {
        title: "Find K Closest Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-closest-elements/", // LeetCode problem
      },
      {
        title: "Exponential Search and Unbounded Binary Search",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/exponential-search/", // GF exponential search :contentReference[oaicite:3]{index=3}
      },
      {
        title: "Allocate Minimum Pages (Book Allocation Problem)",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/allocate-minimum-number-pages/", // GF book allocation tutorial
      },
      {
        title: "The Painter's Partition Problem-II",
        difficulty: "Hard",
        link: "https://www.geeksforgeeks.org/painters-partition-problem/", // GF painter's partition problem
      },
      {
        title: "Aggressive Cows",
        difficulty: "Hard",
        link: "https://www.spoj.com/problems/AGGRCOW/", // SPOJ problem
      },
      {
        title: "EKO spo j",
        difficulty: "Hard",
        link: "https://www.spoj.com/problems/EKO/", // SPOJ problem
      },
      {
        title: "PRATA spo j",
        difficulty: "Hard",
        link: "https://www.spoj.com/problems/PRATA/", // SPOJ problem
      },
      {
        title: "Koko Eating Bananas",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/koko-eating-bananas/", // LeetCode problem
      },
      {
        title: "Minimum Number of Days to Make m Bouquets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/", // LeetCode problem
      },
    ],
  },
  {
    name: "Character Arrays & Strings",
    questions: [
      {
        title: "Remove all Adjacent Duplicates in a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/", // LeetCode practice problem :contentReference[oaicite:0]{index=0}
      },
      {
        title: "Remove all occurrences of a substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-all-occurrences-of-a-substring/", // LeetCode practice problem :contentReference[oaicite:1]{index=1}
      },
      {
        title: "Valid Palindrome II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome-ii/", // LeetCode practice :contentReference[oaicite:2]{index=2}
      },
      {
        title: "Palindromic Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindromic-substrings/", // LeetCode practice :contentReference[oaicite:3]{index=3}
      },
      {
        title: "Decode the Message",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/decode-the-message/", // LeetCode practice
      },
      {
        title: "Minimum Amount of Time to Collect Garbage",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/", // LeetCode practice
      },
      {
        title: "Custom Sort String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/custom-sort-string/", // LeetCode practice :contentReference[oaicite:4]{index=4}
      },
      {
        title: "Find and Replace Pattern",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-and-replace-pattern/", // LeetCode practice :contentReference[oaicite:5]{index=5}
      },
      {
        title: "Valid Anagram",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-anagram/", // LeetCode practice :contentReference[oaicite:6]{index=6}
      },
      {
        title: "Reverse Only Letters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-only-letters/", // LeetCode practice
      },
      {
        title: "Longest Common Prefix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-common-prefix/", // LeetCode practice :contentReference[oaicite:7]{index=7}
      },
      {
        title: "Reverse Vowels of a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-vowels-of-a-string/", // LeetCode practice
      },
      {
        title: "Isomorphic Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/isomorphic-strings/", // LeetCode practice :contentReference[oaicite:8]{index=8}
      },
      {
        title: "Reorganize Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorganize-string/", // LeetCode practice :contentReference[oaicite:9]{index=9}
      },
      {
        title: "Group Anagrams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-anagrams/", // LeetCode practice :contentReference[oaicite:10]{index=10}
      },
      {
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-substring/", // LeetCode practice :contentReference[oaicite:11]{index=11}
      },
      {
        title: "Find the Index of the First Occurrence in a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/strstr/", // LeetCode 'implement strstr' problem :contentReference[oaicite:12]{index=12}
      },
      {
        title: "String to Integer (atoi)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/string-to-integer-atoi/", // LeetCode practice :contentReference[oaicite:13]{index=13}
      },
      {
        title: "String Compression",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/string-compression/", // LeetCode practice
      },
      {
        title: "Integer to Roman",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/integer-to-roman/", // LeetCode practice :contentReference[oaicite:14]{index=14}
      },
      {
        title: "Zigzag Conversion",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/zigzag-conversion/", // LeetCode practice :contentReference[oaicite:15]{index=15}
      },
      {
        title: "Largest Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-number/", // LeetCode practice :contentReference[oaicite:16]{index=16}
      },
      {
        title: "Minimum Time Difference",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-time-difference/", // LeetCode practice
      },
      {
        title: "Number of Laser Beams in a Bank",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-laser-beams-in-a-bank/", // LeetCode practice
      },
      {
        title: "Remove all Adjacent Duplicates in String II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/", // LeetCode practice :contentReference[oaicite:17]{index=17}
      },
      {
        title: "Sum of Beauty of All Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/", // LeetCode practice :contentReference[oaicite:18]{index=18}
      },
      {
        title: "Sherlock and Anagrams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sherlock-and-anagrams/", // LeetCode practice
      },
      {
        title: "Reverse Words in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-words-in-a-string/", // LeetCode practice :contentReference[oaicite:19]{index=19}
      },
      {
        title: "Text Justification",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/text-justification/", // LeetCode practice :contentReference[oaicite:20]{index=20}
      },
    ],
  },
  {
    name: "Basics Math & Pointers",
    questions: [
      {
        title: "C++ Pointers (Incrementing a variable) - (for practice)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/cpp-pointers/", // Comprehensive tutorial on pointers, including incrementing/dereferencing examples :contentReference[oaicite:0]{index=0}
      },
      {
        title: "Count Primes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-primes/", // LeetCode practice problem for counting primes below n :contentReference[oaicite:1]{index=1}
      },
      {
        title: "Fast Exponentiation",
        difficulty: "Medium",
        link: "https://cp-algorithms.com/algebra/binary-exp.html", // Elegant and efficient exponentiation by squaring algorithm :contentReference[oaicite:2]{index=2}
      },
      {
        title: "GCD of two numbers",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/c-program-find-gcd-two-numbers/", // Standard Euclidean algorithm implementation :contentReference[oaicite:3]{index=3}
      },
      {
        title: "Modular Exponentiation for large numbers",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/dsa/modular-exponentiation-power-in-modular-arithmetic/", // Efficient mod exponentiation in C++ :contentReference[oaicite:4]{index=4}
      },
      {
        title: "Sieve of Eratosthenes",
        difficulty: "Easy",
        link: "https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes", // Classic sieve algorithm for listing primes :contentReference[oaicite:5]{index=5}
      },
      {
        title: "Segmented Sieve",
        difficulty: "Easy",
        link: "https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Segmented_sieve", // Explanation of segmented sieve method for large ranges :contentReference[oaicite:6]{index=6}
      },
      {
        title: "Product of primes",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/cpp-program-to-print-prime-numbers-pythagorean-triple/", // Demonstrates multiple prime operations, can be adapted to product-of-primes logic ﹙GfG doesn't have an exact 'product of primes' example but this can be a solid starting point﹚ :contentReference[oaicite:7]{index=7}
      },
    ],
  },
  {
    name: "Recursion",
    questions: [
      {
        title: "Factorial",
        difficulty: "Easy",
        link: "https://www.programiz.com/cpp-programming/examples/factorial-recursion",
      },
      {
        title: "Fibonacci Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fibonacci-number/",
      },
      {
        title: "Basic Array Operations",
        difficulty: "Easy",
        link: "https://www.programiz.com/cpp-programming/recursion",
      },
      {
        title: "Binary Search",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/binary-search/",
      },
      {
        title: "Print Subsequence",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/print-subsequences-string/",
      },
      {
        title: "House Robber",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber/",
      },
      {
        title: "Coin Change",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change/",
      },
      {
        title: "Last Occurrence of Character",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/last-occurrence-of-x-in-a-linked-list-iterative-and-recursive/",
      },
      {
        title: "Reverse a String",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/write-a-program-to-reverse-a-string-using-recursion/",
      },
      {
        title: "Add Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-strings/",
      },
      {
        title: "Check Palindrome",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/check-if-a-string-is-palindrome-or-not-using-recursion/",
      },
      {
        title: "Print All Subarrays",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/program-for-recursive-print-subarrays/",
      },
      {
        title: "Remove All Occurrences of a Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-all-occurrences-of-a-substring/",
      },
      {
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        title: "Integer to English Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/integer-to-english-words/",
      },
      {
        title: "Wildcard Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/wildcard-matching/",
      },
      {
        title: "Number of Dice Rolls with Target Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/",
      },
      {
        title: "Perfect Squares",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/perfect-squares/",
      },
      {
        title: "Minimum Cost for Tickets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-for-tickets/",
      },
      {
        title: "House Robber II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber-ii/",
      },
      {
        title: "Count Derangements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-derangements/",
      },
      {
        title: "Painting the Fence",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/painting-fence-algorithm/",
      },
      {
        title: "Edit Distance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/edit-distance/",
      },
      {
        title: "Maximal Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximal-square/",
      },
      {
        title: "Partition Equal Subset Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-equal-subset-sum/",
      },
      {
        title: "Minimize the Difference",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/closest-subsequence-sum/",
      },
      {
        title: "Jump Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game/",
      },
      {
        title: "Jump Game II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game-ii/",
      },
      {
        title: "Triangle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/triangle/",
      },
    ],
  },
  {
    name: "Divide and Conquer & Backtracking",
    questions: [
      {
        title: "Merge Sort",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-an-array/",
      },
      {
        title: "Quick Sort",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/quick-sort/",
      },
      {
        title: "Rat in a Maze Problem - I",
        difficulty: "Medium",
        link: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
      },
      {
        title: "Permutations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations/",
      },
      {
        title: "N Queens",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/n-queens/",
      },
      {
        title: "Sudoku Solver",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sudoku-solver/",
      },
      {
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      },
      {
        title: "Generate Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/generate-parentheses/",
      },
      {
        title: "Combinations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combinations/",
      },
      {
        title: "Word Search",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-search/",
      },
      {
        title: "Matchsticks to Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/matchsticks-to-square/",
      },
      {
        title: "Merge Sort: Count Inversions",
        difficulty: "Hard",
        link: "https://practice.geeksforgeeks.org/problems/inversion-of-array/0",
      },
      {
        title: "Sort an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-an-array/",
      },
      {
        title: "Merge Two Sorted Arrays Without Extra Space",
        difficulty: "Hard",
        link: "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1",
      },
      {
        title: "Maximum Subarray (Divide and Conquer)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        title: "Combination Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum/",
      },
      {
        title: "Combination Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-ii/",
      },
      {
        title: "Permutations II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations-ii/",
      },
      {
        title: "Beautiful Arrangement",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/beautiful-arrangement/",
      },
      {
        title: "Distribute Repeating Integers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/distribute-repeating-integers/",
      },
    ],
  },
  {
    name: "OOPs Concept",
    questions: [
      {
        title: "How to Create Objects in C++",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/constructors-c/",
      },
      {
        title: "Encapsulation",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/encapsulation-in-c/",
      },
      {
        title: "Inheritance",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/inheritance-in-c/",
      },
      {
        title: "Polymorphism",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/polymorphism-in-c/",
      },
      {
        title: "Abstraction",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/abstraction-in-c/",
      },
      {
        title: "Miscellaneous Concepts",
        difficulty: "Hard",
        link: "https://www.geeksforgeeks.org/cpp-oops-concepts/",
      },
    ],
  },
  {
    name: "Linked List",
    questions: [
      {
        title: "Linked List Insertion At Head",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/linked-list-set-2-inserting-a-node/",
      },
      {
        title: "Print Linked List Elements",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/linked-list-set-1-introduction/",
      },
      {
        title: "Linked List Insertion At Tail",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/linked-list-set-2-inserting-a-node/",
      },
      {
        title: "Linked List Insertion At Position",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/linked-list-set-2-inserting-a-node/",
      },
      {
        title: "Search in Linked List",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/search-an-element-in-a-linked-list-iterative-and-recursive/",
      },
      {
        title: "Deletion of Node in Single Linked List",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/deletion-in-linked-list/",
      },
      {
        title: "Doubly Linked List Insertion",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/doubly-linked-list/",
      },
      {
        title: "Delete Node in Doubly Linked List",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/delete-a-node-in-a-doubly-linked-list/",
      },
      {
        title: "Reverse Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        title: "Middle of the Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/middle-of-the-linked-list/",
      },
      {
        title: "Palindrome Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-linked-list/",
      },
      {
        title: "Check Linked List Cycle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        title: "Remove Duplicates from Sorted List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
      },
      {
        title: "Sort a Linked List of 0s 1s and 2s",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/sort-a-linked-list-of-0s-1s-or-2s/",
      },
      {
        title: "Add 1 to a Linked List Number",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/add-1-to-a-number-represented-as-linked-list/",
      },
      {
        title: "Reverse Nodes in k-Group",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
      },
      {
        title: "Add 1 to Linked List Using Recursion",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/add-1-to-a-number-represented-as-linked-list/",
      },
      {
        title: "Add Two Numbers Represented by Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers/",
      },
      {
        title: "Linked List Cycle II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/linked-list-cycle-ii/",
      },
      {
        title: "Split Linked List in Parts",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/split-linked-list-in-parts/",
      },
      {
        title: "Flatten a Multilevel Doubly Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
      },
      {
        title: "Remove Loop in Linked List",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/detect-and-remove-loop-in-a-linked-list/",
      },
      {
        title: "Delete N Nodes After M Nodes of a Linked List",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/delete-n-nodes-after-m-nodes-of-a-linked-list/",
      },
      {
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        title: "Get Node Value",
        difficulty: "Easy",
        link: "https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail/problem",
      },
      {
        title: "Intersection of Two Linked Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
      },
      {
        title: "Flattening a Linked List",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/flattening-a-linked-list/",
      },
      {
        title: "Copy List with Random Pointer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
      },
      {
        title: "Rotate List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-list/",
      },
      {
        title:
          "Find the Minimum and Maximum Number of Nodes Between Critical Points",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/",
      },
      {
        title: "Merge Nodes in Between Zeros",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-nodes-in-between-zeros/",
      },
      {
        title: "Odd Even Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/odd-even-linked-list/",
      },
      {
        title: "Double a Number Represented as a Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/",
      },
      {
        title: "Remove Zero Sum Consecutive Nodes from Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/",
      },
      {
        title: "Swapping Nodes in a Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/swapping-nodes-in-a-linked-list/",
      },
      {
        title: "Sort List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-list/",
      },
    ],
  },
  {
    name: "Stack",
    questions: [
      {
        title: "Stack Implementation",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/cpp/stack-implementation-in-cpp/", // Detailed guide to implementing a stack in C++ :contentReference[oaicite:0]{index=0}
      },
      {
        title: "Implement Two Stacks in an Array",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/implement-two-stacks-in-an-array/", // GeeksforGeeks implementation :contentReference[oaicite:1]{index=1}
      },
      {
        title: "Reverse a String Using Stack",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/reverse-a-string-using-stack/", // GfG tutorial
      },
      {
        title: "Insert Element at Bottom of Stack",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/insert-an-element-at-the-bottom-of-a-stack/", // GfG example
      },
      {
        title: "Check If Stack Is Sorted",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/check-if-given-stack-elements-can-be-sorted-using-one-stack/", // GfG article
      },
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-parentheses/", // LeetCode classic
      },
      {
        title: "Next Smaller Element",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/find-the-next-smaller-element-on-left-side-in-an-array/", // GfG stack application
      },
      {
        title: "Prev Smaller Element",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/previous-greater-element/", // GfG analog example, can adapt
      },
      {
        title: "Reverse a Stack",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/how-to-sort-a-stack-using-recursion/", // GfG reversal via recursion (stack manipulation)
      },
      {
        title: "Sorted Insert in Stack",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/sort-a-stack-using-recursion/", // GfG tutorial
      },
      {
        title: "Check Expression for Redundant Brackets",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/expression-contains-redundant-bracket-not/", // GfG example
      },
      {
        title: "Largest Rectangle in Histogram",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", // LeetCode problem
      },
      {
        title: "Min Stack",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/min-stack/", // LeetCode
      },
      {
        title: "Sum of Subarray Minimums",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-subarray-minimums/", // LeetCode
      },
      {
        title: "Sum of Subarray Ranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-subarray-ranges/", // LeetCode
      },
      {
        title: "Basic Calculator",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/basic-calculator/", // LeetCode
      },
      {
        title: "Minimum Bracket Reversal",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/minimum-bracket-reversals-needed-to-make-an-expression-balanced/", // GfG
      },
      {
        title: "Remove Adjacent Duplicates in String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/", // LeetCode
      },
      {
        title: "Celebrity Problem",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/the-celebrity-problem/", // GfG
      },
      {
        title: "Next Greater Node In Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-node-in-linked-list/", // LeetCode with explanation :contentReference[oaicite:2]{index=2}
      },
      {
        title: "Online Stock Span",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/online-stock-span/", // LeetCode
      },
      {
        title: "Decode String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-string/", // LeetCode
      },
      {
        title: "Car Fleet",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/car-fleet/", // LeetCode
      },
      {
        title: "Car Fleet II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/car-fleet-ii/", // LeetCode
      },
      {
        title: "Simplify Path",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/simplify-path/", // LeetCode
      },
      {
        title: "Maximal Rectangle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximal-rectangle/", // LeetCode
      },
      {
        title: "Daily Temperatures",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/daily-temperatures/", // LeetCode
      },
      {
        title: "Remove K Digits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-k-digits/", // LeetCode
      },
      {
        title: "Minimum Add to Make Parentheses Valid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/", // LeetCode
      },
      {
        title: "Longest Valid Parentheses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-valid-parentheses/", // LeetCode
      },
      {
        title: "Asteroid Collision",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/asteroid-collision/", // LeetCode
      },
      {
        title: "Design Browser History",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-browser-history/", // LeetCode
      },
    ],
  },
  {
    name: "Queue",
    questions: [
      {
        title: "Implement Queue using array",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/dsa/array-implementation-of-queue-simple/",
      },
      {
        title: "Deque Implementations",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/deque-set-1-introduction-applications/",
      },
      {
        title: "Implement Circular Queue (for practice)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-circular-queue/",
      },
      {
        title: "Implement Circular Deque",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/",
      },
      {
        title: "Reverse a Queue",
        difficulty: "Easy",
        link: "https://practice.geeksforgeeks.org/problems/queue-reversal/1",
      },
      {
        title: "Reverse in K Group (for practice)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/dsa/reversing-first-k-elements-queue/",
      },
      {
        title: "Interleave the First Half of the Queue with Second Half",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/problems/interleave-the-first-half-of-the-queue-with-second-half/1",
      },
      {
        title: "First negative in every window of size k",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1",
      },
      {
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        link: "https://www.geeksforgeeks.org/dsa/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/",
      },
      {
        title: "First non-repeating character in a stream",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream1216/1",
      },
      {
        title: "Gas Station",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/gas-station/",
      },
      {
        title: "Flatten Nested List Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-nested-list-iterator/",
      },
      {
        title: "Dota2 Senate",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/dota2-senate/",
      },
      {
        title: "Steps by Knight",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/problems/steps-by-knight5927/1",
      },
      {
        title: "Implement K queues in an array (for practice)",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/efficiently-implement-k-queues-single-array/",
      },
      {
        title: "Implement Queue using Stacks",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-queue-using-stacks/",
      },
      {
        title: "Implement Stack using Queues",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/implement-stack-using-queue/",
      },
      {
        title: "Sum of minimum and maximum elements of all subarrays of size k",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/sum-minimum-maximum-elements-subarrays-size-k/",
      },
      {
        title: "Number of Recent Calls",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-recent-calls/",
      },
      {
        title: "Number of People Aware of a Secret",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-people-aware-of-a-secret/",
      },
      {
        title: "Find the Winner of the Circular Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-winner-of-the-circular-game/",
      },
      {
        title: "Reveal Cards In Increasing Order",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reveal-cards-in-increasing-order/",
      },
    ],
  },
  {
    name: "Binary Trees",
    questions: [
      {
        title: "Preorder Traversal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
      },
      {
        title: "Inorder Traversal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      },
      {
        title: "Postorder Traversal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
      },
      {
        title: "Level Order Traversal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        title: "Maximum (Height) Depth of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
      {
        title: "Diameter of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/diameter-of-binary-tree/",
      },
      {
        title: "Balanced Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/balanced-binary-tree/",
      },
      {
        title: "Lowest Common Ancestor(LCA) of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      },
      {
        title: "Path Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/path-sum/",
      },
      {
        title: "Path Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-ii/",
      },
      {
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      },
      {
        title: "Construct Binary Tree from Inorder and Postorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
      },
      {
        title: "Tree Boundary Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/boundary-of-binary-tree/",
      },
      {
        title: "Left View of Binary Tree",
        difficulty: "Easy",
        link: "https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
      },
      {
        title: "Right View of Binary Tree",
        difficulty: "Easy",
        link: "https://practice.geeksforgeeks.org/problems/right-view-of-binary-tree/1",
      },
      {
        title: "Top View of Binary Tree",
        difficulty: "Medium",
        link: "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
      },
      {
        title: "Bottom View of Binary Tree",
        difficulty: "Medium",
        link: "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
      },
      {
        title: "Maximum Width of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-width-of-binary-tree/",
      },
      {
        title: "All Nodes Distance K in Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
      },
      {
        title: "Count Complete Tree Nodes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-complete-tree-nodes/",
      },
      {
        title: "Binary Tree Cameras",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-cameras/",
      },
      {
        title: "Same Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/same-tree/",
      },
      {
        title: "Symmetric Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/symmetric-tree/",
      },
      {
        title: "Binary Tree Zigzag Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
      },
      {
        title: "Transform to Sum Tree",
        difficulty: "Easy",
        link: "https://practice.geeksforgeeks.org/problems/transform-to-sum-tree/1",
      },
      {
        title: "Diagonal Traversal of Binary Tree",
        difficulty: "Medium",
        link: "https://practice.geeksforgeeks.org/problems/diagonal-traversal-of-binary-tree/1",
      },
      {
        title: "Vertical Order Traversal of a Binary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
      },
      {
        title: "Path Sum III (K-sum paths)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-iii/",
      },
      {
        title: "Binary Tree Inorder Traversal (Morris Traversal)",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/dsa/inorder-tree-traversal-without-recursion-and-without-stack/",
      },
      {
        title: "Flatten Binary Tree to Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
      },
      {
        title:
          "Sum of nodes on longest (bloodline) path from root to leaf node",
        difficulty: "Medium",
        link: "https://practice.geeksforgeeks.org/problems/sum-of-nodes-on-the-longest-root-to-leaf-path/1",
      },
      {
        title: "Maximum sum of Non-adjacent nodes",
        difficulty: "Medium",
        link: "https://practice.geeksforgeeks.org/problems/maximum-sum-non-adjacent-nodes/1",
      },
      {
        title: "Burning Tree",
        difficulty: "Hard",
        link: "https://practice.geeksforgeeks.org/problems/burning-tree/1",
      },
      {
        title: "Find Duplicate Subtrees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-duplicate-subtrees/",
      },
    ],
  },
  {
    name: "Binary Search Tree",
    questions: [
      {
        title: "Build BST and traverse",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/dsa/binary-search-tree-traversal-inorder-preorder-post-order/",
      },
      {
        title: "Min and max element in BST",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/find-minimum-and-maximum-element-in-a-binary-search-tree/",
      },
      {
        title: "Search a node in BST",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/search-in-a-binary-search-tree/",
      },
      {
        title: "Delete Node in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-node-in-a-bst/",
      },
      {
        title: "Two Sum IV - Input is a BST",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",
      },
      {
        title: "Binary Search Tree to Greater Sum Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/",
      },
      {
        title: "Kth Smallest Element in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      },
      {
        title: "Lowest Common Ancestor (LCA) of a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
      },
      {
        title: "Convert Inorder Traversal/Sorted Array to BST",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
      },
      {
        title: "Binary Tree to DLL",
        difficulty: "Hard",
        link: "https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1",
      },
      {
        title: "Convert Sorted linked List to BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
      },
      {
        title: "Maximum Sum BST in Binary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/",
      },
      {
        title: "Minimum Distance Between BST Nodes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-distance-between-bst-nodes/",
      },
      {
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        title: "Binary Search Tree Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-iterator/",
      },
      {
        title: "Recover Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/recover-binary-search-tree/",
      },
      {
        title: "Inorder Predecessor of Node in BST",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/inorder-predecessor-successor-given-key-bst/",
      },
      {
        title: "Inorder Successor in BST",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/inorder-successor-in-bst/",
      },
      {
        title: "Construct BST from Preorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
      },
      {
        title: "Brothers From Different Roots",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/brothers-from-different-root/",
      },
      {
        title: "Balance a Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/balance-a-binary-search-tree/",
      },
      {
        title: "Median of BST",
        difficulty: "Easy",
        link: "https://practice.geeksforgeeks.org/problems/find-median-in-bst/1",
      },
      {
        title: "Check whether BST contains Dead End",
        difficulty: "Medium",
        link: "https://practice.geeksforgeeks.org/problems/dead-end-in-bst/1",
      },
      {
        title: "Range Sum of BST /count bst nodes lying in a range",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/range-sum-of-bst/",
      },
      {
        title: "Flatten BST to sorted linked list",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
      },
      {
        title:
          "Replace every element with the least greater element on its right",
        difficulty: "Medium",
        link: "https://practice.geeksforgeeks.org/problems/replace-every-element-with-least-greater-element-on-its-right/1",
      },
      {
        title: "Valid BST from Preorder",
        difficulty: "Medium",
        link: "https://practice.geeksforgeeks.org/problems/preorder-to-bst/1",
      },
      {
        title: "Merge two BST 's",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-two-binary-search-trees/",
      },
    ],
  },
  {
    name: "Heaps",
    questions: [
      {
        title: "Heap Creation",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/building-heap-from-array/",
      },
      {
        title: "Build Heap and Heap Sort",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/heap-sort/",
      },
      {
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      },
      {
        title: "Check Completeness of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-completeness-of-a-binary-tree/",
      },
      {
        title: "Is Binary Tree Heap",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/check-if-a-given-binary-tree-is-heap/",
      },
      {
        title: "Minimum Cost of ropes",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/connect-n-ropes-minimum-cost/",
      },
      {
        title: "Merge k Sorted Arrays",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/merge-k-sorted-arrays/",
      },
      {
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        title: "Smallest Range Covering Elements from K Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
      },
      {
        title: "Find Median from Data Stream",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-median-from-data-stream/",
      },
      {
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
      },
      {
        title: "Maximum Score From Removing Stones",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-score-from-removing-stones/",
      },
      {
        title: "Design Twitter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-twitter/",
      },
      {
        title: "Task Scheduler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/task-scheduler/",
      },
      {
        title: "Merge two binary Max heaps",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/merge-two-binary-max-heaps/",
      },
      {
        title: "K Closest Points to Origin",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-closest-points-to-origin/",
      },
      {
        title: "Get Biggest Three Rhombus Sums in a Grid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/",
      },
      {
        title: "Minimum Difference in Sums After Removal of Elements",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/",
      },
      {
        title: "Minimum Number of Refueling Stops",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-refueling-stops/",
      },
      {
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
      },
    ],
  },
  {
    name: "Tries & Maps",
    questions: [
      {
        title: "Maps STL Practice",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/cpp/map-associative-containers-the-c-standard-template-library-stl/",
      },
      {
        title: "Two Sum - using Maps",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        title: "Group Anagrams - using Maps",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-anagrams/",
      },
      {
        title: "Substring with Concatenation of All Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
      },
      {
        title: "Implement Trie (Prefix Tree)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
      },
      {
        title: "Longest Common Prefix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-common-prefix/",
      },
      {
        title: "Searching using Trie (practice)",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/problems/trie-insert-and-search0651/1",
      },
      {
        title: "Repeated DNA Sequences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/repeated-dna-sequences/",
      },
      {
        title: "Design Add and Search Words Data Structure",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
      },
      {
        title: "Implement Magic Dictionary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/magic-dictionary/",
      },
      {
        title: "Search Suggestions System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-suggestions-system/",
      },
      {
        title: "Array Subset (of another array)",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/array-subset-of-another-array/",
      },
      {
        title: "Union of Two Linked Lists",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/union-of-two-linked-lists/",
      },
      {
        title: "Intersection of Two Linked Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
      },
      {
        title: "Sum equals to Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
      },
      {
        title: "Largest subarray with 0 sum",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/largest-subarray-with-0-sum/",
      },
      {
        title: "Contiguous Array / Largest Subarray of 0s and 1s",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/contiguous-array/",
      },
      {
        title: "Replace Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/replace-words/",
      },
      {
        title: "Top K Frequent Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-words/",
      },
      {
        title: "Camelcase Matching",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/camelcase-matching/",
      },
      {
        title: "Palindrome Pairs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/palindrome-pairs/",
      },
    ],
  },
  {
    name: "Dynamic Programming",
    questions: [
      {
        title: "Fibonacci Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fibonacci-number/",
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
        title: "Coin Change",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change/",
      },
      {
        title: "0 - 1 Knapsack Problem",
        difficulty: "Medium",
        link: "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1",
      },
      {
        title: "Painting the Fence",
        difficulty: "Medium",
        link: "https://practice.geeksforgeeks.org/problems/painting-the-fence3727/1",
      },
      {
        title: "Partition Equal Subset Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-equal-subset-sum/",
      },
      {
        title: "Number of Dice Rolls With Target Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/",
      },
      {
        title: "Longest Common Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-common-subsequence/",
      },
      {
        title: "Maximum Height by Stacking Cuboids",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-height-by-stacking-cuboids/",
      },
      {
        title: "Russian Doll Envelopes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/russian-doll-envelopes/",
      },
      {
        title: "Guess Number Higher or Lower II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/guess-number-higher-or-lower-ii/",
      },
      {
        title: "Minimum Cost Tree From Leaf Values",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/",
      },
      {
        title: "Wildcard Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/wildcard-matching/",
      },
      {
        title: "Regular Expression Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/regular-expression-matching/",
      },
      {
        title: "Last Stone Weight II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/last-stone-weight-ii/",
      },
      {
        title: "Edit Distance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/edit-distance/",
      },
      {
        title: "Perfect Squares",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/perfect-squares/",
      },
      {
        title: "Minimum Cost For Tickets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-for-tickets/",
      },
      {
        title: "Minimum ASCII Delete Sum for Two Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/",
      },
      {
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        title: "Distinct Subsequences",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/distinct-subsequences/",
      },
      {
        title: "Word Break",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-break/",
      },
      {
        title: "Word Break II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-break-ii/",
      },
      {
        title: "Unique Binary Search Trees II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-binary-search-trees-ii/",
      },
      {
        title: "House Robber III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber-iii/",
      },
      {
        title: "Stone Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/stone-game/",
      },
      {
        title: "Stone Game II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/stone-game-ii/",
      },
      {
        title: "Stone Game III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/stone-game-iii/",
      },
      {
        title: "Burst Balloons",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/burst-balloons/",
      },
      {
        title: "Interleaving String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/interleaving-string/",
      },
      {
        title: "Minimum Insertion Steps to Make a String Palindrome",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/",
      },
      {
        title: "Longest Palindromic Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-subsequence/",
      },
      {
        title: "Minimum Number of Removals to Make Mountain Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/",
      },
      {
        title: "Make Array Strictly Increasing",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/make-array-strictly-increasing/",
      },
      {
        title: "Best Time to Buy and Sell Stock II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
      },
      {
        title: "Best Time to Buy and Sell Stock III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
      },
      {
        title: "Best Time to Buy and Sell Stock IV",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
      },
      {
        title: "Best Time to Buy and Sell Stock with Transaction Fee",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
      },
      {
        title: "Target Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/target-sum/",
      },
      {
        title: "Ones and Zeroes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/ones-and-zeroes/",
      },
      {
        title: "Minimum Swaps To Make Sequences Increasing",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/",
      },
      {
        title: "Reducing Dishes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reducing-dishes/",
      },
      {
        title: "Predict the Winner",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/predict-the-winner/",
      },
    ],
  },
  {
  name: "Graphs",
  questions: [
    { title: "Print adjacency list", difficulty: "Easy", link: "https://www.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1" },
    { title: "BFS of graph", difficulty: "Easy", link: "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1" },
    { title: "DFS of graph", difficulty: "Easy", link: "https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1" },
    { title: "Undirected Graph Cycle", difficulty: "Medium", link: "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1" },
    { title: "Directed Graph Cycle", difficulty: "Medium", link: "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1" },
    { title: "Topological sort", difficulty: "Medium", link: "https://www.geeksforgeeks.org/problems/topological-sort/1" },
    { title: "Directed Graph Cycle using Kahn’s Algorithm", difficulty: "Medium", link: "https://www.geeksforgeeks.org/topological-sorting/" },
    { title: "Single Source Shortest path in Undirected Graph", difficulty: "Medium", link: "https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1" },
    { title: "Single Source Shortest path - dfs", difficulty: "Medium", link: "https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1" },
    { title: "Dijkstra Algorithm", difficulty: "Medium", link: "https://www.geeksforgeeks.org/dijkstra-algorithm-for-find-shortest-path/" },
    { title: "Bellman-Ford Algorithm", difficulty: "Medium", link: "https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/" },
    { title: "Floyd Warshall", difficulty: "Medium", link: "https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/" },
    { title: "Strongly Connected Components", difficulty: "Medium", link: "https://www.geeksforgeeks.org/strongly-connected-components/" },
    { title: "Bridge edge in a graph (Tarjan's Algo)", difficulty: "Medium", link: "https://www.geeksforgeeks.org/bridge-in-a-graph/" },
    { title: "Critical Connections in a Network", difficulty: "Hard", link: "https://leetcode.com/problems/critical-connections-in-a-network/" },
    { title: "Course Schedule", difficulty: "Medium", link: "https://leetcode.com/problems/course-schedule/" },
    { title: "Course Schedule II", difficulty: "Medium", link: "https://leetcode.com/problems/course-schedule-ii/" },
    { title: "Word Ladder", difficulty: "Hard", link: "https://leetcode.com/problems/word-ladder/" },
    { title: "Path With Minimum Effort", difficulty: "Medium", link: "https://leetcode.com/problems/path-with-minimum-effort/" },
    { title: "Number of Provinces", difficulty: "Medium", link: "https://leetcode.com/problems/number-of-provinces/" },
    { title: "Rotting Oranges", difficulty: "Medium", link: "https://leetcode.com/problems/rotting-oranges/" },
    { title: "Cheapest Flights Within K Stops", difficulty: "Medium", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
    { title: "Longest Cycle in a Graph", difficulty: "Hard", link: "https://leetcode.com/problems/longest-cycle-in-a-graph/" },
    { title: "Prim's Algorithm", difficulty: "Medium", link: "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/" },
    { title: "Kruskal's Algorithm", difficulty: "Medium", link: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/" },
    { title: "Eventual Safe States", difficulty: "Medium", link: "https://leetcode.com/problems/eventual-safe-states/" },
    { title: "Word Ladder II", difficulty: "Hard", link: "https://leetcode.com/problems/word-ladder-ii/" },
    { title: "Minimum Multiplications to reach End", difficulty: "Medium", link: "https://leetcode.com/problems/minimum-multiplications-to-reach-end/" },
    { title: "Number of Operations to Make Network Connected", difficulty: "Medium", link: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/" },
    { title: "Find the City With the Smallest Number of Neighbors at a Threshold Distance", difficulty: "Medium", link: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/" },
    { title: "Accounts Merge", difficulty: "Medium", link: "https://leetcode.com/problems/accounts-merge/" }
  ]
},
{
  name: "Miscellaneous",
  questions: [
    {
      title: "DEFKIN - Defense of a Kingdom",
      difficulty: "Medium",
      link: "https://www.spoj.com/problems/DEFKIN/"
    },
    {
      title: "Huffman Encoding",
      difficulty: "Hard",
      link: "https://www.geeksforgeeks.org/dsa/huffman-coding-greedy-algo-3/"
    },
    {
      title: "Fractional Knapsack",
      difficulty: "Medium",
      link: "https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1"
    },
    {
      title: "N meetings in one room",
      difficulty: "Easy",
      link: "https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1"
    },
    {
      title: "Sliding Window Maximum",
      difficulty: "Hard",
      link: "https://leetcode.com/problems/sliding-window-maximum/"
    },
    {
      title: "Minimum Size Subarray Sum",
      difficulty: "Medium",
      link: "https://leetcode.com/problems/minimum-size-subarray-sum/"
    },
    {
      title: "Two Sum",
      difficulty: "Easy",
      link: "https://leetcode.com/problems/two-sum/"
    },
    {
      title: "Minimum Window Substring",
      difficulty: "Hard",
      link: "https://leetcode.com/problems/minimum-window-substring/"
    },
    {
      title: "Single Number",
      difficulty: "Easy",
      link: "https://leetcode.com/problems/single-number/"
    },
    {
      title: "Subsequence / Power Set",
      difficulty: "Medium",
      link: "https://www.geeksforgeeks.org/dsa/power-set/"
    },
    {
      title: "Clear bits in a range",
      difficulty: "Easy",
      link: "https://leetcode.com/problem-list/bit-manipulation/"
    }
  ]
},
];

const addNewTopicsToSupreme = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Delete the existing 'Supreme' document
    await Sheet.deleteOne({ name: "Supreme" });
    console.log("Deleted existing 'Supreme' document");

    // Insert new 'Supreme' document with new topics
    await Sheet.create({
      name: "Supreme",
      topics: newTopics
    });
    console.log("Inserted new 'Supreme' document with new topics");

    process.exit(0);
  } catch (error) {
    console.error("Error while resetting Supreme data:", error);
    process.exit(1);
  }
};

addNewTopicsToSupreme();

