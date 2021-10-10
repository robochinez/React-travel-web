import { useReducer } from "react";
import DestinationsContext from "../DestinationsContext";
import DestinationReducers from "../reducers/DestinationReducers";
import { destinations } from "../../data/destinations";
import React from "react";
import DestinationsReducer from "../reducers/DestinationReducers";
import Cities from "../../data/cities";

const DestinationsProvider = (props) => {
  const [destinationsData, dispatch] = useReducer(DestinationsReducer, {
    destinations,
    details: {},
    cities: Cities,
    filteredCities: [],
  });
  return (
    <DestinationsContext.Provider value={{ destinationsData, dispatch }}>
      {props.children}
    </DestinationsContext.Provider>
  );
};

export default DestinationsProvider;
