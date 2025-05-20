import React, { useState } from "react";
import { students } from "../data/students";
import StudentCard from "../components/StudentCard";
import SearchBar from "../components/SearchBar";

export default function StudentListPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Student Directory</h1>
      
      <SearchBar onSearchTerm={searchTerm} onSetSearchTerm={setSearchTerm} />
      
      {filteredStudents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No students found.</p>
      )}
    </div>
  );
}
 