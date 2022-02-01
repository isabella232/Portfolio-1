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
    <footer className="z-10 flex-shrink-0 bg-indigo-800 dark:bg-gray-800 dark:text-gray-400">
      <div className="container mx-auto flex flex-col items-center px-5 py-3 sm:flex-row">
        <a className="flex items-center justify-center font-medium text-white">
          <span className="ml-3 text-xl">H97</span>
        </a>
        <p className="mt-3 text-sm text-indigo-300 dark:text-gray-400 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-indigo-500 sm:p-2 sm:pl-4 sm:dark:border-gray-700">
          Copyright © 2022 - Arno Demarchi
        </p>
        <span
          className={
            router.pathname === "/contact"
              ? "hidden"
              : "mt-4 inline-flex items-center justify-center sm:ml-auto sm:mt-0 sm:justify-end"
          }>
          <motion.a
            variants={variants}
            whileHover="hover"
            className="ml-3 text-white dark:text-gray-400">
            <MdAlternateEmail />
          </motion.a>
          <motion.a
            variants={variants}
            whileHover="hover"
            className="ml-3 text-white dark:text-gray-400">
            <GoMarkGithub />
          </motion.a>
          <motion.a
            variants={variants}
            whileHover="hover"
            className="ml-3 text-white dark:text-gray-400">
            <SiLinkedin />
          </motion.a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
