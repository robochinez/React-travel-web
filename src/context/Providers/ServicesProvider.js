import { useReducer } from "react";
import ServicesReducer from "../reducers/ServicesReducer";
import { ServicesContext } from "../ServiceContext";
import { services } from "../../data/services";
import reviews from "../../data/reviews";
import React from "react";

const ServicesProvider = (props) => {
  const [servicesData, dispatch] = useReducer(ServicesReducer, {
    servicesData: services,
    reviews: reviews,
  });
  return (
    <ServicesContext.Provider value={{ servicesData, dispatch }}>
      {props.children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
