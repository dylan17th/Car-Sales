import React from 'react';

const AdditionalFeature = props => {
  console.log('add feature',props)
  return (
    <li>
      <button className="button" onClick={()=> props.buyItem(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
