import React from "react";
import { AiOutlineDesktop, AiOutlineMobile } from "react-icons/ai";

const KeyPoint = () => {
  return (
    <div className="mx-auto">
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <AiOutlineDesktop className="w-8 h-8" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Desktop App</h6>
          <p className="text-sm text-gray-900">
            Since I was young I enjoyed build Desktop app either in C# or with
            modern technologies like Electron.js
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <AiOutlineMobile className="w-8 h-8" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Web App</h6>
          <p className="text-sm text-gray-900">
            Don't like it but ... JavaScript is so good !
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyPoint;
