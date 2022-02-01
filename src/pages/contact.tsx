import Contact from "@/components/atoms/contact/contact";
import Header from "@/components/atoms/shared/header";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { MdAlternateEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
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

const ContactPage = () => {
  return (
    <motion.section
      variants={page}
      initial={"hidden"}
      animate={"show"}
      className="container mx-auto">
      <Head>
        <title>Contact</title>
      </Head>
      <Header text="Contact" />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="my-10 flex flex-col items-center justify-evenly text-6xl sm:my-40 sm:flex-row sm:text-7xl">
        <Contact
          icon={<MdAlternateEmail />}
          href={"mailto:arno.demarchi.8@gmail.com"}
          text={"MailTo"}
        />
        <Contact
          icon={<GoMarkGithub />}
          href={"https://github.com/H97-Git/"}
          text={"GitHub"}
        />
        <Contact
          icon={<SiLinkedin />}
          href={"https://www.linkedin.com/in/arno-demarchi-6aaa54151/"}
          text={"LinkedIn"}
        />
        {/* <Contact icon={<SiFacebook />} href={""} text={"Facebook"} />
        <Contact icon={<SiTwitter />} href={""} text={"Twitter"} /> */}
      </motion.div>
    </motion.section>
  );
};

export default ContactPage;
