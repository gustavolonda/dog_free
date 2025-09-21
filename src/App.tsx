import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { GlobalProvider } from './context/GlobalContext';
import BreedList from './components/BreedList';
import Header from './components/Header';

function App() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <GlobalProvider>
        <div className="App">
          <Header />
          <main>
            <BreedList />
          </main>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
