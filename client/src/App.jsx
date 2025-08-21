import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProgressProvider } from "./context/ProgressContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import SheetsPage from "./pages/SheetsPage";
import SheetPage from "./pages/SheetPage";
import ComputerNetworks from "./pages/ComputerNetworks";
import OperatingSystems from "./pages/OperatingSystems";
import DatabaseManagementSystems from "./pages/DatabaseManagementSystems";
import ObjectOrientedProgramming from "./pages/ObjectOrientedProgramming";
import MockTests from "./pages/MockTests";
import MockTest from "./pages/MockTest";
import AiDoubtSolver from "./pages/AiDoubtSolver";
import Roadmap from "./pages/Roadmap";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sheets" element={<SheetsPage />} />
                <Route
                  path="/computer-networks"
                  element={<ComputerNetworks />}
                />
                <Route
                  path="/operating-systems"
                  element={<OperatingSystems />}
                />
                <Route
                  path="/database-management-systems"
                  element={<DatabaseManagementSystems />}
                />
                <Route path="/oops" element={<ObjectOrientedProgramming />} />
                <Route path="/ai-doubt-solver" element={<AiDoubtSolver />} />
                <Route path="/mock-test" element={<MockTests />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route
                  path="/mock-test/:testId/:setNumber"
                  element={<MockTest />}
                />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/sheet/:sheetName"
                  element={
                    <ProtectedRoute>
                      <SheetPage />
                    </ProtectedRoute>
                  }
                />
                {/* 404 Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ProgressProvider>
    </AuthProvider>
  );
}

export default App;
