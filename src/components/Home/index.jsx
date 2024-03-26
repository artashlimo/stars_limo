import { React, useEffect } from "react";

import "./home.css";

const Home = (props) => {
  return (
    <div className="home">
      <div className="header">
        <div className="nav">
          <div
            className="nav-button"
            onClick={() => props.executeScroll(props.refList[1])}
          >
            About Us
          </div>
          <div
            className="nav-button"
            onClick={() => props.executeScroll(props.refList[0])}
          >
            Cars
          </div>
          <div
            className="nav-button"
            onClick={() => props.executeScroll(props.refList[2])}
          >
            Contact Us
          </div>
        </div>
      </div>
      <div className="car-container">
        <div className="text">
          <h1>
            Your satisfaction is our top priority, and we strive to ensure that
            your car rental experience with us is seamless and hassle-free.
            Don't hesitate to reach out whenever you need assistance – we're
            here for you, day or night.
          </h1>
        </div>
        <div className="sprinter"></div>
      </div>
    </div>
  );
};

export default Home;
