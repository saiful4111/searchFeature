import React, { useState } from "react";
import { students } from "../data/students";
import StudentCard from "../components/StudentCard";
import SearchBar from "../components/SearchBar";
import { number } from "prop-types";

export default function StudentListPage() {
  const [searchTerm, setSearchTerm] = useState(""); //useState
  const [age, setAge] = useState(0); //another useState

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); //Filtering the array with a condition(does the search value match the student.name?
  //  if it is,then return the student.name)
  const filterByStudentsAge = students.filter((student) =>
    student.age.includes(number(age))
  );
  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Student Directory</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SearchBar searchTerm={age} setSearchTerm={setAge} />

      {filteredStudents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No students found.</p>
      )}
      {filterByStudentsAge.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterByStudentsAge.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No students found.</p>
      )}
    </div>
  );
}
