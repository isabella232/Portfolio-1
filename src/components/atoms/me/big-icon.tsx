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
          className={
            "text-5xl text-violet-700 hover:text-blue-600 sm:text-7xl"
          }>
          <DiDotnet />
        </div>
      );
    case "SiDotnet":
      return (
        <div
          className={
            "text-5xl text-violet-700 hover:text-blue-600 sm:text-7xl"
          }>
          <SiDotnet />
        </div>
      );
    case "SiCsharp":
      return (
        <div className={"text-5xl text-violet-600 sm:text-7xl"}>
          <SiCsharp />
        </div>
      );
    case "SiElectron":
      return (
        <div className={"text-5xl text-teal-500 sm:text-7xl"}>
          <SiElectron />
        </div>
      );
    case "SiCplusplus":
      return (
        <div className={"text-5xl text-blue-600 sm:text-7xl"}>
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
        "inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 sm:h-32 sm:w-32 " +
        (isRight ? rightClasses : leftClass)
      }>
      {iconNode}
    </motion.div>
  );
};

export default BigIcon;
