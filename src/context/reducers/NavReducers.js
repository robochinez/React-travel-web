import React from "react";
import { NAV_TOGGLE } from "../types/NavTypes";
const NavReducers = (state, action) => {
  switch (action.type) {
    case NAV_TOGGLE:
      return !state;

    default:
      return state;
  }
};

export default NavReducers;
