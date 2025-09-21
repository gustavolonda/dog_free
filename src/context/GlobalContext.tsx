import React, { createContext, useState, useContext, ReactNode } from 'react';

interface GlobalContextType {
  appTitle: string;
  welcomeMessage: string;
  apiUrl: string;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [appTitle] = useState<string>("DogFree App");
  const [welcomeMessage] = useState<string>("Welcome to the Dog Breeds Explorer!");
  const [apiUrl] = useState<string>("https://dogapi.dog/api/v2/breeds");
  
  const value: GlobalContextType = {
    appTitle,
    welcomeMessage,
    apiUrl
  };
  
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};