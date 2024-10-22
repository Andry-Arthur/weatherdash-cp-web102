import React from 'react';
import './InfoCard.css';

const InfoCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        {props.attribute && <h4 className="card-title">{props.attribute}</h4>}
        {props.icon && <img src={props.icon} alt={props.attribute} />}
        {props.value && <p className="card-subtitle">{props.value}</p>}
      </div>
    </div>
  );
};

export default InfoCard;