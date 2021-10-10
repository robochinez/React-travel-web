import { React, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import AboutImage from "../components/pages-parts/AboutImage";
const About = () => {
  const [state] = useState({
    heading: "about us",
    pageHeading: "world best travel agency company since 2005",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, animi harum magnam nulla sunt corporis sed a pariatur laborum tempore sit deserunt veritatis minima accusamus eligendi totam porro. Voluptas sed eos modi excepturi, corporis laudantium sint nostrum deserunt numquam minima adipisci perspiciatis maiores, debitis a, delectus natus ea nobis. Vitae corrupti eaque quae. Aliquam perspiciatis ad ab itaque dolorem nihil. Dicta modi quia deleniti excepturi voluptatem rerum, placeat veritatis veniam pariatur? Repellat culpa voluptate vitae architecto reiciendis est a cumque iure neque, debitis voluptatibus rem magnam voluptatum quas ducimus modi mollitia dolorum! Dicta beatae nemo possimus. Obcaecati natus officia expedita?.",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>About page</title>
        <meta name="desccription" content="travel friends about page" />
      </Helmet>
      <PageContainer data={state}>
        <AboutImage />
      </PageContainer>
    </>
  );
};

export default About;
