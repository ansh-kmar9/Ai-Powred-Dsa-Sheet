import React, { createContext, useContext, useReducer } from "react";
import { progressAPI } from "../utils/api";

const ProgressContext = createContext();

const progressReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_OVERALL_PROGRESS":
      return { ...state, overallProgress: action.payload, loading: false };
    case "SET_SHEET_PROGRESS":
      return {
        ...state,
        sheetProgress: {
          ...state.sheetProgress,
          [action.sheetName]: action.payload,
        },
        loading: false,
      };
    case "UPDATE_QUESTION_STATUS":
      const { sheetName, questionId, isSolved, solvedCount } = action.payload;

      // Handle case where sheet progress doesn't exist yet
      const currentSheetProgress = state.sheetProgress[sheetName] || {
        solvedCount: 0,
        questions: [],
      };

      // Update or add the question in the progress
      const updatedQuestions = currentSheetProgress.questions || [];
      const existingIndex = updatedQuestions.findIndex(
        (q) => q.questionId.toString() === questionId.toString()
      );

      let newQuestions;
      if (existingIndex >= 0) {
        // Update existing question
        newQuestions = updatedQuestions.map((q, index) =>
          index === existingIndex
            ? { ...q, isSolved, solvedAt: isSolved ? new Date() : null }
            : q
        );
      } else {
        // Add new question if it doesn't exist
        newQuestions = [
          ...updatedQuestions,
          {
            questionId,
            isSolved,
            solvedAt: isSolved ? new Date() : null,
          },
        ];
      }

      return {
        ...state,
        sheetProgress: {
          ...state.sheetProgress,
          [sheetName]: {
            ...currentSheetProgress,
            solvedCount,
            questions: newQuestions,
          },
        },
        overallProgress: {
          ...state.overallProgress,
          [sheetName]: {
            ...state.overallProgress[sheetName],
            solved: solvedCount,
          },
        },
      };
    case "CLEAR_PROGRESS":
      return { overallProgress: {}, sheetProgress: {}, loading: false };
    default:
      return state;
  }
};

const initialState = {
  overallProgress: {},
  sheetProgress: {},
  loading: false,
};

export const ProgressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(progressReducer, initialState);

  const fetchOverallProgress = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const response = await progressAPI.getOverallProgress();
      dispatch({
        type: "SET_OVERALL_PROGRESS",
        payload: response.data.progressSummary,
      });
    } catch (error) {
      console.error("Error fetching overall progress:", error);
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const fetchSheetProgress = async (sheetName) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const response = await progressAPI.getSheetProgress(sheetName);
      dispatch({
        type: "SET_SHEET_PROGRESS",
        sheetName,
        payload: response.data.progress,
      });
    } catch (error) {
      console.error("Error fetching sheet progress:", error);
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const toggleQuestionStatus = async (sheetName, questionId) => {
    try {
      const response = await progressAPI.toggleQuestionStatus(
        sheetName,
        questionId
      );
      dispatch({
        type: "UPDATE_QUESTION_STATUS",
        payload: {
          sheetName,
          questionId,
          isSolved: response.data.isSolved,
          solvedCount: response.data.solvedCount,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error toggling question status:", error);
      throw error;
    }
  };

  const resetSheetProgress = async (sheetName) => {
    try {
      await progressAPI.resetSheetProgress(sheetName);
      dispatch({
        type: "SET_SHEET_PROGRESS",
        sheetName,
        payload: { solvedCount: 0, questions: [] },
      });
      // Refresh overall progress
      fetchOverallProgress();
    } catch (error) {
      console.error("Error resetting sheet progress:", error);
      throw error;
    }
  };

  const clearProgress = () => {
    dispatch({ type: "CLEAR_PROGRESS" });
  };

  const value = {
    ...state,
    fetchOverallProgress,
    fetchSheetProgress,
    toggleQuestionStatus,
    resetSheetProgress,
    clearProgress,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};
