import { ChangeEvent, FormEvent, useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="flex items-center w-screen max-w-3xl" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
        value={query}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-red-600 text-white py-2 px-4 rounded-r-lg hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

