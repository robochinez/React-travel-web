import { useContext, useState } from "react";
import GalleryContext from "../../context/GalleryContext";
import GalleryImage from "./GalleryImage";
import LightBox from "./LightBox";
const GalleryComponent = () => {
  const {
    galleryStore: { gallery, lightBoxStatus },
    dispatch,
  } = useContext(GalleryContext);
  const [heading] = useState("Travelers captured images");
  return (
    <>
      {lightBoxStatus ? <LightBox /> : ""}
      <div className="gallery">
        <div className="container">
          <h2 className="heading mb-55 headingAnimation">{heading}</h2>
          <div className="row">
            {gallery.length > 0
              ? gallery.map((gallery, index) => (
                  <GalleryImage key={index} gallery={gallery} />
                ))
              : "not captured data"}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryComponent;
