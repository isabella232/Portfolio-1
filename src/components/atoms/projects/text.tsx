import IProject from "@/models/project";
import { nanoid } from "nanoid";
import React from "react";
type Props = {
  project: IProject;
};

function ExtractDomain(source: string) {
  let domain = source.replace("https://", " ");
  domain = domain.substring(0, domain.indexOf("/"));
  domain = domain.replace(domain.charAt(1), domain.charAt(1).toUpperCase());
  return domain;
}

const ProjectText = ({ project }: Props) => {
  return (
    <div className="-mt-4 p-7 text-gray-900 dark:text-white">
      <p className="text-2xl font-bold">{project.title}</p>
      <div className="max-w-lg p-2">
        {project.description.split(". ").map((d) => {
          return <p key={nanoid()}>{d}</p>;
        })}
      </div>
      {project.sources && (
        <div className="flex">
          <span className="p-2 font-semibold">Sources :</span>
          {project.sources.map((source) => {
            let domain = ExtractDomain(source);
            return (
              <span
                key={nanoid()}
                className="p-2 font-semibold hover:text-indigo-500">
                <a href={source}>{domain}</a>
              </span>
            );
          })}
        </div>
      )}
      <div className="max-w-lg py-4">
        <p className="font-semibold">Features : </p>
        {project.features.map((feature) => {
          return (
            <button
              key={nanoid()}
              className="feature mt-4 ml-3 rounded-xl p-4 text-xs hover:scale-110">
              {feature}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectText;
