// components/UserCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <div className="border rounded overflow-hidden shadow-md">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="w-full h-64 object-cover object-center" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{user.first_name} {user.last_name}</h2>
        <p className="text-gray-600">ID: {user.id}</p>
        <Link to={`/user/${user.id}`} className="block mt-4 text-center text-blue-500 hover:text-blue-700">View Details</Link>
      </div>
    </div>
  );
};

export default UserCard;
