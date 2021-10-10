import React from "react";
import { BsCheckAll, BsX } from "react-icons/bs";
const Facilities = ({ name, value }) => {
  return (
    <div className="cities__body__contents__facilities">
      <div className="cities__body__contents__facilities__name">{name}</div>
      <div className="cities__body__contents__facilities__value">
        {value ? (
          <BsCheckAll size={20} color="#1db667" />
        ) : (
          <BsX size={20} color="#ff4d58" />
        )}
      </div>
    </div>
  );
};

export default Facilities;
