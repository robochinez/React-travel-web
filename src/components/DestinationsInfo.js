import React from "react";
import DestinationsDetails from "./DestinationsDetails";
const DestinationsInfo = ({ details }) => {
  return (
    <div className="destinationsInfo">
      <div className="container">
        <h2 className="heading headingAnimation">Overview </h2>
        <div className="row">
          <div className="col-8">
            <p className="destinationsInfo__p animation">{details.details}</p>
          </div>
        </div>
        <h2 className="heading headingAnimation">good to know</h2>
        <div className="col-8">
          <DestinationsDetails title="Language" text={details.language} />
          <DestinationsDetails title="Currency" text={details.currency} />
        </div>
      </div>
    </div>
  );
};

export default DestinationsInfo;
