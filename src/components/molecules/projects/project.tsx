import ProjectAbout from "@/components/atoms/projects/about";
import ProjectDisplay from "@/components/atoms/projects/display";
import ProjectText from "@/components/atoms/projects/text";
import IProject from "@/models/project";
import { motion, Variants } from "framer-motion";
import React from "react";

type Props = {
  project: IProject;
  children?: React.ReactNode;
};

const item: Variants = {
  hidden: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const Project = ({ project, children }: Props) => {
  return (
    <motion.div variants={item}>
      <div className="crystal-card my-8 mx-auto flex flex-col p-2 lg:flex-row">
        <ProjectText project={project} />
        <ProjectDisplay project={project} children={children} />
        <ProjectAbout project={project} />
      </div>
    </motion.div>
  );
};

export default Project;
