import { React, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import ContactForm from "../components/pages-parts/ContactForm";
const Contact = () => {
  const [state] = useState({
    heading: "contact us",
    pageHeading: "Leave your message in the contact form",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, animi harum magnam nulla sunt corporis sed a pariatur laborum tempore sit deserunt veritatis minima accusamus eligendi totam porro. Voluptas sed eos modi excepturi, corporis laudantium sint nostrum deserunt numquam minima adipisci perspiciatis maiores, debitis a, delectus natus ea nobis. Vitae corrupti eaque quae. Aliquam perspiciatis ad ab itaque dolorem nihil. Dicta modi quia deleniti excepturi voluptatem rerum, placeat veritatis veniam pariatur? Repellat culpa voluptate vitae architecto reiciendis est a cumque iure neque, debitis voluptatibus rem magnam voluptatum quas ducimus modi mollitia dolorum! Dicta beatae nemo possimus. Obcaecati natus officia expedita?.",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact page</title>
        <meta name="desccription" content="travel friends contact page" />
      </Helmet>
      <PageContainer data={state}>
        <ContactForm />
      </PageContainer>
    </>
  );
};

export default Contact;
