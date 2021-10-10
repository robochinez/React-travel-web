import { useReducer } from "react";

import { NavContext } from "../NavContext";
import NavReducers from "../reducers/NavReducers";

const NavProvider = (props) => {
  const [state, dispatch] = useReducer(NavReducers, false);
  return (
    <NavContext.Provider value={{ state, dispatch }}>
      {props.children}
    </NavContext.Provider>
  );
};

export default NavProvider;
