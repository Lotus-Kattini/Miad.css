// components/UserDetailsPage.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const UserDetailsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`)
      .then(response => {
        setUser(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, [id]);

  return (
    <div className="container mx-auto mt-8">
      {user ? (
        <div>
          <h1 className="text-2xl mb-4">{user.first_name} {user.last_name}</h1>
          <div className="border rounded p-4">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="rounded-full w-32 h-32 mx-auto mb-4" />
            <p>Email: {user.email}</p>
            <p>ID: {user.id}</p>
          </div>
          <Link to="/" className="block mt-4 text-blue-500 hover:text-blue-700">Back to User List</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetailsPage;
