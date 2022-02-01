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
    <div className="crystal-card m-8 p-8">
      <div className="m-5 flex flex-col items-center justify-evenly text-center text-8xl sm:flex-row">
        <div
          className="p-2 text-cyan-600"
          data-tippy-content="npx create-react-app">
          <a href="https://reactjs.org">
            <SiReact />
          </a>
          <p className="mt-2 text-sm font-bold text-gray-900 dark:text-white">
            React
          </p>
        </div>
        <div
          className="p-2 text-black"
          data-tippy-content="npx create-next-app">
          <a href="https://nextjs.org">
            <SiNextdotjs />
          </a>
          <p className="mt-2 text-sm font-bold text-gray-900 dark:text-white">
            Next
          </p>
        </div>
        <div
          className="p-2 text-yellow-400"
          data-tippy-content="yarn add firebase">
          <a href="https://firebase.google.com">
            <SiFirebase />
          </a>
          <p className="mt-2 text-sm font-bold text-gray-900 dark:text-white">
            Firebase
          </p>
        </div>
      </div>
      <motion.span
        variants={item}
        className="text-2xl text-gray-900 dark:text-white">
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
