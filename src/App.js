import React from 'react';
import './App.css';
import Dashboard from './components/dashboard';
// import { useMediaQuery } from 'react-responsive'

function App() {
  return (
    <div className="app">
      {/* //add a button to go to dashboard */}
      <Dashboard />
    </div>
    
  );
}

export default App;
