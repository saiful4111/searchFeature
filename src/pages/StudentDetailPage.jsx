import React from "react";
import { useParams, Link } from "react-router-dom";
import { students } from "../data/students";

export default function StudentDetailPage() {
  const { id } = useParams(); 
  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-semibold mb-4">Student not found</h2>
        <Link to="/" className="text-indigo-600 hover:underline">
          Back to List
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h1 className="text-3xl font-bold mb-4">{student.name}</h1>
      <p>
        <strong>Age:</strong> {student.age}
      </p>
      <p>
        <strong>Grade:</strong> {student.grade}
      </p>
      <p>
        <strong>Email:</strong> {student.email}
      </p>
      <p>
        <strong>Phone:</strong> {student.phone}
      </p>
      <p>
        <strong>Address:</strong> {student.address}
      </p>
      <p>
        <strong>Course:</strong> {student.course}
      </p>
      <p>
        <strong>Hobbies:</strong> {student.hobbies.join(", ")}
      </p>
      <p className="mt-4">
        <strong>About:</strong> {student.bio}
      </p>

      <Link
        to="/"
        className="inline-block mt-6 text-indigo-600 hover:underline"
      >
        ← Back to List
      </Link>
    </div>
  );
}
 