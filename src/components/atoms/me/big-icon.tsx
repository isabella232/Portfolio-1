import SVG from "@/atoms/shared/svg";
import { motion, Variants } from "framer-motion";
import React from "react";
import { DiDotnet } from "react-icons/di";
import { FcEngineering } from "react-icons/fc";
import { SiCplusplus, SiCsharp, SiDotnet, SiElectron } from "react-icons/si";
type Props = {
  icon: string;
  isRight?: boolean;
};

const variants: Variants = {
  hover: {
    scale: 1.3,
    rotateZ: 360,
  },
};

const setIcon = (icon: string) => {
  switch (icon) {
    case "DiDotnet":
      return (
        <div
          className={"text-5xl sm:text-7xl text-violet-700 hover:text-blue-600"}
        >
          <DiDotnet />
        </div>
      );
    case "SiDotnet":
      return (
        <div
          className={"text-5xl sm:text-7xl text-violet-700 hover:text-blue-600"}
        >
          <SiDotnet />
        </div>
      );
    case "SiCsharp":
      return (
        <div className={"text-5xl sm:text-7xl text-violet-600"}>
          <SiCsharp />
        </div>
      );
    case "SiElectron":
      return (
        <div className={"text-5xl sm:text-7xl text-teal-500"}>
          <SiElectron />
        </div>
      );
    case "SiCplusplus":
      return (
        <div className={"text-5xl sm:text-7xl text-blue-600"}>
          <SiCplusplus />
        </div>
      );
    case "FcEngineering":
      return (
        <div className={"text-5xl sm:text-7xl"}>
          <FcEngineering />
        </div>
      );
    default:
      return SVG.scissors;
  }
};

const BigIcon = ({ icon, isRight }: Props) => {
  const rightClasses = "sm:order-none order-first sm:ml-10";
  const leftClass = "sm:mr-10";
  let iconNode = setIcon(icon);
  return (
    <motion.div
      whileHover="hover"
      whileTap="hover"
      variants={variants}
      className={
        "sm:w-32 sm:h-32 h-20 w-20 inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 flex-shrink-0 " +
        (isRight ? rightClasses : leftClass)
      }
    >
      {iconNode}
    </motion.div>
  );
};

export default BigIcon;
