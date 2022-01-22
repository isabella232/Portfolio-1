import Header from "@/components/atoms/shared/header";
import Projects from "@/components/organisms/content/projects";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import React from "react";

const page: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};
const ProjectsPage = () => {
  return (
    <motion.section
      variants={page}
      initial={"hidden"}
      animate={"show"}
      className="container mx-auto text-white"
    >
      <Head>
        <title>Projects</title>
      </Head>
      <Header text="Projects" />
      <Projects />
    </motion.section>
  );
};

export default ProjectsPage;
