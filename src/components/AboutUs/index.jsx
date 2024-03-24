import React from "react";

import "./aboutUs.css";

const Cars = (props) => {
  return (
    <div className="aboutUs" ref={props.refProp}>
      <div className="about-contnet">
        <p className="about-text">
          The distinctive VIP Star Limo company’s offers to be the top of the
          line exclusively luxury transportation service provider in a
          tremendous amount of area to Los Angeles for those who prefer
          exquisite treatment and superior service. The drivers are the sampled
          elite of over 18 years’ experience in the public transport bus
          undertakings and they use the knowledge acquired out of extroversion
          and courtesy, and local awareness to express great values, therefore,
          delivering high levels of excellence. We are thankful for the
          historical fact that we were able to start operating with the
          steel-hearted drivers. On the other hand, our cars are also well-sized
          where passengers are comfortably alleviated of the strain of crowded
          vehicles and will always enjoy the same spaciousness of corporate
          cars. Our VIP Stars Limo services focus more on great times for the
          customers rather than only providing a transport, and thereby, among
          other great things, we pay attention to crucial details to deliver
          unmatchable experiences like once-in-a-lifetime events and send the
          impression of splendor and magnificence.
        </p>
        <div className="award-box">
          <div className="award-item">
            <h2>16</h2>
            <p>years on market</p>
          </div>
          <div className="award-item">
            <h2>30+</h2>
            <p>available cars</p>
          </div>
          <div className="award-item">
            <h2>4.6</h2>
            <p>customer review</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
