import OC_ImagesData from "@/data/OC_Images";
import Flicking from "@egjs/react-flicking";
import { nanoid } from "nanoid";
import React, { useEffect } from "react";
const Carousel = () => {
  useEffect(() => {}, []);
  const handClick = (event: React.MouseEvent<HTMLImageElement>): void => {
    event.stopPropagation();
    event.preventDefault();
  };
  return (
    <div className="border border-gray-700 rounded-xl max-w-xs md:max-w-xl">
      <Flicking align="prev" circular={true} autoResize={true}>
        {OC_ImagesData.map((image) => (
          <div
            className="panel p-2 rounded-xl flex items-center"
            key={nanoid()}
          >
            <img
              src={image.src}
              onMouseDown={handClick}
              className="w-3/4 sm:w-full h-auto max-w-sm rounded-xl"
            />
          </div>
        ))}
      </Flicking>
    </div>
  );
};

export default Carousel;
