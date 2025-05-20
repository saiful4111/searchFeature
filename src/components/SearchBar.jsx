

export default function SearchBar({ onSearchTerm, onSetSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search students by name..."
      value={onSearchTerm}
      onChange={(e) => onSetSearchTerm(e.target.value)}
      className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
  );
}
 