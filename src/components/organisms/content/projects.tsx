import Project from "@/components/molecules/projects/project";
import Kana from "@/components/projects/kana/kana";
import Carousel from "@/components/projects/openclassrooms/Carousel";
import ProjectsData from "@/data/Projects";
import { motion, Variants } from "framer-motion";
import { nanoid } from "nanoid";
import React from "react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const Projects = () => {
  return (
    <motion.div variants={container}>
      {ProjectsData.map((project) => {
        const conditionC = project.component === "Carousel";
        const conditionK = project.component === "Kana";
        return (
          <Project key={nanoid()} project={project}>
            {conditionC && <Carousel />}
            {conditionK && <Kana />}
            {!conditionC && !conditionK && project.component}
          </Project>
        );
      })}
    </motion.div>
  );
};

export default Projects;
