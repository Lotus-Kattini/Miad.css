// App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UserListPage from './components/UserListPage';
import UserDetailsPage from './components/UserDetailsPage';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = term => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" exact element={<UserListPage searchTerm={searchTerm} />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
