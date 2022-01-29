import { motion, Variants } from "framer-motion";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const SkillDetailsCard = ({ children }: Props) => {
  return (
    <motion.div
      variants={variants}
      initial={"hidden"}
      animate={"show"}
      className="absolute z-40 mt-14 p-5 crystal-card"
    >
      <h2 className="font-bold tracking-widest text-gray-900 dark:text-white mb-4 text-sm text-center uppercase">
        Skill Details
      </h2>
      <nav className="text-white flex flex-col items-start -mb-1 space-y-2">
        {children}
      </nav>
    </motion.div>
  );
};

export default SkillDetailsCard;
