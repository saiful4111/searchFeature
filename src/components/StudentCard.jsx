import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function StudentCard({ student }) {
  const [favorite, setFavorite] = useState(true);
  const isLove = true;
  return (
    <div className="bg-white shadow-md rounded-md p-5 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {student.name}
        </h2>
        <p>Age: {student.age}</p>
        <p>
          Grade: <span className="font-bold">{student.grade}</span>
        </p>
        <p className="text-sm text-gray-600">{student.email}</p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <Link
          to={`/students/${student.id}`}
          className="text-indigo-600 hover:underline"
        >
          View Details
        </Link>
        {isLove && (
          <button
            onClick={() => setFavorite(!favorite)}
            className={`text-2xl ${
              favorite ? "text-gray-300" : "text-red-500"
            }`}
            aria-label="Favorite"
          >
            ♥
          </button>
        )}
      </div>
    </div>
  );
}

StudentCard.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    grade: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
