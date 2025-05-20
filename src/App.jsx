import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentListPage from "./pages/StudentListPage";
import StudentDetailPage from "./pages/StudentDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentListPage />} />
        <Route path="/students/:id" element={<StudentDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
 