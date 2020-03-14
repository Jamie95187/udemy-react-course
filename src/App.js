import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

// Smart, stateful components
// functional component using hooks
// const App = props => {
//
// const [ personsState, setPersonsState ] = useState({
//   persons: [
//     {name: 'Max', age: 28},
//     {name: 'Manu', age: 27},
//     {name: 'Steph', age: 27}
//   ],
//   otherState: 'some other variable'
// });
//
// const switchNameHandler = (newName) => {
//   // console.log('Was Clicked!');
//   // Don't do this: this.state.persons[0].name = "Maximilian";
//   setPersonsState({ persons: [
//     {name: newName, age: 29},
//     {name: 'Manu', age: 28},
//     {name: 'Steph', age: 28}
//   ]
//   });
// };

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Max!")}>My Hobbies: Surfing</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}/>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    )
  };
}

export default App;
