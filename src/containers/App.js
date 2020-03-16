import React, { Component } from 'react';
import styled from 'styled-components';
import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import WithClass from '../HOC/WithClass';
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

  nameChangedHandler = ( event, id ) => {
    // find the right person
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Without mutating the state create a copy of the person
    const person = {
        ...this.state.persons[personIndex]
    };

    // Create a copy of the array of objects (persons array with person objects in it)
    person.name = event.target.value;

    // This creates a copy of the persons array
    const persons = [...this.state.persons];
    // Update the person at the specific index of the array
    persons[personIndex] = person;

    this.setState( {persons: persons} );
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
    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
        </div>
      )
    }

    return (
      <WithClass classes="App">
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </WithClass>
    )
  };
}

export default App;
