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
      <span className="bg-white dark:bg-gray-900  w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
        {svg.SmallCheck}
      </span>
      {text}
    </motion.span>
  );
};

export default SmallSkillBadge;
