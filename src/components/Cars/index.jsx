import React from "react";
import CarItem from "../CarItem";
import "./cars.css";
import escalade from "../../utils/cars/Item/escalade.png";
import sprinter from "../../utils/cars/Item/sprinter.png";
import gmc from "../../utils/cars/Item/gmc.png";

const Cars = (props) => {
  return (
    <div className="cars" ref={props.refProp}>
      <div className="car-list">
        <CarItem
          model="2024 Cadilac Escalade ESV"
          capacity="up to 7 PAX, 5 travelbags"
          price="120"
          car={escalade}
          className="car-item"
        />
        <CarItem
          model="Mercedes-Benz Sprinter Luxury Van"
          capacity="up to 14 PAX, 10 travelbags"
          price="150"
          car={sprinter}
          className="car-item"
        />
        <CarItem
          model="2023 GMC Yukon Denali Ultimate"
          capacity="up to 7 PAX, 5 travelbags"
          price="120"
          car={gmc}
          className="car-item"
        />
      </div>
    </div>
  );
};

export default Cars;
