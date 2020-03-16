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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
        })}
        </div>
      )

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    // setting css to classes dynamically
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red') // classes = ['red']
    };
    if(this.state.persons.length <= 1){
      classes.push('bold') // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!!!</p>
        <button
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    )
  };
}

export default App;
