export default function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full flex justify-center mb-14">
      <input
        type="text"
        placeholder="Search for a game..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-3 border-2 border-gray-300 rounded-lg w-[300px] focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
