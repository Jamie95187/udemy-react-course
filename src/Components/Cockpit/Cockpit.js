import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black'
  }`;

const cockpit = (props) => {
  // setting css to classes dynamically
  const classes = [];
  if(props.persons.length <= 2){
    classes.push('red') // classes = ['red']
  };
  if(props.persons.length <= 1){
    classes.push('bold') // classes = ['red', 'bold']
  }

  return(
    <div>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>This is really working!!!</p>
      <StyledButton alt={props.showPersons} onClick={props.clicked}>
        Switch Name
      </StyledButton>
    </div>
  );
};

// React memo good to use if the component doesnt need to change when the parent component changes
export default cockpit;
