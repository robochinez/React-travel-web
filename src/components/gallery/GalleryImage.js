import { LazyLoadImage } from "react-lazy-load-image-component";
import { useContext } from "react";
import GalleryContext from "../../context/GalleryContext";
import { OPEN_LIGHTBOX } from "../../context/types/GalleryTypes";
const GalleryImage = ({ gallery }) => {
  const { dispatch } = useContext(GalleryContext);
  const openLightBox = (imageObject) => {
    dispatch({
      type: OPEN_LIGHTBOX,
      payload: imageObject,
    });
  };
  return (
    <div className="col-3">
      <div className="gallery__image animation">
        <LazyLoadImage
          src={gallery.image}
          onClick={() => openLightBox(gallery)}
        />
      </div>
    </div>
  );
};

export default GalleryImage;
