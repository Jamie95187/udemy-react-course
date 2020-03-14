import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 27},
      {name: 'Steph', age: 27}
    ]
  }

  switchNameHandler = () => {
    // console.log('Was Clicked!');
    // Don't do this: this.state.persons[0].name = "Maximilian";
    this.setState({ persons: [
      {name: 'Max', age: 29},
      {name: 'Manu', age: 28},
      {name: 'Steph', age: 28}
    ]
    })
  };

  render(){
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Surfing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    )
  };
}

export default App;
