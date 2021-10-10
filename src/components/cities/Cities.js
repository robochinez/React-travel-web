import React from "react";
import CityContents from "./CityContents";
import CityImage from "./CityImage";
const Cities = ({ cities, name }) => {
  return (
    <div className="cities">
      <div className="container">
        <div className="cities__container">
          <h2 className="heading headingAnimation">cities in {name}</h2>
          <div className="row ml-minus-15 mr-minus-15">
            {cities.length > 0
              ? cities.map((city) => (
                  <div className="col-3 p-15" key={city.id}>
                    <div className="cities__body animation">
                      <CityImage img={city.image} status={city.status} />
                      <CityContents
                        price={city.price}
                        room={city.room}
                        food={city.food}
                        duration={city.duration}
                        name={city.name}
                      />
                    </div>
                  </div>
                ))
              : `No cities in ${name}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
