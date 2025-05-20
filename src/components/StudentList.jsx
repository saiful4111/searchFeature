// src/components/StudentList.jsx
import React from "react";
import StudentCard from "./StudentCard";

export default function StudentList({ students }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}
