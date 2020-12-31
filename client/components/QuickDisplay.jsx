import React from 'react';

const QuickDisplay = (props) => {

  const p = props.quickDisplay;

  if (p) {
    return (
      <div>
        <h4> { p.nickname? `${p.nickname} (${p.name})` : p.name } </h4>
      </div>
    )
  } else {
    return null;
  }
}

export default QuickDisplay;