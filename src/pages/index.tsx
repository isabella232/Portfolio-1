import Hero from "@/components/molecules/index/hero";
import IndexSkills from "@/components/molecules/index/skills";
import KeyPoints from "@/components/organisms/content/keypoints";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import React, { useEffect } from "react";
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
      className="container mx-auto py-10">
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col p-2 text-center text-gray-900 dark:text-white sm:p-0">
        <Hero />
        <KeyPoints />
        <IndexSkills />
      </div>
    </motion.section>
  );
};

export default HomePage;
