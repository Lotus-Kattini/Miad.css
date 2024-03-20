// components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <header className="bg-gray-800 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">User Dashboard</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search by ID..."
          className="px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500 text-black"
        />
      </div>
    </header>
  );
};

export default Header;
