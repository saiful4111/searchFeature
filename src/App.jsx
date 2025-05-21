import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import StudentListPage from "./pages/StudentListPage";
import StudentDetailPage from "./pages/StudentDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentListPage />} />
        <Route path="/students/:userid" element={<StudentDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 