import Landing from "@/components/organisms/content/landing";
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

const Home = () => {
  useEffect(() => {}, []);
  return (
    <motion.section
      variants={page}
      initial={"hidden"}
      animate={"show"}
      exit={"exit"}
      className="py-20 mx-auto max-w-md md:max-w-lg"
    >
      <Head>
        <title>Home</title>
      </Head>
      <Landing />
    </motion.section>
  );
};

export default Home;
