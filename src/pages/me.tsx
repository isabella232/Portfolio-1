import Lorem from "@/components/organisms/content/lorem";
import LoremsData from "@/data/Lorems";
import typingcarousel from "@/services/typingcarousel";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import React, { RefObject, useEffect, useRef } from "react";

const page: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const Me = () => {
  const headerRef = useRef<HTMLHeadingElement>();
  useEffect(() => {
    setTimeout(() => {
      typingcarousel(headerRef.current);
    }, 500);
  }, [headerRef]);
  return (
    <motion.section variants={page} initial={"hidden"} animate={"show"}>
      <Head>
        <title>Me</title>
      </Head>
      <div className="flex justify-center items-center">
        <h1
          ref={headerRef as RefObject<HTMLHeadingElement>}
          className="md:text-5xl text-4xl font-semibold text-center text-white my-10"
        >
          {"‎"}
        </h1>
        <span className="input-cursor w-0.5 h-10 bg-white ml-2"></span>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container px-5 mx-auto"
      >
        {LoremsData.map((lorem) => {
          let descriptionText = lorem.body.split(". ");

          return (
            <Lorem
              key={lorem.key}
              id={lorem.key}
              icon={lorem.icon}
              h2={lorem.head}
              p={descriptionText}
              color={lorem.color}
            />
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Me;
