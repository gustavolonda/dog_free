import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';

const Header: React.FC = () => {
  const { appTitle, welcomeMessage } = useGlobalContext();
  
  return (
    <header className="bg-primary text-white text-center py-4">
      <h1>{appTitle}</h1>
      <p>{welcomeMessage}</p>
    </header>
  );
};

export default Header;