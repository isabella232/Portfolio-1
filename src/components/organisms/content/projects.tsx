import Loader from "@/components/atoms/shared/loader";
import Project from "@/components/molecules/projects/project";
import Kana from "@/components/projects/kana/kana";
import Carousel from "@/components/projects/openclassrooms/Carousel";
import IProject from "@/models/project";
import { ProjectsCol } from "@/services/firebase";
import { getDocs } from "firebase/firestore";
import { motion, Variants } from "framer-motion";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";

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
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<IProject[]>([]);
  useEffect(() => {
    readProjects().then((data) => {
      setProjects(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <motion.div variants={container}>
          {projects.map((project) => {
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
      )}
    </>
  );
};

const readProjects = async () => {
  const skillsSnapshot = await getDocs(ProjectsCol);
  let skills: IProject[] = [];
  skillsSnapshot.docs.forEach((skillDoc) => {
    skills.push(skillDoc.data());
  });
  return skills;
};

export default Projects;
