import { motion, Variants } from "framer-motion";
import React from "react";

type Props = {
  header: React.ReactNode;
  children: React.ReactNode;
  id: number;
};
const setX = (key: number): number => {
  if (key % 2 === 0) {
    return 200;
  }
  return -200;
};
const Card = ({ header, children, id }: Props) => {
  const item: Variants = {
    hidden: { opacity: 0, x: setX(id) },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "var(--box-shadow)",
      zIndex: 7,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      variants={item}
      initial={"hidden"}
      animate={"show"}
      whileHover={"hover"}
      className="card mb-8"
    >
      <header>{header}</header>
      <div className="cardBody">{children}</div>
    </motion.div>
  );
};

export default Card;
