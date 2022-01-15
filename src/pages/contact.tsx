import Header from "@/components/atoms/header";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { MdAlternateEmail } from "react-icons/md";
import { SiFacebook, SiLinkedin, SiTwitter } from "react-icons/si";
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
const item: Variants = {
  hidden: { opacity: 0, x: 200 },
  show: { opacity: 1, x: 0, transition: { ease: "easeInOut" } },
};

const Contact = () => {
  return (
    <motion.section
      variants={page}
      initial={"hidden"}
      animate={"show"}
      className="container mx-auto"
    >
      <Head>
        <title>Contact</title>
      </Head>
      <Header text="Contact" />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col sm:flex-row sm:my-40 my-10 justify-evenly items-center text-6xl sm:text-7xl text-indigo-500"
      >
        <motion.a
          variants={item}
          className="flex flex-col items-center m-2 sm:m-0"
          href="mailto:arno.demarchi.8@gmail.com"
        >
          <MdAlternateEmail />
          <span className="text-lg text-white">MailTo</span>
        </motion.a>
        <motion.a
          variants={item}
          className="flex flex-col items-center m-2 sm:m-0"
          href="https://github.com/H97-Git/"
        >
          <GoMarkGithub />
          <span className="text-lg text-white">GitHub</span>
        </motion.a>
        <motion.a
          variants={item}
          className="flex flex-col items-center m-2 sm:m-0"
          href="https://www.linkedin.com/in/arno-demarchi-6aaa54151/"
        >
          <SiLinkedin />
          <span className="text-lg text-white">LinkedIn</span>
        </motion.a>
        <motion.a
          variants={item}
          className="flex flex-col items-center m-2 sm:m-0"
          href="https://www.linkedin.com/in/arno-demarchi-6aaa54151/"
        >
          <SiFacebook />
          <span className="text-lg text-white">Facebook</span>
        </motion.a>
        <motion.a
          variants={item}
          className="flex flex-col items-center m-2 sm:m-0"
          href="https://www.linkedin.com/in/arno-demarchi-6aaa54151/"
        >
          <SiTwitter />
          <span className="text-lg text-white">Twitter</span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
