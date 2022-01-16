import Header from "@/components/atoms/shared/header";
import Carousel from "@/components/projects/openclassrooms/Carousel";
import ProjectsData from "@/data/Projects";
import Project from "@/organisms/content/project";
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
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
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
      <motion.div variants={container}>
        {ProjectsData.map((project) => {
          const condition = project.component === "Carousel";
          return (
            <Project project={project}>
              {condition ? <Carousel /> : project.component}
            </Project>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default ProjectsPage;
