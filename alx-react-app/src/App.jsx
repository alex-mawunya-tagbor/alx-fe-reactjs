import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans text-center">
      <header className="py-4">
        <h1 className="text-3xl font-bold text-gray-800">My Favorite Cities</h1>
      </header>
      <main className="my-8 p-4 bg-white rounded-lg shadow-lg">
        <p className="text-xl text-gray-700">Hello everyone, I am learning React at ALX!</p>
        <p className="text-lg text-gray-600 mt-2">I am learning about JSX!</p>
        <p className="text-lg text-gray-600 mt-4">I love to visit New York, Paris, and Tokyo.</p>
      </main>
      <footer className="py-4 text-sm text-gray-500">
        <p>© 2023 City Lovers</p>
      </footer>
    </div>
  );
}

export default App;