import React from 'react';
import UserInfo from './UserInfo';

// This component no longer needs to receive props, as data is provided by Context
function ProfilePage() {
  return <UserInfo />;
}

export default ProfilePage;