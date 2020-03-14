import React from 'react';

// Presentational, stateless, dumb component should have more than stateful components

const person = (props) => {
  return (
    <div >
      <p onClick={props.click}>I'm {props.name} and {props.age}!</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
  )
}

export default person;
