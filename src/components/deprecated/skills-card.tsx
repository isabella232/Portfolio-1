import React from "react";
import Link from "next/link";
const SkillsCard = () => {
  return (
    <div className="shadow-lg rounded-xl w-60 md:w-72 p-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100 relative overflow-hidden">
      <div className="w-full">
        <Link href="/skills">
          <p className="cursor-pointer text-gray-700 dark:text-white  text-2xl font-light mb-4 transform hover:scale-110 hover:translate-x-10 transition ease-out">
            My Skills
          </p>
        </Link>
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <p>C#</p>
        </div>
        <div className="w-full h-2 bg-indigo-100 rounded-full mb-4">
          <div className="w-full h-full text-center text-xs text-white bg-purple-700 rounded-full"></div>
        </div>
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <p>JS</p>
        </div>
        <div className="w-full h-2 bg-indigo-100 rounded-full mb-4">
          <div className="w-2/3 h-full text-center text-xs text-white bg-yellow-300 rounded-full"></div>
        </div>
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <p>Python</p>
        </div>
        <div className="w-full h-2 bg-indigo-100 rounded-full mb-4">
          <div className="w-1/3 h-full text-center text-xs text-white bg-blue-500 rounded-full"></div>
        </div>
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <p>C++</p>
        </div>
        <div className="w-full h-2 bg-indigo-100 rounded-full mb-4">
          <div className="w-1/6 h-full text-center text-xs text-white bg-indigo-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
