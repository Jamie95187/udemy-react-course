import React from 'react';
import Aux from '../../../HOC/Aux';
import styled from 'styled-components';
// import './Person.css';

// Presentational, stateless, dumb component should have more than stateful components

const StyledDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px){
    width: 450px;
  }`;

const person = (props) => {
  return (
    <Aux>
      <StyledDiv>
        <p onClick={props.click}>I'm {props.name} and {props.age}!</p>
        <p>{props.children}</p>
        <input type='text' onChange={props.changed} value={props.name}/>
      </StyledDiv>
    </Aux>
  )
}

export default person;
