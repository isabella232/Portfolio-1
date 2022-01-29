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
      <span className="text-gray-900 bg-gray-300 dark:text-white dark:bg-gray-800 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
        {svg.SmallCheck}
      </span>
      <span className="text-gray-900 dark:text-white">{text}</span>
    </motion.span>
  );
};

export default SmallSkillBadge;
