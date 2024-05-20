// import React from 'react';
import { AppProvider } from './context/AppContext';
import FlashSwarmForm from './components/FlashSwarmForm';
import FlashSwarmList from './components/FlashSwarmList';
import './App.css';

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <h1>Flash Swarm Scheduler</h1>
        <FlashSwarmForm />
        <FlashSwarmList />
      </div>
    </AppProvider>
  );
};

export default App;
