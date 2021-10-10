import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const FooterIntro = () => {
  const [state] = useState({
    logo: "TRAVEL.ID",
    intro:
      " Travel Id is a traveling agency, we arrange tours to the world famous and most beautiful countries, Since 2005 we provide high quality services to our valuable customers.",
  });
  return (
    <div className="footer__intro">
      <div className="footer__intro__img animation">{state.logo}</div>
      <div className="footer__intro__message animation">{state.intro}</div>
    </div>
  );
};

export default FooterIntro;
