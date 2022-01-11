import Loader from "@/components/atoms/loader";
import Lorem from "@/components/organisms/content/lorem";
import ILorem from "@/models/lorem";
import { LoremsCol } from "@/services/firebase";
import typingcarousel from "@/services/typingcarousel";
import { getDocs } from "firebase/firestore";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import React, { RefObject, useEffect, useRef, useState } from "react";

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
  const [isLoading, setIsLoading] = useState(true);
  const [lorems, setLorems] = useState<ILorem[]>([]);
  useEffect(() => {
    readLorems().then((data) => {
      setLorems(data);
      setIsLoading(false);
    });
  }, []);
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
        animate="show"
        className="container px-5 mx-auto"
      >
        {isLoading && <Loader />}
        {!isLoading &&
          lorems
            .sort((a, b) => a.Id - b.Id)
            .map((lorem) => {
              let descriptionText = lorem.body.split(". ");
              return (
                <Lorem
                  key={lorem.Id}
                  id={lorem.Id}
                  icon={lorem.icon}
                  h2={lorem.head}
                  p={descriptionText}
                />
              );
            })}
      </motion.div>
    </motion.section>
  );
};

const readLorems = async () => {
  const loremsSnapshot = await getDocs(LoremsCol);
  let lorems: ILorem[] = [];
  loremsSnapshot.docs.forEach((loremDoc) => {
    lorems.push(loremDoc.data());
  });
  return lorems;
};

export default Me;
