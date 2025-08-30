import React from 'react';

const UserProfile = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8 w-80 text-left">
      <h2 className="text-2xl font-semibold text-gray-800">{props.name}</h2>
      <p className="text-gray-600 mt-2">Age: {props.age}</p>
      <p className="text-gray-600 mt-1">Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
