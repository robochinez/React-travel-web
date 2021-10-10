import React from "react";
import { useState, useContext } from "react";
import DestinationsContext from "../context/DestinationsContext";
import DestinationsList from "./DestinationsList";
const Destinations = () => {
  const {
    destinationsData: { destinations },
  } = useContext(DestinationsContext);
  const [state] = useState({
    heading:
      "Discover the most engaging places in the world with Travel Friends",
    paragraph:
      "Travel is a pleasure. It forces you to trust strangers and forget all the comforts of home and familiar friends. You are always balanced. Nothing is yours except essentials Air, Sleep, Dreams, sea, sky-all things that tend towards the eternal or what we imagine.",
  });
  return (
    <div className="destinations">
      <div className="container">
        <div className="row ml-minus-15 mr-minus-15">
          <div className="col-6 p-15">
            <h3 className="destinations__heading animation">{state.heading}</h3>
          </div>
          <div className="col-6 p-15">
            <p className="destinations__paragraph animation">
              {state.paragraph}
            </p>
          </div>
        </div>
        <div className="destinations__block">
          <div className="row ml-minus-15 mr-minus-15">
            {destinations.map((destination) => {
              return (
                <DestinationsList
                  destination={destination}
                  key={destination.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
