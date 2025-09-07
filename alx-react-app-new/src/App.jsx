import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans text-center">
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name={user.name} age={user.age} bio={user.bio} />
      <Counter />
      <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
    </div>
  );
}

export default App;