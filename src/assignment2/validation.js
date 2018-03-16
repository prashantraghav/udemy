import React from 'react';

const Validation = (props) => {
  return (
    <div>
      <p>{(props.length > 5)? "Text is long enough": "Text is too short" }</p>
    </div>
  )
}

export default Validation;
