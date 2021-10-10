import React from "react";
import { BsFillStarFill, BsStar } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ReviewBody = ({ reviews }) => {
  const rating = (num) => {
    let container = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= num) {
        container.push(
          <BsFillStarFill
            key={i}
            size={13}
            color="rgb(39, 190, 218)"
            className="reviews__body__contents__info__rating__icon"
          />
        );
      } else {
        container.push(
          <BsStar
            key={i}
            size={13}
            color="rgb(39, 190, 218)"
            className="reviews__body__contents__info__rating__icon"
          />
        );
      }
    }
    return container;
  };
  return (
    <div className="col-4 p-15">
      <div className="reviews__body animation">
        <div className="reviews__body__contents">
          <div className="reviews__body__contents__image">
            <LazyLoadImage src={reviews.image} alt={reviews.image} />
          </div>
          <div className="reviews__body__contents__info">
            <div className="reviews__body__contents__info__name">
              {reviews.name}
            </div>
            <div className="reviews__body__contents__info__rating">
              {rating(reviews.stars)}
            </div>
            <div className="reviews__body__contents__info__comment">
              {reviews.comment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBody;
