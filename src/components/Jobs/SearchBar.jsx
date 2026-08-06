const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search by title, company or location..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="
        w-full
        mt-6
        px-4
        py-3
        rounded-lg
        border
        border-gray-300
        dark:border-gray-600
        bg-white
        dark:bg-gray-800
        text-gray-900
        dark:text-white
        placeholder-gray-500
        dark:placeholder-gray-400
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:border-blue-500
        transition
      "
    />
  );
};

export default SearchBar;
