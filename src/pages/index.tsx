import Hero from "@/components/molecules/index/hero";
import KeyPoint from "@/components/molecules/index/key-point";
import IndexSkills from "@/components/molecules/index/skills";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import React, { useEffect } from "react";
import { CgWebsite } from "react-icons/cg";
import { GoDesktopDownload } from "react-icons/go";
import { VscDeviceMobile } from "react-icons/vsc";
const page: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const HomePage = () => {
  useEffect(() => {}, []);
  return (
    <motion.section
      variants={page}
      initial={"hidden"}
      animate={"show"}
      exit={"exit"}
      className="container py-10 mx-auto"
    >
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col text-center p-2 sm:p-0 text-indigo-600 dark:text-white">
        <Hero />

        <div className="flex flex-col space-y-4 lg:flex-row justify-evenly lg:space-x-8 lg:space-y-0 items-center mb-8 text-indigo-700 dark:text-white">
          <KeyPoint
            icon={<GoDesktopDownload className="w-7 h-7 text-white" />}
            title={"Desktop App"}
            text={
              "In my youth I liked to make tools in C#. Since then I've always preferred Software development."
            }
          />
          <KeyPoint
            icon={<CgWebsite className="w-7 h-7 text-white" />}
            title={"Web App"}
            text={
              "At first I didn't like Web development. If there was no JavaScript I won't do any Web. Now we have TypeScript or how to make JS looks like C#."
            }
          />
          <KeyPoint
            icon={<VscDeviceMobile className="w-7 h-7 text-white" />}
            title={"Mobile App"}
            text={
              "Only recently the Mobile development picked my interest with React Native, Flutter & soon MAUI. I will try them this year."
            }
          />
        </div>

        <IndexSkills />
      </div>
    </motion.section>
  );
};

export default HomePage;
