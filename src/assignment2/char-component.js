import React from 'react';

const CharComponent = (props) => {
  return (
    <p onClick={props.click}> {props.character}</p>
  )
}

export default CharComponent
