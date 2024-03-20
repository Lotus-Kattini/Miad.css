// components/UserListPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const UserListPage = ({ searchTerm }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  useEffect(() => {
    const filtered = users.filter(user => user.id.toString().includes(searchTerm));
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserListPage;
