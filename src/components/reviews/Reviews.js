import React from "react";
import { useContext, useState } from "react";
import { ServicesContext } from "../../context/ServiceContext";
import ReviewBody from "./ReviewBody";
const Reviews = () => {
  const [heading] = useState("what our customers are saying ?");
  const {
    servicesData: { reviews },
  } = useContext(ServicesContext);

  return (
    <div className="reviews">
      <div className="container">
        <div className="heading headingAnimation">{heading}</div>
        <div className="row ml-minus-15 mr-minus-15">
          {reviews.length > 0
            ? reviews.map((reviews, index) => (
                <ReviewBody key={index} reviews={reviews} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
