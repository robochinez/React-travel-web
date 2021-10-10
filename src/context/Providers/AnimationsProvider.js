import { useEffect } from "react";
import AnimationsContext from "../AnimationsContext";

const AnimationsProvider = ({ children }) => {
  const scrollAnimations = () => {
    const animation = (elements, className) => {
      elements.forEach((element) => {
        console.log(element);
        const elementPosition = element.getBoundingClientRect().top;
        const viewPortHeight = window.innerHeight - 150;
        if (elementPosition < viewPortHeight) {
          element.classList.add(className);
        } else {
          element.classList.remove(className);
        }
      });
    };

    const elements = document.querySelectorAll(".animation");
    const headingAnimation = document.querySelectorAll(".headingAnimation");
    animation(elements, "animate");
    animation(headingAnimation, "headingAnimate");
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollAnimations);
  }, []);
  return (
    <AnimationsContext.Provider value>{children}</AnimationsContext.Provider>
  );
};

export default AnimationsProvider;
