import React from "react";
import { Helmet } from "react-helmet-async";
import { useState, useContext, useEffect } from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Header from "../components/Header";
import Model from "../components/Model";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";
import Destinations from "../components/Destinations";
import Services from "../components/services/Services";
import Reviews from "../components/reviews/Reviews";
import GalleryComponent from "../components/gallery/GalleryComponent";
import Footer from "../components/footer/Footer";
const Home = () => {
  const { dispatch } = useContext(ModelContext);
  const [state] = useState({
    heading: " we are travel friends",
    paragraph:
      "come and join us we travel the most famous and beatiful place in the world",
  });
  const [registerModel] = useState("registerModel");
  const [loginModel] = useState("loginModel");
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Helmet>
        <title>Travel Friends</title>
        <meta
          name="description"
          content="Travel to The Indonesia with travel friends"
        />
        <meta name="keywords" content="travel , travel tours, airline" />
      </Helmet>
      <Header heading={state.heading} paragraph={state.paragraph}>
        <button
          className="btn-default"
          onClick={() =>
            dispatch({
              type: OPEN_MODEL,
              payload: registerModel,
            })
          }
        >
          {" "}
          Get Started
        </button>
      </Header>
      <Model current={registerModel}>
        <Register currentModel={loginModel} />
      </Model>
      <Model current={loginModel}>
        <Login currentModel={registerModel} />
      </Model>
      <Destinations />
      <Services />
      <Reviews />
      <GalleryComponent />
      <Footer />
    </>
  );
};

export default Home;
