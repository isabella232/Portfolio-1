import IProject from "@/models/project";
import React from "react";
import { GoMarkGithub } from "react-icons/go";
type Props = {
  project: IProject;
};
const ProjectAbout = ({ project }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 group">
      <p className="text-center font-semibold m-4 text-gray-900 dark:text-white group-hover:text-indigo-600 group-hover:scale-105 duration-300">
        Download / Clone :
      </p>
      <a
        className="bg-black rounded-full w-min text-5xl p-4 cursor-pointer"
        href={project.link}
        target="_blank"
        rel="noopener"
      >
        <GoMarkGithub />
      </a>
    </div>
  );
};

export default ProjectAbout;
