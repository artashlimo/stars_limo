import React from "react";

import "./carItem.css";

const CarItem = (props) => {
  return (
    <div className="car-item">
      <div
        className="car-pic"
        style={{ backgroundImage: `url(${props.car})` }}
      ></div>
      <div className="car-info">
        <div className="info-row">
          <p className="model">{props.model}</p>
          <p className="capacity">{props.capacity}</p>
          <p className="price">{props.price}$ hourly</p>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
