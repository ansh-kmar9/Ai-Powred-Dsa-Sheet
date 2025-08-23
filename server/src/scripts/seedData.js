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

// ✅ Your new topics for DSA360
const newTopics = [
  {
    name: "Adobe",
    questions: [
      {
        title: "Two Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        title: "Add Two Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers/",
      },
      {
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
      {
        title: "Cherry Pickup",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/cherry-pickup/",
      },
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        title: "Reverse Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-integer/",
      },
      {
        title: "Combine Two Tables",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/combine-two-tables/",
      },
      {
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        title: "3Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum/",
      },
      {
        title: "Roman to Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/roman-to-integer/",
      },
      {
        title: "ZigZag Conversion",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/zigzag-conversion/",
      },
      {
        title: "Tenth Line",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/tenth-line/",
      },
      {
        title: "Maximum Subarray",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        title: "Word Frequency",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-frequency/",
      },
      {
        title: "Container With Most Water",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/container-with-most-water/",
      },
      {
        title: "LRU Cache",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lru-cache/",
      },
      {
        title: "Longest Common Prefix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-common-prefix/",
      },
      {
        title: "Palindrome Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-number/",
      },
      {
        title: "Nim Game",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/nim-game/",
      },
      {
        title: "Reverse Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        title: "Generate Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/generate-parentheses/",
      },
      {
        title: "Burst Balloons",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/burst-balloons/",
      },
      {
        title: "Jewels and Stones",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/jewels-and-stones/",
      },
      {
        title: "4Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/4sum/",
      },
      {
        title: "Reverse String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string/",
      },
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        title: "Trapping Rain Water",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water/",
      },
      {
        title: "H-Index",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/h-index/",
      },
      {
        title: "Big Countries",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/big-countries/",
      },
      {
        title: "Minimum Window Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-substring/",
      },
      {
        title: "Regular Expression Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/regular-expression-matching/",
      },
      {
        title: "Lexicographical Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lexicographical-numbers/",
      },
      {
        title: "Shortest Palindrome",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-palindrome/",
      },
      {
        title: "Array Partition I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/array-partition/",
      },
      {
        title: "Integer to Roman",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/integer-to-roman/",
      },
      {
        title: "Merge Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-sorted-array/",
      },
      {
        title: "Nth Highest Salary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/nth-highest-salary/",
      },
      {
        title: "String to Integer (atoi)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/string-to-integer-atoi/",
      },
      {
        title: "Permutations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations/",
      },
      {
        title: "Bitwise AND of Numbers Range",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bitwise-and-of-numbers-range/",
      },
      {
        title: "Second Highest Salary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/second-highest-salary/",
      },
      {
        title: "Spiral Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix/",
      },
      {
        title: "Product of Array Except Self",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
      },
      {
        title: "Count of Smaller Numbers After Self",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
      },
      {
        title: "Maximal Rectangle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximal-rectangle/",
      },
      {
        title: "First Missing Positive",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/first-missing-positive/",
      },
      {
        title: "Count and Say",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-and-say/",
      },
      {
        title: "Coin Change",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change/",
      },
      {
        title: "Delete Node in a Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
      },
      {
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        title: "Longest Valid Parentheses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-valid-parentheses/",
      },
      {
        title: "Strong Password Checker",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/strong-password-checker/",
      },
      {
        title: "Single Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/single-number/",
      },
      {
        title: "Sort List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-list/",
      },
      {
        title: "Remove Duplicates from Sorted List II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
      },
      {
        title: "3Sum Closest",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum-closest/",
      },
      {
        title: "Jump Game II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/jump-game-ii/",
      },
      {
        title: "Encode and Decode TinyURL",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/encode-and-decode-tinyurl/",
      },
      {
        title: "Unique Binary Search Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-binary-search-trees/",
      },
      {
        title: "Reverse Linked List II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-linked-list-ii/",
      },
      {
        title: "Substring with Concatenation of All Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
      },
      {
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        title: "Minimum Path Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-path-sum/",
      },
      {
        title: "Perfect Squares",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/perfect-squares/",
      },
      {
        title: "Swap Nodes in Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/swap-nodes-in-pairs/",
      },
      {
        title: "Integer Break",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/integer-break/",
      },
      {
        title: "Next Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-permutation/",
      },
      {
        title: "Palindrome Partitioning",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindrome-partitioning/",
      },
      {
        title: "Linked List Cycle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        title: "Number of Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        title: "Simplify Path",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/simplify-path/",
      },
      {
        title: "Copy List with Random Pointer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
      },
      {
        title: "Search a 2D Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix/",
      },
      {
        title: "Min Stack",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/min-stack/",
      },
      {
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      },
      {
        title: "Majority Element",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/majority-element/",
      },
      {
        title: "Sudoku Solver",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sudoku-solver/",
      },
      {
        title: "Rotate Image",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-image/",
      },
      {
        title: "Maximum Product Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-product-subarray/",
      },
      {
        title: "Design HashMap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-hashmap/",
      },
      {
        title: "Kth Smallest Element in a Sorted Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
      },
      {
        title: "Distinct Subsequences",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/distinct-subsequences/",
      },
      {
        title: "Wildcard Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/wildcard-matching/",
      },
      {
        title: "House Robber",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/house-robber/",
      },
      {
        title: "Longest Increasing Path in a Matrix",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
      },
      {
        title: "Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets/",
      },
      {
        title: "Palindrome Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-linked-list/",
      },
      {
        title: "Word Break",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-break/",
      },
      {
        title: "Reverse Nodes in k-Group",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
      },
      {
        title: "Unique Email Addresses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/unique-email-addresses/",
      },
      {
        title: "Count Primes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-primes/",
      },
      {
        title: "Diameter of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/diameter-of-binary-tree/",
      },
      {
        title: "Rising Temperature",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rising-temperature/",
      },
      {
        title: "Find All Numbers Disappeared in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
      },
      {
        title: "Arithmetic Slices II - Subsequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/arithmetic-slices-ii-subsequence/",
      },
      {
        title: "Symmetric Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/symmetric-tree/",
      },
      {
        title: "Climbing Stairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        title: "Find the Difference",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-difference/",
      },
      {
        title: "Brace Expansion II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/brace-expansion-ii/",
      },
      {
        title: "N-Queens",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/n-queens/",
      },
      {
        title: "Single Number II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-number-ii/",
      },
      {
        title: "Merge Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        title: "Remove Nth Node From End of List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      },
      {
        title: "Group Anagrams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-anagrams/",
      },
      {
        title: "Number of Subarrays with Bounded Maximum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/",
      },
      {
        title: "Missing Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/missing-number/",
      },
      {
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      },
      {
        title: "Search in Rotated Sorted Array II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
      },
      {
        title: "Linked List Cycle II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/linked-list-cycle-ii/",
      },
      {
        title: "Reorder List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorder-list/",
      },
      {
        title: "Majority Element II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/majority-element-ii/",
      },
      {
        title: "Binary Tree Maximum Path Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
      },
      {
        title: "Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      },
      {
        title: "Search a 2D Matrix II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
      },
      {
        title: "Longest Consecutive Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-consecutive-sequence/",
      },
      {
        title: "Contains Duplicate III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/contains-duplicate-iii/",
      },
      {
        title: "Happy Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/happy-number/",
      },
      {
        title: "Self Dividing Numbers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/self-dividing-numbers/",
      },
      {
        title: "Longest Substring with At Least K Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/",
      },
      {
        title: "Rectangle Overlap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rectangle-overlap/",
      },
      {
        title: "Valid Number",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/valid-number/",
      },
      {
        title: "Rank Scores",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rank-scores/",
      },
      {
        title: "Contains Duplicate II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate-ii/",
      },
      {
        title: "Divide Two Integers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/divide-two-integers/",
      },
      {
        title: "Binary Tree Right Side View",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-right-side-view/",
      },
      {
        title: "Daily Temperatures",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/daily-temperatures/",
      },
      {
        title: "Edit Distance",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/edit-distance/",
      },
      {
        title: "Employees Earning More Than Their Managers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/employees-earning-more-than-their-managers/",
      },
      {
        title: "Rotate List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-list/",
      },
      {
        title: "Pow(x, n)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/powx-n/",
      },
      {
        title: "Maximal Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximal-square/",
      },
      {
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
      },
      {
        title: "Path Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/path-sum/",
      },
      {
        title: "Largest Divisible Subset",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-divisible-subset/",
      },
      {
        title: "Add Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-strings/",
      },
      {
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/",
      },
      {
        title: "Best Time to Buy and Sell Stock II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
      },
      {
        title: "Split Linked List in Parts",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/split-linked-list-in-parts/",
      },
      {
        title: "Score of Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/score-of-parentheses/",
      },
      {
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
      },
      {
        title: "Decode Ways",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-ways/",
      },
      {
        title: "Fizz Buzz",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fizz-buzz/",
      },
      {
        title: "Pairs of Songs With Total Durations Divisible by 60",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/",
      },
      {
        title: "Implement strStr()",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-strstr/",
      },
      {
        title: "Unique Paths",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-paths/",
      },
      {
        title: "The Skyline Problem",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/the-skyline-problem/",
      },
      {
        title: "Contains Duplicate",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate/",
      },
      {
        title: "Remove Duplicates from Sorted List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
      },
      {
        title: "Excel Sheet Column Title",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/excel-sheet-column-title/",
      },
      {
        title: "Unique Binary Search Trees II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-binary-search-trees-ii/",
      },
      {
        title: "Jump Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game/",
      },
      {
        title: "Guess Number Higher or Lower II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/guess-number-higher-or-lower-ii/",
      },
      {
        title: "Brick Wall",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/brick-wall/",
      },
      {
        title: "Number of Atoms",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-atoms/",
      },
      {
        title: "Valid Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        title: "Vertical Order Traversal of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
      },
      {
        title: "Balanced Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/balanced-binary-tree/",
      },
      {
        title: "Search Insert Position",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/search-insert-position/",
      },
      {
        title: "Reverse Substrings Between Each Pair of Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/",
      },
      {
        title: "Find the Duplicate Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-duplicate-number/",
      },
      {
        title: "First Bad Version",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/first-bad-version/",
      },
      {
        title: "Largest Rectangle in Histogram",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
      },
      {
        title: "Basic Calculator",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/basic-calculator/",
      },
      {
        title: "Lowest Common Ancestor of a Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
      },
      {
        title: "Binary Tree Level Order Traversal II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
      },
      {
        title: "Print in Order",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/print-in-order/",
      },
      {
        title: "Restore IP Addresses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/restore-ip-addresses/",
      },
      {
        title: "Remove Duplicate Letters",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/remove-duplicate-letters/",
      },
      {
        title: "Number of 1 Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-1-bits/",
      },
      {
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
      {
        title: "Combination Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-ii/",
      },
      {
        title: "Defanging an IP Address",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/defanging-an-ip-address/",
      },
      {
        title: "Find Median from Data Stream",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-median-from-data-stream/",
      },
      {
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        title: "Move Zeroes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/move-zeroes/",
      },
      {
        title: "Merge Two Binary Trees",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-binary-trees/",
      },
      {
        title: "Spiral Matrix II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix-ii/",
      },
      {
        title: "Plus One",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/plus-one/",
      },
      {
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      },
      {
        title: "Binary Tree Paths",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-paths/",
      },
      {
        title: "Department Top Three Salaries",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/department-top-three-salaries/",
      },
      {
        title: "Set Matrix Zeroes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/set-matrix-zeroes/",
      },
      {
        title: "First Unique Character in a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/first-unique-character-in-a-string/",
      },
      {
        title: "Pascal's Triangle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/pascals-triangle/",
      },
      {
        title: "Koko Eating Bananas",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/koko-eating-bananas/",
      },
      {
        title: "Word Search",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-search/",
      },
      {
        title: "Add Binary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-binary/",
      },
      {
        title: "Contiguous Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/contiguous-array/",
      },
      {
        title: "Evaluate Division",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-division/",
      },
      {
        title: "Trim a Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/trim-a-binary-search-tree/",
      },
      {
        title: "LFU Cache",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/lfu-cache/",
      },
      {
        title: "Add Digits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-digits/",
      },
      {
        title: "Flatten Binary Tree to Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
      },
      {
        title: "Path Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-ii/",
      },
      {
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        title: "Human Traffic of Stadium",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/human-traffic-of-stadium/",
      },
      {
        title: "Non-decreasing Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/non-decreasing-array/",
      },
      {
        title: "Next Closest Time",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-closest-time/",
      },
      {
        title: "Combinations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combinations/",
      },
      {
        title: "Friend Circles",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/friend-circles/",
      },
      {
        title: "Middle of the Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/middle-of-the-linked-list/",
      },
      {
        title: "Squares of a Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
      },
      {
        title: "Isomorphic Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/isomorphic-strings/",
      },
      {
        title: "Height Checker",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/height-checker/",
      },
      {
        title: "Valid Sudoku",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-sudoku/",
      },
      {
        title: "Boundary of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/boundary-of-binary-tree/",
      },
      {
        title: "Palindromic Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindromic-substrings/",
      },
      {
        title: "Binary Tree Vertical Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-vertical-order-traversal/",
      },
      {
        title: "Repeated String Match",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/repeated-string-match/",
      },
      {
        title: "Remove Linked List Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-linked-list-elements/",
      },
      {
        title: "Insert Delete GetRandom O(1)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
      },
      {
        title: "Permutations II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations-ii/",
      },
      {
        title: "Remove K Digits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-k-digits/",
      },
      {
        title: "Find Common Characters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-common-characters/",
      },
      {
        title: "Sum of Left Leaves",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-left-leaves/",
      },
      {
        title: "Kth Largest Element in a Stream",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
      },
      {
        title: "Rotting Oranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotting-oranges/",
      },
      {
        title: "Max Area of Island",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-area-of-island/",
      },
      {
        title: "To Lower Case",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/to-lower-case/",
      },
      {
        title: "Longest Substring with At Most Two Distinct Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/",
      },
      {
        title: "Stone Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/stone-game/",
      },
      {
        title: "Find Minimum in Rotated Sorted Array II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/",
      },
      {
        title: "Cousins in Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/cousins-in-binary-tree/",
      },
      {
        title: "How Many Numbers Are Smaller Than the Current Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/",
      },
      {
        title: "Critical Connections in a Network",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/critical-connections-in-a-network/",
      },
      {
        title: "Insert Interval",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/insert-interval/",
      },
      {
        title: "Search in a Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/search-in-a-binary-search-tree/",
      },
      {
        title: "Top K Frequent Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-words/",
      },
      {
        title: "Binary Tree Postorder Traversal",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
      },
      {
        title: "Shuffle the Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shuffle-the-array/",
      },
      {
        title: "Preimage Size of Factorial Zeroes Function",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/",
      },
      {
        title: "Smallest Range I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/smallest-range-i/",
      },
      {
        title: "Smallest Range II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-range-ii/",
      },
    ],
  },

  {
    name: "Airbnb",
    questions: [
      {
        title: "Palindrome Pairs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/palindrome-pairs/",
      },
      {
        title: "Pour Water",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pour-water/",
      },
      {
        title: "IP to CIDR",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/ip-to-cidr/",
      },
      {
        title: "Flatten 2D Vector",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-2d-vector/",
      },
      {
        title: "Alien Dictionary",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/alien-dictionary/",
      },
      {
        title: "Text Justification",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/text-justification/",
      },
      {
        title: "Design File System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-file-system/",
      },
      {
        title: "Cheapest Flights Within K Stops",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
      },
      {
        title: "Sliding Puzzle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-puzzle/",
      },
      {
        title: "Flatten Nested List Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-nested-list-iterator/",
      },
      {
        title: "Fraction to Recurring Decimal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/fraction-to-recurring-decimal/",
      },
      {
        title: "Combination Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum/",
      },
      {
        title: "Wiggle Sort II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/wiggle-sort-ii/",
      },
      {
        title: "Koko Eating Bananas",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/koko-eating-bananas/",
      },
      {
        title: "Trapping Rain Water",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water/",
      },
      {
        title: "Two Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        title: "Minimize Rounding Error to Meet Target",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimize-rounding-error-to-meet-target/",
      },
      {
        title: "Employee Free Time",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/employee-free-time/",
      },
      {
        title: "Pyramid Transition Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pyramid-transition-matrix/",
      },
      {
        title: "Shortest Path to Get All Keys",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-path-to-get-all-keys/",
      },
      {
        title: "Smallest Common Region",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-common-region/",
      },
      {
        title: "Guess the Word",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/guess-the-word/",
      },
      {
        title: "Word Search II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-search-ii/",
      },
      {
        title: "Design In-Memory File System",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-in-memory-file-system/",
      },
      {
        title: "Coin Change",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change/",
      },
      {
        title: "Add Two Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers/",
      },
      {
        title: "Regular Expression Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/regular-expression-matching/",
      },
      {
        title: "Maximum Profit in Job Scheduling",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/",
      },
      {
        title: "Bulls and Cows",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/bulls-and-cows/",
      },
      {
        title: "Minimum Window Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-substring/",
      },
      {
        title: "Contains Duplicate II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate-ii/",
      },
      {
        title: "Mini Parser",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/mini-parser/",
      },
      {
        title: "House Robber",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/house-robber/",
      },
      {
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        title: "Contains Duplicate III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/contains-duplicate-iii/",
      },
      {
        title: "Wiggle Sort",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/wiggle-sort/",
      },
      {
        title: "Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      },
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
      {
        title: "Intersection of Two Linked Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
      },
      {
        title: "Happy Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/happy-number/",
      },
      {
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        title: "Single Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/single-number/",
      },
      {
        title: "Convert Sorted Array to Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
      },
      {
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      },
      {
        title: "Design Circular Queue",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-circular-queue/",
      },
      {
        title: "Maximal Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximal-square/",
      },
      {
        title: "Contains Duplicate",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate/",
      },
      {
        title: "Add and Search Word - Data structure design",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
      },
      {
        title: "Verifying an Alien Dictionary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/verifying-an-alien-dictionary/",
      },
      {
        title: "Reverse Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-bits/",
      },
      {
        title: "Find First and Last Position of Element in Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      },
      {
        title: "Basic Calculator II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/basic-calculator-ii/",
      },
      {
        title: "Add Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-strings/",
      },
      {
        title: "Convert to Base -2",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-to-base-2/",
      },
      {
        title: "Robot Bounded In Circle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/robot-bounded-in-circle/",
      },
      {
        title:
          "Minimum Number of Flips to Convert Binary Matrix to Zero Matrix",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/",
      },
      {
        title: "Maximum Candies You Can Get from Boxes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/",
      },
    ],
  },
  {
    name: "Amazon",
    questions: [
      {
        title: "Reorder Data in Log Files",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reorder-data-in-log-files/",
      },
      {
        title: "Number of Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        title: "Critical Connections in a Network",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/critical-connections-in-a-network/",
      },
      {
        title: "Two Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        title: "LRU Cache",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lru-cache/",
      },
      {
        title: "K Closest Points to Origin",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-closest-points-to-origin/",
      },
      {
        title: "Most Common Word",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/most-common-word/",
      },
      {
        title: "Copy List with Random Pointer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
      },
      {
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        title: "Rotting Oranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotting-oranges/",
      },
      {
        title: "Trapping Rain Water",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water/",
      },
      {
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        title: "Partition Labels",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-labels/",
      },
      {
        title: "Add Two Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers/",
      },
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        title: "Word Ladder",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-ladder/",
      },
      {
        title: "Find Median from Data Stream",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-median-from-data-stream/",
      },
      {
        title: "Serialize and Deserialize Binary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      },
      {
        title: "Top K Frequent Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-words/",
      },
      {
        title: "Subtree of Another Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/subtree-of-another-tree/",
      },
      {
        title: "Search a 2D Matrix II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
      },
      {
        title: "Word Ladder II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-ladder-ii/",
      },
      {
        title: "Concatenated Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/concatenated-words/",
      },
      {
        title: "Design Search Autocomplete System",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-search-autocomplete-system/",
      },
      {
        title: "Prison Cells After N Days",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/prison-cells-after-n-days/",
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
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        title: "Meeting Rooms II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/meeting-rooms-ii/",
      },
      {
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      },
      {
        title: "Design Tic-Tac-Toe",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-tic-tac-toe/",
      },
      {
        title: "Word Break",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-break/",
      },
      {
        title: "Min Stack",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/min-stack/",
      },
      {
        title: "Rotate Image",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-image/",
      },
      {
        title: "Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      },
      {
        title: "Product of Array Except Self",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
      },
      {
        title: "Word Search II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-search-ii/",
      },
      {
        title: "Integer to Roman",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/integer-to-roman/",
      },
      {
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
      },
      {
        title: "Alien Dictionary",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/alien-dictionary/",
      },
      {
        title: "LFU Cache",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/lfu-cache/",
      },
      {
        title: "3Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum/",
      },
      {
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        title: "Cut Off Trees for Golf Event",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/cut-off-trees-for-golf-event/",
      },
      {
        title: "Design In-Memory File System",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-in-memory-file-system/",
      },
      {
        title: "Snakes and Ladders",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/snakes-and-ladders/",
      },
      {
        title: "Compare Version Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/compare-version-numbers/",
      },
      {
        title: "Merge Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        title: "Insert Delete GetRandom O(1)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
      },
      {
        title: "Maximum Subarray",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        title: "Group Anagrams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-anagrams/",
      },
      {
        title: "Boundary of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/boundary-of-binary-tree/",
      },
      {
        title: "Container With Most Water",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/container-with-most-water/",
      },
      {
        title: "Minimum Window Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-substring/",
      },
      {
        title: "Spiral Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix/",
      },
      {
        title: "Analyze User Website Visit Pattern",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/analyze-user-website-visit-pattern/",
      },
      {
        title: "Jump Game II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/jump-game-ii/",
      },
      {
        title: "Reverse Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        title: "Minimum Cost to Connect Sticks",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-to-connect-sticks/",
      },
      {
        title: "Find the Celebrity",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-celebrity/",
      },
      {
        title: "Binary Tree Maximum Path Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
      },
      {
        title: "Coin Change",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change/",
      },
      {
        title: "All Nodes Distance K in Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
      },
      {
        title: "Number of Distinct Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-distinct-islands/",
      },
      {
        title: "Binary Tree Zigzag Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
      },
      {
        title: "Flood Fill",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/flood-fill/",
      },
      {
        title: "Reverse Nodes in k-Group",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
      },
      {
        title: "Flatten Nested List Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-nested-list-iterator/",
      },
      {
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        title: "The Maze",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-maze/",
      },
      {
        title: "Implement Trie (Prefix Tree)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
      },
      {
        title: "Encode and Decode TinyURL",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/encode-and-decode-tinyurl/",
      },
      {
        title: "Search Suggestions System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-suggestions-system/",
      },
      {
        title: "Basic Calculator",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/basic-calculator/",
      },
      {
        title: "Recover Binary Search Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/recover-binary-search-tree/",
      },
      {
        title: "Game of Life",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/game-of-life/",
      },
      {
        title: "Find All Anagrams in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
      },
      {
        title: "Populating Next Right Pointers in Each Node",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
      },
      {
        title: "Generate Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/generate-parentheses/",
      },
      {
        title: "The Skyline Problem",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/the-skyline-problem/",
      },
      {
        title: "Basic Calculator III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/basic-calculator-iii/",
      },
      {
        title: "Binary Tree Vertical Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-vertical-order-traversal/",
      },
      {
        title: "First Unique Character in a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/first-unique-character-in-a-string/",
      },
      {
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      },
      {
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      },
      {
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        title: "Course Schedule",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule/",
      },
      {
        title: "Decode Ways",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-ways/",
      },
      {
        title: "Word Break II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-break-ii/",
      },
      {
        title: "Minimum Path Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-path-sum/",
      },
      {
        title: "Largest Rectangle in Histogram",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
      },
      {
        title: "Prime Palindrome",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/prime-palindrome/",
      },
      {
        title: "Roman to Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/roman-to-integer/",
      },
      {
        title: "Basic Calculator II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/basic-calculator-ii/",
      },
      {
        title: "Populating Next Right Pointers in Each Node II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
      },
      {
        title: "The Maze II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-maze-ii/",
      },
      {
        title: "Serialize and Deserialize BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/serialize-and-deserialize-bst/",
      },
      {
        title: "Jump Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game/",
      },
      {
        title: "Max Area of Island",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-area-of-island/",
      },
      {
        title: "Design Hit Counter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-hit-counter/",
      },
      {
        title: "Lowest Common Ancestor of a Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
      },
      {
        title: "Restore IP Addresses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/restore-ip-addresses/",
      },
      {
        title: "Minimum Cost to Merge Stones",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-cost-to-merge-stones/",
      },
      {
        title: "Search a 2D Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix/",
      },
      {
        title: "String to Integer (atoi)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/string-to-integer-atoi/",
      },
      {
        title: "Path With Maximum Minimum Value",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-with-maximum-minimum-value/",
      },
      {
        title: "Maximal Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximal-square/",
      },
      {
        title: "Diameter of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/diameter-of-binary-tree/",
      },
      {
        title: "Symmetric Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/symmetric-tree/",
      },
      {
        title: "Number of Distinct Islands II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-distinct-islands-ii/",
      },
      {
        title: "Binary Search Tree Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-iterator/",
      },
      {
        title: "Add Two Numbers II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers-ii/",
      },
      {
        title: "Reorder List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorder-list/",
      },
      {
        title: "Next Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-permutation/",
      },
      {
        title: "Gas Station",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/gas-station/",
      },
      {
        title: "Palindrome Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-linked-list/",
      },
      {
        title: "Binary Tree Right Side View",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-right-side-view/",
      },
      {
        title: "Edit Distance",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/edit-distance/",
      },
      {
        title: "Max Points on a Line",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/max-points-on-a-line/",
      },
      {
        title: "Word Search",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-search/",
      },
      {
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
      },
      {
        title: "Unique Paths",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-paths/",
      },
      {
        title: "Design Excel Sum Formula",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/excel-sheet-column-sum/",
      },
      {
        title: "Decode String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-string/",
      },
      {
        title: "Design Snake Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-snake-game/",
      },
      {
        title: "Shuffle an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shuffle-an-array/",
      },
      {
        title: "Number of Connected Components in an Undirected Graph",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
      },
      {
        title: "Clone Graph",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/clone-graph/",
      },
      {
        title: "Design HashMap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-hashmap/",
      },
      {
        title: "Palindrome Pairs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/palindrome-pairs/",
      },
      {
        title: "Baseball Game",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/baseball-game/",
      },
      {
        title: "Employee Free Time",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/employee-free-time/",
      },
      {
        title: "Zigzag Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/zigzag-iterator/",
      },
      {
        title: "Shortest Path in Binary Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
      },
      {
        title: "Maximum Average Subtree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-average-subtree/",
      },
      {
        title: "Department Top Three Salaries",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/department-top-three-salaries/",
      },
      {
        title: "Evaluate Reverse Polish Notation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
      },
      {
        title: "Regular Expression Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/regular-expression-matching/",
      },
      {
        title: "Find the Closest Palindrome",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-the-closest-palindrome/",
      },
      {
        title: "Simplify Path",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/simplify-path/",
      },
      {
        title: "Two Sum Less Than K",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum-less-than-k/",
      },
      {
        title: "Unique Binary Search Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-binary-search-trees/",
      },
      {
        title: "Pacific Atlantic Water Flow",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
      },
      {
        title: "Traffic Light Controlled Intersection",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/traffic-light-controlled-intersection/",
      },
      {
        title: "Best Time to Buy and Sell Stock II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
      },
      {
        title: "Maximum Frequency Stack",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-frequency-stack/",
      },
      {
        title: "Interleaving String",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/interleaving-string/",
      },
      {
        title: "Walls and Gates",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/walls-and-gates/",
      },
      {
        title: "Solve the Equation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/solve-the-equation/",
      },
      {
        title: "Combination Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum/",
      },
      {
        title: "Spiral Matrix II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix-ii/",
      },
      {
        title: "Shortest Distance from All Buildings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-distance-from-all-buildings/",
      },
      {
        title: "Minesweeper",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minesweeper/",
      },
      {
        title: "Majority Element",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/majority-element/",
      },
      {
        title: "Maximum Product Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-product-subarray/",
      },
      {
        title: "Next Greater Element II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-element-ii/",
      },
      {
        title: "Course Schedule II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule-ii/",
      },
      {
        title: "Two Sum II - Input array is sorted",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      },
      {
        title: "Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets/",
      },
      {
        title: "Burst Balloons",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/burst-balloons/",
      },
      {
        title: "Merge Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-sorted-array/",
      },
      {
        title: "Count of Smaller Numbers After Self",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
      },
      {
        title: "Add and Search Word - Data structure design",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
      },
      {
        title: "Meeting Rooms",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/meeting-rooms/",
      },
      {
        title: "Reverse Linked List II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-linked-list-ii/",
      },
      {
        title: "Number of Dice Rolls With Target Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/",
      },
      {
        title: "Intersection of Two Linked Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
      },
      {
        title: "Convert BST to Greater Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-bst-to-greater-tree/",
      },
      {
        title: "Valid Sudoku",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-sudoku/",
      },
      {
        title: "Graph Valid Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/graph-valid-tree/",
      },
      {
        title: "First Missing Positive",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/first-missing-positive/",
      },
      {
        title: "Sort Colors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-colors/",
      },
      {
        title: "Reconstruct Itinerary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reconstruct-itinerary/",
      },
      {
        title: "Longest Absolute File Path",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-absolute-file-path/",
      },
      {
        title: "Unique Paths III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/unique-paths-iii/",
      },
      {
        title: "Longest Valid Parentheses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-valid-parentheses/",
      },
      {
        title: "Longest Consecutive Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-consecutive-sequence/",
      },
      {
        title: "Two Sum IV - Input is a BST",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",
      },
      {
        title: "Find Minimum in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      },
      {
        title: "Permutations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations/",
      },
      {
        title: "Insert Interval",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/insert-interval/",
      },
      {
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
      },
      {
        title: "Summary Ranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/summary-ranges/",
      },
      {
        title: "Remove Nth Node From End of List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      },
      {
        title: "Bus Routes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/bus-routes/",
      },
      {
        title: "Convert Sorted List to Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
      },
      {
        title: "Nth Highest Salary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/nth-highest-salary/",
      },
      {
        title: "Robot Room Cleaner",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/robot-room-cleaner/",
      },
      {
        title: "Missing Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/missing-number/",
      },
      {
        title: "Reorganize String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorganize-string/",
      },
      {
        title: "Best Time to Buy and Sell Stock III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
      },
      {
        title: "Next Greater Element I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/next-greater-element-i/",
      },
      {
        title: "Largest Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-number/",
      },
      {
        title: "Daily Temperatures",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/daily-temperatures/",
      },
      {
        title: "Candy",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/candy/",
      },
      {
        title: "Largest BST Subtree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-bst-subtree/",
      },
      {
        title: "Max Stack",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/max-stack/",
      },
      {
        title: "Minimum Cost For Tickets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-for-tickets/",
      },
      {
        title: "Peeking Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/peeking-iterator/",
      },
      {
        title: "Kth Largest Element in a Stream",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
      },
      {
        title: "Frog Jump",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/frog-jump/",
      },
      {
        title: "Vertical Order Traversal of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
      },
      {
        title: "Connecting Cities With Minimum Cost",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/connecting-cities-with-minimum-cost/",
      },
      {
        title: "Swap Nodes in Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/swap-nodes-in-pairs/",
      },
      {
        title: "Path Sum III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-iii/",
      },
      {
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/",
      },
      {
        title: "Maximal Rectangle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximal-rectangle/",
      },
      {
        title: "132 Pattern",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/132-pattern/",
      },
      {
        title: "Linked List Cycle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        title: "Path Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-ii/",
      },
      {
        title: "Inorder Successor in BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/inorder-successor-in-bst/",
      },
      {
        title: "Find K Pairs with Smallest Sums",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
      },
      {
        title: "Best Time to Buy and Sell Stock IV",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
      },
      {
        title: "Moving Average from Data Stream",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/moving-average-from-data-stream/",
      },
      {
        title: "3Sum Closest",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum-closest/",
      },
      {
        title: "Climbing Stairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        title: "N-Queens",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/n-queens/",
      },
      {
        title: "Next Greater Element III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-element-iii/",
      },
      {
        title: "Sort List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-list/",
      },
      {
        title: "Find the Duplicate Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-duplicate-number/",
      },
      {
        title: "Coin Change 2",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change-ii/",
      },
      {
        title: "Second Highest Salary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/second-highest-salary/",
      },
      {
        title: "Triangle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/triangle/",
      },
      {
        title: "4Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/4sum/",
      },
      {
        title: "Closest Binary Search Tree Value",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/closest-binary-search-tree-value/",
      },
      {
        title: "Kth Smallest Element in a Sorted Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
      },
      {
        title: "Single Element in a Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-element-in-a-sorted-array/",
      },
      {
        title: "Isomorphic Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/isomorphic-strings/",
      },
      {
        title: "Unique Paths II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-paths-ii/",
      },
      {
        title: "Longest Duplicate Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-duplicate-substring/",
      },
      {
        title: "Set Matrix Zeroes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/set-matrix-zeroes/",
      },
      {
        title: "Sliding Window Median",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-median/",
      },
      {
        title: "Text Justification",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/text-justification/",
      },
      {
        title: "Implement Queue using Stacks",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-queue-using-stacks/",
      },
      {
        title: "Maximum Product of Three Numbers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-product-of-three-numbers/",
      },
      {
        title: "Find All Duplicates in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
      },
      {
        title: "Majority Element II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/majority-element-ii/",
      },
      {
        title: "Longest Common Prefix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-common-prefix/",
      },
      {
        title: "Cheapest Flights Within K Stops",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
      },
      {
        title: "Longest Substring with At Most K Distinct Characters",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
      },
      {
        title: "Maximum Size Subarray Sum Equals k",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/",
      },
      {
        title: "Wildcard Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/wildcard-matching/",
      },
      {
        title: "Basic Calculator IV",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/basic-calculator-iv/",
      },
      {
        title: "Single Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/single-number/",
      },
      {
        title: "Binary Tree Longest Consecutive Sequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/",
      },
      {
        title: "Longest Increasing Path in a Matrix",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
      },
      {
        title: "Find the Shortest Superstring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-the-shortest-superstring/",
      },
      {
        title: "Exclusive Time of Functions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/exclusive-time-of-functions/",
      },
      {
        title: "Plus One Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/plus-one-linked-list/",
      },
      {
        title: "Rectangle Overlap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rectangle-overlap/",
      },
      {
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
      {
        title: "Implement strStr()",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-strstr/",
      },
      {
        title: "Find Duplicate Subtrees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-duplicate-subtrees/",
      },
      {
        title: "ZigZag Conversion",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/zigzag-conversion/",
      },
      {
        title: "Evaluate Division",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-division/",
      },
      {
        title: "Longest Palindromic Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-subsequence/",
      },
      {
        title: "Valid Parenthesis String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-parenthesis-string/",
      },
      {
        title: "Substring with Concatenation of All Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
      },
      {
        title: "Valid Anagram",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-anagram/",
      },
      {
        title: "Intersection of Two Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays/",
      },
      {
        title: "Knight Probability in Chessboard",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/knight-probability-in-chessboard/",
      },
      {
        title: "Time Based Key-Value Store",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/time-based-key-value-store/",
      },
      {
        title: "Reverse String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string/",
      },
      {
        title: "Capacity To Ship Packages Within D Days",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
      },
      {
        title: "Remove Invalid Parentheses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/remove-invalid-parentheses/",
      },
      {
        title: "Divide Two Integers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/divide-two-integers/",
      },
      {
        title: "Path Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/path-sum/",
      },
      {
        title: "Binary Search Tree to Greater Sum Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/",
      },
      {
        title: "Find K-Length Substrings With No Repeated Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/",
      },
      {
        title: "Pow(x, n)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/powx-n/",
      },
      {
        title: "Find the Town Judge",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-town-judge/",
      },
      {
        title: "Sudoku Solver",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sudoku-solver/",
      },
      {
        title: "Split Array With Same Average",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/split-array-with-same-average/",
      },
      {
        title: "Implement Stack using Queues",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-stack-using-queues/",
      },
      {
        title: "K-Similar Strings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/k-similar-strings/",
      },
      {
        title: "Kth Smallest Element in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      },
      {
        title: "Accounts Merge",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/accounts-merge/",
      },
      {
        title: "Design Circular Queue",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-circular-queue/",
      },
      {
        title: "Longest Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-palindrome/",
      },
      {
        title: "01 Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/01-matrix/",
      },
      {
        title: "Number of Atoms",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-atoms/",
      },
      {
        title: "Convert Binary Search Tree to Sorted Doubly Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/",
      },
      {
        title: "Data Stream as Disjoint Intervals",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/data-stream-as-disjoint-intervals/",
      },
      {
        title: "Valid Tic-Tac-Toe State",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-tic-tac-toe-state/",
      },
      {
        title: "Flatten a Multilevel Doubly Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
      },
      {
        title: "Binary Tree Paths",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-paths/",
      },
      {
        title: "Surrounded Regions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/surrounded-regions/",
      },
      {
        title: "Move Zeroes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/move-zeroes/",
      },
      {
        title: "Binary Tree Inorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      },
      {
        title: "Palindrome Partitioning",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindrome-partitioning/",
      },
      {
        title: "Search in Rotated Sorted Array II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
      },
      {
        title: "Repeated DNA Sequences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/repeated-dna-sequences/",
      },
      {
        title: "Palindrome Permutation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-permutation/",
      },
      {
        title: "Reverse Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-integer/",
      },
      {
        title: "Insert Delete GetRandom O(1) - Duplicates allowed",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/",
      },
      {
        title: "Diagonal Traverse",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/diagonal-traverse/",
      },
      {
        title: "Path with Maximum Gold",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-with-maximum-gold/",
      },
      {
        title: "Friend Circles",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/friend-circles/",
      },
      {
        title: "Partition List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-list/",
      },
      {
        title: "Stream of Characters",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/stream-of-characters/",
      },
      {
        title: "Most Frequent Subtree Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/most-frequent-subtree-sum/",
      },
      {
        title: "Invert Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/invert-binary-tree/",
      },
      {
        title: "Perfect Squares",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/perfect-squares/",
      },
      {
        title: "Employees Earning More Than Their Managers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/employees-earning-more-than-their-managers/",
      },
      {
        title: "Flatten Binary Tree to Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
      },
      {
        title: "Palindromic Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindromic-substrings/",
      },
      {
        title: "Fizz Buzz",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fizz-buzz/",
      },
      {
        title: "Convert Sorted Array to Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
      },
      {
        title: "Web Crawler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/web-crawler/",
      },
      {
        title: "Two Sum BSTs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/two-sum-bsts/",
      },
      {
        title: "Cousins in Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/cousins-in-binary-tree/",
      },
      {
        title: "Design Log Storage System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-log-storage-system/",
      },
      {
        title: "Reverse Words in a String II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-words-in-a-string-ii/",
      },
      {
        title: "Rotate List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-list/",
      },
      {
        title: "Pairs of Songs With Total Durations Divisible by 60",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/",
      },
      {
        title: "Find First and Last Position of Element in Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      },
      {
        title: "Combine Two Tables",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/combine-two-tables/",
      },
      {
        title: "Closest Binary Search Tree Value II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/closest-binary-search-tree-value-ii/",
      },
      {
        title: "Shortest Path Visiting All Nodes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-path-visiting-all-nodes/",
      },
      {
        title: "Shortest Word Distance",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shortest-word-distance/",
      },
      {
        title: "Count Primes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-primes/",
      },
      {
        title: "Linked List Cycle II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/linked-list-cycle-ii/",
      },
      {
        title: "Sqrt(x)",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sqrtx/",
      },
      {
        title: "Battleships in a Board",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/battleships-in-a-board/",
      },
      {
        title: "Palindrome Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-number/",
      },
      {
        title: "Fraction to Recurring Decimal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/fraction-to-recurring-decimal/",
      },
      {
        title: "Last Stone Weight",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/last-stone-weight/",
      },
      {
        title: "Island Perimeter",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/island-perimeter/",
      },
      {
        title: "Queue Reconstruction by Height",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/queue-reconstruction-by-height/",
      },
      {
        title: "Longest Turbulent Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-turbulent-subarray/",
      },
      {
        title: "Find Peak Element",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-peak-element/",
      },
      {
        title: "Find Leaves of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-leaves-of-binary-tree/",
      },
      {
        title: "Employee Importance",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/employee-importance/",
      },
      {
        title: "Partition to K Equal Sum Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
      },
      {
        title: "Random Pick with Weight",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/random-pick-with-weight/",
      },
      {
        title: "Count and Say",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-and-say/",
      },
      {
        title: "Interval List Intersections",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/interval-list-intersections/",
      },
      {
        title: "Falling Squares",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/falling-squares/",
      },
      {
        title: "Insert into a Sorted Circular Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/",
      },
      {
        title: "Remove Duplicate Letters",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/remove-duplicate-letters/",
      },
      {
        title: "Balanced Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/balanced-binary-tree/",
      },
      {
        title: "Video Stitching",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/video-stitching/",
      },
      {
        title: "Serialize and Deserialize N-ary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/",
      },
      {
        title: "String Compression",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/string-compression/",
      },
      {
        title: "Remove K Digits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-k-digits/",
      },
      {
        title: "Bomb Enemy",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bomb-enemy/",
      },
      {
        title: "Number of Digit One",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-digit-one/",
      },
      {
        title: "Find K Closest Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-closest-elements/",
      },
      {
        title: "Sort Characters By Frequency",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-characters-by-frequency/",
      },
      {
        title: "Android Unlock Patterns",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/android-unlock-patterns/",
      },
      {
        title: "Intersection of Two Arrays II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
      },
      {
        title: "Smallest Range Covering Elements from K Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
      },
      {
        title: "Longest Substring with At Most Two Distinct Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/",
      },
      {
        title: "Guess the Word",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/guess-the-word/",
      },
      {
        title: "Maximum XOR of Two Numbers in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
      },
      {
        title: "House Robber",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/house-robber/",
      },
      {
        title: "All O`one Data Structure",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/all-oone-data-structure/",
      },
      {
        title: "Subarrays with K Different Integers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/subarrays-with-k-different-integers/",
      },
      {
        title: "Is Graph Bipartite?",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/is-graph-bipartite/",
      },
      {
        title: "Wiggle Sort",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/wiggle-sort/",
      },
      {
        title: "House Robber III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber-iii/",
      },
      {
        title: "Max Increase to Keep City Skyline",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-increase-to-keep-city-skyline/",
      },
      {
        title: "Optimal Account Balancing",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/optimal-account-balancing/",
      },
      {
        title: "Split Array Largest Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/split-array-largest-sum/",
      },
      {
        title: "Rotate Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rotate-array/",
      },
      {
        title: "Valid Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        title: "Minimum Knight Moves",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-knight-moves/",
      },
      {
        title: "Maximum Width of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-width-of-binary-tree/",
      },
      {
        title: "Sales Analysis II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sales-analysis-ii/",
      },
      {
        title: "Remove Duplicates from Sorted List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
      },
      {
        title: "Combination Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-ii/",
      },
      {
        title: "Stepping Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/stepping-numbers/",
      },
      {
        title: "Asteroid Collision",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/asteroid-collision/",
      },
      {
        title: "Remove Duplicates from Sorted List II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
      },
      {
        title: "Minimum Height Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-height-trees/",
      },
      {
        title: "Sentence Similarity II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sentence-similarity-ii/",
      },
      {
        title: "Sum Root to Leaf Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
      },
      {
        title: "Excel Sheet Column Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/excel-sheet-column-number/",
      },
      {
        title: "Odd Even Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/odd-even-linked-list/",
      },
      {
        title: "Merge Two Binary Trees",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-binary-trees/",
      },
      {
        title: "First Unique Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/first-unique-number/",
      },
      {
        title: "High Five",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/high-five/",
      },
      {
        title: "Power of Two",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/power-of-two/",
      },
      {
        title: "Contiguous Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/contiguous-array/",
      },
      {
        title: "Valid Number",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/valid-number/",
      },
      {
        title: "Reverse Words in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-words-in-a-string/",
      },
      {
        title: "Maximum Gap",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-gap/",
      },
      {
        title: "Line Reflection",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/line-reflection/",
      },
      {
        title: "Fibonacci Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fibonacci-number/",
      },
      {
        title: "One Edit Distance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/one-edit-distance/",
      },
      {
        title: "Online Stock Span",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/online-stock-span/",
      },
      {
        title: "Happy Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/happy-number/",
      },
      {
        title: "Meeting Scheduler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/meeting-scheduler/",
      },
      {
        title: "Super Washing Machines",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/super-washing-machines/",
      },
      {
        title: "Find Winner on a Tic Tac Toe Game",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/",
      },
      {
        title: "Sum of Root To Leaf Binary Numbers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/",
      },
      {
        title: "Subsets II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets-ii/",
      },
      {
        title: "Global and Local Inversions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/global-and-local-inversions/",
      },
      {
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      },
      {
        title: "Minimum Genetic Mutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-genetic-mutation/",
      },
      {
        title: "Single Number II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-number-ii/",
      },
      {
        title: "Department Highest Salary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/department-highest-salary/",
      },
      {
        title: "Max Consecutive Ones III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-consecutive-ones-iii/",
      },
      {
        title: "Trapping Rain Water II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water-ii/",
      },
      {
        title: "Combination Sum IV",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-iv/",
      },
      {
        title: "Construct Binary Tree from Inorder and Postorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
      },
      {
        title: "Design File System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-file-system/",
      },
      {
        title: "Find the Derangement of An Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-derangement-of-an-array/",
      },
      {
        title: "Split Linked List in Parts",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/split-linked-list-in-parts/",
      },
      {
        title: "My Calendar I",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/my-calendar-i/",
      },
      {
        title: "Palindrome Partitioning II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/palindrome-partitioning-ii/",
      },
      {
        title: "Unique Email Addresses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/unique-email-addresses/",
      },
      {
        title: "Count Univalue Subtrees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-univalue-subtrees/",
      },
      {
        title: "Pascal's Triangle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/pascals-triangle/",
      },
      {
        title: "Contains Duplicate",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate/",
      },
      {
        title: "Permutation Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/permutation-sequence/",
      },
      {
        title: "Best Meeting Point",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-meeting-point/",
      },
      {
        title: "Plus One",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/plus-one/",
      },
      {
        title: "Design Twitter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-twitter/",
      },
      {
        title: "Range Module",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/range-module/",
      },
      {
        title: "Couples Holding Hands",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/couples-holding-hands/",
      },
      {
        title: "Valid Triangle Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-triangle-number/",
      },
      {
        title: "Bulls and Cows",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/bulls-and-cows/",
      },
      {
        title: "Add Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-strings/",
      },
      {
        title: "Minimum Size Subarray Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
      },
      {
        title: "Reverse Words in a String III",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-words-in-a-string-iii/",
      },
      {
        title: "Find K-th Smallest Pair Distance",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-k-th-smallest-pair-distance/",
      },
      {
        title: "Self Crossing",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/self-crossing/",
      },
      {
        title: "UTF-8 Validation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/utf-8-validation/",
      },
      {
        title: "Word Frequency",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-frequency/",
      },
      {
        title: "Campus Bikes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/campus-bikes/",
      },
      {
        title: "Insert into a Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
      },
      {
        title: "Jewels and Stones",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/jewels-and-stones/",
      },
      {
        title: "Repeated String Match",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/repeated-string-match/",
      },
      {
        title: "Reverse String II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string-ii/",
      },
      {
        title: "Average of Levels in Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/average-of-levels-in-binary-tree/",
      },
      {
        title: "Missing Ranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/missing-ranges/",
      },
      {
        title: "Network Delay Time",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/network-delay-time/",
      },
      {
        title: "Water and Jug Problem",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/water-and-jug-problem/",
      },
      {
        title: "Bulb Switcher",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bulb-switcher/",
      },
      {
        title: "Longest Substring with At Least K Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/",
      },
      {
        title: "Nested List Weight Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/nested-list-weight-sum/",
      },
      {
        title: "Maximum Sum of Two Non-Overlapping Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/",
      },
      {
        title: "Relative Sort Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/relative-sort-array/",
      },
      {
        title: "Gray Code",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/gray-code/",
      },
      {
        title: "Minimum Depth of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
      },
      {
        title: "Sum of Two Integers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-two-integers/",
      },
      {
        title: "Logical OR of Two Binary Grids Represented as Quad-Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/",
      },
      {
        title: "Backspace String Compare",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/backspace-string-compare/",
      },
      {
        title: "Russian Doll Envelopes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/russian-doll-envelopes/",
      },
      {
        title: "Sliding Puzzle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-puzzle/",
      },
      {
        title: "Maximum Level Sum of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/",
      },
      {
        title: "Arithmetic Slices",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/arithmetic-slices/",
      },
      {
        title: "Find Largest Value in Each Tree Row",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-largest-value-in-each-tree-row/",
      },
      {
        title: "Construct Quad Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-quad-tree/",
      },
      {
        title: "Delete Node in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-node-in-a-bst/",
      },
      {
        title: "Same Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/same-tree/",
      },
      {
        title: "Validate IP Address",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-ip-address/",
      },
      {
        title: "Number of Islands II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-islands-ii/",
      },
      {
        title: "Find Common Characters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-common-characters/",
      },
      {
        title: "Dinner Plate Stacks",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/dinner-plate-stacks/",
      },
      {
        title: "Number of Days Between Two Dates",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-days-between-two-dates/",
      },
      {
        title: "Next Greater Node In Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-node-in-linked-list/",
      },
      {
        title: "Matchsticks to Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/matchsticks-to-square/",
      },
      {
        title: "Minimum Window Subsequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-subsequence/",
      },
      {
        title: "Customers Who Never Order",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/customers-who-never-order/",
      },
      {
        title: "Minimum Cost Tree From Leaf Values",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/",
      },
      {
        title: "K Empty Slots",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/k-empty-slots/",
      },
      {
        title: "Multiply Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/multiply-strings/",
      },
      {
        title: "Maximize Distance to Closest Person",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximize-distance-to-closest-person/",
      },
      {
        title: "Rank Scores",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rank-scores/",
      },
      {
        title: "Count Complete Tree Nodes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-complete-tree-nodes/",
      },
      {
        title: "Range Sum Query 2D - Immutable",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-sum-query-2d-immutable/",
      },
      {
        title: "Car Pooling",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/car-pooling/",
      },
      {
        title: "Campus Bikes II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/campus-bikes-ii/",
      },
      {
        title: "Partition Equal Subset Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-equal-subset-sum/",
      },
      {
        title: "Minimum Difficulty of a Job Schedule",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/",
      },
      {
        title: "Different Ways to Add Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/different-ways-to-add-parentheses/",
      },
      {
        title: "Binary Tree Postorder Traversal",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
      },
      {
        title: "Maximum Sum BST in Binary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/",
      },
      {
        title: "Longest Univalue Path",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-univalue-path/",
      },
      {
        title: "Permutations II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations-ii/",
      },
      {
        title: "Design Bounded Blocking Queue",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-bounded-blocking-queue/",
      },
      {
        title: "Delete Node in a Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
      },
      {
        title: "Number of Submatrices That Sum to Target",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/",
      },
      {
        title: "Maximum Length of Pair Chain",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-length-of-pair-chain/",
      },
      {
        title: "Minimize Malware Spread",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimize-malware-spread/",
      },
      {
        title: "Create Maximum Number",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/create-maximum-number/",
      },
      {
        title: "Sales Analysis III",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sales-analysis-iii/",
      },
      {
        title: "Permutation in String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutation-in-string/",
      },
      {
        title: "Range Sum Query - Mutable",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-sum-query-mutable/",
      },
      {
        title: "Pancake Sorting",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pancake-sorting/",
      },
      {
        title: "Construct Binary Tree from Preorder and Postorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/",
      },
      {
        title: "Distinct Subsequences",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/distinct-subsequences/",
      },
      {
        title: "Smallest Subsequence of Distinct Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/",
      },
      {
        title: "Longest Common Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-common-subsequence/",
      },
      {
        title: "Shortest Palindrome",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-palindrome/",
      },
      {
        title: "Reverse Vowels of a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-vowels-of-a-string/",
      },
      {
        title: "Minimum Distance Between BST Nodes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-distance-between-bst-nodes/",
      },
      {
        title: "Ugly Number II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/ugly-number-ii/",
      },
      {
        title: "Consecutive Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/consecutive-numbers/",
      },
      {
        title: "Students Report By Geography",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/students-report-by-geography/",
      },
      {
        title: "Binary Tree Level Order Traversal II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
      },
      {
        title: "Sort Array By Parity",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sort-array-by-parity/",
      },
      {
        title: "Lemonade Change",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/lemonade-change/",
      },
      {
        title: "Shortest Unsorted Continuous Subarray",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shortest-unsorted-continuous-subarray/",
      },
      {
        title: "Increasing Triplet Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/increasing-triplet-subsequence/",
      },
      {
        title: "Elimination Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/elimination-game/",
      },
      {
        title: "Find Cumulative Salary of an Employee",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-cumulative-salary-of-an-employee/",
      },
      {
        title: "Trips and Users",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trips-and-users/",
      },
      {
        title: "Longest Happy String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-happy-string/",
      },
      {
        title: "Strong Password Checker",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/strong-password-checker/",
      },
      {
        title: "Making A Large Island",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/making-a-large-island/",
      },
      {
        title: "Sum of Nodes with Even-Valued Grandparent",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/",
      },
      {
        title: "Longest Repeating Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-repeating-substring/",
      },
      {
        title: "Number of Boomerangs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-boomerangs/",
      },
      {
        title: "K-diff Pairs in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/k-diff-pairs-in-an-array/",
      },
      {
        title: "Get Watched Videos by Your Friends",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/get-watched-videos-by-your-friends/",
      },
      {
        title: "Word Pattern",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/word-pattern/",
      },
      {
        title: "Middle of the Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/middle-of-the-linked-list/",
      },
      {
        title: "Random Pick with Blacklist",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/random-pick-with-blacklist/",
      },
      {
        title: "Maximum Sum Circular Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-sum-circular-subarray/",
      },
      {
        title: "Number of 1 Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-1-bits/",
      },
      {
        title: "Length of Longest Fibonacci Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/",
      },
      {
        title: "Customer Placing the Largest Number of Orders",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/",
      },
      {
        title: "Ransom Note",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/ransom-note/",
      },
      {
        title: "Dungeon Game",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/dungeon-game/",
      },
      {
        title: "Robot Return to Origin",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/robot-return-to-origin/",
      },
      {
        title: "Keys and Rooms",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/keys-and-rooms/",
      },
      {
        title: "Design A Leaderboard",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-a-leaderboard/",
      },
      {
        title: "Range Sum of BST",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/range-sum-of-bst/",
      },
      {
        title: "Unique Binary Search Trees II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-binary-search-trees-ii/",
      },
      {
        title: "Remove Linked List Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-linked-list-elements/",
      },
      {
        title: "Logger Rate Limiter",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/logger-rate-limiter/",
      },
      {
        title: "Complete Binary Tree Inserter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/complete-binary-tree-inserter/",
      },
      {
        title: "Rotate String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rotate-string/",
      },
      {
        title: "Maximum Depth of N-ary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-depth-of-n-ary-tree/",
      },
      {
        title: "Read N Characters Given Read4 II - Call multiple times",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/",
      },
      {
        title: "Path In Zigzag Labelled Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/",
      },
      {
        title: "Linked List Random Node",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/linked-list-random-node/",
      },
      {
        title: "My Calendar III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/my-calendar-iii/",
      },
      {
        title: "Minimum Domino Rotations For Equal Row",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/",
      },
      {
        title: "Shortest Word Distance II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-word-distance-ii/",
      },
      {
        title: "Combinations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combinations/",
      },
      {
        title: "Third Maximum Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/third-maximum-number/",
      },
      {
        title: "Defanging an IP Address",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/defanging-an-ip-address/",
      },
      {
        title: "Partition Array Into Three Parts With Equal Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/",
      },
      {
        title: "Pascal's Triangle II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/pascals-triangle-ii/",
      },
      {
        title: "Largest 1-Bordered Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-1-bordered-square/",
      },
      {
        title: "Min Cost Climbing Stairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/min-cost-climbing-stairs/",
      },
      {
        title: "Minimum Moves to Equal Array Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-moves-to-equal-array-elements/",
      },
      {
        title: "Count The Repetitions",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-the-repetitions/",
      },
      {
        title: "Managers with at Least 5 Direct Reports",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/managers-with-at-least-5-direct-reports/",
      },
      {
        title: "Find Duplicate File in System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-duplicate-file-in-system/",
      },
      {
        title: "Prime Number of Set Bits in Binary Representation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/",
      },
      {
        title: "Largest Divisible Subset",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-divisible-subset/",
      },
      {
        title: "Boats to Save People",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/boats-to-save-people/",
      },
      {
        title: "Minimum Number of Arrows to Burst Balloons",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
      },
      {
        title: "My Calendar II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/my-calendar-ii/",
      },
      {
        title: "Remove All Adjacent Duplicates In String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
      },
      {
        title: "K-th Symbol in Grammar",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-th-symbol-in-grammar/",
      },
      {
        title: "All People Report to the Given Manager",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-people-report-to-the-given-manager/",
      },
      {
        title: "Perfect Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/perfect-number/",
      },
      {
        title: "Search Insert Position",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/search-insert-position/",
      },
      {
        title: "Integer Replacement",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/integer-replacement/",
      },
      {
        title: "Subdomain Visit Count",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/subdomain-visit-count/",
      },
      {
        title: "Sparse Matrix Multiplication",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sparse-matrix-multiplication/",
      },
      {
        title: "Minimum Area Rectangle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-area-rectangle/",
      },
      {
        title: "Non-overlapping Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/non-overlapping-intervals/",
      },
      {
        title: "Trim a Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/trim-a-binary-search-tree/",
      },
      {
        title: "Exchange Seats",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/exchange-seats/",
      },
      {
        title: "Cherry Pickup",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/cherry-pickup/",
      },
      {
        title: "Shortest Subarray with Sum at Least K",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
      },
      {
        title: "Minimum Remove to Make Valid Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/",
      },
      {
        title: "Smallest String With Swaps",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-string-with-swaps/",
      },
      {
        title: "Design Compressed String Iterator",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-compressed-string-iterator/",
      },
      {
        title: "Construct Binary Search Tree from Preorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
      },
      {
        title: "Number of Closed Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-closed-islands/",
      },
      {
        title: "Bulb Switcher III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bulb-switcher-iii/",
      },
      {
        title: "Missing Element in Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/missing-element-in-sorted-array/",
      },
      {
        title: "Human Traffic of Stadium",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/human-traffic-of-stadium/",
      },
      {
        title: "Find Smallest Common Element in All Rows",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-smallest-common-element-in-all-rows/",
      },
      {
        title: "Pyramid Transition Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pyramid-transition-matrix/",
      },
      {
        title: "Rearrange String k Distance Apart",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/rearrange-string-k-distance-apart/",
      },
      {
        title: "Minimum Number of K Consecutive Bit Flips",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/",
      },
      {
        title: "Shortest Path to Get All Keys",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-path-to-get-all-keys/",
      },
      {
        title: "Binary Tree Longest Consecutive Sequence II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/",
      },
      {
        title: "RLE Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rle-iterator/",
      },
      {
        title: "Next Closest Time",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-closest-time/",
      },
      {
        title: "Redundant Connection",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/redundant-connection/",
      },
      {
        title: "Contains Duplicate II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate-ii/",
      },
      {
        title: "Number of Matching Subsequences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-matching-subsequences/",
      },
      {
        title: "Peak Index in a Mountain Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
      },
      {
        title: "Construct Binary Tree from String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-string/",
      },
      {
        title: "String Transforms Into Another String",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/string-transforms-into-another-string/",
      },
      {
        title: "Tree Diameter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/tree-diameter/",
      },
      {
        title: "Minimum Number of Refueling Stops",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-refueling-stops/",
      },
      {
        title: "Predict the Winner",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/predict-the-winner/",
      },
      {
        title: "Longest Arithmetic Sequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-arithmetic-sequence/",
      },
      {
        title: "Squares of a Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
      },
      {
        title: "Continuous Subarray Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/continuous-subarray-sum/",
      },
      {
        title: "Maximum Swap",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-swap/",
      },
      {
        title: "Count Number of Nice Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-number-of-nice-subarrays/",
      },
      {
        title: "Array Partition I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/array-partition-i/",
      },
      {
        title: "Score of Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/score-of-parentheses/",
      },
      {
        title: "Design Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-linked-list/",
      },
      {
        title: "As Far from Land as Possible",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/as-far-from-land-as-possible/",
      },
      {
        title:
          "Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/",
      },
      {
        title: "Maximum Difference Between Node and Ancestor",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/",
      },
      {
        title: "Minimum Area Rectangle II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-area-rectangle-ii/",
      },
      {
        title: "Reverse Pairs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reverse-pairs/",
      },
      {
        title: "Longest String Chain",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-string-chain/",
      },
      {
        title: "Counting Bits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/counting-bits/",
      },
      {
        title: "Longest Word in Dictionary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-word-in-dictionary/",
      },
      {
        title: "Sum of Left Leaves",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-left-leaves/",
      },
      {
        title: "Find Pivot Index",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-pivot-index/",
      },
      {
        title: "Minimum Time Difference",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-time-difference/",
      },
      {
        title: "Distribute Coins in Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/distribute-coins-in-binary-tree/",
      },
      {
        title: "Web Crawler Multithreaded",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/web-crawler-multithreaded/",
      },
      {
        title: "Count Number of Teams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-number-of-teams/",
      },
      {
        title: "Flip Equivalent Binary Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flip-equivalent-binary-trees/",
      },
      {
        title: "DI String Match",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/di-string-match/",
      },
      {
        title: "House Robber II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber-ii/",
      },
      {
        title: "Best Time to Buy and Sell Stock with Transaction Fee",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
      },
      {
        title: "Wiggle Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/wiggle-subsequence/",
      },
      {
        title: "Number of Longest Increasing Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
      },
      {
        title: "Maximize Sum Of Array After K Negations",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/",
      },
      {
        title: "Exam Room",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/exam-room/",
      },
      {
        title: "Search in a Sorted Array of Unknown Size",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/",
      },
      {
        title: "N-ary Tree Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/n-ary-tree-level-order-traversal/",
      },
      {
        title: "Is Subsequence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/is-subsequence/",
      },
      {
        title: "Sales by Day of the Week",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sales-by-day-of-the-week/",
      },
      {
        title: "Find Words That Can Be Formed by Characters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/",
      },
      {
        title: "Best Time to Buy and Sell Stock with Cooldown",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
      },
      {
        title: "Check Completeness of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-completeness-of-a-binary-tree/",
      },
      {
        title: "Subarray Sums Divisible by K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-sums-divisible-by-k/",
      },
      {
        title: "Building H2O",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/building-h2o/",
      },
      {
        title: "All Paths from Source Lead to Destination",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-paths-from-source-lead-to-destination/",
      },
      {
        title: "Heaters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/heaters/",
      },
      {
        title: "Remove Sub-Folders from the Filesystem",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/",
      },
      {
        title: "Task Scheduler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/task-scheduler/",
      },
      {
        title: "Find and Replace Pattern",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-and-replace-pattern/",
      },
      {
        title: "Sort an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-an-array/",
      },
      {
        title: "Maximum Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-binary-tree/",
      },
      {
        title: "Print in Order",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/print-in-order/",
      },
      {
        title: "Letter Case Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-case-permutation/",
      },
      {
        title: "Similar String Groups",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/similar-string-groups/",
      },
      {
        title: "Fruit Into Baskets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/fruit-into-baskets/",
      },
      {
        title: "Replace Elements with Greatest Element on Right Side",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/",
      },
      {
        title: "Reformat Department Table",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reformat-department-table/",
      },
      {
        title: "Binary Tree Preorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
      },
      {
        title: "24 Game",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/24-game/",
      },
      {
        title: "Add Binary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-binary/",
      },
      {
        title: "Second Minimum Node In a Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/",
      },
      {
        title: "Product Sales Analysis I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/product-sales-analysis-i/",
      },
      {
        title: "Split Array into Fibonacci Sequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/split-array-into-fibonacci-sequence/",
      },
      {
        title: "Delete Duplicate Emails",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/delete-duplicate-emails/",
      },
      {
        title: "Closest Leaf in a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/closest-leaf-in-a-binary-tree/",
      },
      {
        title: "Vowel Spellchecker",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/vowel-spellchecker/",
      },
      {
        title: "Group Shifted Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-shifted-strings/",
      },
      {
        title: "Factorial Trailing Zeroes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/factorial-trailing-zeroes/",
      },
      {
        title: "Minimum Time Visiting All Points",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-time-visiting-all-points/",
      },
      {
        title: "Rotate Function",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-function/",
      },
      {
        title: "Palindrome Permutation II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindrome-permutation-ii/",
      },
      {
        title: "Max Consecutive Ones",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/max-consecutive-ones/",
      },
      {
        title: "Remove Element",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-element/",
      },
      {
        title: "Delete Nodes And Return Forest",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-nodes-and-return-forest/",
      },
      {
        title: "Image Smoother",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/image-smoother/",
      },
      {
        title: "Camelcase Matching",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/camelcase-matching/",
      },
      {
        title: "Hamming Distance",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/hamming-distance/",
      },
      {
        title: "Open the Lock",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/open-the-lock/",
      },
      {
        title: "Can Place Flowers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/can-place-flowers/",
      },
      {
        title: "Most Profit Assigning Work",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/most-profit-assigning-work/",
      },
      {
        title: "Valid Perfect Square",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-perfect-square/",
      },
      {
        title: "Custom Sort String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/custom-sort-string/",
      },
      {
        title: "Combination Sum III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-iii/",
      },
      {
        title: "Minimum Swaps to Make Strings Equal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/",
      },
      {
        title: "Word Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-subsets/",
      },
      {
        title: "Kill Process",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kill-process/",
      },
      {
        title: "Minimum Add to Make Parentheses Valid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/",
      },
      {
        title: "Repeated Substring Pattern",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/repeated-substring-pattern/",
      },
      {
        title: "First Bad Version",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/first-bad-version/",
      },
      {
        title: "Uncommon Words from Two Sentences",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/uncommon-words-from-two-sentences/",
      },
      {
        title: "Koko Eating Bananas",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/koko-eating-bananas/",
      },
      {
        title: "Design HashSet",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-hashset/",
      },
      {
        title: "Longest Continuous Increasing Subsequence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-continuous-increasing-subsequence/",
      },
      {
        title: "Sales Analysis I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sales-analysis-i/",
      },
      {
        title: "Single Number III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-number-iii/",
      },
      {
        title: "Snapshot Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/snapshot-array/",
      },
      {
        title: "Verifying an Alien Dictionary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/verifying-an-alien-dictionary/",
      },
      {
        title: "Binary Tree Pruning",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-pruning/",
      },
      {
        title: "The K Weakest Rows in a Matrix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/",
      },
      {
        title: "Friendly Movies Streamed Last Month",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/friendly-movies-streamed-last-month/",
      },
      {
        title: "Leaf-Similar Trees",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/leaf-similar-trees/",
      },
      {
        title: "Find Customer Referee",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-customer-referee/",
      },
      {
        title: "Remove Palindromic Subsequences",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-palindromic-subsequences/",
      },
      {
        title: "Two City Scheduling",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-city-scheduling/",
      },
      {
        title: "Average Selling Price",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/average-selling-price/",
      },
      {
        title: "Minimum Swaps To Make Sequences Increasing",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/",
      },
      {
        title: "Product Sales Analysis II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/product-sales-analysis-ii/",
      },
      {
        title: "Minimum Falling Path Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-falling-path-sum/",
      },
      {
        title: "N-Queens II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/n-queens-ii/",
      },
      {
        title: "Remove Duplicates from Sorted Array II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
      },
      {
        title: "Sort Array By Parity II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sort-array-by-parity-ii/",
      },
      {
        title: "Split a String in Balanced Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/split-a-string-in-balanced-strings/",
      },
      {
        title: "Find the Team Size",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-team-size/",
      },
      {
        title: "Maximum Product of Splitted Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/",
      },
      {
        title: "Number of Equivalent Domino Pairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-equivalent-domino-pairs/",
      },
      {
        title: "Count Servers that Communicate",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-servers-that-communicate/",
      },
      {
        title: "Height Checker",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/height-checker/",
      },
      {
        title: "Balance a Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/balance-a-binary-search-tree/",
      },
      {
        title: "Maximum Number of Vowels in a Substring of Given Length",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/",
      },
      {
        title: "Binary Search",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-search/",
      },
      {
        title: "Univalued Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/univalued-binary-tree/",
      },
      {
        title: "N-ary Tree Postorder Traversal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/n-ary-tree-postorder-traversal/",
      },
      {
        title: "Last Stone Weight II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/last-stone-weight-ii/",
      },
      {
        title: "All Paths From Source to Target",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-paths-from-source-to-target/",
      },
      {
        title: "Customer Order Frequency",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/customer-order-frequency/",
      },
      {
        title: "Construct String from Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/construct-string-from-binary-tree/",
      },
      {
        title: "Reverse Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-bits/",
      },
      {
        title: "Find N Unique Integers Sum up to Zero",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/",
      },
      {
        title: "Delete Leaves With a Given Value",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-leaves-with-a-given-value/",
      },
      {
        title: "Angle Between Hands of a Clock",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/angle-between-hands-of-a-clock/",
      },
      {
        title: "Find Mode in Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-mode-in-binary-search-tree/",
      },
      {
        title: "Range Sum Query - Immutable",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/range-sum-query-immutable/",
      },
      {
        title: "Non-decreasing Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/non-decreasing-array/",
      },
      {
        title: "Maximum Number of Non-Overlapping Substrings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/",
      },
      {
        title: "Find Minimum in Rotated Sorted Array II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/",
      },
      {
        title: "Find the Difference",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-difference/",
      },
      {
        title: "How Many Numbers Are Smaller Than the Current Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/",
      },
      {
        title: "Count Negative Numbers in a Sorted Matrix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/",
      },
      {
        title: "Kids With the Greatest Number of Candies",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/",
      },
      {
        title: "Equal Tree Partition",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/equal-tree-partition/",
      },
      {
        title: "Complex Number Multiplication",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/complex-number-multiplication/",
      },
      {
        title: "Optimal Division",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/optimal-division/",
      },
      {
        title: "Set Mismatch",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/set-mismatch/",
      },
      {
        title: "Monotone Increasing Digits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/monotone-increasing-digits/",
      },
      {
        title: "Split BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/split-bst/",
      },
      {
        title: "Loud and Rich",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/loud-and-rich/",
      },
      {
        title: "Orderly Queue",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/orderly-queue/",
      },
      {
        title: "Numbers At Most N Given Digit Set",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/numbers-at-most-n-given-digit-set/",
      },
      {
        title: "Digit Count in Range",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/digit-count-in-range/",
      },
      {
        title: "Index Pairs of a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/index-pairs-of-a-string/",
      },
      {
        title: "Sum of Digits in the Minimum Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/",
      },
      {
        title: "Number of Days in a Month",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-days-in-a-month/",
      },
      {
        title: "Remove Vowels from a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-vowels-from-a-string/",
      },
      {
        title: "Armstrong Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/armstrong-number/",
      },
      {
        title: "Recover a Tree From Preorder Traversal",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/",
      },
      {
        title: "Largest Unique Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/largest-unique-number/",
      },
      {
        title: "Uncrossed Lines",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/uncrossed-lines/",
      },
      {
        title: "Customers Who Bought All Products",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/customers-who-bought-all-products/",
      },
      {
        title: "Actors and Directors Who Cooperated At Least Three Times",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/",
      },
      {
        title: "Distant Barcodes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/distant-barcodes/",
      },
      {
        title: "Product Sales Analysis III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-sales-analysis-iii/",
      },
      {
        title: "Insufficient Nodes in Root to Leaf Paths",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/",
      },
      {
        title: "Handshakes That Don't Cross",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/handshakes-that-dont-cross/",
      },
      {
        title: "Remove Covered Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-covered-intervals/",
      },
      {
        title: "Shortest Path with Alternating Colors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-path-with-alternating-colors/",
      },
      {
        title: "Closest Divisors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/closest-divisors/",
      },
      {
        title: "Largest Multiple of Three",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/largest-multiple-of-three/",
      },
      {
        title: "Prime Arrangements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/prime-arrangements/",
      },
      {
        title: "Diet Plan Performance",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/diet-plan-performance/",
      },
      {
        title: "Maximum Score Words Formed by Letters",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-score-words-formed-by-letters/",
      },
      {
        title: "Shift 2D Grid",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shift-2d-grid/",
      },
      {
        title: "All Elements in Two Binary Search Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-elements-in-two-binary-search-trees/",
      },
      {
        title: "List the Products Ordered in a Period",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/list-the-products-ordered-in-a-period/",
      },
      {
        title: "Students With Invalid Departments",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/students-with-invalid-departments/",
      },
      {
        title:
          "Number of Steps to Reduce a Number in Binary Representation to One",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/",
      },
      {
        title: "String Matching in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/string-matching-in-an-array/",
      },
      {
        title: "Queries on a Permutation With Key",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/queries-on-a-permutation-with-key/",
      },
      {
        title: "NPV Queries",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/npv-queries/",
      },
      {
        title: "Pseudo-Palindromic Paths in a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/",
      },
      {
        title:
          "Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/",
      },
      {
        title: "Path Crossing",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/path-crossing/",
      },
      {
        title: "Clone Binary Tree With Random Pointer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/clone-binary-tree-with-random-pointer/",
      },
      {
        title: "Can Make Arithmetic Progression From Sequence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/",
      },
      {
        title: "Clone N-ary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/clone-n-ary-tree/",
      },
      {
        title: "Find the Index of the Large Integer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-index-of-the-large-integer/",
      },
    ],
  },
  {
    name: "Apple",
    questions: [
      {
        title: "Two Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        title: "LRU Cache",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lru-cache/",
      },
      {
        title: "Frog Jump",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/frog-jump/",
      },
      {
        title: "Spiral Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix/",
      },
      {
        title: "Add Two Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers/",
      },
      {
        title: "Peeking Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/peeking-iterator/",
      },
      {
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
      {
        title: "Maximum Subarray",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        title: "Flatten Nested List Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-nested-list-iterator/",
      },
      {
        title: "Trapping Rain Water",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water/",
      },
      {
        title: "Perfect Rectangle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/perfect-rectangle/",
      },
      {
        title: "Reverse Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        title: "Find Median from Data Stream",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-median-from-data-stream/",
      },
      {
        title: "Number of Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        title: "The Skyline Problem",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/the-skyline-problem/",
      },
      {
        title: "Find in Mountain Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-in-mountain-array/",
      },
      {
        title: "Interleaving String",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/interleaving-string/",
      },
      {
        title: "Largest Palindrome Product",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/largest-palindrome-product/",
      },
      {
        title: "UTF-8 Validation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/utf-8-validation/",
      },
      {
        title: "Product of Array Except Self",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
      },
      {
        title: "Sparse Matrix Multiplication",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sparse-matrix-multiplication/",
      },
      {
        title: "String to Integer (atoi)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/string-to-integer-atoi/",
      },
      {
        title: "Serialize and Deserialize N-ary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/",
      },
      {
        title: "Design Tic-Tac-Toe",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-tic-tac-toe/",
      },
      {
        title: "Merge Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        title: "3Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum/",
      },
      {
        title: "Happy Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/happy-number/",
      },
      {
        title: "Longest Increasing Path in a Matrix",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
      },
      {
        title: "Group Anagrams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-anagrams/",
      },
      {
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        title: "Word Break",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-break/",
      },
      {
        title: "Android Unlock Patterns",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/android-unlock-patterns/",
      },
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        title: "Alien Dictionary",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/alien-dictionary/",
      },
      {
        title: "Word Search II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-search-ii/",
      },
      {
        title: "Max Points on a Line",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/max-points-on-a-line/",
      },
      {
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        title: "Rotate Image",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-image/",
      },
      {
        title: "Valid Anagram",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-anagram/",
      },
      {
        title: "Reverse Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-integer/",
      },
      {
        title: "Count Primes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-primes/",
      },
      {
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      },
      {
        title: "Basic Calculator II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/basic-calculator-ii/",
      },
      {
        title: "Fizz Buzz",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fizz-buzz/",
      },
      {
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        title: "Concatenated Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/concatenated-words/",
      },
      {
        title: "First Unique Character in a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/first-unique-character-in-a-string/",
      },
      {
        title: "Knight Probability in Chessboard",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/knight-probability-in-chessboard/",
      },
      {
        title: "Zigzag Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/zigzag-iterator/",
      },
      {
        title: "Reverse String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string/",
      },
      {
        title: "Insert Delete GetRandom O(1)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
      },
      {
        title: "Integer to Roman",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/integer-to-roman/",
      },
      {
        title: "Coin Change",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change/",
      },
      {
        title: "Boundary of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/boundary-of-binary-tree/",
      },
      {
        title: "Decode String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-string/",
      },
      {
        title: "Valid Sudoku",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-sudoku/",
      },
      {
        title: "Serialize and Deserialize Binary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      },
      {
        title: "Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      },
      {
        title: "Valid Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        title: "Flatten 2D Vector",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-2d-vector/",
      },
      {
        title: "Jump Game II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/jump-game-ii/",
      },
      {
        title: "Permutations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations/",
      },
      {
        title: "Number of 1 Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-1-bits/",
      },
      {
        title: "Longest Common Prefix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-common-prefix/",
      },
      {
        title: "Next Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-permutation/",
      },
      {
        title: "Jewels and Stones",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/jewels-and-stones/",
      },
      {
        title: "Find Pivot Index",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-pivot-index/",
      },
      {
        title: "Palindrome Pairs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/palindrome-pairs/",
      },
      {
        title: "Min Stack",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/min-stack/",
      },
      {
        title: "Nth Highest Salary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/nth-highest-salary/",
      },
      {
        title: "Meeting Rooms II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/meeting-rooms-ii/",
      },
      {
        title: "Integer to English Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/integer-to-english-words/",
      },
      {
        title: "LFU Cache",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/lfu-cache/",
      },
      {
        title: "Rectangle Overlap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rectangle-overlap/",
      },
      {
        title: "Meeting Scheduler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/meeting-scheduler/",
      },
      {
        title: "Roman to Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/roman-to-integer/",
      },
      {
        title: "Combine Two Tables",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/combine-two-tables/",
      },
      {
        title: "Battleships in a Board",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/battleships-in-a-board/",
      },
      {
        title: "Snakes and Ladders",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/snakes-and-ladders/",
      },
      {
        title: "Flood Fill",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/flood-fill/",
      },
      {
        title: "Time Based Key-Value Store",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/time-based-key-value-store/",
      },
      {
        title: "Perfect Squares",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/perfect-squares/",
      },
      {
        title: "Copy List with Random Pointer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
      },
      {
        title: "Longest Absolute File Path",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-absolute-file-path/",
      },
      {
        title: "Excel Sheet Column Title",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/excel-sheet-column-title/",
      },
      {
        title: "Merge Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-sorted-array/",
      },
      {
        title: "Linked List Cycle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        title: "4Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/4sum/",
      },
      {
        title: "Find Duplicate File in System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-duplicate-file-in-system/",
      },
      {
        title: "N-Queens",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/n-queens/",
      },
      {
        title: "Number of Distinct Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-distinct-islands/",
      },
      {
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        title: "Minimum Window Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-substring/",
      },
      {
        title: "Spiral Matrix II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix-ii/",
      },
      {
        title: "Number of Digit One",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-digit-one/",
      },
      {
        title: "Missing Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/missing-number/",
      },
      {
        title: "Tenth Line",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/tenth-line/",
      },
      {
        title: "Word Break II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-break-ii/",
      },
      {
        title: "Largest BST Subtree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-bst-subtree/",
      },
      {
        title: "Longest Valid Parentheses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-valid-parentheses/",
      },
      {
        title: "Count and Say",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-and-say/",
      },
      {
        title: "Shuffle an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shuffle-an-array/",
      },
      {
        title: "Word Ladder",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-ladder/",
      },
      {
        title: "3Sum Closest",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum-closest/",
      },
      {
        title: "Top K Frequent Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-words/",
      },
      {
        title: "Design HashMap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-hashmap/",
      },
      {
        title: "Regular Expression Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/regular-expression-matching/",
      },
      {
        title: "Swap Nodes in Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/swap-nodes-in-pairs/",
      },
      {
        title: "Move Zeroes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/move-zeroes/",
      },
      {
        title: "Largest Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-number/",
      },
      {
        title: "Reconstruct Itinerary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reconstruct-itinerary/",
      },
      {
        title: "Valid Phone Numbers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-phone-numbers/",
      },
      {
        title: "Find First and Last Position of Element in Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      },
      {
        title: "Text Justification",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/text-justification/",
      },
      {
        title: "Implement Queue using Stacks",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-queue-using-stacks/",
      },
      {
        title: "Excel Sheet Column Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/excel-sheet-column-number/",
      },
      {
        title: "Binary Watch",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-watch/",
      },
      {
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/",
      },
      {
        title: "Decode Ways",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-ways/",
      },
      {
        title: "Rotate String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rotate-string/",
      },
      {
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
      },
      {
        title: "My Calendar I",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/my-calendar-i/",
      },
      {
        title: "Island Perimeter",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/island-perimeter/",
      },
      {
        title: "Number of Squareful Arrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-squareful-arrays/",
      },
      {
        title: "K Closest Points to Origin",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-closest-points-to-origin/",
      },
      {
        title: "Combination Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum/",
      },
      {
        title: "Sort Colors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-colors/",
      },
      {
        title: "Single Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/single-number/",
      },
      {
        title: "First Missing Positive",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/first-missing-positive/",
      },
      {
        title: "Design Hit Counter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-hit-counter/",
      },
      {
        title: "Container With Most Water",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/container-with-most-water/",
      },
      {
        title: "Predict the Winner",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/predict-the-winner/",
      },
      {
        title: "Maximal Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximal-square/",
      },
      {
        title: "Rectangle Area",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rectangle-area/",
      },
      {
        title: "Count of Smaller Numbers After Self",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
      },
      {
        title: "Repeated DNA Sequences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/repeated-dna-sequences/",
      },
      {
        title: "String Compression",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/string-compression/",
      },
      {
        title: "Generate Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/generate-parentheses/",
      },
      {
        title: "Remove Duplicate Letters",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/remove-duplicate-letters/",
      },
      {
        title: "Maximum Frequency Stack",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-frequency-stack/",
      },
      {
        title: "Add Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-strings/",
      },
      {
        title: "Find the Celebrity",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-celebrity/",
      },
      {
        title: "Two Sum II - Input array is sorted",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      },
      {
        title: "Find K Closest Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-closest-elements/",
      },
      {
        title: "Insert Delete GetRandom O(1) - Duplicates allowed",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/",
      },
      {
        title: "Reverse Linked List II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-linked-list-ii/",
      },
      {
        title: "Exclusive Time of Functions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/exclusive-time-of-functions/",
      },
      {
        title: "Fibonacci Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fibonacci-number/",
      },
      {
        title: "Compare Version Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/compare-version-numbers/",
      },
      {
        title: "Implement strStr()",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-strstr/",
      },
      {
        title: "Delete Node in a Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
      },
      {
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
      {
        title: "Diagonal Traverse",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/diagonal-traverse/",
      },
      {
        title: "Sqrt(x)",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sqrtx/",
      },
      {
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      },
      {
        title: "Design Snake Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-snake-game/",
      },
      {
        title: "Clone Graph",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/clone-graph/",
      },
      {
        title: "Palindrome Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-number/",
      },
      {
        title: "Interval List Intersections",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/interval-list-intersections/",
      },
      {
        title: "Majority Element II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/majority-element-ii/",
      },
      {
        title: "Convert Sorted Array to Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
      },
      {
        title: "Image Smoother",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/image-smoother/",
      },
      {
        title: "Binary Tree Maximum Path Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
      },
      {
        title: "ZigZag Conversion",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/zigzag-conversion/",
      },
      {
        title: "Cherry Pickup",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/cherry-pickup/",
      },
      {
        title: "Majority Element",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/majority-element/",
      },
      {
        title: "New 21 Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/new-21-game/",
      },
      {
        title: "Unique Paths",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-paths/",
      },
      {
        title: "Contains Duplicate III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/contains-duplicate-iii/",
      },
      {
        title: "Sudoku Solver",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sudoku-solver/",
      },
      {
        title: "Diameter of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/diameter-of-binary-tree/",
      },
      {
        title: "Reverse Words in a String III",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-words-in-a-string-iii/",
      },
      {
        title: "Intersection of Two Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays/",
      },
      {
        title: "Triangle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/triangle/",
      },
      {
        title: "Binary Search Tree Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-iterator/",
      },
      {
        title: "Valid Number",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/valid-number/",
      },
      {
        title: "Reverse Nodes in k-Group",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
      },
      {
        title: "Binary Tree Longest Consecutive Sequence II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/",
      },
      {
        title: "Rank Scores",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rank-scores/",
      },
      {
        title: "Edit Distance",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/edit-distance/",
      },
      {
        title: "Combinations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combinations/",
      },
      {
        title: "Coin Change 2",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change-2/",
      },
      {
        title: "Power of Two",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/power-of-two/",
      },
      {
        title: "Palindrome Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-linked-list/",
      },
      {
        title: "Search a 2D Matrix II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
      },
      {
        title: "Online Election",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/online-election/",
      },
      {
        title: "Search a 2D Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix/",
      },
      {
        title: "Palindrome Partitioning III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/palindrome-partitioning-iii/",
      },
      {
        title: "Reverse Words in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-words-in-a-string/",
      },
      {
        title: "Multiply Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/multiply-strings/",
      },
      {
        title: "Second Highest Salary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/second-highest-salary/",
      },
      {
        title: "Reverse Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-bits/",
      },
      {
        title: "Random Pick with Weight",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/random-pick-with-weight/",
      },
      {
        title: "Jump Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game/",
      },
      {
        title: "Design Search Autocomplete System",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-search-autocomplete-system/",
      },
      {
        title: "Shortest Distance to a Character",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shortest-distance-to-a-character/",
      },
      {
        title: "Divide Two Integers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/divide-two-integers/",
      },
      {
        title: "Palindromic Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindromic-substrings/",
      },
      {
        title: "Smallest Range Covering Elements from K Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
      },
      {
        title: "Implement Rand10() Using Rand7()",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-rand10-using-rand7/",
      },
      {
        title: "Insert Interval",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/insert-interval/",
      },
      {
        title: "Daily Temperatures",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/daily-temperatures/",
      },
      {
        title: "Ransom Note",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/ransom-note/",
      },
      {
        title: "Remove Duplicates from Sorted List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
      },
      {
        title: "Substring with Concatenation of All Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
      },
      {
        title: "Remove Boxes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/remove-boxes/",
      },
      {
        title: "Populating Next Right Pointers in Each Node",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
      },
      {
        title: "Defanging an IP Address",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/defanging-an-ip-address/",
      },
      {
        title: "Longest Univalue Path",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-univalue-path/",
      },
      {
        title: "Longest Consecutive Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-consecutive-sequence/",
      },
      {
        title: "Construct Quad Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-quad-tree/",
      },
      {
        title: "Longest Duplicate Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-duplicate-substring/",
      },
      {
        title: "Partition List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-list/",
      },
      {
        title: "Binary Tree Right Side View",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-right-side-view/",
      },
      {
        title: "Split a String in Balanced Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/split-a-string-in-balanced-strings/",
      },
      {
        title: "Squares of a Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
      },
      {
        title: "Pascal's Triangle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/pascals-triangle/",
      },
      {
        title: "Climbing Stairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        title: "House Robber",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/house-robber/",
      },
      {
        title: "Logger Rate Limiter",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/logger-rate-limiter/",
      },
      {
        title: "Intersection of Two Arrays II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
      },
      {
        title: "Print in Order",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/print-in-order/",
      },
      {
        title: "Add and Search Word - Data structure design",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
      },
      {
        title: "4Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/4sum-ii/",
      },
      {
        title: "Transpose Matrix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/transpose-matrix/",
      },
      {
        title: "Restore IP Addresses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/restore-ip-addresses/",
      },
      {
        title: "Symmetric Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/symmetric-tree/",
      },
      {
        title: "Department Highest Salary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/department-highest-salary/",
      },
      {
        title: "Remove Duplicates from Sorted List II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
      },
      {
        title: "Delete Node in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-node-in-a-bst/",
      },
      {
        title: "Contains Duplicate II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate-ii/",
      },
      {
        title: "Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets/",
      },
      {
        title: "Flatten Binary Tree to Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
      },
      {
        title: "Trapping Rain Water II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water-ii/",
      },
      {
        title: "Find All Numbers Disappeared in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
      },
      {
        title: "Integer Break",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/integer-break/",
      },
      {
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
      },
      {
        title: "Minimum Moves to Equal Array Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-moves-to-equal-array-elements/",
      },
      {
        title: "Partition Equal Subset Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-equal-subset-sum/",
      },
      {
        title: "Pacific Atlantic Water Flow",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
      },
      {
        title: "Reorder List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorder-list/",
      },
      {
        title: "Find Peak Element",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-peak-element/",
      },
      {
        title: "Kth Smallest Element in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      },
      {
        title: "Course Schedule",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule/",
      },
      {
        title: "Counting Bits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/counting-bits/",
      },
      {
        title: "Scramble String",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/scramble-string/",
      },
      {
        title: "Palindrome Permutation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-permutation/",
      },
      {
        title: "Expression Add Operators",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/expression-add-operators/",
      },
      {
        title: "Design Circular Queue",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-circular-queue/",
      },
      {
        title: "Paint House",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/paint-house/",
      },
      {
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      },
      {
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        title: "Find the Duplicate Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-duplicate-number/",
      },
      {
        title: "Reverse Vowels of a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-vowels-of-a-string/",
      },
      {
        title: "Kill Process",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kill-process/",
      },
      {
        title: "Set Matrix Zeroes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/set-matrix-zeroes/",
      },
      {
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      },
      {
        title: "Implement Trie (Prefix Tree)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
      },
      {
        title: "Consecutive Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/consecutive-numbers/",
      },
      {
        title: "Word Search",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-search/",
      },
      {
        title: "Linked List Cycle II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/linked-list-cycle-ii/",
      },
      {
        title: "Non-overlapping Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/non-overlapping-intervals/",
      },
      {
        title: "Single Element in a Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-element-in-a-sorted-array/",
      },
      {
        title: "Add Two Numbers II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers-ii/",
      },
      {
        title: "Trim a Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/trim-a-binary-search-tree/",
      },
      {
        title: "Sliding Window Median",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-median/",
      },
      {
        title: "Find Largest Value in Each Tree Row",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-largest-value-in-each-tree-row/",
      },
      {
        title: "Remove Nth Node From End of List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      },
      {
        title: "Accounts Merge",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/accounts-merge/",
      },
      {
        title: "Find Minimum in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      },
      {
        title: "Merge Two Binary Trees",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-binary-trees/",
      },
      {
        title: "Search Insert Position",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/search-insert-position/",
      },
      {
        title: "Find All Duplicates in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
      },
      {
        title: "Kth Smallest Element in a Sorted Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
      },
      {
        title: "Word Ladder II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-ladder-ii/",
      },
      {
        title: "01 Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/01-matrix/",
      },
      {
        title: "Best Time to Buy and Sell Stock III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
      },
      {
        title: "Capacity To Ship Packages Within D Days",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
      },
      {
        title: "All Nodes Distance K in Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
      },
      {
        title: "Binary Tree Inorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      },
      {
        title: "Best Time to Buy and Sell Stock II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
      },
      {
        title: "Unique Binary Search Trees II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-binary-search-trees-ii/",
      },
      {
        title: "Candy",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/candy/",
      },
      {
        title: "Power of Three",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/power-of-three/",
      },
      {
        title: "Basic Calculator III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/basic-calculator-iii/",
      },
      {
        title: "Balanced Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/balanced-binary-tree/",
      },
      {
        title: "Find Common Characters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-common-characters/",
      },
      {
        title: "Binary Tree Zigzag Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
      },
      {
        title: "Array Partition I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/array-partition-i/",
      },
      {
        title: "Minimum Falling Path Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-falling-path-sum/",
      },
      {
        title: "Find and Replace Pattern",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-and-replace-pattern/",
      },
      {
        title: "Remove Invalid Parentheses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/remove-invalid-parentheses/",
      },
      {
        title: "Sort an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-an-array/",
      },
      {
        title: "Sum of Two Integers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-two-integers/",
      },
      {
        title: "Range Sum Query 2D - Immutable",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-sum-query-2d-immutable/",
      },
      {
        title: "Longest Harmonious Subsequence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-harmonious-subsequence/",
      },
      {
        title: "Unique Paths II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-paths-ii/",
      },
      {
        title: "Sum of Nodes with Even-Valued Grandparent",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/",
      },
      {
        title: "Gas Station",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/gas-station/",
      },
      {
        title: "Find Winner on a Tic Tac Toe Game",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/",
      },
      {
        title: "Reorganize String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorganize-string/",
      },
      {
        title: "Max Area of Island",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-area-of-island/",
      },
      {
        title: "Pow(x,n)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/powx-n/",
      },
      {
        title: "To Lower Case",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/to-lower-case/",
      },
      {
        title: "Task Scheduler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/task-scheduler/",
      },
      {
        title: "Fraction to Recurring Decimal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/fraction-to-recurring-decimal/",
      },
      {
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
      },
      {
        title: "The Maze",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-maze/",
      },
      {
        title: "Longest Continuous Increasing Subsequence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-continuous-increasing-subsequence/",
      },
      {
        title: "Flatten a Multilevel Doubly Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
      },
      {
        title: "Sum of Subarray Minimums",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-subarray-minimums/",
      },
      {
        title: "Missing Element in Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/missing-element-in-sorted-array/",
      },
      {
        title: "Permutations II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations-ii/",
      },
      {
        title: "Course Schedule II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule-ii/",
      },
      {
        title: "Combination Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-ii/",
      },
      {
        title: "Minimum Path Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-path-sum/",
      },
      {
        title: "Remove Outermost Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-outermost-parentheses/",
      },
      {
        title: "Guess Number Higher or Lower",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/guess-number-higher-or-lower/",
      },
      {
        title: "Possible Bipartition",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/possible-bipartition/",
      },
      {
        title: "Invert Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/invert-binary-tree/",
      },
      {
        title: "Path Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/path-sum/",
      },
      {
        title: "Contains Duplicate",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate/",
      },
      {
        title: "Longest Palindromic Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-subsequence/",
      },
      {
        title: "Snapshot Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/snapshot-array/",
      },
      {
        title: "Kth Largest Element in a Stream",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
      },
      {
        title: "Minimum Absolute Difference in BST",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-absolute-difference-in-bst/",
      },
      {
        title: "Middle of the Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/middle-of-the-linked-list/",
      },
      {
        title: "Minimum Knight Moves",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-knight-moves/",
      },
      {
        title: "Range Sum of BST",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/range-sum-of-bst/",
      },
      {
        title: "Subdomain Visit Count",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/subdomain-visit-count/",
      },
      {
        title: "Add Binary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-binary/",
      },
      {
        title: "Find K Pairs with Smallest Sums",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
      },
      {
        title: "Minimum Depth of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
      },
      {
        title: "N-Repeated Element in Size 2N Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/n-repeated-element-in-size-2n-array/",
      },
      {
        title: "Binary Search Tree to Greater Sum Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/",
      },
      {
        title: "Minimum Height Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-height-trees/",
      },
      {
        title: "Unique Morse Code Words",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/unique-morse-code-words/",
      },
      {
        title: "Walls and Gates",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/walls-and-gates/",
      },
      {
        title: "Toeplitz Matrix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/toeplitz-matrix/",
      },
      {
        title: "Path Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-ii/",
      },
      {
        title: "Sort Array By Parity",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sort-array-by-parity/",
      },
      {
        title: "Maximum Swap",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-swap/",
      },
      {
        title: "Permutation Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/permutation-sequence/",
      },
      {
        title: "Plus One",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/plus-one/",
      },
      {
        title: "Contiguous Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/contiguous-array/",
      },
      {
        title: "Search in a Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/search-in-a-binary-search-tree/",
      },
      {
        title: "Minimum Size Subarray Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
      },
      {
        title: "Queue Reconstruction by Height",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/queue-reconstruction-by-height/",
      },
      {
        title: "Same Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/same-tree/",
      },
      {
        title: "Maximum Product of Three Numbers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-product-of-three-numbers/",
      },
      {
        title: "Best Time to Buy and Sell Stock IV",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
      },
      {
        title: "Remove Linked List Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-linked-list-elements/",
      },
      {
        title: "Binary Tree Level Order Traversal II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
      },
      {
        title: "Add Digits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-digits/",
      },
      {
        title: "Employees Earning More Than Their Managers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/employees-earning-more-than-their-managers/",
      },
      {
        title: "Binary Tree Paths",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-paths/",
      },
      {
        title: "Most Common Word",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/most-common-word/",
      },
      {
        title: "Unique Binary Search Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-binary-search-trees/",
      },
      {
        title: "Reorder Data in Log Files",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reorder-data-in-log-files/",
      },
      {
        title: "Partition Labels",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-labels/",
      },
      {
        title: "Single Number III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-number-iii/",
      },
      {
        title: "Best Time to Buy and Sell Stock with Cooldown",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
      },
      {
        title: "Array Nesting",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/array-nesting/",
      },
    ],
  },
  {
    name: "Atlassian",
    questions: [
      {
        title: "Find Leaves of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-leaves-of-binary-tree/",
      },
      {
        title: "Time Based Key-Value Store",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/time-based-key-value-store/",
      },
      {
        title: "Lemonade Change",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/lemonade-change/",
      },
      {
        title: "Maximum Average Subtree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-average-subtree/",
      },
      {
        title: "Greatest Common Divisor of Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/greatest-common-divisor-of-strings/",
      },
      {
        title: "Shortest Distance to a Character",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shortest-distance-to-a-character/",
      },
      {
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      },
      {
        title: "Design Hit Counter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-hit-counter/",
      },
      {
        title: "Meeting Rooms II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/meeting-rooms-ii/",
      },
      {
        title: "Peeking Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/peeking-iterator/",
      },
      {
        title: "Dice Roll Simulation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/dice-roll-simulation/",
      },
      {
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/",
      },
      {
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        title: "Logger Rate Limiter",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/logger-rate-limiter/",
      },
      {
        title: "Rank Teams by Votes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rank-teams-by-votes/",
      },
      {
        title: "Number of Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        title: "Design HashMap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-hashmap/",
      },
      {
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        title: "Single Element in a Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-element-in-a-sorted-array/",
      },
      {
        title: "Backspace String Compare",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/backspace-string-compare/",
      },
      {
        title: "Next Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-permutation/",
      },
      {
        title: "Decode String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-string/",
      },
      {
        title: "Evaluate Reverse Polish Notation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
      },
      {
        title: "Friend Circles",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/friend-circles/",
      },
      {
        title: "Best Time to Buy and Sell Stock III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
      },
      {
        title: "Subarray Product Less Than K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-product-less-than-k/",
      },
      {
        title: "Palindromic Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindromic-substrings/",
      },
      {
        title: "Binary Tree Right Side View",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-right-side-view/",
      },
      {
        title: "Symmetric Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/symmetric-tree/",
      },
      {
        title: "Flatten Nested List Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-nested-list-iterator/",
      },
      {
        title: "Maximum Subarray",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        title: "Binary Search Tree Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-iterator/",
      },
      {
        title: "Leaf-Similar Trees",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/leaf-similar-trees/",
      },
      {
        title: "Permutations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations/",
      },
      {
        title: "Valid Palindrome II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome-ii/",
      },
      {
        title: "Insert into a Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
      },
      {
        title: "Random Pick with Weight",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/random-pick-with-weight/",
      },
      {
        title: "Basic Calculator II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/basic-calculator-ii/",
      },
      {
        title: "Diameter of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/diameter-of-binary-tree/",
      },
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        title: "Find Median from Data Stream",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-median-from-data-stream/",
      },
      {
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      },
      {
        title: "Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets/",
      },
      {
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        title: "Top K Frequent Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-words/",
      },
      {
        title: "Single Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/single-number/",
      },
      {
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        title: "Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      },
      {
        title: "Generate Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/generate-parentheses/",
      },
      {
        title: "Merge Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        title: "Verbal Arithmetic Puzzle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/verbal-arithmetic-puzzle/",
      },
    ],
  },
  {
    name: "Bloomberg",
    questions: [
      {
        title: "Copy List with Random Pointer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
      },
      {
        title: "LRU Cache",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lru-cache/",
      },
      {
        title: "Design Underground System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-underground-system/",
      },
      {
        title: "Flatten a Multilevel Doubly Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
      },
      {
        title: "Number of Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        title: "Add Two Numbers II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers-ii/",
      },
      {
        title: "Candy Crush",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/candy-crush/",
      },
      {
        title: "Decode String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-string/",
      },
      {
        title: "Kill Process",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kill-process/",
      },
      {
        title: "Two Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        title: "Sort Characters By Frequency",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-characters-by-frequency/",
      },
      {
        title: "Add Two Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers/",
      },
      {
        title: "Invalid Transactions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/invalid-transactions/",
      },
      {
        title: "Populating Next Right Pointers in Each Node II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
      },
      {
        title: "Trapping Rain Water",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water/",
      },
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        title: "Insert Delete GetRandom O(1)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
      },
      {
        title: "Min Stack",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/min-stack/",
      },
      {
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        title: "Meeting Rooms II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/meeting-rooms-ii/",
      },
      {
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        title: "First Unique Character in a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/first-unique-character-in-a-string/",
      },
      {
        title: "Merge Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        title: "Shortest Palindrome",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-palindrome/",
      },
      {
        title: "Number of Ships in a Rectangle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-ships-in-a-rectangle/",
      },
      {
        title: "Two City Scheduling",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-city-scheduling/",
      },
      {
        title: "Move Zeroes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/move-zeroes/",
      },
      {
        title: "Populating Next Right Pointers in Each Node",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
      },
      {
        title: "Elimination Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/elimination-game/",
      },
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        title: "Remove All Adjacent Duplicates in String II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/",
      },
      {
        title: "Island Perimeter",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/island-perimeter/",
      },
      {
        title: "Valid Anagram",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-anagram/",
      },
      {
        title: "Alien Dictionary",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/alien-dictionary/",
      },
      {
        title: "Flatten Binary Tree to Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
      },
      {
        title: "Word Break",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-break/",
      },
      {
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
      {
        title: "Encode and Decode Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/encode-and-decode-strings/",
      },
      {
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        title: "Integer to Roman",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/integer-to-roman/",
      },
      {
        title: "Reverse Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        title: "Remove Invalid Parentheses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/remove-invalid-parentheses/",
      },
      {
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        title: "Reverse Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-integer/",
      },
      {
        title: "Sqrt(x)",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sqrtx/",
      },
      {
        title: "Maximum Product of Three Numbers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-product-of-three-numbers/",
      },
      {
        title: "3Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum/",
      },
      {
        title: "Moving Average from Data Stream",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/moving-average-from-data-stream/",
      },
      {
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      },
      {
        title: "Brick Wall",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/brick-wall/",
      },
      {
        title: "LFU Cache",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/lfu-cache/",
      },
      {
        title: "Maximum Subarray",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        title: "Top K Frequent Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-words/",
      },
      {
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
      },
      {
        title: "Find Median from Data Stream",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-median-from-data-stream/",
      },
      {
        title: "Unique Paths",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-paths/",
      },
      {
        title: "Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      },
      {
        title: "Spiral Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix/",
      },
      {
        title: "Integer to English Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/integer-to-english-words/",
      },
      {
        title: "Valid Triangle Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-triangle-number/",
      },
      {
        title: "Intersection of Two Linked Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
      },
      {
        title: "Reconstruct Itinerary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reconstruct-itinerary/",
      },
      {
        title: "Vertical Order Traversal of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
      },
      {
        title: "Binary Search Tree Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-iterator/",
      },
      {
        title: "Regular Expression Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/regular-expression-matching/",
      },
      {
        title: "Best Time to Buy and Sell Stock II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
      },
      {
        title: "Group Anagrams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-anagrams/",
      },
      {
        title: "All Paths From Source to Target",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-paths-from-source-to-target/",
      },
      {
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        title: "Word Ladder",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-ladder/",
      },
      {
        title: "String Compression",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/string-compression/",
      },
      {
        title: "Merge Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-sorted-array/",
      },
      {
        title: "Binary Tree Vertical Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-vertical-order-traversal/",
      },
      {
        title: "Shuffle an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shuffle-an-array/",
      },
      {
        title: "Lowest Common Ancestor of a Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
      },
      {
        title: "Coin Change",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change/",
      },
      {
        title: "Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets/",
      },
      {
        title: "Design Browser History",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-browser-history/",
      },
      {
        title: "Evaluate Division",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-division/",
      },
      {
        title: "Word Break II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-break-ii/",
      },
      {
        title: "Edit Distance",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/edit-distance/",
      },
      {
        title: "Binary Tree Right Side View",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-right-side-view/",
      },
      {
        title: "Maximum Width of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-width-of-binary-tree/",
      },
      {
        title: "Employee Free Time",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/employee-free-time/",
      },
      {
        title: "Largest Rectangle in Histogram",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
      },
      {
        title: "String to Integer (atoi)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/string-to-integer-atoi/",
      },
      {
        title: "Longest Consecutive Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-consecutive-sequence/",
      },
      {
        title: "First Missing Positive",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/first-missing-positive/",
      },
      {
        title: "Find Peak Element",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-peak-element/",
      },
      {
        title: "Daily Temperatures",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/daily-temperatures/",
      },
      {
        title: "Odd Even Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/odd-even-linked-list/",
      },
      {
        title: "Word Ladder II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-ladder-ii/",
      },
      {
        title: "Pow(x, n)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/powx-n/",
      },
      {
        title: "Encode and Decode TinyURL",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/encode-and-decode-tinyurl/",
      },
      {
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
      },
      {
        title: "Palindrome Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-linked-list/",
      },
      {
        title: "Zuma Game",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/zuma-game/",
      },
      {
        title: "Pascal's Triangle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/pascals-triangle/",
      },
      {
        title: "Next Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-permutation/",
      },
      {
        title: "Container With Most Water",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/container-with-most-water/",
      },
      {
        title: "Next Greater Element I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/next-greater-element-i/",
      },
      {
        title: "Excel Sheet Column Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/excel-sheet-column-number/",
      },
      {
        title: "Palindrome Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-number/",
      },
      {
        title: "Remove All Adjacent Duplicates In String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
      },
      {
        title: "Find First and Last Position of Element in Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      },
      {
        title: "Intersection of Two Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays/",
      },
      {
        title: "Sparse Matrix Multiplication",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sparse-matrix-multiplication/",
      },
      {
        title: "Word Search",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-search/",
      },
      {
        title: "Wildcard Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/wildcard-matching/",
      },
      {
        title: "Design Hit Counter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-hit-counter/",
      },
      {
        title: "Kth Smallest Element in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      },
      {
        title: "Binary Tree Maximum Path Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
      },
      {
        title: "Missing Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/missing-number/",
      },
      {
        title: "Minimum Path Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-path-sum/",
      },
      {
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      },
      {
        title: "Design Snake Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-snake-game/",
      },
      {
        title: "Permutations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations/",
      },
      {
        title: "Maximal Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximal-square/",
      },
      {
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      },
      {
        title: "Isomorphic Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/isomorphic-strings/",
      },
      {
        title: "Sort Colors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-colors/",
      },
      {
        title: "Max Area of Island",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-area-of-island/",
      },
      {
        title: "Single Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/single-number/",
      },
      {
        title: "Generate Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/generate-parentheses/",
      },
      {
        title: "Majority Element II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/majority-element-ii/",
      },
      {
        title: "Next Greater Element II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-element-ii/",
      },
      {
        title: "Minimum Size Subarray Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
      },
      {
        title: "Number of Distinct Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-distinct-islands/",
      },
      {
        title: "Valid Word Square",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-word-square/",
      },
      {
        title: "Meeting Rooms",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/meeting-rooms/",
      },
      {
        title: "Walls and Gates",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/walls-and-gates/",
      },
      {
        title: "Rotate Image",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-image/",
      },
      {
        title: "Shortest Distance to a Character",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shortest-distance-to-a-character/",
      },
      {
        title: "Search a 2D Matrix II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
      },
      {
        title: "Max Stack",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/max-stack/",
      },
      {
        title: "Maximal Rectangle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximal-rectangle/",
      },
      {
        title: "Unique Paths II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-paths-ii/",
      },
      {
        title: "Minimum Window Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-substring/",
      },
      {
        title: "Subtree of Another Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/subtree-of-another-tree/",
      },
      {
        title: "Reverse Words in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-words-in-a-string/",
      },
      {
        title: "Fizz Buzz",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fizz-buzz/",
      },
      {
        title: "Find Duplicate Subtrees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-duplicate-subtrees/",
      },
      {
        title: "Minimize Malware Spread",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimize-malware-spread/",
      },
      {
        title: "Decode Ways",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-ways/",
      },
      {
        title: "Product of Array Except Self",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
      },
      {
        title: "Dice Roll Simulation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/dice-roll-simulation/",
      },
      {
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
      },
      {
        title: "Find All Duplicates in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
      },
      {
        title: "ZigZag Conversion",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/zigzag-conversion/",
      },
      {
        title: "Find the Duplicate Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-duplicate-number/",
      },
      {
        title: "Count of Smaller Numbers After Self",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
      },
      {
        title: "Implement Queue using Stacks",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-queue-using-stacks/",
      },
      {
        title: "Implement Trie (Prefix Tree)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
      },
      {
        title: "3Sum Closest",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum-closest/",
      },
      {
        title: "Find Bottom Left Tree Value",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-bottom-left-tree-value/",
      },
      {
        title: "Diameter of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/diameter-of-binary-tree/",
      },
      {
        title: "Rectangle Overlap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rectangle-overlap/",
      },
      {
        title: "Roman to Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/roman-to-integer/",
      },
      {
        title: "Inorder Successor in BST II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/inorder-successor-in-bst-ii/",
      },
      {
        title: "Longest Increasing Path in a Matrix",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
      },
      {
        title: "Missing Element in Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/missing-element-in-sorted-array/",
      },
      {
        title: "Binary Tree Inorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      },
      {
        title: "Triangle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/triangle/",
      },
      {
        title: "Reverse Linked List II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-linked-list-ii/",
      },
      {
        title: "Find Minimum in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      },
      {
        title: "Course Schedule",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule/",
      },
      {
        title: "Remove K Digits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-k-digits/",
      },
      {
        title: "Find K Closest Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-closest-elements/",
      },
      {
        title: "Coin Change 2",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change-2/",
      },
      {
        title: "Construct Binary Tree from Preorder and Postorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/",
      },
      {
        title: "Climbing Stairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        title: "Invert Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/invert-binary-tree/",
      },
      {
        title: "Remove Nth Node From End of List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      },
      {
        title: "Remove Linked List Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-linked-list-elements/",
      },
      {
        title: "Design A Leaderboard",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-a-leaderboard/",
      },
      {
        title: "Happy Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/happy-number/",
      },
      {
        title: "Minimum Remove to Make Valid Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/",
      },
      {
        title: "Interleaving String",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/interleaving-string/",
      },
      {
        title: "Reverse String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string/",
      },
      {
        title: "Flip Binary Tree To Match Preorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/",
      },
      {
        title: "Minesweeper",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minesweeper/",
      },
      {
        title: "Minimum Window Subsequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-subsequence/",
      },
      {
        title: "Symmetric Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/symmetric-tree/",
      },
      {
        title: "Third Maximum Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/third-maximum-number/",
      },
      {
        title: "Pacific Atlantic Water Flow",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
      },
      {
        title: "Implement Rand10() Using Rand7()",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-rand10-using-rand7/",
      },
      {
        title: "Lexicographical Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lexicographical-numbers/",
      },
      {
        title: "Base 7",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/base-7/",
      },
      {
        title: "Swap Nodes in Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/swap-nodes-in-pairs/",
      },
      {
        title: "Delete Node in a Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
      },
      {
        title: "Peak Index in a Mountain Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
      },
      {
        title: "Add Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-strings/",
      },
      {
        title: "Convert Binary Search Tree to Sorted Doubly Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/",
      },
      {
        title: "Design Tic-Tac-Toe",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-tic-tac-toe/",
      },
      {
        title: "Best Time to Buy and Sell Stock IV",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
      },
      {
        title: "Implement Stack using Queues",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-stack-using-queues/",
      },
      {
        title: "Count Univalue Subtrees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-univalue-subtrees/",
      },
      {
        title: "Simplify Path",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/simplify-path/",
      },
      {
        title: "Array Nesting",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/array-nesting/",
      },
      {
        title: "Integer Replacement",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/integer-replacement/",
      },
      {
        title: "Recover Binary Search Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/recover-binary-search-tree/",
      },
      {
        title: "Search in Rotated Sorted Array II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
      },
      {
        title: "Valid Parenthesis String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-parenthesis-string/",
      },
      {
        title: "Valid Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        title: "Kth Smallest Element in a Sorted Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
      },
      {
        title: "Minimum Number of Steps to Make Two Strings Anagram",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/",
      },
      {
        title: "Best Time to Buy and Sell Stock III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
      },
      {
        title: "Logger Rate Limiter",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/logger-rate-limiter/",
      },
      {
        title: "Convert Sorted List to Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
      },
      {
        title: "Summary Ranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/summary-ranges/",
      },
      {
        title: "Sum of Left Leaves",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-left-leaves/",
      },
      {
        title: "Flatten Nested List Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-nested-list-iterator/",
      },
      {
        title: "Distant Barcodes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/distant-barcodes/",
      },
      {
        title: "Binary Tree Zigzag Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
      },
      {
        title: "Non-overlapping Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/non-overlapping-intervals/",
      },
      {
        title: "Rotate List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-list/",
      },
      {
        title: "Implement strStr()",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-strstr/",
      },
      {
        title: "Accounts Merge",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/accounts-merge/",
      },
      {
        title: "Insert into a Sorted Circular Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/",
      },
      {
        title: "K-diff Pairs in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/k-diff-pairs-in-an-array/",
      },
      {
        title: "Remove Duplicates from Sorted List II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
      },
      {
        title: "Design Bounded Blocking Queue",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-bounded-blocking-queue/",
      },
      {
        title: "House Robber",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/house-robber/",
      },
      {
        title: "Convert Sorted Array to Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
      },
      {
        title: "Path Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/path-sum/",
      },
      {
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      },
      {
        title: "Game of Life",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/game-of-life/",
      },
      {
        title: "Palindrome Pairs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/palindrome-pairs/",
      },
      {
        title: "Linked List Cycle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        title: "Subsets II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets-ii/",
      },
      {
        title: "Design Search Autocomplete System",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-search-autocomplete-system/",
      },
      {
        title: "Permutation in String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutation-in-string/",
      },
      {
        title: "Inorder Successor in BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/inorder-successor-in-bst/",
      },
      {
        title: "Broken Calculator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/broken-calculator/",
      },
      {
        title: "Palindrome Partitioning",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindrome-partitioning/",
      },
      {
        title: "Serialize and Deserialize Binary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      },
      {
        title: "Count Primes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-primes/",
      },
      {
        title: "Minimum Cost to Hire K Workers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/",
      },
      {
        title: "Reverse Words in a String III",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-words-in-a-string-iii/",
      },
      {
        title: "Largest Sum of Averages",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-sum-of-averages/",
      },
      {
        title: "Sentence Similarity II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sentence-similarity-ii/",
      },
      {
        title: "Search a 2D Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix/",
      },
      {
        title: "Find All Numbers Disappeared in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
      },
      {
        title: "Unique Binary Search Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-binary-search-trees/",
      },
      {
        title: "Number of Longest Increasing Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
      },
      {
        title: "Range Sum Query - Immutable",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/range-sum-query-immutable/",
      },
      {
        title: "Is Subsequence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/is-subsequence/",
      },
      {
        title: "Letter Case Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-case-permutation/",
      },
      {
        title: "Rotate Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rotate-array/",
      },
      {
        title: "Maximum Number of Occurrences of a Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/",
      },
      {
        title: "Jump Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game/",
      },
      {
        title: "Number of Dice Rolls With Target Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/",
      },
      {
        title: "Delete Node in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-node-in-a-bst/",
      },
      {
        title: "Search Insert Position",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/search-insert-position/",
      },
      {
        title: "Print in Order",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/print-in-order/",
      },
      {
        title: "All O`one Data Structure",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/all-oone-data-structure/",
      },
      {
        title: "Counting Bits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/counting-bits/",
      },
      {
        title: "Binary Tree Coloring Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-coloring-game/",
      },
      {
        title: "Two Sum II - Input array is sorted",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      },
      {
        title: "Longest Common Prefix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-common-prefix/",
      },
      {
        title: "Hand of Straights",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/hand-of-straights/",
      },
      {
        title: "Filling Bookcase Shelves",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/filling-bookcase-shelves/",
      },
      {
        title: "Valid Sudoku",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-sudoku/",
      },
      {
        title: "Arithmetic Slices",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/arithmetic-slices/",
      },
      {
        title: "Intersection of Two Arrays II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
      },
      {
        title: "Permutations II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations-ii/",
      },
      {
        title: "Longest Palindromic Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-subsequence/",
      },
      {
        title: "Longest Valid Parentheses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-valid-parentheses/",
      },
      {
        title: "Substring with Concatenation of All Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
      },
      {
        title: "Max Points on a Line",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/max-points-on-a-line/",
      },
      {
        title: "Count Complete Tree Nodes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-complete-tree-nodes/",
      },
      {
        title: "Open the Lock",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/open-the-lock/",
      },
      {
        title: "Kth Largest Element in a Stream",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
      },
      {
        title: "Find Pivot Index",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-pivot-index/",
      },
      {
        title: "Best Time to Buy and Sell Stock with Transaction Fee",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
      },
      {
        title: "Longest Substring with At Least K Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/",
      },
      {
        title: "Minimum Insertion Steps to Make a String Palindrome",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/",
      },
      {
        title: "Combination Sum III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-iii/",
      },
      {
        title: "Contains Duplicate II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate-ii/",
      },
      {
        title: "Sum Root to Leaf Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
      },
      {
        title: "Maximum Product Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-product-subarray/",
      },
      {
        title: "Path Sum III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-iii/",
      },
      {
        title: "Interval List Intersections",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/interval-list-intersections/",
      },
      {
        title: "Next Greater Element III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-element-iii/",
      },
      {
        title: "Number of Recent Calls",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-recent-calls/",
      },
      {
        title: "Longest Turbulent Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-turbulent-subarray/",
      },
      {
        title: "Second Highest Salary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/second-highest-salary/",
      },
      {
        title: "Flood Fill",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/flood-fill/",
      },
      {
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
      {
        title: "Maximum Frequency Stack",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-frequency-stack/",
      },
      {
        title: "Balanced Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/balanced-binary-tree/",
      },
      {
        title: "Single Element in a Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-element-in-a-sorted-array/",
      },
      {
        title: "Cheapest Flights Within K Stops",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
      },
      {
        title: "Divide Two Integers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/divide-two-integers/",
      },
      {
        title: "Add Digits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-digits/",
      },
      {
        title: "Nim Game",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/nim-game/",
      },
      {
        title: "Word Search II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-search-ii/",
      },
      {
        title: "4Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/4sum/",
      },
      {
        title: "Cousins in Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/cousins-in-binary-tree/",
      },
      {
        title: "Closest Binary Search Tree Value",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/closest-binary-search-tree-value/",
      },
      {
        title: "Binary Tree Preorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
      },
      {
        title: "Maximum Length of Pair Chain",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-length-of-pair-chain/",
      },
      {
        title: "Longest Substring with At Most K Distinct Characters",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
      },
      {
        title: "2 Keys Keyboard",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/2-keys-keyboard/",
      },
      {
        title: "Increasing Triplet Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/increasing-triplet-subsequence/",
      },
      {
        title: "Big Countries",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/big-countries/",
      },
      {
        title: "Find Common Characters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-common-characters/",
      },
      {
        title: "Contains Duplicate",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate/",
      },
      {
        title: "H-Index",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/h-index/",
      },
      {
        title: "Lowest Common Ancestor of Deepest Leaves",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/",
      },
      {
        title: "Count and Say",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-and-say/",
      },
      {
        title: "Shortest Unsorted Continuous Subarray",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shortest-unsorted-continuous-subarray/",
      },
      {
        title: "Plus One",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/plus-one/",
      },
      {
        title: "Insertion Sort List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insertion-sort-list/",
      },
      {
        title: "Task Scheduler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/task-scheduler/",
      },
      {
        title: "Friend Circles",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/friend-circles/",
      },
      {
        title: "Minimum Height Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-height-trees/",
      },
      {
        title: "Course Schedule II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule-ii/",
      },
      {
        title: "Combination Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum/",
      },
      {
        title: "Path Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-ii/",
      },
      {
        title: "Combination Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-ii/",
      },
      {
        title: "First Bad Version",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/first-bad-version/",
      },
      {
        title: "Basic Calculator",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/basic-calculator/",
      },
      {
        title: "Longest Repeating Character Replacement",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
      },
      {
        title: "Merge Two Binary Trees",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-binary-trees/",
      },
      {
        title: "Find All Anagrams in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
      },
      {
        title: "Queue Reconstruction by Height",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/queue-reconstruction-by-height/",
      },
      {
        title: "All Nodes Distance K in Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
      },
      {
        title: "Divisor Game",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/divisor-game/",
      },
      {
        title: "Sort an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-an-array/",
      },
      {
        title: "Remove Element",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-element/",
      },
      {
        title: "Same Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/same-tree/",
      },
      {
        title: "Factorial Trailing Zeroes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/factorial-trailing-zeroes/",
      },
      {
        title: "Prison Cells After N Days",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/prison-cells-after-n-days/",
      },
      {
        title: "Maximum Depth of N-ary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-depth-of-n-ary-tree/",
      },
      {
        title: "Min Cost Climbing Stairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/min-cost-climbing-stairs/",
      },
      {
        title: "Construct Binary Tree from Inorder and Postorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
      },
      {
        title: "Squares of a Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
      },
      {
        title: "Running Sum of 1d Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/running-sum-of-1d-array/",
      },
      {
        title: "Palindrome Permutation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-permutation/",
      },
      {
        title: "Read N Characters Given Read4 II - Call multiple times",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/",
      },
      {
        title: "Managers with at Least 5 Direct Reports",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/managers-with-at-least-5-direct-reports/",
      },
      {
        title: "Trim a Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/trim-a-binary-search-tree/",
      },
      {
        title: "Contain Virus",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/contain-virus/",
      },
      {
        title: "Path In Zigzag Labelled Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/",
      },
      {
        title: "Allocate Mailboxes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/allocate-mailboxes/",
      },
    ],
  },
  {
    name: "Cisco",
    questions: [
      {
        title: "Reverse Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        title: "Two Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        title: "Maximum Profit in Job Scheduling",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/",
      },
      {
        title: "Merge Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        title: "LRU Cache",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lru-cache/",
      },
      {
        title: "Convert Binary Number in a Linked List to Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/",
      },
      {
        title: "Add Two Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers/",
      },
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        title: "Rotate Image",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-image/",
      },
      {
        title: "Snakes and Ladders",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/snakes-and-ladders/",
      },
      {
        title: "Reverse String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string/",
      },
      {
        title: "Validate IP Address",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-ip-address/",
      },
      {
        title: "Strobogrammatic Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/strobogrammatic-number/",
      },
      {
        title: "Decode String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-string/",
      },
      {
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        title: "Lowest Common Ancestor of a Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
      },
      {
        title: "Number of 1 Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-1-bits/",
      },
      {
        title: "Decode Ways",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-ways/",
      },
      {
        title: "House Robber",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/house-robber/",
      },
      {
        title: "Reverse Nodes in k-Group",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
      },
      {
        title: "Maximum Subarray",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        title: "Strobogrammatic Number II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/strobogrammatic-number-ii/",
      },
      {
        title: "Merge Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-sorted-array/",
      },
      {
        title: "Number of Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        title: "Linked List Cycle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        title: "Sort Array By Parity",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sort-array-by-parity/",
      },
      {
        title: "Reorder List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorder-list/",
      },
      {
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        title: "Delete Node in a Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
      },
      {
        title: "Intersection of Two Linked Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
      },
      {
        title: "Spiral Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix/",
      },
      {
        title: "Longest Common Prefix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-common-prefix/",
      },
      {
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        title: "Add Two Numbers II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers-ii/",
      },
      {
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      },
      {
        title: "String to Integer (atoi)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/string-to-integer-atoi/",
      },
      {
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        title: "Different Ways to Add Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/different-ways-to-add-parentheses/",
      },
      {
        title: "Maximum Product of Three Numbers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-product-of-three-numbers/",
      },
      {
        title: "Valid Anagram",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-anagram/",
      },
      {
        title: "Rotate Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rotate-array/",
      },
      {
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        title: "Convert Sorted Array to Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
      },
      {
        title: "Shuffle an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shuffle-an-array/",
      },
      {
        title: "Meeting Rooms II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/meeting-rooms-ii/",
      },
      {
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      },
      {
        title: "Valid Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        title: "Can Place Flowers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/can-place-flowers/",
      },
      {
        title: "Reverse Words in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-words-in-a-string/",
      },
      {
        title: "Binary Tree Preorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
      },
      {
        title: "Word Search II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-search-ii/",
      },
      {
        title: "3Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum/",
      },
      {
        title: "Remove Nth Node From End of List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      },
      {
        title: "Delete Node in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-node-in-a-bst/",
      },
      {
        title: "Palindrome Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-linked-list/",
      },
      {
        title: "Fizz Buzz",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fizz-buzz/",
      },
      {
        title: "Balanced Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/balanced-binary-tree/",
      },
      {
        title: "Reverse Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-integer/",
      },
      {
        title: "Course Schedule",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule/",
      },
      {
        title: "Daily Temperatures",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/daily-temperatures/",
      },
      {
        title: "Generate Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/generate-parentheses/",
      },
      {
        title: "Permutations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations/",
      },
      {
        title: "Perfect Squares",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/perfect-squares/",
      },
      {
        title: "Group Anagrams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-anagrams/",
      },
      {
        title: "Binary Search Tree Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-iterator/",
      },
      {
        title: "Middle of the Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/middle-of-the-linked-list/",
      },
    ],
  },
  {
    name: "Dropbox",
    questions: [
      {
        title: "Find Duplicate File in System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-duplicate-file-in-system/",
      },
      {
        title: "Game of Life",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/game-of-life/",
      },
      {
        title: "Minimize Malware Spread",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimize-malware-spread/",
      },
      {
        title: "Design Phone Directory",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-phone-directory/",
      },
      {
        title: "Word Pattern II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-pattern-ii/",
      },
      {
        title: "Design Hit Counter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-hit-counter/",
      },
      {
        title: "Minimize Malware Spread II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimize-malware-spread-ii/",
      },
      {
        title: "Web Crawler Multithreaded",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/web-crawler-multithreaded/",
      },
      {
        title: "Number of Valid Words for Each Puzzle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/",
      },
      {
        title: "Grid Illumination",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/grid-illumination/",
      },
      {
        title: "Design Search Autocomplete System",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-search-autocomplete-system/",
      },
      {
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      },
      {
        title: "Word Pattern",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/word-pattern/",
      },
      {
        title: "Web Crawler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/web-crawler/",
      },
      {
        title: "LRU Cache",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lru-cache/",
      },
      {
        title: "Pairs of Songs With Total Durations Divisible by 60",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/",
      },
      {
        title: "Word Break II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-break-ii/",
      },
      {
        title: "Two Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
      {
        title: "Minimum Path Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-path-sum/",
      },
      {
        title: "Implement strStr()",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-strstr/",
      },
      {
        title: "Check If It Is a Good Array",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/check-if-it-is-a-good-array/",
      },
    ],
  },
  {
    name: "eBay",
    questions: [
      {
        title: "LRU Cache",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lru-cache/",
      },
      {
        title: "Boundary of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/boundary-of-binary-tree/",
      },
      {
        title: "Two Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        title: "N-Queens",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/n-queens/",
      },
      {
        title: "Number of Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        title: "Spiral Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix/",
      },
      {
        title: "Copy List with Random Pointer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
      },
      {
        title: "Hand of Straights",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/hand-of-straights/",
      },
      {
        title: "Move Zeroes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/move-zeroes/",
      },
      {
        title: "3Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum/",
      },
      {
        title: "Diagonal Traverse",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/diagonal-traverse/",
      },
      {
        title: "Binary Tree Right Side View",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-right-side-view/",
      },
      {
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      },
      {
        title: "Basic Calculator II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/basic-calculator-ii/",
      },
      {
        title: "Search in a Sorted Array of Unknown Size",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/",
      },
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        title: "Serialize and Deserialize N-ary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/",
      },
      {
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
      {
        title: "Word Break",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-break/",
      },
      {
        title: "Reverse String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string/",
      },
      {
        title: "Binary Tree Cameras",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-cameras/",
      },
      {
        title: "Meeting Rooms II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/meeting-rooms-ii/",
      },
      {
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        title: "Find Leaves of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-leaves-of-binary-tree/",
      },
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        title: "Reverse Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        title: "Find Median from Data Stream",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-median-from-data-stream/",
      },
      {
        title: "Rotate String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rotate-string/",
      },
      {
        title: "Surrounded Regions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/surrounded-regions/",
      },
      {
        title: "Linked List Cycle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        title: "Reorder List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorder-list/",
      },
      {
        title: "Rearrange String k Distance Apart",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/rearrange-string-k-distance-apart/",
      },
      {
        title: "Serialize and Deserialize BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/serialize-and-deserialize-bst/",
      },
      {
        title: "String Compression",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/string-compression/",
      },
      {
        title: "Kth Largest Element in a Stream",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
      },
      {
        title: "Maximum Width Ramp",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-width-ramp/",
      },
      {
        title: "Count Univalue Subtrees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-univalue-subtrees/",
      },
      {
        title: "Coin Change",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change/",
      },
      {
        title: "Relative Sort Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/relative-sort-array/",
      },
      {
        title: "Shortest Word Distance II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-word-distance-ii/",
      },
      {
        title: "String to Integer (atoi)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/string-to-integer-atoi/",
      },
      {
        title: "Find Minimum in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      },
      {
        title: "Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      },
      {
        title: "Snapshot Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/snapshot-array/",
      },
      {
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      },
      {
        title: "Odd Even Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/odd-even-linked-list/",
      },
      {
        title: "Search a 2D Matrix II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
      },
      {
        title: "Serialize and Deserialize Binary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      },
      {
        title: "Product of Array Except Self",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
      },
      {
        title: "Group Anagrams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-anagrams/",
      },
      {
        title: "Implement Trie (Prefix Tree)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
      },
      {
        title: "Asteroid Collision",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/asteroid-collision/",
      },
      {
        title: "Maximum Subarray",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        title: "Trapping Rain Water",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water/",
      },
      {
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
      },
      {
        title: "Permutations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations/",
      },
      {
        title: "Decode String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-string/",
      },
      {
        title: "Flatten Nested List Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-nested-list-iterator/",
      },
      {
        title: "Sort Colors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-colors/",
      },
      {
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        title: "Binary Tree Zigzag Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
      },
      {
        title: "Merge Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        title: "First Missing Positive",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/first-missing-positive/",
      },
      {
        title: "Next Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-permutation/",
      },
      {
        title: "Merge Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-sorted-array/",
      },
      {
        title: "Rotate Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rotate-array/",
      },
      {
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        title: "Valid Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        title: "Combination Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum/",
      },
      {
        title: "Binary Search Tree Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-iterator/",
      },
      {
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/",
      },
      {
        title: "Peeking Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/peeking-iterator/",
      },
      {
        title: "Reorganize String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorganize-string/",
      },
      {
        title: "Second Highest Salary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/second-highest-salary/",
      },
      {
        title: "Non-decreasing Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/non-decreasing-array/",
      },
      {
        title: "Sum Root to Leaf Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
      },
      {
        title: "House Robber II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber-ii/",
      },
      {
        title: "Pow(x, n)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/powx-n/",
      },
      {
        title: "Add Two Numbers II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers-ii/",
      },
      {
        title:
          "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/",
      },
      {
        title: "Flip Equivalent Binary Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flip-equivalent-binary-trees/",
      },
      {
        title: "Minimum Window Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-substring/",
      },
      {
        title: "Maximum Width of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-width-of-binary-tree/",
      },
      {
        title: "Squares of a Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
      },
      {
        title: "Subtree of Another Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/subtree-of-another-tree/",
      },
      {
        title: "Add and Search Word - Data structure design",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
      },
      {
        title: "Reverse Nodes in k-Group",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
      },
      {
        title: "Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets/",
      },
      {
        title: "Combination Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-ii/",
      },
      {
        title: "Partition to K Equal Sum Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
      },
      {
        title: "Longest Valid Parentheses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-valid-parentheses/",
      },
      {
        title: "Plus One",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/plus-one/",
      },
      {
        title: "Course Schedule",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule/",
      },
      {
        title: "Partition Equal Subset Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-equal-subset-sum/",
      },
      {
        title: "Min Stack",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/min-stack/",
      },
      {
        title: "Cheapest Flights Within K Stops",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
      },
      {
        title: "Rotting Oranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotting-oranges/",
      },
      {
        title: "Find K Closest Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-closest-elements/",
      },
      {
        title: "Regular Expression Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/regular-expression-matching/",
      },
      {
        title: "Count Primes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-primes/",
      },
      {
        title: "Implement strStr()",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-strstr/",
      },
      {
        title: "Add Two Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers/",
      },
      {
        title: "Linked List Cycle II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/linked-list-cycle-ii/",
      },
      {
        title: "Happy Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/happy-number/",
      },
      {
        title: "Find the Duplicate Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-duplicate-number/",
      },
      {
        title: "Friend Circles",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/friend-circles/",
      },
      {
        title: "Is Graph Bipartite?",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/is-graph-bipartite/",
      },
      {
        title: "Intersection of Two Linked Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
      },
      {
        title: "Word Break II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-break-ii/",
      },
      {
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
      },
      {
        title: "Perfect Squares",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/perfect-squares/",
      },
      {
        title: "House Robber",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/house-robber/",
      },
      {
        title: "Longest Common Prefix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-common-prefix/",
      },
      {
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        title: "Remove Duplicates from Sorted List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
      },
      {
        title: "Swap Nodes in Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/swap-nodes-in-pairs/",
      },
      {
        title: "K Closest Points to Origin",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-closest-points-to-origin/",
      },
      {
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      },
      {
        title: "Minimum Window Subsequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-subsequence/",
      },
      {
        title: "Binary Gap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-gap/",
      },
      {
        title: "Design Skiplist",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-skiplist/",
      },
    ],
  },
  {
    name: "Facebook",
    questions: [
      {
        title: "Remove Invalid Parentheses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/remove-invalid-parentheses/",
      },
      {
        title: "Integer to English Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/integer-to-english-words/",
      },
      {
        title: "Verifying an Alien Dictionary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/verifying-an-alien-dictionary/",
      },
      {
        title: "Read N Characters Given Read4 II - Call multiple times",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/",
      },
      {
        title: "Serialize and Deserialize Binary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      },
      {
        title: "Regular Expression Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/regular-expression-matching/",
      },
      {
        title: "Decode Ways",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-ways/",
      },
      {
        title: "Meeting Rooms II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/meeting-rooms-ii/",
      },
      {
        title: "Product of Array Except Self",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
      },
      {
        title: "Valid Palindrome II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome-ii/",
      },
      {
        title: "3Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum/",
      },
      {
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
      },
      {
        title: "First Bad Version",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/first-bad-version/",
      },
      {
        title: "Minimum Window Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-substring/",
      },
      {
        title: "K Closest Points to Origin",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-closest-points-to-origin/",
      },
      {
        title: "Add Binary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-binary/",
      },
      {
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        title: "Move Zeroes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/move-zeroes/",
      },
      {
        title: "Minimum Remove to Make Valid Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/",
      },
      {
        title: "Valid Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        title: "Divide Two Integers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/divide-two-integers/",
      },
      {
        title: "Next Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-permutation/",
      },
      {
        title: "Binary Search Tree Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-iterator/",
      },
      {
        title: "Expression Add Operators",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/expression-add-operators/",
      },
      {
        title: "Add and Search Word - Data structure design",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
      },
      {
        title: "Valid Number",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/valid-number/",
      },
      {
        title: "Read N Characters Given Read4",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/read-n-characters-given-read4/",
      },
      {
        title: "Binary Tree Maximum Path Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
      },
      {
        title: "Binary Tree Vertical Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-vertical-order-traversal/",
      },
      {
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      },
      {
        title: "Merge Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        title: "Convert Binary Search Tree to Sorted Doubly Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/",
      },
      {
        title: "Alien Dictionary",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/alien-dictionary/",
      },
      {
        title: "Two Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        title: "Clone Graph",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/clone-graph/",
      },
      {
        title: "Maximum Size Subarray Sum Equals k",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/",
      },
      {
        title: "Find All Anagrams in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
      },
      {
        title: "Sparse Matrix Multiplication",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sparse-matrix-multiplication/",
      },
      {
        title: "Add Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-strings/",
      },
      {
        title: "Number of Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        title: "Palindrome Pairs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/palindrome-pairs/",
      },
      {
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      },
      {
        title: "Diameter of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/diameter-of-binary-tree/",
      },
      {
        title: "Binary Tree Paths",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-paths/",
      },
      {
        title: "Continuous Subarray Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/continuous-subarray-sum/",
      },
      {
        title: "Find the Celebrity",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-celebrity/",
      },
      {
        title: "Task Scheduler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/task-scheduler/",
      },
      {
        title: "Multiply Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/multiply-strings/",
      },
      {
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        title: "Trapping Rain Water",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water/",
      },
      {
        title: "Maximum Sum of 3 Non-Overlapping Subarrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/",
      },
      {
        title: "Intersection of Two Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays/",
      },
      {
        title: "Longest Substring with At Most K Distinct Characters",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
      },
      {
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        title: "Merge Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-sorted-array/",
      },
      {
        title: "Flatten Binary Tree to Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
      },
      {
        title: "Copy List with Random Pointer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
      },
      {
        title: "Exclusive Time of Functions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/exclusive-time-of-functions/",
      },
      {
        title: "Accounts Merge",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/accounts-merge/",
      },
      {
        title: "One Edit Distance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/one-edit-distance/",
      },
      {
        title: "LRU Cache",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lru-cache/",
      },
      {
        title: "Range Sum Query 2D - Immutable",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-sum-query-2d-immutable/",
      },
      {
        title: "Binary Tree Right Side View",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-right-side-view/",
      },
      {
        title: "Word Break",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-break/",
      },
      {
        title: "Is Graph Bipartite?",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/is-graph-bipartite/",
      },
      {
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        title: "Shortest Distance from All Buildings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-distance-from-all-buildings/",
      },
      {
        title: "Reorder List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorder-list/",
      },
      {
        title: "Simplify Path",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/simplify-path/",
      },
      {
        title: "Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      },
      {
        title: "Walls and Gates",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/walls-and-gates/",
      },
      {
        title: "Interval List Intersections",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/interval-list-intersections/",
      },
      {
        title: "Find First and Last Position of Element in Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      },
      {
        title: "Flatten Nested List Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-nested-list-iterator/",
      },
      {
        title: "Monotonic Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/monotonic-array/",
      },
      {
        title: "Random Pick Index",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/random-pick-index/",
      },
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        title: "Basic Calculator II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/basic-calculator-ii/",
      },
      {
        title: "Insert Interval",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/insert-interval/",
      },
      {
        title: "Closest Binary Search Tree Value",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/closest-binary-search-tree-value/",
      },
      {
        title: "Intersection of Two Arrays II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
      },
      {
        title: "Sort Transformed Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-transformed-array/",
      },
      {
        title: "Friends Of Appropriate Ages",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/friends-of-appropriate-ages/",
      },
      {
        title: "Rearrange String k Distance Apart",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/rearrange-string-k-distance-apart/",
      },
      {
        title: "Longest Valid Parentheses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-valid-parentheses/",
      },
      {
        title: "Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets/",
      },
      {
        title: "Strobogrammatic Number II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/strobogrammatic-number-ii/",
      },
      {
        title: "Design Tic-Tac-Toe",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-tic-tac-toe/",
      },
      {
        title: "Insert into a Sorted Circular Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/",
      },
      {
        title: "Nested List Weight Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/nested-list-weight-sum/",
      },
      {
        title: "N-Queens",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/n-queens/",
      },
      {
        title: "Goat Latin",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/goat-latin/",
      },
      {
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/",
      },
      {
        title: "Strobogrammatic Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/strobogrammatic-number/",
      },
      {
        title: "Sort Colors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-colors/",
      },
      {
        title: "Maximum Swap",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-swap/",
      },
      {
        title: "Check Completeness of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-completeness-of-a-binary-tree/",
      },
      {
        title: "Insert Delete GetRandom O(1)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
      },
      {
        title: "Inorder Successor in BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/inorder-successor-in-bst/",
      },
      {
        title: "Island Perimeter",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/island-perimeter/",
      },
      {
        title: "Range Sum of BST",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/range-sum-of-bst/",
      },
      {
        title: "Vertical Order Traversal of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
      },
      {
        title: "Basic Calculator",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/basic-calculator/",
      },
      {
        title: "Word Ladder II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-ladder-ii/",
      },
      {
        title: "Convert Sorted List to Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
      },
      {
        title: "Random Pick with Weight",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/random-pick-with-weight/",
      },
      {
        title: "Maximum Subarray",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        title: "Find Peak Element",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-peak-element/",
      },
      {
        title: "Serialize and Deserialize BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/serialize-and-deserialize-bst/",
      },
      {
        title: "Meeting Rooms",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/meeting-rooms/",
      },
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        title: "Diagonal Traverse",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/diagonal-traverse/",
      },
      {
        title: "Friend Requests I: Overall Acceptance Rate",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/friend-requests-i-overall-acceptance-rate/",
      },
      {
        title: "Roman to Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/roman-to-integer/",
      },
      {
        title: "Flatten 2D Vector",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-2d-vector/",
      },
      {
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        title: "Word Ladder",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-ladder/",
      },
      {
        title: "Leftmost Column with at Least a One",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/leftmost-column-with-at-least-a-one/",
      },
      {
        title: "Custom Sort String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/custom-sort-string/",
      },
      {
        title: "Battleships in a Board",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/battleships-in-a-board/",
      },
      {
        title: "Target Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/target-sum/",
      },
      {
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
      },
      {
        title: "Basic Calculator III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/basic-calculator-iii/",
      },
      {
        title: "String to Integer (atoi)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/string-to-integer-atoi/",
      },
      {
        title: "Number of Islands II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-islands-ii/",
      },
      {
        title: "Add Two Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers/",
      },
      {
        title: "Reorganize String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorganize-string/",
      },
      {
        title: "Smallest Range Covering Elements from K Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
      },
      {
        title: "Insert Delete GetRandom O(1) - Duplicates allowed",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/",
      },
      {
        title: "Reverse Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        title: "Friend Requests II: Who Has the Most Friends",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/",
      },
      {
        title: "UTF-8 Validation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/utf-8-validation/",
      },
      {
        title: "Wildcard Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/wildcard-matching/",
      },
      {
        title: "Group Shifted Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-shifted-strings/",
      },
      {
        title: "Range Sum Query 2D - Mutable",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/range-sum-query-2d-mutable/",
      },
      {
        title: "Permutation in String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutation-in-string/",
      },
      {
        title: "Permutations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations/",
      },
      {
        title: "Group Anagrams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-anagrams/",
      },
      {
        title: "Minimum Add to Make Parentheses Valid",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/",
      },
      {
        title: "Decode String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-string/",
      },
      {
        title: "The Skyline Problem",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/the-skyline-problem/",
      },
      {
        title: "Find K Closest Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-closest-elements/",
      },
      {
        title: "All O`one Data Structure",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/all-oone-data-structure/",
      },
      {
        title: "Total Hamming Distance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/total-hamming-distance/",
      },
      {
        title: "Palindromic Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindromic-substrings/",
      },
      {
        title: "Valid Word Abbreviation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-word-abbreviation/",
      },
      {
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
      {
        title: "Validate IP Address",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-ip-address/",
      },
      {
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      },
      {
        title: "Count and Say",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-and-say/",
      },
      {
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        title: "Kth Smallest Element in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      },
      {
        title: "Valid Parenthesis String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-parenthesis-string/",
      },
      {
        title: "Pow(x, n)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/powx-n/",
      },
      {
        title: "Moving Average from Data Stream",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/moving-average-from-data-stream/",
      },
      {
        title: "Missing Element in Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/missing-element-in-sorted-array/",
      },
      {
        title: "Word Break II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-break-ii/",
      },
      {
        title: "Longest Arithmetic Sequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-arithmetic-sequence/",
      },
      {
        title: "Generate Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/generate-parentheses/",
      },
      {
        title: "Longest Consecutive Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-consecutive-sequence/",
      },
      {
        title: "Design Circular Queue",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-circular-queue/",
      },
      {
        title: "Kth Smallest Element in a Sorted Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
      },
      {
        title: "Combination Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum/",
      },
      {
        title: "Partition Equal Subset Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-equal-subset-sum/",
      },
      {
        title: "All Nodes Distance K in Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
      },
      {
        title: "Minimum Depth of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
      },
      {
        title: "Minimum Knight Moves",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-knight-moves/",
      },
      {
        title: "Longest Continuous Increasing Subsequence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-continuous-increasing-subsequence/",
      },
      {
        title: "Reverse Nodes in k-Group",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
      },
      {
        title: "Implement Trie (Prefix Tree)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
      },
      {
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        title: "Max Consecutive Ones III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-consecutive-ones-iii/",
      },
      {
        title: "Robot Room Cleaner",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/robot-room-cleaner/",
      },
      {
        title: "Restore IP Addresses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/restore-ip-addresses/",
      },
      {
        title: "Word Search II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-search-ii/",
      },
      {
        title: "4Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/4sum/",
      },
      {
        title: "Find Median from Data Stream",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-median-from-data-stream/",
      },
      {
        title: "Palindrome Permutation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-permutation/",
      },
      {
        title: "Reconstruct Itinerary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reconstruct-itinerary/",
      },
      {
        title: "Construct Binary Tree from String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-string/",
      },
      {
        title: "Word Frequency",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-frequency/",
      },
      {
        title: "Longest Increasing Path in a Matrix",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
      },
      {
        title: "Word Search",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-search/",
      },
      {
        title: "Minimum Size Subarray Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
      },
      {
        title: "Toeplitz Matrix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/toeplitz-matrix/",
      },
      {
        title: "Smallest Subtree with all the Deepest Nodes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/",
      },
      {
        title: "Increasing Triplet Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/increasing-triplet-subsequence/",
      },
      {
        title: "Design Search Autocomplete System",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-search-autocomplete-system/",
      },
      {
        title: "The Maze",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-maze/",
      },
      {
        title: "Bulb Switcher",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bulb-switcher/",
      },
      {
        title: "Minimum Number of Arrows to Burst Balloons",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
      },
      {
        title: "Populating Next Right Pointers in Each Node II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
      },
      {
        title: "Best Time to Buy and Sell Stock III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
      },
      {
        title: "Frog Jump",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/frog-jump/",
      },
      {
        title: "Best Time to Buy and Sell Stock II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
      },
      {
        title: "Search a 2D Matrix II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
      },
      {
        title: "Lowest Common Ancestor of Deepest Leaves",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/",
      },
      {
        title: "Implement strStr()",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-strstr/",
      },
      {
        title: "Minesweeper",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minesweeper/",
      },
      {
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
      },
      {
        title: "Top K Frequent Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-words/",
      },
      {
        title: "Spiral Matrix III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix-iii/",
      },
      {
        title: "Max Area of Island",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-area-of-island/",
      },
      {
        title: "Evaluate Division",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-division/",
      },
      {
        title: "Set Matrix Zeroes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/set-matrix-zeroes/",
      },
      {
        title: "Reverse Linked List II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-linked-list-ii/",
      },
      {
        title: "Populating Next Right Pointers in Each Node",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
      },
      {
        title: "Maximum Vacation Days",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-vacation-days/",
      },
      {
        title: "Sliding Window Median",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-median/",
      },
      {
        title: "Course Schedule",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule/",
      },
      {
        title: "Unique Paths",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-paths/",
      },
      {
        title: "Search in Rotated Sorted Array II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
      },
      {
        title: "Fraction to Recurring Decimal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/fraction-to-recurring-decimal/",
      },
      {
        title: "Single Element in a Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-element-in-a-sorted-array/",
      },
      {
        title: "Split Array with Equal Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/split-array-with-equal-sum/",
      },
      {
        title: "Spiral Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix/",
      },
      {
        title: "Add Bold Tag in String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-bold-tag-in-string/",
      },
      {
        title: "Number of Distinct Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-distinct-islands/",
      },
      {
        title: "Container With Most Water",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/container-with-most-water/",
      },
      {
        title: "Stickers to Spell Word",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/stickers-to-spell-word/",
      },
      {
        title: "Lowest Common Ancestor of a Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
      },
      {
        title: "Substring with Concatenation of All Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
      },
      {
        title: "Nth Digit",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/nth-digit/",
      },
      {
        title: "Serialize and Deserialize N-ary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/",
      },
      {
        title: "Largest BST Subtree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-bst-subtree/",
      },
      {
        title: "Shortest Bridge",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-bridge/",
      },
      {
        title: "Backspace String Compare",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/backspace-string-compare/",
      },
      {
        title: "Swap Nodes in Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/swap-nodes-in-pairs/",
      },
      {
        title: "Recover Binary Search Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/recover-binary-search-tree/",
      },
      {
        title: "Binary Tree Longest Consecutive Sequence II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/",
      },
      {
        title: "Maximum Difference Between Node and Ancestor",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/",
      },
      {
        title: "Best Meeting Point",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-meeting-point/",
      },
      {
        title: "Reported Posts",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reported-posts/",
      },
      {
        title: "Subsets II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets-ii/",
      },
      {
        title: "Knight Dialer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/knight-dialer/",
      },
      {
        title: "Text Justification",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/text-justification/",
      },
      {
        title: "Binary Tree Longest Consecutive Sequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/",
      },
      {
        title: "Nested List Weight Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/nested-list-weight-sum-ii/",
      },
      {
        title: "Search a 2D Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix/",
      },
      {
        title: "Wiggle Sort",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/wiggle-sort/",
      },
      {
        title: "Maximal Rectangle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximal-rectangle/",
      },
      {
        title: "Brick Wall",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/brick-wall/",
      },
      {
        title: "Edit Distance",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/edit-distance/",
      },
      {
        title: "Sudoku Solver",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sudoku-solver/",
      },
      {
        title: "Missing Ranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/missing-ranges/",
      },
      {
        title: "First Unique Character in a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/first-unique-character-in-a-string/",
      },
      {
        title: "Sum Root to Leaf Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
      },
      {
        title: "Binary Tree Postorder Traversal",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
      },
      {
        title: "Valid Palindrome III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/valid-palindrome-iii/",
      },
      {
        title: "Squares of a Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
      },
      {
        title: "Sort List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-list/",
      },
      {
        title: "Convert a Number to Hexadecimal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-a-number-to-hexadecimal/",
      },
      {
        title: "Decode Ways II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/decode-ways-ii/",
      },
      {
        title: "Sqrt(x)",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sqrtx/",
      },
      {
        title: "Binary Tree Inorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      },
      {
        title: "Largest Rectangle in Histogram",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
      },
      {
        title: "Minimum Area Rectangle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-area-rectangle/",
      },
      {
        title: "Closest Binary Search Tree Value II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/closest-binary-search-tree-value-ii/",
      },
      {
        title: "Similar String Groups",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/similar-string-groups/",
      },
      {
        title: "Minimum Area Rectangle II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-area-rectangle-ii/",
      },
      {
        title: "Second Degree Follower",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/second-degree-follower/",
      },
      {
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      },
      {
        title: "Flatten a Multilevel Doubly Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
      },
      {
        title: "Longest Substring with At Least K Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/",
      },
      {
        title: "Word Pattern II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-pattern-ii/",
      },
      {
        title: "Car Pooling",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/car-pooling/",
      },
      {
        title: "Number of 1 Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-1-bits/",
      },
      {
        title: "Coin Change",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change/",
      },
      {
        title: "Next Greater Element III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-element-iii/",
      },
      {
        title: "Number of Connected Components in an Undirected Graph",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
      },
      {
        title: "Max Sum of Rectangle No Larger Than K",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/",
      },
      {
        title: "Valid Anagram",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-anagram/",
      },
      {
        title: "First Missing Positive",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/first-missing-positive/",
      },
      {
        title: "Add Two Numbers II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers-ii/",
      },
      {
        title: "Find Pivot Index",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-pivot-index/",
      },
      {
        title: "Number of Ways to Stay in the Same Place After Some Steps",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/",
      },
      {
        title: "Maximum Product Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-product-subarray/",
      },
      {
        title: "Coin Change 2",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change-2/",
      },
      {
        title: "Single Number II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-number-ii/",
      },
      {
        title: "Pancake Sorting",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pancake-sorting/",
      },
      {
        title: "Valid Sudoku",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-sudoku/",
      },
      {
        title: "Intersection of Two Linked Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
      },
      {
        title: "Average of Levels in Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/average-of-levels-in-binary-tree/",
      },
      {
        title: "Koko Eating Bananas",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/koko-eating-bananas/",
      },
      {
        title: "Remove Nth Node From End of List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      },
      {
        title: "Closest Leaf in a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/closest-leaf-in-a-binary-tree/",
      },
      {
        title: "Shortest Palindrome",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-palindrome/",
      },
      {
        title: "Permutations II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations-ii/",
      },
      {
        title: "Jump Game II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/jump-game-ii/",
      },
      {
        title: "Strobogrammatic Number III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/strobogrammatic-number-iii/",
      },
      {
        title: "Jump Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game/",
      },
      {
        title: "Web Crawler Multithreaded",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/web-crawler-multithreaded/",
      },
      {
        title: "Peeking Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/peeking-iterator/",
      },
      {
        title: "Remove Duplicate Letters",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/remove-duplicate-letters/",
      },
      {
        title: "Symmetric Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/symmetric-tree/",
      },
      {
        title: "Integer to Roman",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/integer-to-roman/",
      },
      {
        title: "Combination Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-ii/",
      },
      {
        title: "Longest Absolute File Path",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-absolute-file-path/",
      },
      {
        title: "Data Stream as Disjoint Intervals",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/data-stream-as-disjoint-intervals/",
      },
      {
        title: "Longest Common Prefix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-common-prefix/",
      },
      {
        title: "User Activity for the Past 30 Days II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/user-activity-for-the-past-30-days-ii/",
      },
      {
        title: "Plus One",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/plus-one/",
      },
      {
        title: "String Compression",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/string-compression/",
      },
      {
        title: "Reported Posts II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reported-posts-ii/",
      },
      {
        title: "Find Minimum in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      },
      {
        title: "Find Largest Value in Each Tree Row",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-largest-value-in-each-tree-row/",
      },
      {
        title: "Intersection of Three Sorted Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-three-sorted-arrays/",
      },
      {
        title: "Rectangle Area",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rectangle-area/",
      },
      {
        title: "Construct Binary Search Tree from Preorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
      },
      {
        title: "Unique Paths II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-paths-ii/",
      },
      {
        title: "Convert Sorted Array to Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
      },
      {
        title: "Find the Closest Palindrome",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-the-closest-palindrome/",
      },
      {
        title: "Increasing Subsequences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/increasing-subsequences/",
      },
      {
        title: "Rotate Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rotate-array/",
      },
      {
        title: "Combinations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combinations/",
      },
      {
        title: "Remove Sub-Folders from the Filesystem",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/",
      },
      {
        title: "Path Sum III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-iii/",
      },
      {
        title: "Is Subsequence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/is-subsequence/",
      },
      {
        title: "Rotate Image",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-image/",
      },
      {
        title: "Reverse Words in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-words-in-a-string/",
      },
      {
        title: "Split BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/split-bst/",
      },
      {
        title: "Page Recommendations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/page-recommendations/",
      },
      {
        title: "Knight Probability in Chessboard",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/knight-probability-in-chessboard/",
      },
      {
        title: "Diagonal Traverse II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/diagonal-traverse-ii/",
      },
      {
        title: "Single Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/single-number/",
      },
      {
        title: "Reverse Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-integer/",
      },
      {
        title: "Two Sum II - Input array is sorted",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      },
      {
        title: "Friend Circles",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/friend-circles/",
      },
      {
        title: "Trapping Rain Water II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water-ii/",
      },
      {
        title: "Evaluate Reverse Polish Notation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
      },
      {
        title: "Stream of Characters",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/stream-of-characters/",
      },
      {
        title: "Reverse Vowels of a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-vowels-of-a-string/",
      },
      {
        title: "Kth Largest Element in a Stream",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
      },
      {
        title: "Find All Duplicates in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
      },
      {
        title: "Shortest Subarray with Sum at Least K",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
      },
      {
        title: "Exam Room",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/exam-room/",
      },
      {
        title: "Range Sum Query - Immutable",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/range-sum-query-immutable/",
      },
      {
        title: "Non-overlapping Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/non-overlapping-intervals/",
      },
      {
        title: "Balanced Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/balanced-binary-tree/",
      },
      {
        title: "Shortest Path in Binary Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
      },
      {
        title: "Summary Ranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/summary-ranges/",
      },
      {
        title: "Making A Large Island",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/making-a-large-island/",
      },
      {
        title: "Valid Tic-Tac-Toe State",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-tic-tac-toe-state/",
      },
      {
        title: "Shuffle an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shuffle-an-array/",
      },
      {
        title: "Peak Index in a Mountain Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
      },
      {
        title: "Maximum Sum Circular Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-sum-circular-subarray/",
      },
      {
        title: "3Sum Closest",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum-closest/",
      },
      {
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
      {
        title: "Repeated String Match",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/repeated-string-match/",
      },
      {
        title: "Generate Random Point in a Circle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/generate-random-point-in-a-circle/",
      },
      {
        title: "Wiggle Sort II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/wiggle-sort-ii/",
      },
      {
        title: "Path Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/path-sum/",
      },
      {
        title: "Tree Diameter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/tree-diameter/",
      },
      {
        title: "Stamping The Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/stamping-the-sequence/",
      },
      {
        title: "Design Circular Deque",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-circular-deque/",
      },
      {
        title: "Min Stack",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/min-stack/",
      },
      {
        title: "Excel Sheet Column Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/excel-sheet-column-number/",
      },
      {
        title: "Combination Sum IV",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-iv/",
      },
      {
        title: "Permutation Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/permutation-sequence/",
      },
      {
        title: "Maximum Width of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-width-of-binary-tree/",
      },
      {
        title: "Linked List Random Node",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/linked-list-random-node/",
      },
      {
        title: "Count Different Palindromic Subsequences",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-different-palindromic-subsequences/",
      },
      {
        title: "Third Maximum Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/third-maximum-number/",
      },
      {
        title: "Employee Free Time",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/employee-free-time/",
      },
      {
        title: "Minimum Cost For Tickets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-for-tickets/",
      },
      {
        title: "Delete Node in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-node-in-a-bst/",
      },
      {
        title: "Course Schedule II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule-ii/",
      },
      {
        title: "The Maze II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-maze-ii/",
      },
      {
        title: "Equal Tree Partition",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/equal-tree-partition/",
      },
      {
        title: "Palindrome Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-linked-list/",
      },
      {
        title: "Arithmetic Slices II - Subsequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/arithmetic-slices-ii-subsequence/",
      },
      {
        title: "Find Duplicate File in System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-duplicate-file-in-system/",
      },
      {
        title: "Excel Sheet Column Title",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/excel-sheet-column-title/",
      },
      {
        title: "Range Sum Query - Mutable",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-sum-query-mutable/",
      },
      {
        title: "Max Stack",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/max-stack/",
      },
      {
        title: "Best Time to Buy and Sell Stock IV",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
      },
      {
        title: "Print Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/print-binary-tree/",
      },
      {
        title: "Reverse String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string/",
      },
      {
        title: "Maximum Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-binary-tree/",
      },
      {
        title: "Maximal Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximal-square/",
      },
      {
        title: "Longest Substring with At Most Two Distinct Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/",
      },
      {
        title: "Different Ways to Add Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/different-ways-to-add-parentheses/",
      },
      {
        title: "Number Of Corner Rectangles",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-corner-rectangles/",
      },
      {
        title: "Longest Palindromic Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-subsequence/",
      },
      {
        title: "Pacific Atlantic Water Flow",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
      },
      {
        title: "Trim a Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/trim-a-binary-search-tree/",
      },
      {
        title: "Split Array Largest Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/split-array-largest-sum/",
      },
      {
        title: "Graph Valid Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/graph-valid-tree/",
      },
      {
        title: "ZigZag Conversion",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/zigzag-conversion/",
      },
      {
        title: "Next Greater Element II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-element-ii/",
      },
      {
        title: "Burst Balloons",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/burst-balloons/",
      },
      {
        title: "Previous Permutation With One Swap",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/previous-permutation-with-one-swap/",
      },
      {
        title: "Count of Smaller Numbers After Self",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
      },
      {
        title: "Uncommon Words from Two Sentences",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/uncommon-words-from-two-sentences/",
      },
      {
        title: "Word Pattern",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/word-pattern/",
      },
      {
        title: "Sum of Two Integers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-two-integers/",
      },
      {
        title: "Open the Lock",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/open-the-lock/",
      },
      {
        title: "Get Highest Answer Rate Question",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/get-highest-answer-rate-question/",
      },
      {
        title: "Best Time to Buy and Sell Stock with Transaction Fee",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
      },
      {
        title: "Possible Bipartition",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/possible-bipartition/",
      },
      {
        title: "Next Greater Element I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/next-greater-element-i/",
      },
      {
        title: "Rank Scores",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rank-scores/",
      },
      {
        title: "Next Closest Time",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-closest-time/",
      },
      {
        title: "Binary Tree Zigzag Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
      },
      {
        title: "Time Based Key-Value Store",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/time-based-key-value-store/",
      },
      {
        title: "Construct Binary Tree from Preorder and Postorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/",
      },
      {
        title: "Valid Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-square/",
      },
      {
        title: "Word Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-subsets/",
      },
      {
        title: "Palindrome Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-number/",
      },
      {
        title: "Surrounded Regions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/surrounded-regions/",
      },
      {
        title: "Odd Even Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/odd-even-linked-list/",
      },
      {
        title: "Guess the Word",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/guess-the-word/",
      },
      {
        title: "Arithmetic Slices",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/arithmetic-slices/",
      },
      {
        title: "Encode and Decode TinyURL",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/encode-and-decode-tinyurl/",
      },
      {
        title: "Construct Binary Tree from Inorder and Postorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
      },
      {
        title: "Find K Pairs with Smallest Sums",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
      },
      {
        title: "Implement Magic Dictionary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-magic-dictionary/",
      },
      {
        title: "Candy Crush",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/candy-crush/",
      },
      {
        title: "Path Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-ii/",
      },
      {
        title: "Unique Binary Search Trees II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-binary-search-trees-ii/",
      },
      {
        title: "Factorial Trailing Zeroes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/factorial-trailing-zeroes/",
      },
      {
        title: "Second Highest Salary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/second-highest-salary/",
      },
      {
        title: "Count Univalue Subtrees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-univalue-subtrees/",
      },
      {
        title: "Remove All Adjacent Duplicates in String II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/",
      },
      {
        title: "Partition Array for Maximum Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-array-for-maximum-sum/",
      },
      {
        title: "Count Primes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-primes/",
      },
      {
        title: "Same Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/same-tree/",
      },
      {
        title: "Invert Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/invert-binary-tree/",
      },
      {
        title: "H-Index",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/h-index/",
      },
      {
        title: "Counting Bits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/counting-bits/",
      },
      {
        title: "Hamming Distance",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/hamming-distance/",
      },
      {
        title: "Snapshot Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/snapshot-array/",
      },
      {
        title: "Subtree of Another Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/subtree-of-another-tree/",
      },
      {
        title: "Count Complete Tree Nodes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-complete-tree-nodes/",
      },
      {
        title: "Shifting Letters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shifting-letters/",
      },
      {
        title: "Find the Kth Smallest Sum of a Matrix With Sorted Rows",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/",
      },
      {
        title: "Largest Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-number/",
      },
      {
        title: "Contiguous Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/contiguous-array/",
      },
      {
        title: "Missing Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/missing-number/",
      },
      {
        title: "Find Winner on a Tic Tac Toe Game",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/",
      },
      {
        title: "Rotate List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-list/",
      },
      {
        title: "Remove All Adjacent Duplicates In String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
      },
      {
        title: "Paint House II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/paint-house-ii/",
      },
      {
        title: "Number of Matching Subsequences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-matching-subsequences/",
      },
      {
        title: "Employees Earning More Than Their Managers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/employees-earning-more-than-their-managers/",
      },
      {
        title: "Perfect Squares",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/perfect-squares/",
      },
      {
        title: "Vowel Spellchecker",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/vowel-spellchecker/",
      },
      {
        title: "Climbing Stairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        title: "Sliding Puzzle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-puzzle/",
      },
      {
        title: "Pascal's Triangle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/pascals-triangle/",
      },
      {
        title:
          "Find a Corresponding Node of a Binary Tree in a Clone of That Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/",
      },
      {
        title: "Number of Ways to Paint N × 3 Grid",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/",
      },
      {
        title: "Remove K Digits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-k-digits/",
      },
      {
        title: "Linked List Cycle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        title: "Maximum Product of Three Numbers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-product-of-three-numbers/",
      },
      {
        title: "User Activity for the Past 30 Days I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/user-activity-for-the-past-30-days-i/",
      },
      {
        title: "Spiral Matrix II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix-ii/",
      },
      {
        title: "Shortest Distance to a Character",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shortest-distance-to-a-character/",
      },
      {
        title: "Longest Repeating Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-repeating-substring/",
      },
      {
        title: "Project Employees III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/project-employees-iii/",
      },
      {
        title: "Number of Comments per Post",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-comments-per-post/",
      },
      {
        title: "Find Duplicate Subtrees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-duplicate-subtrees/",
      },
      {
        title: "Minimum Number of K Consecutive Bit Flips",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/",
      },
      {
        title: "Rotated Digits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rotated-digits/",
      },
      {
        title: "Defanging an IP Address",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/defanging-an-ip-address/",
      },
      {
        title: "Find the Duplicate Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-duplicate-number/",
      },
      {
        title: "Next Greater Node In Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-node-in-linked-list/",
      },
      {
        title: "Game Play Analysis IV",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/game-play-analysis-iv/",
      },
      {
        title: "Maximum Width Ramp",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-width-ramp/",
      },
      {
        title: "Partition to K Equal Sum Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
      },
      {
        title: "Super Egg Drop",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/super-egg-drop/",
      },
      {
        title: "Number of Longest Increasing Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
      },
      {
        title: "Check If Word Is Valid After Substitutions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/",
      },
      {
        title: "Number of Closed Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-closed-islands/",
      },
      {
        title: "Shortest Way to Form String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-way-to-form-string/",
      },
      {
        title: "Swim in Rising Water",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/swim-in-rising-water/",
      },
      {
        title: "Majority Element II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/majority-element-ii/",
      },
      {
        title: "Cheapest Flights Within K Stops",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
      },
      {
        title: "Element Appearing More Than 25% In Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/",
      },
      {
        title: "Campus Bikes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/campus-bikes/",
      },
      {
        title: "Game of Life",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/game-of-life/",
      },
      {
        title: "Find the Town Judge",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-town-judge/",
      },
      {
        title: "Number of Atoms",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-atoms/",
      },
      {
        title: "Fibonacci Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fibonacci-number/",
      },
      {
        title: "Concatenated Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/concatenated-words/",
      },
      {
        title: "Design Snake Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-snake-game/",
      },
      {
        title: "Contains Duplicate",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate/",
      },
      {
        title: "All Elements in Two Binary Search Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-elements-in-two-binary-search-trees/",
      },
      {
        title: "Distribute Coins in Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/distribute-coins-in-binary-tree/",
      },
      {
        title: "Remove Duplicates from Sorted List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
      },
      {
        title: "Two Sum IV - Input is a BST",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",
      },
      {
        title: "Happy Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/happy-number/",
      },
      {
        title: "Minimum Height Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-height-trees/",
      },
      {
        title: "24 Game",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/24-game/",
      },
      {
        title: "Remove Linked List Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-linked-list-elements/",
      },
      {
        title: "Isomorphic Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/isomorphic-strings/",
      },
      {
        title: "Flood Fill",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/flood-fill/",
      },
      {
        title: "Number of Subsequences That Satisfy the Given Sum Condition",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/",
      },
      {
        title: "Valid Triangle Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-triangle-number/",
      },
      {
        title: "Path with Maximum Gold",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-with-maximum-gold/",
      },
      {
        title: "Single Number III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-number-iii/",
      },
      {
        title: "Daily Temperatures",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/daily-temperatures/",
      },
      {
        title: "Queue Reconstruction by Height",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/queue-reconstruction-by-height/",
      },
      {
        title: "Design HashMap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-hashmap/",
      },
      {
        title: "Leaf-Similar Trees",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/leaf-similar-trees/",
      },
      {
        title: "Cousins in Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/cousins-in-binary-tree/",
      },
      {
        title: "House Robber III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber-iii/",
      },
      {
        title: "Sort Array By Parity",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sort-array-by-parity/",
      },
      {
        title: "Maximum Sum of Two Non-Overlapping Subarrays",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/",
      },
      {
        title: "Maximum Length of Pair Chain",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-length-of-pair-chain/",
      },
      {
        title: "Wiggle Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/wiggle-subsequence/",
      },
      {
        title: "Unique Binary Search Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-binary-search-trees/",
      },
      {
        title: "Insert into a Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
      },
      {
        title: "Best Time to Buy and Sell Stock with Cooldown",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
      },
      {
        title: "Number of Days Between Two Dates",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-days-between-two-dates/",
      },
      {
        title: "Find Minimum in Rotated Sorted Array II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/",
      },
      {
        title: "Remove Duplicates from Sorted Array II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
      },
      {
        title: "Flipping an Image",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/flipping-an-image/",
      },
      {
        title: "Can Place Flowers",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/can-place-flowers/",
      },
      {
        title: "Minimum Path Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-path-sum/",
      },
      {
        title: "N-th Tribonacci Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/n-th-tribonacci-number/",
      },
      {
        title: "Delete Node in a Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
      },
      {
        title: "Minimum Time Visiting All Points",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-time-visiting-all-points/",
      },
      {
        title: "Remove Outermost Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-outermost-parentheses/",
      },
      {
        title: "Jewels and Stones",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/jewels-and-stones/",
      },
      {
        title: "Find N Unique Integers Sum up to Zero",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/",
      },
      {
        title: "Sum of Left Leaves",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sum-of-left-leaves/",
      },
      {
        title: "Sort Characters By Frequency",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-characters-by-frequency/",
      },
      {
        title: "Longest Common Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-common-subsequence/",
      },
      {
        title: "Partition Labels",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-labels/",
      },
      {
        title: "Shuffle String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shuffle-string/",
      },
      {
        title: "H-Index II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/h-index-ii/",
      },
      {
        title: "Prefix and Suffix Search",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/prefix-and-suffix-search/",
      },
      {
        title: "Largest Plus Sign",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-plus-sign/",
      },
      {
        title: "Letter Case Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-case-permutation/",
      },
      {
        title: "Minimum Swaps To Make Sequences Increasing",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/",
      },
      {
        title: "Groups of Special-Equivalent Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/groups-of-special-equivalent-strings/",
      },
      {
        title: "Binary Tree Cameras",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-cameras/",
      },
      {
        title: "Add to Array-Form of Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-to-array-form-of-integer/",
      },
      {
        title: "Maximum Binary Tree II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-binary-tree-ii/",
      },
      {
        title: "Moving Stones Until Consecutive",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/moving-stones-until-consecutive/",
      },
      {
        title: "Moving Stones Until Consecutive II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/moving-stones-until-consecutive-ii/",
      },
      {
        title: "Project Employees I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/project-employees-i/",
      },
      {
        title: "Project Employees II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/project-employees-ii/",
      },
      {
        title: "Validate Binary Tree Nodes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-binary-tree-nodes/",
      },
      {
        title: "Queries Quality and Percentage",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/queries-quality-and-percentage/",
      },
      {
        title: "Report Contiguous Dates",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/report-contiguous-dates/",
      },
      {
        title: "Web Crawler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/web-crawler/",
      },
      {
        title: "Ads Performance",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/ads-performance/",
      },
      {
        title: "Apply Discount Every n Orders",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/apply-discount-every-n-orders/",
      },
      {
        title: "Customers Who Bought Products A and B but Not C",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/",
      },
      {
        title: "Minimum Time to Collect All Apples in a Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/",
      },
      {
        title: "Make Two Arrays Equal by Reversing Sub-arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/",
      },
      {
        title: "Maximum Number of Darts Inside of a Circular Dartboard",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/",
      },
      {
        title: "Diameter of N-Ary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/diameter-of-n-ary-tree/",
      },
    ],
  },
  {
    name: "Flipkart",
    questions: [
      {
        title: "Cherry Pickup",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/cherry-pickup/",
      },
      {
        title: "Trapping Rain Water",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water/",
      },
      {
        title: "Insert Delete GetRandom O(1)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
      },
      {
        title: "Alien Dictionary",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/alien-dictionary/",
      },
      {
        title: "Regular Expression Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/regular-expression-matching/",
      },
      {
        title: "Add Two Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers/",
      },
      {
        title: "Largest Rectangle in Histogram",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
      },
      {
        title: "Best Time to Buy and Sell Stock III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
      },
      {
        title: "Rotting Oranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotting-oranges/",
      },
      {
        title: "Min Stack",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/min-stack/",
      },
      {
        title: "Numbers With Same Consecutive Differences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/numbers-with-same-consecutive-differences/",
      },
      {
        title: "Triples with Bitwise AND Equal To Zero",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/",
      },
      {
        title: "Maximum Points You Can Obtain from Cards",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",
      },
    ],
  },
  {
    name: "Microsoft Interview Questions",
    questions: [
      {
        title: "Copy List with Random Pointer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
      },
      {
        title: "Two Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        title: "LRU Cache",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lru-cache/",
      },
      {
        title: "Spiral Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix/",
      },
      {
        title: "Integer to English Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/integer-to-english-words/",
      },
      {
        title: "Find the Celebrity",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-celebrity/",
      },
      {
        title: "Design Tic-Tac-Toe",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-tic-tac-toe/",
      },
      {
        title: "Add Two Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers/",
      },
      {
        title: "Trapping Rain Water",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water/",
      },
      {
        title: "Reverse Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        title: "String to Integer (atoi)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/string-to-integer-atoi/",
      },
      {
        title: "Number of Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
      {
        title: "Reverse Words in a String II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-words-in-a-string-ii/",
      },
      {
        title: "Merge Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-sorted-array/",
      },
      {
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      },
      {
        title: "The Skyline Problem",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/the-skyline-problem/",
      },
      {
        title: "Compare Version Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/compare-version-numbers/",
      },
      {
        title: "Reverse Nodes in k-Group",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
      },
      {
        title: "Search a 2D Matrix II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
      },
      {
        title: "Meeting Rooms II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/meeting-rooms-ii/",
      },
      {
        title: "Regular Expression Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/regular-expression-matching/",
      },
      {
        title: "Maximum Subarray",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        title: "Serialize and Deserialize Binary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      },
      {
        title: "Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      },
      {
        title: "Add Two Numbers II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers-ii/",
      },
      {
        title: "Populating Next Right Pointers in Each Node",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
      },
      {
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        title: "Remove K Digits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-k-digits/",
      },
      {
        title: "Reverse Words in a String III",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-words-in-a-string-iii/",
      },
      {
        title: "Remove Comments",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-comments/",
      },
      {
        title: "Sort Colors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-colors/",
      },
      {
        title: "Swap Nodes in Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/swap-nodes-in-pairs/",
      },
      {
        title: "Reverse Words in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-words-in-a-string/",
      },
      {
        title: "Encode and Decode TinyURL",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/encode-and-decode-tinyurl/",
      },
      {
        title: "Rotate Image",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-image/",
      },
      {
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        title: "Excel Sheet Column Title",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/excel-sheet-column-title/",
      },
      {
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      },
      {
        title: "Battleships in a Board",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/battleships-in-a-board/",
      },
      {
        title: "Rectangle Area",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rectangle-area/",
      },
      {
        title: "Excel Sheet Column Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/excel-sheet-column-number/",
      },
      {
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        title: "Basic Calculator",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/basic-calculator/",
      },
      {
        title: "Maximum Length of a Concatenated String with Unique Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/",
      },
      {
        title: "Wildcard Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/wildcard-matching/",
      },
      {
        title: "Valid Tic-Tac-Toe State",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-tic-tac-toe-state/",
      },
      {
        title: "Boundary of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/boundary-of-binary-tree/",
      },
      {
        title: "Gas Station",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/gas-station/",
      },
      {
        title: "Generate Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/generate-parentheses/",
      },
      {
        title: "Set Matrix Zeroes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/set-matrix-zeroes/",
      },
      {
        title: "Serialize and Deserialize N-ary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/",
      },
      {
        title: "String Compression",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/string-compression/",
      },
      {
        title: "Delete Node in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-node-in-a-bst/",
      },
      {
        title: "Roman to Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/roman-to-integer/",
      },
      {
        title: "Lowest Common Ancestor of a Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
      },
      {
        title: "Binary Tree Zigzag Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
      },
      {
        title: "Word Search II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-search-ii/",
      },
      {
        title: "Populating Next Right Pointers in Each Node II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
      },
      {
        title: "Reverse String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string/",
      },
      {
        title: "Implement Trie (Prefix Tree)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
      },
      {
        title: "Multiply Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/multiply-strings/",
      },
      {
        title: "Inorder Successor in BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/inorder-successor-in-bst/",
      },
      {
        title: "Group Anagrams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-anagrams/",
      },
      {
        title: "Simplify Path",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/simplify-path/",
      },
      {
        title: "Recover Binary Search Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/recover-binary-search-tree/",
      },
      {
        title: "3Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum/",
      },
      {
        title: "Linked List Cycle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        title: "Implement Queue using Stacks",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-queue-using-stacks/",
      },
      {
        title: "Integer to Roman",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/integer-to-roman/",
      },
      {
        title: "Sudoku Solver",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sudoku-solver/",
      },
      {
        title: "Edit Distance",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/edit-distance/",
      },
      {
        title: "Find Median from Data Stream",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-median-from-data-stream/",
      },
      {
        title: "Intersection of Two Linked Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
      },
      {
        title: "Valid Sudoku",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-sudoku/",
      },
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        title: "Reorder List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorder-list/",
      },
      {
        title: "Minimum Window Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-substring/",
      },
      {
        title: "Permutations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations/",
      },
      {
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        title: "Min Stack",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/min-stack/",
      },
      {
        title: "Merge Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        title: "N-Queens",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/n-queens/",
      },
      {
        title: "Binary Search Tree Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-iterator/",
      },
      {
        title: "Restore IP Addresses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/restore-ip-addresses/",
      },
      {
        title: "Exclusive Time of Functions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/exclusive-time-of-functions/",
      },
      {
        title: "Design HashMap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-hashmap/",
      },
      {
        title: "Product of Array Except Self",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
      },
      {
        title: "Max Points on a Line",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/max-points-on-a-line/",
      },
      {
        title: "Word Break",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-break/",
      },
      {
        title: "Next Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-permutation/",
      },
      {
        title: "Rotate List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-list/",
      },
      {
        title: "Rectangle Overlap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rectangle-overlap/",
      },
      {
        title: "Design Search Autocomplete System",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-search-autocomplete-system/",
      },
      {
        title: "Basic Calculator II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/basic-calculator-ii/",
      },
      {
        title: "Word Ladder",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-ladder/",
      },
      {
        title: "Coin Change",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change/",
      },
      {
        title: "Find the Closest Palindrome",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-the-closest-palindrome/",
      },
      {
        title: "Spiral Matrix II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix-ii/",
      },
      {
        title: "Search a 2D Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix/",
      },
      {
        title: "Shuffle an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shuffle-an-array/",
      },
      {
        title: "Majority Element II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/majority-element-ii/",
      },
      {
        title: "Find Minimum in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      },
      {
        title: "Dungeon Game",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/dungeon-game/",
      },
      {
        title: "Reverse Linked List II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-linked-list-ii/",
      },
      {
        title: "Serialize and Deserialize BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/serialize-and-deserialize-bst/",
      },
      {
        title: "Largest Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-number/",
      },
      {
        title: "Longest Consecutive Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-consecutive-sequence/",
      },
      {
        title: "Palindrome Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-linked-list/",
      },
      {
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
      },
      {
        title: "Moving Average from Data Stream",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/moving-average-from-data-stream/",
      },
      {
        title: "Count Primes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-primes/",
      },
      {
        title: "Validate IP Address",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-ip-address/",
      },
      {
        title: "Candy",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/candy/",
      },
      {
        title: "Find the Duplicate Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-duplicate-number/",
      },
      {
        title: "Word Ladder II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-ladder-ii/",
      },
      {
        title: "Clone Graph",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/clone-graph/",
      },
      {
        title: "24 Game",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/24-game/",
      },
      {
        title: "Linked List Cycle II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/linked-list-cycle-ii/",
      },
      {
        title: "Odd Even Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/odd-even-linked-list/",
      },
      {
        title: "Sort List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-list/",
      },
      {
        title: "Implement Stack using Queues",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-stack-using-queues/",
      },
      {
        title: "Move Zeroes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/move-zeroes/",
      },
      {
        title: "Binary Tree Maximum Path Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
      },
      {
        title: "Tag Validator",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/tag-validator/",
      },
      {
        title: "First Missing Positive",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/first-missing-positive/",
      },
      {
        title: "Missing Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/missing-number/",
      },
      {
        title: "Binary Tree Inorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      },
      {
        title: "Maximal Rectangle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximal-rectangle/",
      },
      {
        title: "Minesweeper",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minesweeper/",
      },
      {
        title: "Meeting Rooms",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/meeting-rooms/",
      },
      {
        title: "Frog Jump",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/frog-jump/",
      },
      {
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      },
      {
        title: "Rotate Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rotate-array/",
      },
      {
        title: "The Maze",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-maze/",
      },
      {
        title: "Circular Array Loop",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/circular-array-loop/",
      },
      {
        title: "Insert Delete GetRandom O(1)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
      },
      {
        title: "Largest Rectangle in Histogram",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
      },
      {
        title: "Remove Nth Node From End of List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      },
      {
        title: "Majority Element",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/majority-element/",
      },
      {
        title: "Text Justification",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/text-justification/",
      },
      {
        title: "Max Area of Island",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-area-of-island/",
      },
      {
        title: "Word Search",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-search/",
      },
      {
        title: "Delete Node in a Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
      },
      {
        title: "Decode Ways",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-ways/",
      },
      {
        title: "Maximum Product Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-product-subarray/",
      },
      {
        title: "Longest Valid Parentheses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-valid-parentheses/",
      },
      {
        title: "Container With Most Water",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/container-with-most-water/",
      },
      {
        title: "Game of Life",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/game-of-life/",
      },
      {
        title: "Palindrome Removal",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/palindrome-removal/",
      },
      {
        title: "Sqrt(x)",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sqrtx/",
      },
      {
        title: "Reverse Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-integer/",
      },
      {
        title: "Implement strStr()",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-strstr/",
      },
      {
        title: "Gray Code",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/gray-code/",
      },
      {
        title: "Valid Anagram",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-anagram/",
      },
      {
        title: "Search in a Sorted Array of Unknown Size",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/",
      },
      {
        title: "LFU Cache",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/lfu-cache/",
      },
      {
        title: "Count and Say",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-and-say/",
      },
      {
        title: "Basic Calculator III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/basic-calculator-iii/",
      },
      {
        title: "4 Keys Keyboard",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/4-keys-keyboard/",
      },
      {
        title: "Longest Substring with At Most K Distinct Characters",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
      },
      {
        title: "Kth Smallest Element in a Sorted Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
      },
      {
        title: "Alien Dictionary",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/alien-dictionary/",
      },
      {
        title: "Palindrome Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-number/",
      },
      {
        title: "Design Circular Queue",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-circular-queue/",
      },
      {
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      },
      {
        title: "Design Hit Counter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-hit-counter/",
      },
      {
        title: "Word Break II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-break-ii/",
      },
      {
        title: "Best Time to Buy and Sell Stock III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
      },
      {
        title: "Trim a Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/trim-a-binary-search-tree/",
      },
      {
        title: "Android Unlock Patterns",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/android-unlock-patterns/",
      },
      {
        title: "Balanced Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/balanced-binary-tree/",
      },
      {
        title: "Inorder Successor in BST II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/inorder-successor-in-bst-ii/",
      },
      {
        title: "Implement Rand10() Using Rand7()",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-rand10-using-rand7/",
      },
      {
        title: "Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets/",
      },
      {
        title: "Super Egg Drop",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/super-egg-drop/",
      },
      {
        title: "One Edit Distance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/one-edit-distance/",
      },
      {
        title: "Unique Paths",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-paths/",
      },
      {
        title: "Decode String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-string/",
      },
      {
        title: "Number of 1 Bits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/number-of-1-bits/",
      },
      {
        title: "Find All Duplicates in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
      },
      {
        title: "Course Schedule",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule/",
      },
      {
        title: "Combination Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum/",
      },
      {
        title: "Find Duplicate Subtrees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-duplicate-subtrees/",
      },
      {
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
      },
      {
        title: "Valid Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        title: "Partition List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-list/",
      },
      {
        title: "Knight Probability in Chessboard",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/knight-probability-in-chessboard/",
      },
      {
        title: "Minimum Path Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-path-sum/",
      },
      {
        title: "Design Phone Directory",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-phone-directory/",
      },
      {
        title: "Search in Rotated Sorted Array II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
      },
      {
        title: "Fizz Buzz",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fizz-buzz/",
      },
      {
        title: "Pacific Atlantic Water Flow",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
      },
      {
        title: "Flatten Binary Tree to Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
      },
      {
        title: "Combinations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combinations/",
      },
      {
        title: "Evaluate Reverse Polish Notation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
      },
      {
        title: "Divide Two Integers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/divide-two-integers/",
      },
      {
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/",
      },
      {
        title: "Max Stack",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/max-stack/",
      },
      {
        title: "First Unique Character in a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/first-unique-character-in-a-string/",
      },
      {
        title: "Palindromic Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindromic-substrings/",
      },
      {
        title: "All Nodes Distance K in Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
      },
      {
        title: "Rearrange String k Distance Apart",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/rearrange-string-k-distance-apart/",
      },
      {
        title: "Remove Duplicates from Sorted List II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
      },
      {
        title: "Flood Fill",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/flood-fill/",
      },
      {
        title: "Summary Ranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/summary-ranges/",
      },
      {
        title: "Employee Free Time",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/employee-free-time/",
      },
      {
        title: "Trapping Rain Water II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water-ii/",
      },
      {
        title: "Kth Smallest Element in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      },
      {
        title: "Zigzag Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/zigzag-iterator/",
      },
      {
        title: "Add Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-strings/",
      },
      {
        title: "Subtree of Another Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/subtree-of-another-tree/",
      },
      {
        title: "Pascal's Triangle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/pascals-triangle/",
      },
      {
        title: "Convert Binary Search Tree to Sorted Doubly Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/",
      },
      {
        title: "Print Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/print-binary-tree/",
      },
      {
        title: "Climbing Stairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        title: "Swap For Longest Repeated Character Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/swap-for-longest-repeated-character-substring/",
      },
      {
        title: "Walls and Gates",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/walls-and-gates/",
      },
      {
        title: "Coin Change 2",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change-2/",
      },
      {
        title: "Reverse Pairs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reverse-pairs/",
      },
      {
        title: "Diameter of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/diameter-of-binary-tree/",
      },
      {
        title: "Remove Duplicates from Sorted List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
      },
      {
        title: "Jump Game II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/jump-game-ii/",
      },
      {
        title: "Binary Tree Right Side View",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-right-side-view/",
      },
      {
        title: "Range Sum Query 2D - Immutable",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/range-sum-query-2d-immutable/",
      },
      {
        title: "Palindrome Permutation II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindrome-permutation-ii/",
      },
      {
        title: "Two Sum II - Input array is sorted",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      },
      {
        title: "Reorganize String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorganize-string/",
      },
      {
        title: "All O`one Data Structure",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/all-oone-data-structure/",
      },
      {
        title: "Longest Palindromic Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-subsequence/",
      },
      {
        title: "Closest Binary Search Tree Value",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/closest-binary-search-tree-value/",
      },
      {
        title: "Symmetric Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/symmetric-tree/",
      },
      {
        title: "Reverse Only Letters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-only-letters/",
      },
      {
        title: "Next Greater Element III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-element-iii/",
      },
      {
        title: "Longest Duplicate Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-duplicate-substring/",
      },
      {
        title: "Best Time to Buy and Sell Stock II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
      },
      {
        title: "Largest BST Subtree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/largest-bst-subtree/",
      },
      {
        title: "Convert Sorted Array to Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
      },
      {
        title: "Knight Dialer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/knight-dialer/",
      },
      {
        title: "Shortest Palindrome",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-palindrome/",
      },
      {
        title: "Jump Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game/",
      },
      {
        title: "Binary Tree Vertical Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-vertical-order-traversal/",
      },
      {
        title: "Wiggle Sort",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/wiggle-sort/",
      },
      {
        title: "Top K Frequent Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-words/",
      },
      {
        title: "Partition to K Equal Sum Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
      },
      {
        title: "Palindrome Permutation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-permutation/",
      },
      {
        title: "Find Peak Element",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-peak-element/",
      },
      {
        title: "Substring with Concatenation of All Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
      },
      {
        title: "Pow(x, n)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/powx-n/",
      },
      {
        title: "Find All Numbers Disappeared in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
      },
      {
        title: "Path Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/path-sum/",
      },
      {
        title: "Remove Duplicate Letters",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/remove-duplicate-letters/",
      },
      {
        title: "Arithmetic Slices",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/arithmetic-slices/",
      },
      {
        title: "Find All Anagrams in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
      },
      {
        title: "My Calendar I",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/my-calendar-i/",
      },
      {
        title: "Random Pick with Weight",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/random-pick-with-weight/",
      },
      {
        title: "Diagonal Traverse",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/diagonal-traverse/",
      },
      {
        title: "Factorial Trailing Zeroes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/factorial-trailing-zeroes/",
      },
      {
        title: "Convert a Number to Hexadecimal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-a-number-to-hexadecimal/",
      },
      {
        title: "Check Completeness of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/check-completeness-of-a-binary-tree/",
      },
      {
        title: "Longest Substring with At Most Two Distinct Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/",
      },
      {
        title: "Cousins in Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/cousins-in-binary-tree/",
      },
      {
        title: "Unique Paths II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-paths-ii/",
      },
      {
        title: "Reconstruct Itinerary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reconstruct-itinerary/",
      },
      {
        title: "Day of the Week",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/day-of-the-week/",
      },
      {
        title: "Path Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-ii/",
      },
      {
        title: "Fraction to Recurring Decimal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/fraction-to-recurring-decimal/",
      },
      {
        title: "Integer Replacement",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/integer-replacement/",
      },
      {
        title: "Split Array With Same Average",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/split-array-with-same-average/",
      },
      {
        title: "Longest Common Prefix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-common-prefix/",
      },
      {
        title: "Web Crawler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/web-crawler/",
      },
      {
        title: "Invert Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/invert-binary-tree/",
      },
      {
        title: "Encode N-ary Tree to Binary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/",
      },
      {
        title: "Valid Triangle Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-triangle-number/",
      },
      {
        title: "Minimum Window Subsequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-subsequence/",
      },
      {
        title: "Longest Repeating Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-repeating-substring/",
      },
      {
        title: "Flatten a Multilevel Doubly Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
      },
      {
        title: "Single Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/single-number/",
      },
      {
        title: "Permutation in String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutation-in-string/",
      },
      {
        title: "Rotting Oranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotting-oranges/",
      },
      {
        title: "Valid Number",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/valid-number/",
      },
      {
        title: "Minimum Knight Moves",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-knight-moves/",
      },
      {
        title: "Construct Binary Tree from Inorder and Postorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
      },
      {
        title: "Convert Sorted List to Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
      },
      {
        title: "Ransom Note",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/ransom-note/",
      },
      {
        title: "Maximal Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximal-square/",
      },
      {
        title: "Insertion Sort List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insertion-sort-list/",
      },
      {
        title: "Snakes and Ladders",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/snakes-and-ladders/",
      },
      {
        title: "Find Pivot Index",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-pivot-index/",
      },
      {
        title: "Combination Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-ii/",
      },
      {
        title: "Count Unique Characters of All Substrings of a Given String",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/",
      },
      {
        title: "Unique Binary Search Trees II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-binary-search-trees-ii/",
      },
      {
        title: "Bulb Switcher III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bulb-switcher-iii/",
      },
      {
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
      },
      {
        title: "Russian Doll Envelopes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/russian-doll-envelopes/",
      },
      {
        title: "Interleaving String",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/interleaving-string/",
      },
      {
        title: "Parallel Courses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/parallel-courses/",
      },
      {
        title: "Insert into a Sorted Circular Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/",
      },
      {
        title: "Next Closest Time",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-closest-time/",
      },
      {
        title: "Sum Root to Leaf Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
      },
      {
        title: "Pancake Sorting",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pancake-sorting/",
      },
      {
        title: "Single Element in a Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-element-in-a-sorted-array/",
      },
      {
        title: "Happy Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/happy-number/",
      },
      {
        title: "Intersection of Two Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays/",
      },
      {
        title: "House Robber",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/house-robber/",
      },
      {
        title: "Number of Distinct Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-distinct-islands/",
      },
      {
        title: "4Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/4sum/",
      },
      {
        title: "K Empty Slots",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/k-empty-slots/",
      },
      {
        title: "Count of Smaller Numbers After Self",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
      },
      {
        title: "Combination Sum III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-iii/",
      },
      {
        title: "ZigZag Conversion",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/zigzag-conversion/",
      },
      {
        title: "Longest Increasing Path in a Matrix",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
      },
      {
        title: "Range Sum Query 2D - Mutable",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/range-sum-query-2d-mutable/",
      },
      {
        title: "Triangle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/triangle/",
      },
      {
        title: "Insert Interval",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/insert-interval/",
      },
      {
        title: "Partition Equal Subset Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-equal-subset-sum/",
      },
      {
        title: "Binary Tree Paths",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-paths/",
      },
      {
        title: "Design Bounded Blocking Queue",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-bounded-blocking-queue/",
      },
      {
        title: "Shortest Word Distance",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shortest-word-distance/",
      },
      {
        title: "Fibonacci Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fibonacci-number/",
      },
      {
        title: "Max Chunks To Make Sorted II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/max-chunks-to-make-sorted-ii/",
      },
      {
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
      {
        title: "Insert into a Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
      },
      {
        title: "Flatten Nested List Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-nested-list-iterator/",
      },
      {
        title: "Power of Two",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/power-of-two/",
      },
      {
        title: "Shortest Distance from All Buildings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-distance-from-all-buildings/",
      },
      {
        title: "Continuous Subarray Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/continuous-subarray-sum/",
      },
      {
        title: "Read N Characters Given Read4 II - Call multiple times",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/",
      },
      {
        title: "Isomorphic Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/isomorphic-strings/",
      },
      {
        title: "Binary Tree Level Order Traversal II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
      },
      {
        title: "1-bit and 2-bit Characters",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/1-bit-and-2-bit-characters/",
      },
      {
        title: "Word Pattern",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/word-pattern/",
      },
      {
        title: "Island Perimeter",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/island-perimeter/",
      },
      {
        title: "Maximum Vacation Days",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-vacation-days/",
      },
      {
        title: "Minimum Size Subarray Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
      },
      {
        title: "Course Schedule II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule-ii/",
      },
      {
        title: "Contains Duplicate II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate-ii/",
      },
      {
        title: "Bulls and Cows",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/bulls-and-cows/",
      },
      {
        title: "Repeated DNA Sequences",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/repeated-dna-sequences/",
      },
      {
        title: "Peeking Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/peeking-iterator/",
      },
      {
        title: "Friend Circles",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/friend-circles/",
      },
      {
        title: "Path Sum III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-iii/",
      },
      {
        title: "Sliding Puzzle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-puzzle/",
      },
      {
        title: "Vertical Order Traversal of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
      },
      {
        title: "Guess the Word",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/guess-the-word/",
      },
      {
        title: "Valid Perfect Square",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-perfect-square/",
      },
      {
        title: "Find Duplicate File in System",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-duplicate-file-in-system/",
      },
      {
        title: "Letter Case Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-case-permutation/",
      },
      {
        title: "Maximum Size Subarray Sum Equals k",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/",
      },
      {
        title: "Valid Palindrome II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome-ii/",
      },
      {
        title: "Robot Room Cleaner",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/robot-room-cleaner/",
      },
      {
        title: "Evaluate Division",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-division/",
      },
      {
        title: "Two Sum IV - Input is a BST",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",
      },
      {
        title: "Maximum Width of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-width-of-binary-tree/",
      },
      {
        title: "Count Complete Tree Nodes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-complete-tree-nodes/",
      },
      {
        title: "Accounts Merge",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/accounts-merge/",
      },
      {
        title: "Palindrome Partitioning",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindrome-partitioning/",
      },
      {
        title: "Encode and Decode Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/encode-and-decode-strings/",
      },
      {
        title: "Find K Pairs with Smallest Sums",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
      },
      {
        title: "Distribute Coins in Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/distribute-coins-in-binary-tree/",
      },
      {
        title: "Smallest Range Covering Elements from K Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
      },
      {
        title: "Find And Replace in String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-and-replace-in-string/",
      },
      {
        title: "Water and Jug Problem",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/water-and-jug-problem/",
      },
      {
        title: "Design a Stack With Increment Operation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-a-stack-with-increment-operation/",
      },
      {
        title: "Minimum Area Rectangle",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-area-rectangle/",
      },
      {
        title: "3Sum Closest",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum-closest/",
      },
      {
        title: "Max Chunks To Make Sorted",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-chunks-to-make-sorted/",
      },
      {
        title: "Second Highest Salary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/second-highest-salary/",
      },
      {
        title: "Perfect Squares",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/perfect-squares/",
      },
      {
        title: "Expression Add Operators",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/expression-add-operators/",
      },
      {
        title: "Longest Common Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-common-subsequence/",
      },
      {
        title: "Number of Islands II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-islands-ii/",
      },
      {
        title: "Contains Duplicate",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate/",
      },
      {
        title: "Design Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-linked-list/",
      },
      {
        title: "Shortest Distance in a Plane",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-distance-in-a-plane/",
      },
      {
        title: "Task Scheduler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/task-scheduler/",
      },
      {
        title: "Binary Search",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-search/",
      },
      {
        title: "Backspace String Compare",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/backspace-string-compare/",
      },
      {
        title: "Print in Order",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/print-in-order/",
      },
      {
        title: "Number of Connected Components in an Undirected Graph",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
      },
      {
        title: "Contiguous Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/contiguous-array/",
      },
      {
        title: "Daily Temperatures",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/daily-temperatures/",
      },
      {
        title: "Find Largest Value in Each Tree Row",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-largest-value-in-each-tree-row/",
      },
      {
        title: "Second Minimum Node In a Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/",
      },
      {
        title: "K-diff Pairs in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/k-diff-pairs-in-an-array/",
      },
      {
        title: "K Closest Points to Origin",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-closest-points-to-origin/",
      },
      {
        title: "Construct Binary Search Tree from Preorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
      },
      {
        title: "House Robber II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber-ii/",
      },
      {
        title: "Peak Index in a Mountain Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
      },
      {
        title: "Sparse Matrix Multiplication",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sparse-matrix-multiplication/",
      },
      {
        title: "Cinema Seat Allocation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/cinema-seat-allocation/",
      },
      {
        title: "Queue Reconstruction by Height",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/queue-reconstruction-by-height/",
      },
      {
        title: "Find First and Last Position of Element in Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      },
      {
        title: "Find K Closest Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-closest-elements/",
      },
      {
        title: "Subsets II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets-ii/",
      },
      {
        title: "Binary Search Tree to Greater Sum Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/",
      },
      {
        title: "Is Graph Bipartite?",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/is-graph-bipartite/",
      },
      {
        title: "Contains Duplicate III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/contains-duplicate-iii/",
      },
      {
        title: "Maximum Frequency Stack",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-frequency-stack/",
      },
      {
        title: "Insert Delete GetRandom O(1) - Duplicates allowed",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/",
      },
      {
        title: "Print Words Vertically",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/print-words-vertically/",
      },
      {
        title: "Third Maximum Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/third-maximum-number/",
      },
      {
        title: "Print Zero Even Odd",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/print-zero-even-odd/",
      },
      {
        title: "Sum of Subarray Minimums",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sum-of-subarray-minimums/",
      },
      {
        title: "Most Common Word",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/most-common-word/",
      },
      {
        title: "Paint House",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/paint-house/",
      },
      {
        title: "Remove Element",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-element/",
      },
      {
        title: "Kth Largest Element in a Stream",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
      },
      {
        title: "Sort Array By Parity",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sort-array-by-parity/",
      },
      {
        title: "First Bad Version",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/first-bad-version/",
      },
      {
        title: "Logger Rate Limiter",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/logger-rate-limiter/",
      },
      {
        title: "Maximum Average Subarray I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-average-subarray-i/",
      },
      {
        title: "Unique Binary Search Trees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-binary-search-trees/",
      },
      {
        title: "Permutation Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/permutation-sequence/",
      },
      {
        title: "Path In Zigzag Labelled Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/",
      },
      {
        title: "Non-overlapping Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/non-overlapping-intervals/",
      },
      {
        title: "Sliding Window Median",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-median/",
      },
      {
        title: "Letter Tile Possibilities",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-tile-possibilities/",
      },
      {
        title: "Next Greater Element II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-element-ii/",
      },
      {
        title: "Binary Tree Preorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
      },
      {
        title: "Implement Magic Dictionary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-magic-dictionary/",
      },
      {
        title: "Longest Arithmetic Sequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-arithmetic-sequence/",
      },
      {
        title: "Binary Tree Coloring Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-coloring-game/",
      },
      {
        title: "Find N Unique Integers Sum up to Zero",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/",
      },
      {
        title: "Intersection of Two Arrays II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
      },
      {
        title: "Concatenated Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/concatenated-words/",
      },
      {
        title: "Rotate String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rotate-string/",
      },
      {
        title: "Permutations II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations-ii/",
      },
      {
        title: "Course Schedule III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/course-schedule-iii/",
      },
      {
        title: "Minimum Depth of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
      },
      {
        title: "Same Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/same-tree/",
      },
      {
        title: "Flipping an Image",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/flipping-an-image/",
      },
      {
        title: "Reveal Cards In Increasing Order",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reveal-cards-in-increasing-order/",
      },
      {
        title: "Reverse String II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string-ii/",
      },
      {
        title: "Asteroid Collision",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/asteroid-collision/",
      },
      {
        title: "Meeting Scheduler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/meeting-scheduler/",
      },
      {
        title: "Shortest Common Supersequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-common-supersequence/",
      },
      {
        title: "Range Sum Query - Immutable",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/range-sum-query-immutable/",
      },
      {
        title: "Time Based Key-Value Store",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/time-based-key-value-store/",
      },
      {
        title: "Add Binary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-binary/",
      },
      {
        title: "Repeated Substring Pattern",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/repeated-substring-pattern/",
      },
      {
        title: "Longest Mountain in Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-mountain-in-array/",
      },
      {
        title: "Middle of the Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/middle-of-the-linked-list/",
      },
      {
        title: "Squares of a Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
      },
      {
        title: "Maximum Swap",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-swap/",
      },
      {
        title: "Target Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/target-sum/",
      },
      {
        title: "Range Sum of BST",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/range-sum-of-bst/",
      },
      {
        title: "Max Consecutive Ones III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-consecutive-ones-iii/",
      },
      {
        title: "Add and Search Word - Data structure design",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
      },
      {
        title: "Search Insert Position",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/search-insert-position/",
      },
      {
        title: "Rotated Digits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rotated-digits/",
      },
      {
        title: "Leaf-Similar Trees",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/leaf-similar-trees/",
      },
      {
        title: "Uncommon Words from Two Sentences",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/uncommon-words-from-two-sentences/",
      },
      {
        title: "Shortest Bridge",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-bridge/",
      },
      {
        title: "2 Keys Keyboard",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/2-keys-keyboard/",
      },
      {
        title: "Unique Email Addresses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/unique-email-addresses/",
      },
      {
        title: "Max Consecutive Ones",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/max-consecutive-ones/",
      },
      {
        title: "Add Digits",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/add-digits/",
      },
      {
        title: "Remove Linked List Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-linked-list-elements/",
      },
      {
        title: "Shortest Path in Binary Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
      },
      {
        title: "Transpose Matrix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/transpose-matrix/",
      },
      {
        title: "Verifying an Alien Dictionary",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/verifying-an-alien-dictionary/",
      },
      {
        title: "Distribute Candies",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/distribute-candies/",
      },
      {
        title: "Critical Connections in a Network",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/critical-connections-in-a-network/",
      },
      {
        title: "Minimum Number of Arrows to Burst Balloons",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
      },
      {
        title: "Next Greater Element I",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/next-greater-element-i/",
      },
      {
        title: "Counting Bits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/counting-bits/",
      },
      {
        title: "Angle Between Hands of a Clock",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/angle-between-hands-of-a-clock/",
      },
      {
        title: "Next Greater Node In Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-node-in-linked-list/",
      },
      {
        title: "Relative Sort Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/relative-sort-array/",
      },
      {
        title: "Longest Continuous Increasing Subsequence",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-continuous-increasing-subsequence/",
      },
      {
        title: "Number of Dice Rolls With Target Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/",
      },
      {
        title: "Cheapest Flights Within K Stops",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
      },
      {
        title: "Network Delay Time",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/network-delay-time/",
      },
      {
        title: "Minimum Remove to Make Valid Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/",
      },
      {
        title: "Shuffle the Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shuffle-the-array/",
      },
      {
        title: "Find Bottom Left Tree Value",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-bottom-left-tree-value/",
      },
      {
        title: "Design Excel Sum Formula",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-excel-sum-formula/",
      },
      {
        title: "Maximum Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-binary-tree/",
      },
      {
        title: "Bulb Switcher III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bulb-switcher-iii/",
      },
      {
        title: "Minimum Number of Refueling Stops",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-number-of-refueling-stops/",
      },
      {
        title: "Possible Bipartition",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/possible-bipartition/",
      },
      {
        title: "Online Stock Span",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/online-stock-span/",
      },
      {
        title: "Equal Rational Numbers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/equal-rational-numbers/",
      },
      {
        title: "Clumsy Factorial",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/clumsy-factorial/",
      },
      {
        title: "Partition Array Into Three Parts With Equal Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/",
      },
      {
        title: "Previous Permutation With One Swap",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/previous-permutation-with-one-swap/",
      },
      {
        title: "Find Smallest Common Element in All Rows",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-smallest-common-element-in-all-rows/",
      },
      {
        title: "Statistics from a Large Sample",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/statistics-from-a-large-sample/",
      },
      {
        title: "Delete Tree Nodes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-tree-nodes/",
      },
      {
        title: "Maximum of Absolute Value Expression",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-of-absolute-value-expression/",
      },
      {
        title: "Design Skiplist",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-skiplist/",
      },
      {
        title: "Find the Start and End Number of Continuous Ranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-start-and-end-number-of-continuous-ranges/",
      },
      {
        title: "Jump Game III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game-iii/",
      },
      {
        title: "Minimum Flips to Make a OR b Equal to c",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/",
      },
      {
        title: "Maximum Product of Splitted Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/",
      },
      {
        title: "Find the Longest Substring Containing Vowels in Even Counts",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/",
      },
      {
        title: "Get the Second Most Recent Activity",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/get-the-second-most-recent-activity/",
      },
      {
        title: "Find Lucky Integer in an Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-lucky-integer-in-an-array/",
      },
      {
        title:
          "The k-th Lexicographical String of All Happy Strings of Length n",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/",
      },
      {
        title: "Reformat The String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reformat-the-string/",
      },
      {
        title: "Count Good Nodes in Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
      },
      {
        title: "Max Dot Product of Two Subsequences",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/max-dot-product-of-two-subsequences/",
      },
      {
        title: "Find All The Lonely Nodes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-all-the-lonely-nodes/",
      },
      {
        title: "Stone Game IV",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/stone-game-iv/",
      },
      {
        title: "Delete N Nodes After M Nodes of a Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/",
      },
      {
        title: "Count Odd Numbers in an Interval Range",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/",
      },
      {
        title: "Water Bottles",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/water-bottles/",
      },
      {
        title: "Kth Missing Positive Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/kth-missing-positive-number/",
      },
      {
        title: "Shuffle String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shuffle-string/",
      },
    ],
  },
  {
    name: "Uber",
    questions: [
      {
        title: "Construct Quad Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-quad-tree/",
      },
      {
        title: "Word Pattern II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-pattern-ii/",
      },
      {
        title: "Minesweeper",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minesweeper/",
      },
      {
        title: "Number of Islands II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/number-of-islands-ii/",
      },
      {
        title: "Cherry Pickup",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/cherry-pickup/",
      },
      {
        title: "Set Intersection Size At Least Two",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/set-intersection-size-at-least-two/",
      },
      {
        title: "Reconstruct Itinerary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reconstruct-itinerary/",
      },
      {
        title: "Flatten Nested List Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-nested-list-iterator/",
      },
      {
        title: "Text Justification",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/text-justification/",
      },
      {
        title: "Optimal Account Balancing",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/optimal-account-balancing/",
      },
      {
        title: "LRU Cache",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lru-cache/",
      },
      {
        title: "Trips and Users",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trips-and-users/",
      },
      {
        title: "Merge Intervals",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        title: "Palindrome Permutation II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindrome-permutation-ii/",
      },
      {
        title: "Valid Sudoku",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-sudoku/",
      },
      {
        title: "Print Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/print-binary-tree/",
      },
      {
        title: "Basic Calculator II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/basic-calculator-ii/",
      },
      {
        title: "Trapping Rain Water",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water/",
      },
      {
        title: "Number of Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        title: "Interval List Intersections",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/interval-list-intersections/",
      },
      {
        title: "Serialize and Deserialize Binary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      },
      {
        title: "Meeting Rooms II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/meeting-rooms-ii/",
      },
      {
        title: "Two Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        title: "Serialize and Deserialize N-ary Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/",
      },
      {
        title: "Insert Delete GetRandom O(1)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
      },
      {
        title: "Sliding Puzzle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-puzzle/",
      },
      {
        title: "Logger Rate Limiter",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/logger-rate-limiter/",
      },
      {
        title: "Basic Calculator III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/basic-calculator-iii/",
      },
      {
        title: "Fraction to Recurring Decimal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/fraction-to-recurring-decimal/",
      },
      {
        title: "Reaching Points",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reaching-points/",
      },
      {
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
      },
      {
        title: "Basic Calculator",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/basic-calculator/",
      },
      {
        title: "Group Anagrams",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-anagrams/",
      },
      {
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      },
      {
        title: "Word Search II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-search-ii/",
      },
      {
        title: "Design Search Autocomplete System",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/design-search-autocomplete-system/",
      },
      {
        title: "Bomb Enemy",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/bomb-enemy/",
      },
      {
        title: "Word Break",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-break/",
      },
      {
        title: "Walls and Gates",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/walls-and-gates/",
      },
      {
        title: "Tag Validator",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/tag-validator/",
      },
      {
        title: "Palindrome Pairs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/palindrome-pairs/",
      },
      {
        title: "Exclusive Time of Functions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/exclusive-time-of-functions/",
      },
      {
        title: "Longest Consecutive Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-consecutive-sequence/",
      },
      {
        title: "Insert Delete GetRandom O(1) - Duplicates allowed",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/",
      },
      {
        title: "Find First and Last Position of Element in Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      },
      {
        title: "Water and Jug Problem",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/water-and-jug-problem/",
      },
      {
        title: "Alien Dictionary",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/alien-dictionary/",
      },
      {
        title: "Factor Combinations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/factor-combinations/",
      },
      {
        title: "Random Pick with Weight",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/random-pick-with-weight/",
      },
      {
        title: "Max Points on a Line",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/max-points-on-a-line/",
      },
      {
        title: "Regular Expression Matching",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/regular-expression-matching/",
      },
      {
        title: "Minimum Window Substring",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/minimum-window-substring/",
      },
      {
        title: "24 Game",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/24-game/",
      },
      {
        title: "Longest Increasing Path in a Matrix",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
      },
      {
        title: "Recover Binary Search Tree",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/recover-binary-search-tree/",
      },
      {
        title: "Solve the Equation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/solve-the-equation/",
      },
      {
        title: "Connecting Cities With Minimum Cost",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/connecting-cities-with-minimum-cost/",
      },
      {
        title: "Generate Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/generate-parentheses/",
      },
      {
        title: "Add Two Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers/",
      },
      {
        title: "Binary Search Tree Iterator",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-iterator/",
      },
      {
        title: "Insert Interval",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/insert-interval/",
      },
      {
        title: "Word Ladder II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-ladder-ii/",
      },
      {
        title: "Longest Valid Parentheses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-valid-parentheses/",
      },
      {
        title: "Flatten 2D Vector",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-2d-vector/",
      },
      {
        title: "Clone Graph",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/clone-graph/",
      },
      {
        title: "Encode and Decode TinyURL",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/encode-and-decode-tinyurl/",
      },
      {
        title: "Word Ladder",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-ladder/",
      },
      {
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
      {
        title: "Integer to English Words",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/integer-to-english-words/",
      },
      {
        title: "Shortest Word Distance II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-word-distance-ii/",
      },
      {
        title: "Stamping The Sequence",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/stamping-the-sequence/",
      },
      {
        title: "The Skyline Problem",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/the-skyline-problem/",
      },
      {
        title: "Spiral Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix/",
      },
      {
        title: "Merge k Sorted Lists",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        title: "Longest Absolute File Path",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-absolute-file-path/",
      },
      {
        title: "Sudoku Solver",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/sudoku-solver/",
      },
      {
        title: "3Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum/",
      },
      {
        title: "Implement Trie (Prefix Tree)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
      },
      {
        title: "Find K Closest Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-closest-elements/",
      },
      {
        title: "Read N Characters Given Read4 II - Call multiple times",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/",
      },
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        title: "Word Abbreviation",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-abbreviation/",
      },
      {
        title: "Decode Ways",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/decode-ways/",
      },
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        title: "Word Search",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/word-search/",
      },
      {
        title: "Kth Smallest Number in Multiplication Table",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/",
      },
      {
        title: "Maximal Rectangle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximal-rectangle/",
      },
      {
        title: "Design Snake Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-snake-game/",
      },
      {
        title: "Maximal Square",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximal-square/",
      },
      {
        title: "Course Schedule",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule/",
      },
      {
        title: "Moving Average from Data Stream",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/moving-average-from-data-stream/",
      },
      {
        title: "Subtract the Product and Sum of Digits of an Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/",
      },
      {
        title: "Game of Life",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/game-of-life/",
      },
      {
        title: "Remove Invalid Parentheses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/remove-invalid-parentheses/",
      },
      {
        title: "Design Hit Counter",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-hit-counter/",
      },
      {
        title: "All Nodes Distance K in Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
      },
      {
        title: "Interleaving String",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/interleaving-string/",
      },
      {
        title: "Shortest Word Distance",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shortest-word-distance/",
      },
      {
        title: "Surrounded Regions",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/surrounded-regions/",
      },
      {
        title: "Maximum Vacation Days",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-vacation-days/",
      },
      {
        title: "Maximum Subarray",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        title: "Design Bounded Blocking Queue",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-bounded-blocking-queue/",
      },
      {
        title: "Combination Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum/",
      },
      {
        title: "Expression Add Operators",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/expression-add-operators/",
      },
      {
        title: "Perfect Squares",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/perfect-squares/",
      },
      {
        title: "Student Attendance Record II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/student-attendance-record-ii/",
      },
      {
        title: "Employee Free Time",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/employee-free-time/",
      },
      {
        title: "Bus Routes",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/bus-routes/",
      },
      {
        title: "Split Array With Same Average",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/split-array-with-same-average/",
      },
      {
        title: "Maximum Frequency Stack",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/maximum-frequency-stack/",
      },
      {
        title: "Reverse Pairs",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/reverse-pairs/",
      },
      {
        title: "Evaluate Division",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-division/",
      },
      {
        title: "Product of Array Except Self",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
      },
      {
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        title: "Find Median from Data Stream",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-median-from-data-stream/",
      },
      {
        title: "Container With Most Water",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/container-with-most-water/",
      },
      {
        title: "01 Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/01-matrix/",
      },
      {
        title: "Count of Smaller Numbers After Self",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
      },
      {
        title: "Palindrome Partitioning",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindrome-partitioning/",
      },
      {
        title: "Sparse Matrix Multiplication",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sparse-matrix-multiplication/",
      },
      {
        title: "Search a 2D Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix/",
      },
      {
        title: "N-Queens",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/n-queens/",
      },
      {
        title: "One Edit Distance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/one-edit-distance/",
      },
      {
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        title: "Sort Characters By Frequency",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-characters-by-frequency/",
      },
      {
        title: "Parallel Courses",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/parallel-courses/",
      },
      {
        title: "Falling Squares",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/falling-squares/",
      },
      {
        title: "Pancake Sorting",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/pancake-sorting/",
      },
      {
        title: "Design Tic-Tac-Toe",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/design-tic-tac-toe/",
      },
      {
        title: "Word Pattern",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/word-pattern/",
      },
      {
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        title: "All O`one Data Structure",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/all-oone-data-structure/",
      },
      {
        title: "Squares of a Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
      },
      {
        title: "Roman to Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/roman-to-integer/",
      },
      {
        title: "The Maze",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/the-maze/",
      },
      {
        title: "Copy List with Random Pointer",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
      },
      {
        title: "Find Duplicate Subtrees",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-duplicate-subtrees/",
      },
      {
        title: "Spiral Matrix II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix-ii/",
      },
      {
        title: "Strong Password Checker",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/strong-password-checker/",
      },
      {
        title: "Add Two Numbers II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers-ii/",
      },
      {
        title: "Permutations",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations/",
      },
      {
        title: "First Missing Positive",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/first-missing-positive/",
      },
      {
        title: "Multiply Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/multiply-strings/",
      },
      {
        title: "Shortest Bridge",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-bridge/",
      },
      {
        title: "Delete Node in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-node-in-a-bst/",
      },
      {
        title: "Flood Fill",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/flood-fill/",
      },
      {
        title: "Array of Doubled Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/array-of-doubled-pairs/",
      },
      {
        title: "Word Break II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-break-ii/",
      },
      {
        title: "Next Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-permutation/",
      },
      {
        title: "Reorganize String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reorganize-string/",
      },
      {
        title: "Move Zeroes",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/move-zeroes/",
      },
      {
        title: "Number of Distinct Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-distinct-islands/",
      },
      {
        title: "Reverse Words in a String II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/reverse-words-in-a-string-ii/",
      },
      {
        title: "Serialize and Deserialize BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/serialize-and-deserialize-bst/",
      },
      {
        title: "Find All Anagrams in a String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
      },
      {
        title: "Coin Change 2",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change-2/",
      },
      {
        title: "Predict the Winner",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/predict-the-winner/",
      },
      {
        title: "Candy",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/candy/",
      },
      {
        title: "Swap Nodes in Pairs",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/swap-nodes-in-pairs/",
      },
      {
        title: "Palindrome Partitioning III",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/palindrome-partitioning-iii/",
      },
      {
        title: "Permutation in String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutation-in-string/",
      },
      {
        title: "House Robber",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/house-robber/",
      },
      {
        title: "Sqrt(x)",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/sqrtx/",
      },
      {
        title: "Sort Colors",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-colors/",
      },
      {
        title: "Group Shifted Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/group-shifted-strings/",
      },
      {
        title: "Add and Search Word - Data structure design",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
      },
      {
        title: "Binary Tree Maximum Path Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
      },
      {
        title: "Distribute Coins in Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/distribute-coins-in-binary-tree/",
      },
      {
        title: "Remove Comments",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-comments/",
      },
      {
        title: "Regions Cut By Slashes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/regions-cut-by-slashes/",
      },
      {
        title: "Design HashMap",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/design-hashmap/",
      },
      {
        title: "Max Area of Island",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-area-of-island/",
      },
      {
        title: "Subsets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets/",
      },
      {
        title: "Course Schedule II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule-ii/",
      },
      {
        title: "Shortest Distance from All Buildings",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/shortest-distance-from-all-buildings/",
      },
      {
        title: "Combination Sum II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum-ii/",
      },
      {
        title: "Longest Substring with At Least K Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/",
      },
      {
        title: "Max Chunks To Make Sorted",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/max-chunks-to-make-sorted/",
      },
      {
        title: "Valid Anagram",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-anagram/",
      },
      {
        title: "Exam Room",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/exam-room/",
      },
      {
        title: "Longest Substring with At Most K Distinct Characters",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
      },
      {
        title: "Coin Change",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/coin-change/",
      },
      {
        title: "Verify Preorder Sequence in Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/",
      },
      {
        title: "Time Based Key-Value Store",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/time-based-key-value-store/",
      },
      {
        title: "Pascal's Triangle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/pascals-triangle/",
      },
      {
        title: "Binary Tree Cameras",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-cameras/",
      },
      {
        title: "Lowest Common Ancestor of a Binary Search Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
      },
      {
        title: "Task Scheduler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/task-scheduler/",
      },
      {
        title: "Reverse Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        title: "Flatten a Multilevel Doubly Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
      },
      {
        title: "Kth Smallest Element in a BST",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      },
      {
        title: "Summary Ranges",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/summary-ranges/",
      },
      {
        title: "Palindromic Substrings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindromic-substrings/",
      },
      {
        title: "LFU Cache",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/lfu-cache/",
      },
      {
        title: "ZigZag Conversion",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/zigzag-conversion/",
      },
      {
        title: "Edit Distance",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/edit-distance/",
      },
      {
        title: "Climbing Stairs",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        title: "3Sum Closest",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/3sum-closest/",
      },
      {
        title: "Majority Element II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/majority-element-ii/",
      },
      {
        title: "Min Stack",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/min-stack/",
      },
      {
        title: "Construct Binary Tree from Preorder and Postorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/",
      },
      {
        title: "House Robber III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/house-robber-iii/",
      },
      {
        title: "Perfect Rectangle",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/perfect-rectangle/",
      },
      {
        title: "Symmetric Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/symmetric-tree/",
      },
      {
        title: "New 21 Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/new-21-game/",
      },
      {
        title: "Open the Lock",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/open-the-lock/",
      },
      {
        title: "Making A Large Island",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/making-a-large-island/",
      },
      {
        title: "Most Profit Assigning Work",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/most-profit-assigning-work/",
      },
      {
        title: "Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
      },
      {
        title: "Palindrome Permutation",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-permutation/",
      },
      {
        title: "Unique Paths",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/unique-paths/",
      },
      {
        title: "Maximum Sum Circular Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-sum-circular-subarray/",
      },
      {
        title: "Top K Frequent Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-words/",
      },
      {
        title: "Reverse Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-integer/",
      },
      {
        title: "Evaluate Reverse Polish Notation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
      },
      {
        title: "Find the Closest Palindrome",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-the-closest-palindrome/",
      },
      {
        title: "Snakes and Ladders",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/snakes-and-ladders/",
      },
      {
        title: "Maximum Length of Pair Chain",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-length-of-pair-chain/",
      },
      {
        title: "Wiggle Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/wiggle-subsequence/",
      },
      {
        title: "Best Time to Buy and Sell Stock II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
      },
      {
        title: "Top K Frequent Elements",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
      },
      {
        title: "Jump Game",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game/",
      },
      {
        title: "Kth Largest Element in an Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      },
      {
        title: "Validate IP Address",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-ip-address/",
      },
      {
        title: "Partition Equal Subset Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/partition-equal-subset-sum/",
      },
      {
        title: "String to Integer (atoi)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/string-to-integer-atoi/",
      },
      {
        title: "Path Sum III",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/path-sum-iii/",
      },
      {
        title: "Find Minimum in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      },
      {
        title: "Minimum Path Sum",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-path-sum/",
      },
      {
        title: "Kth Smallest Element in a Sorted Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
      },
      {
        title: "K Closest Points to Origin",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/k-closest-points-to-origin/",
      },
      {
        title: "Capacity To Ship Packages Within D Days",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
      },
      {
        title: "Find the Celebrity",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-celebrity/",
      },
      {
        title: "Binary Tree Longest Consecutive Sequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/",
      },
      {
        title: "Increasing Triplet Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/increasing-triplet-subsequence/",
      },
      {
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/",
      },
      {
        title: "Rotate Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/rotate-array/",
      },
      {
        title: "Remove Zero Sum Consecutive Nodes from Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/",
      },
      {
        title: "Merge Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-sorted-array/",
      },
      {
        title: "Permutations II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations-ii/",
      },
      {
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        title: "Binary Search Tree to Greater Sum Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/",
      },
      {
        title: "Find Peak Element",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-peak-element/",
      },
      {
        title: "Minimum Cost For Tickets",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-cost-for-tickets/",
      },
      {
        title: "Meeting Scheduler",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/meeting-scheduler/",
      },
      {
        title: "Consecutive Numbers Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/consecutive-numbers-sum/",
      },
      {
        title: "Human Traffic of Stadium",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/human-traffic-of-stadium/",
      },
      {
        title: "Custom Sort String",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/custom-sort-string/",
      },
      {
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
      },
      {
        title: "Replace Words",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/replace-words/",
      },
      {
        title: "Delete and Earn",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/delete-and-earn/",
      },
      {
        title: "Reverse String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string/",
      },
      {
        title: "Next Closest Time",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-closest-time/",
      },
      {
        title: "Binary Tree Right Side View",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-right-side-view/",
      },
      {
        title: "Random Pick Index",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/random-pick-index/",
      },
      {
        title: "Friend Circles",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/friend-circles/",
      },
      {
        title: "Next Greater Node In Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-greater-node-in-linked-list/",
      },
      {
        title: "Find the Distance Value Between Two Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-distance-value-between-two-arrays/",
      },
      {
        title: "Maximum Swap",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-swap/",
      },
      {
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        title: "Rotate Image",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-image/",
      },
      {
        title: "Implement Queue using Stacks",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/implement-queue-using-stacks/",
      },
      {
        title: "Counting Bits",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/counting-bits/",
      },
      {
        title: "Valid Triangle Number",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/valid-triangle-number/",
      },
      {
        title: "Flatten Binary Tree to Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
      },
      {
        title: "Daily Temperatures",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/daily-temperatures/",
      },
      {
        title: "Plus One",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/plus-one/",
      },
      {
        title: "Subarrays with K Different Integers",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/subarrays-with-k-different-integers/",
      },
      {
        title: "My Calendar I",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/my-calendar-i/",
      },
      {
        title: "Valid Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        title: "Maximum Product Subarray",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-product-subarray/",
      },
      {
        title: "Nth Highest Salary",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/nth-highest-salary/",
      },
      {
        title: "Snapshot Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/snapshot-array/",
      },
      {
        title: "Shortest Path in Binary Matrix",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
      },
      {
        title: "Nested List Weight Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/nested-list-weight-sum/",
      },
      {
        title: "Second Minimum Node In a Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/",
      },
      {
        title: "Ugly Number II",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/ugly-number-ii/",
      },
      {
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
      {
        title: "Convert Binary Search Tree to Sorted Doubly Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/",
      },
      {
        title: "Maximum Width of Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-width-of-binary-tree/",
      },
      {
        title: "Backspace String Compare",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/backspace-string-compare/",
      },
      {
        title: "Pow(x, n)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/powx-n/",
      },
      {
        title: "First Bad Version",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/first-bad-version/",
      },
      {
        title: "Jump Game II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/jump-game-ii/",
      },
      {
        title: "Intersection of Two Arrays II",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
      },
      {
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      },
      {
        title: "Bulls and Cows",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/bulls-and-cows/",
      },
      {
        title: "Longest Palindromic Subsequence",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-palindromic-subsequence/",
      },
      {
        title: "Happy Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/happy-number/",
      },
      {
        title: "Shortest Unsorted Continuous Subarray",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/shortest-unsorted-continuous-subarray/",
      },
      {
        title: "Find Minimum in Rotated Sorted Array II",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/",
      },
      {
        title: "Peak Index in a Mountain Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
      },
      {
        title: "Valid Mountain Array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-mountain-array/",
      },
      {
        title: "Binary Tree Inorder Traversal",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      },
      {
        title: "Binary Tree Postorder Traversal",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
      },
      {
        title: "Intersection of Two Arrays",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-arrays/",
      },
      {
        title: "Remove Linked List Elements",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-linked-list-elements/",
      },
      {
        title: "Employee Importance",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/employee-importance/",
      },
      {
        title: "Excel Sheet Column Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/excel-sheet-column-number/",
      },
      {
        title: "Find K Pairs with Smallest Sums",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
      },
      {
        title: "Asteroid Collision",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/asteroid-collision/",
      },
      {
        title: "Random Pick with Blacklist",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/random-pick-with-blacklist/",
      },
      {
        title: "Fixed Point",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/fixed-point/",
      },
      {
        title: "Minimum Score Triangulation of Polygon",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/minimum-score-triangulation-of-polygon/",
      },
      {
        title:
          "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",
      },
      {
        title: "Construct K Palindrome Strings",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-k-palindrome-strings/",
      },
      {
        title: "Course Schedule IV",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule-iv/",
      },
    ],
  },
];

const resetDSA360 = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // 🔄 Delete the existing 'Interview' document
    await Sheet.deleteOne({ name: "Interview" });
    console.log("🗑️ Deleted existing 'Interview' document");

    // ➕ Insert new 'Interview' document with updated topics
    await Sheet.create({
      name: "Interview",
      topics: newTopics,
    });
    console.log("✅ Inserted new 'Interview' document with updated topics");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error while resetting Interview data:", error);
    process.exit(1);
  }
};

resetDSA360();
