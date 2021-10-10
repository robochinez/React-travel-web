import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import { Link } from "react-router-dom";
const Nav = () => {
  const { state, dispatch } = useContext(NavContext);
  console.log("nav state", state);
  return (
    <>
      {state ? <div className="navLayer"></div> : ""}
      <div className={state ? "nav nav__open" : "nav nav__close"}>
        <div className="nav__content">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Nav;
