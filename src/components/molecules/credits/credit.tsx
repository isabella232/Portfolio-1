import { motion, Variants } from "framer-motion";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { SiFirebase, SiNextdotjs, SiReact } from "react-icons/si";

const item: Variants = {
  hidden: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const Credit = () => {
  return (
    <div className="m-8 p-8 crystal-card">
      <div className="flex flex-col items-center sm:flex-row text-8xl justify-evenly m-5 text-center">
        <div
          className="text-cyan-600 p-2"
          data-tippy-content="npx create-react-app"
        >
          <a href="https://reactjs.org">
            <SiReact />
          </a>
          <p className="text-sm font-bold text-gray-900 dark:text-white mt-2">
            React
          </p>
        </div>
        <div
          className="text-black p-2"
          data-tippy-content="npx create-next-app"
        >
          <a href="https://nextjs.org">
            <SiNextdotjs />
          </a>
          <p className="text-sm font-bold text-gray-900 dark:text-white mt-2">
            Next
          </p>
        </div>
        <div
          className="text-yellow-400 p-2"
          data-tippy-content="yarn add firebase"
        >
          <a href="https://firebase.google.com">
            <SiFirebase />
          </a>
          <p className="text-sm font-bold text-gray-900 dark:text-white mt-2">
            Firebase
          </p>
        </div>
      </div>
      <motion.span
        variants={item}
        className="text-gray-900 dark:text-white text-2xl"
      >
        Made with{" "}
        <span className="inline-block text-xl">
          <FaHeart />
        </span>{" "}
        from France.
      </motion.span>
    </div>
  );
};

export default Credit;
