import IProject from "@/models/project";
import React from "react";
import { GoMarkGithub } from "react-icons/go";
type Props = {
  project: IProject;
};
const ProjectAbout = ({ project }: Props) => {
  return (
    <div className="group flex flex-col items-center justify-center p-2">
      <p className="m-4 text-center font-semibold text-gray-900 duration-300 group-hover:scale-105 group-hover:text-indigo-600 dark:text-white">
        Download / Clone :
      </p>
      <a
        className="w-min cursor-pointer rounded-full bg-black p-4 text-5xl"
        href={project.link}
        target="_blank"
        rel="noopener">
        <GoMarkGithub />
      </a>
    </div>
  );
};

export default ProjectAbout;
