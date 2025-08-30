import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function Header() {
  return (
    <header className="py-4">
      <h1 className="text-3xl font-bold text-gray-800">My Favorite Cities</h1>
    </header>
  );
}

function MainContent() {
  return (
    <main className="my-8 p-4 bg-white rounded-lg shadow-lg">
      <p className="text-lg text-gray-600">I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer className="py-4 text-sm text-gray-500">
      <p>© 2023 City Lovers</p>
    </footer>
  );
}

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans text-center">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;