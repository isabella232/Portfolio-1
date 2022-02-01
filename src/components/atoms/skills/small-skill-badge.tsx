import svg from "@/atoms/shared/svg";
import { motion, Variants } from "framer-motion";
import React from "react";

type Props = {
  text: string;
};
const variants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
};
const SmallSkillBadge = ({ text }: Props) => {
  return (
    <motion.span variants={variants}>
      <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-gray-300 text-gray-900 dark:bg-gray-800 dark:text-white">
        {svg.SmallCheck}
      </span>
      <span className="text-gray-900 dark:text-white">{text}</span>
    </motion.span>
  );
};

export default SmallSkillBadge;
