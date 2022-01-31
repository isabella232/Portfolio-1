import Time from "@/components/projects/clock/time";
import Load from "@/components/projects/kana/game";
import IProject from "@/models/project";
import React, { useEffect } from "react";
type Props = {
  project: IProject;
  children: React.ReactNode;
};
const ProjectDisplay = ({ project, children }: Props) => {
  useEffect(() => {
    if (project.Id == 2) {
      Load();
    }
    if (project.Id == 3) {
      Time();
    }
  }, []);
  return (
    <div className="hidden sm:flex items-center justify-center p-6">
      {children}
    </div>
  );
};

export default ProjectDisplay;
