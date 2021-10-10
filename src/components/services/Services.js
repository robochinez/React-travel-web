import { React, useState, useContext } from "react";
import ServicesLeft from "./ServicesLeft";
import ServicesList from "./ServicesList";
import { ServicesContext } from "../../context/ServiceContext";
const Services = () => {
  const {
    servicesData: { servicesData },
  } = useContext(ServicesContext);
  const [state] = useState({
    heading:
      "why customers love travel.id ? because we provide unique services.",
    subheading:
      "Our aim is to provider professional and unique services customers, and we have provided high quality services to our customers thats why they love travel.id",
  });
  return (
    <div className="services">
      <div className="services__contents">
        <div className="container">
          <div className="row ml-minus-15 mr-minus- services__contents__container">
            <div className="col-6 p-15">
              <ServicesLeft
                heading={state.heading}
                subHeading={state.subheading}
              />
            </div>
            <div className="col-6 p-15">
              <ServicesList services={servicesData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
