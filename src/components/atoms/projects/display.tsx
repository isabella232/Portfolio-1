import Time from "@/components/projects/clock/time";
import Load from "@/components/projects/kana/game";
import IProject from "@/models/project";
import React, { useEffect } from "react";
type Props = {
  project: IProject;
  children: React.ReactNode;
};
const ProjectDisplay = ({ project, children }: Props) => {
  //* OC 1 - Nerd Galaxyline for onedark 4
  // const needBlur = project.key === 1 || project.key === 4;
  // const [isBlurred, setIsBlurred] = useState(needBlur ? false : true);
  // useEffect(() => {
  //   if (!isBlurred && project.key == 2) {
  //     Load();
  //   }
  //   if (!isBlurred && project.key == 3) {
  //     Time();
  //   }
  // }, [isBlurred]);
  useEffect(() => {
    if (project.Id == 2) {
      Load();
    }
    if (project.Id == 3) {
      Time();
    }
  }, []);
  return (
    <div className="flex items-center justify-center p-6 ">
      {children}
      {/* {!needBlur && (
        <Blur isBlurred={isBlurred} setIsBlurred={setIsBlurred}>
        </Blur>
      )}
      {needBlur && children} */}
    </div>
  );
};

export default ProjectDisplay;
