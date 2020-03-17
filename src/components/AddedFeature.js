import React from 'react';

const AddedFeature = props => {
  console.log('remove features from the added feature', props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
