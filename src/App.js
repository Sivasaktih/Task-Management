import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"; // Import the Login component
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard"; // Placeholder for Dashboard
import TaskStatusPage from "./pages/TaskStatusPage"; // Placeholder for TaskStatusPage
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/task-status" element={<TaskStatusPage />} />
      </Routes>
    </Router>
  );
};

export default App;
