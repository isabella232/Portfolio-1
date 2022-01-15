import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { MdAlternateEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
let variants: Variants = {
  hover: { scale: 1.3, cursor: "pointer" },
};
const Footer = () => {
  const router = useRouter();

  return (
    <footer className="flex-shrink-0 z-30 dark:text-gray-400 bg-indigo-800 dark:bg-gray-800">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex font-medium items-center justify-center text-white">
          <span>Beta : 0.1.0</span>
          <span className="ml-3 text-xl">H97</span>
        </a>
        <p className="text-sm text-indigo-300 dark:text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:dark:border-gray-700 sm:border-indigo-500 sm:p-2 sm:mt-0 mt-3">
          Copyright © 2021 - Arno Demarchi
        </p>
        <span
          className={
            router.pathname === "/contact"
              ? "hidden"
              : "inline-flex justify-center items-center sm:ml-auto sm:mt-0 mt-4 sm:justify-end"
          }
        >
          <motion.a
            variants={variants}
            whileHover="hover"
            className="ml-3 text-white dark:text-gray-400"
          >
            <MdAlternateEmail />
          </motion.a>
          <motion.a
            variants={variants}
            whileHover="hover"
            className="ml-3 text-white dark:text-gray-400"
          >
            <GoMarkGithub />
          </motion.a>
          <motion.a
            variants={variants}
            whileHover="hover"
            className="ml-3 text-white dark:text-gray-400"
          >
            <SiLinkedin />
          </motion.a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
