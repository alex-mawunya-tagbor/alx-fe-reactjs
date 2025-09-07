import React, { createContext, useContext } from 'react';

// 1. Create a UserContext.
// We initialize a new context to hold our user data.
const UserContext = createContext(null);

// 2. Consume Context in UserDetails.jsx.
// This component now uses the useContext hook to access the user data directly from the context,
// eliminating the need for it to be passed down as a prop.
function UserDetails() {
  const userData = useContext(UserContext);

  if (!userData) {
    return <div>No user data available.</div>;
  }

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="text-xl font-medium text-black">User Details</div>
      <p className="text-gray-500">Name: <span className="font-semibold">{userData.name}</span></p>
      <p className="text-gray-500">Email: <span className="font-semibold">{userData.email}</span></p>
    </div>
  );
}

// 3. Remove Unused Props from UserInfo.jsx.
// This component no longer needs to receive the userData prop. It simply renders the next component
// in the tree.
function UserInfo() {
  return (
    <div className="p-4 rounded-lg bg-gray-100">
      <h2 className="text-lg font-bold text-gray-700 mb-2">User Information</h2>
      <UserDetails />
    </div>
  );
}

// 4. Remove Unused Props from ProfilePage.jsx.
// This component also no longer needs the userData prop. It acts as a simple container
// for the UserInfo component.
function ProfilePage() {
  return (
    <div className="container mx-auto p-8 flex justify-center items-center h-screen bg-gray-50">
      <div className="p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">User Profile</h1>
        <UserInfo />
      </div>
    </div>
  );
}

// 5. Provide Context in App.jsx.
// The top-level component now wraps the entire component tree (ProfilePage) with the Provider.
// The userData object is passed as the `value` to the context, making it available
// to any consuming component in the tree below.
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
