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
      { id: 'A001', name: 'Max', age: 28 },
      { id: 'A002', name: 'Manu', age: 29 },
      { id: 'A003', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    // Always update state in an immutable fashion
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}/>
        })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!!</p>
        <button
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    )
  };
}

export default App;
