import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const DestinationsList = ({ destination }) => {
  return (
    <div className="col-3 p-15">
      <div className="destinations__card animation">
        <div className="destinations__card__img">
          <LazyLoadImage src={destination.image} alt={destination.image} />
        </div>
        <div className="destinations__card__layer">
          <div className="destinations__card__layer__content">
            <IoLocationSharp size={27} />
            <div className="destinations__card__layer__content__country">
              {destination.name}
            </div>
          </div>
        </div>
        <div className="destinations__card__info">
          <div className="destinations__card__info__text">
            <Link className="btn-white" to={`/details/${destination.id}`}>
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsList;
