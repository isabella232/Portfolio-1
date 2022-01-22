import IProject from "@/models/project";
import React from "react";
type Props = {
  project: IProject;
};
const ProjectAbout = ({ project }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 group">
      <p className="text-center font-semibold m-4 group-hover:text-indigo-600 group-hover:scale-105 duration-300">
        Download / Clone :
      </p>
      <a
        className="bg-black rounded-full w-min text-5xl p-4 cursor-pointer"
        href={project.link.h}
        target="_blank"
        rel="noopener"
      >
        {project.link.i()}
      </a>
    </div>
  );
};

export default ProjectAbout;
