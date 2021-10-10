import React from "react";
import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
const ServicesList = ({ services }) => {
  const [current, setCurrent] = useState(0);
  const showDetails = (index) => {
    setCurrent(index);
  };
  return services.length > 0
    ? services.map((service, index) => (
        <div className="services__list animation" key={index}>
          <h4
            className={`services__list__heading ${
              current === index
                ? "services__list__heading__active"
                : "services__list__heading__normal"
            }`}
            onClick={() => {
              showDetails(index);
            }}
          >
            <BiChevronRight
              size={20}
              className={`${
                current === index ? "services__rotate" : "service__back"
              }`}
              color={`${current === index ? "#27beda" : "black"}`}
            />
            {service.heading}
          </h4>
          <p
            className={`services__list__details ${
              current === index ? "services__list__details__show" : ""
            }`}
          >
            {service.p}
          </p>
        </div>
      ))
    : "Not FOund ";
};

export default ServicesList;
