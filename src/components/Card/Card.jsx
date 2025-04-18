// Card.js
import React from 'react';

function Card({ title, place, duration, description, selectedItem, handleHover, item, expanded, section }) {
  return (
    <div className={`item ${item}${section} ${selectedItem === item ? 'selected' : ''}`} onMouseEnter={() => handleHover(expanded, item)}>
      <div>
        <h1>{title}</h1>
        <div className={`${selectedItem === item ? '' : 'nonselected'}`}>
          <h2>{place}</h2>
          <h3>{duration}</h3>
          <h4>{description}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
