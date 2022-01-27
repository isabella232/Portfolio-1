import React from "react";
import { GiBrain } from "react-icons/gi";

const Hero = () => {
  return (
    <>
      <div className="mb-6 mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500">
        <GiBrain className="w-7 h-7 text-gray-200" />
      </div>
      <div className="mb-10 md:mb-12">
        <h2 className="mb-7 text-3xl sm:text-4xl font-bold leading-none tracking-tight md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Hello,</span>
          </span>{" "}
          My name is Arno
        </h2>
        <p className="text-base md:text-lg">
          Welcome to my site where you can learn more about me, see what I did,
          what I do and what I will do.
        </p>
      </div>
    </>
  );
};

export default Hero;
