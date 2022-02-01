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
    <div className="max-w-xs rounded-xl border border-gray-700 md:max-w-xl">
      <Flicking align="prev" circular={true} autoResize={true}>
        {OC_ImagesData.map((image) => (
          <div
            className="panel flex items-center rounded-xl p-4"
            key={nanoid()}>
            <img
              src={image.src}
              onMouseDown={handClick}
              className="h-auto w-full max-w-sm rounded-xl"
            />
          </div>
        ))}
      </Flicking>
    </div>
  );
};

export default Carousel;
