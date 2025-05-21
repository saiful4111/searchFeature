export default function SearchBar({ searchTerm, setSearchTerm, age, setAge }) {
  return (
    <div className="mb-6 space-y-4">
      <input
        type="text"
        placeholder="Search students by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="number"
        placeholder="Search students by age..."
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>
  );
}
