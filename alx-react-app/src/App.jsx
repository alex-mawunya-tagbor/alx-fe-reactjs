import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';

import React from 'react';

// Define the Header component
function Header() {
  return (
    <header className="py-4">
      <h1 className="text-3xl font-bold text-gray-800">My Favorite Cities</h1>
    </header>
  );
}

// Define the MainContent component
function MainContent() {
  return (
    <main className="my-8 p-4 bg-white rounded-lg shadow-lg">
      <p className="text-lg text-gray-600">I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

// Define the Footer component
function Footer() {
  return (
    <footer className="py-4 text-sm text-gray-500">
      <p>© 2023 City Lovers</p>
    </footer>
  );
}

// Define the UserProfile component using props
const UserProfile = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8 w-80 text-left">
      <h2 className="text-2xl font-semibold text-gray-800">{props.name}</h2>
      <p className="text-gray-600 mt-2">Age: {props.age}</p>
      <p className="text-gray-600 mt-1">Bio: {props.bio}</p>
    </div>
  );
};

// Define the main App component that renders all sub-components
function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans text-center">
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
  );
}

export default App;
