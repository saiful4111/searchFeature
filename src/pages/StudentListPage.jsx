import React, { useState } from "react";
import { students } from "../data/students";
import StudentCard from "../components/StudentCard";
import SearchBar from "../components/SearchBar";

export default function StudentListPage() {
  const [searchTerm, setSearchTerm] = useState(""); //useState
  const [age, setAge] = useState(""); //another useState

  const filteredStudents = students.filter((student) => {
    const lowCaseName = student.name.toLowerCase();
    const lowCaseSearch = searchTerm.toLowerCase();
    const stringfyAge = student.age.toString();

    const nameMatch = lowCaseName.startsWith(lowCaseSearch); //nameMatch → "alisha".startsWith("ali") → ✅ true
    const ageMatch = age === "" || stringfyAge.startsWith(age); // ageMatch → "22".startsWith("2") → ✅ true
    return nameMatch && ageMatch; // So: return true && true → ✅ this student is included
  });

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Student Directory</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        age={age}
        setAge={setAge}
      />

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
