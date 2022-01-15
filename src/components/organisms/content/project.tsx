import Blur from "@/components/molecules/projects/blur";
import Time from "@/components/projects/clock/time";
import Load from "@/components/projects/kana/game";
import IProject from "@/models/project";
import { motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
type Props = {
  children?: React.ReactNode;
  project: IProject;
};

function ExtractDomain(source: string) {
  let domain = source.replace("https://", " ");
  domain = domain.substring(0, domain.indexOf("/"));
  domain = domain.replace(domain.charAt(1), domain.charAt(1).toUpperCase());
  return domain;
}

const item: Variants = {
  hidden: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const Project = ({ children, project }: Props) => {
  //* OC 1 - Nerd Galaxyline for onedark 4
  const condition = project.key === 1 || project.key === 4;
  const [isBlurred, setIsBlurred] = useState(condition ? false : true);
  useEffect(() => {
    if (!isBlurred && project.key == 2) {
      Load();
    }
    if (!isBlurred && project.key == 3) {
      Time();
    }
  }, [isBlurred]);
  return (
    <motion.div variants={item}>
      <div className="shadow-xl flex flex-col lg:flex-row my-8 mx-auto sm:w-max bg-gray-800 rounded-2xl">
        <div className="">
          <div className="p-7 -mt-4">
            <p className="text-2xl font-bold">{project.title}</p>
            {/* <p className=" p-2 font-semibold">- {project.subtitle}</p> */}

            <div className="max-w-lg p-2">
              {project.description.split(". ").map((d) => {
                return <p>{d}</p>;
              })}
            </div>
            {project.sources && (
              <div className="flex">
                <span className="p-2 font-semibold">Sources :</span>
                {project.sources.map((source) => {
                  let domain = ExtractDomain(source);
                  return (
                    <span className="p-2 font-semibold hover:text-indigo-500">
                      <a href={source}>{domain}</a>
                    </span>
                  );
                })}
              </div>
            )}
            <div className="py-4 max-w-lg">
              <p className="font-semibold">Features : </p>
              {project.features.map((feature) => {
                return (
                  <button className="feature p-4 mt-4 ml-3 text-xs rounded-xl hover:scale-110">
                    {feature}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-6 ">
          {!condition && (
            <Blur isBlurred={isBlurred} setIsBlurred={setIsBlurred}>
              {children}
            </Blur>
          )}
          {condition && children}
        </div>
        <div className="flex flex-col items-center justify-center p-2 group">
          <p className="text-center font-semibold m-4 group-hover:text-indigo-600 group-hover:scale-105 duration-300">
            Download / Clone :
          </p>
          <a
            className="bg-gray-900 rounded-full w-min text-5xl p-4 cursor-pointer"
            href={project.link.h}
            target="_blank"
            rel="noopener"
          >
            {project.link.i()}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
