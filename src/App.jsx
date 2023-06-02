import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Project></Project>
    </div>
  );
}

export default App;
