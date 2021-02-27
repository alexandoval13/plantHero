import React from 'react';

const QuickDisplay = (props) => {
  const p = props.quickDisplay;

  if (p) {
    return (
      <div>
        <h4>
          {' '}
          {p.nickname
            ? `${p.nickname} (${p['plant_name']})`
            : p['plant_name']}{' '}
        </h4>
      </div>
    );
  } else {
    return null;
  }
};

export default QuickDisplay;
