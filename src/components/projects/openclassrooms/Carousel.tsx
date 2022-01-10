import OC_ImagesData from "@/data/OC_Images";
import Flicking from "@egjs/react-flicking";
import React, { useEffect } from "react";
const Carousel = () => {
  useEffect(() => {}, []);
  const handClick = (event: React.MouseEvent<HTMLImageElement>): void => {
    event.stopPropagation();
    event.preventDefault();
  };
  return (
    <div className="max-w-lg">
      <Flicking align="prev" circular={false} autoResize={true}>
        {OC_ImagesData.map((image, index) => (
          <div
            className="panel mx-24 sm:m-2 p-6 rounded-xl flex items-center"
            key={index}
          >
            <img
              src={image.src}
              onMouseDown={handClick}
              className="w-3/4 sm:w-full h-auto max-w-md rounded-xl"
            />
          </div>
        ))}
      </Flicking>
    </div>
  );
};

export default Carousel;
