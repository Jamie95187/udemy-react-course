import React, { useState } from 'react';
import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';

// functional component using hooks
const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 27},
      {name: 'Steph', age: 27}
    ],
    otherState: 'some other variable'
  });

  const switchNameHandler = () => {
    // console.log('Was Clicked!');
    // Don't do this: this.state.persons[0].name = "Maximilian";
    setPersonsState({ persons: [
      {name: 'Max', age: 29},
      {name: 'Manu', age: 28},
      {name: 'Steph', age: 28}
    ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!!!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: Surfing</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  )
}

export default App;
