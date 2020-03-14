import React from 'react';
import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!!!</p>
      <Person name="Max" age="28">My Hobbies: Surfing</Person>
      <Person name="Manu" age="27"/>
      <Person name="Steph" age="27"/>
    </div>
  );
}

export default App;
