import React from "react";
import { BsStopwatch } from "react-icons/bs";
import Facilities from "./Facilities";
const CityContents = ({ price, room, food, duration, name }) => {
  const formate = (price) => {
    return `${price}.00`;
  };
  return (
    <div className="cities__body__contents">
      <div className="cities__body__contents__top">
        <div className="cities__body__contents__top__name">{name}</div>
        <div className="cities__body__contents__top__duration">
          <BsStopwatch size={20} color="#27beda" />
          <div className="cities__body__contents__top__duration__time">
            {duration}
          </div>
        </div>
      </div>
      <div className="cities__body__contents__price">
        <span className="cities__body__contents__price__dollar">$</span>
        {formate(price)}
      </div>
      <Facilities name="room" value={room} />
      <Facilities name="food" value={food} />
      <div className="cities__body__contents__button">
        <button className="btn-dark-sm">Buy now</button>
      </div>
    </div>
  );
};

export default CityContents;
