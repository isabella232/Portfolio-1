import { motion } from "framer-motion";
import React from "react";

type Props = {
  text: string;
};
const Header = ({ text }: Props) => {
  return (
    <motion.h1 className="md:text-5xl text-4xl font-semibold text-center text-white mt-10">
      {text}
    </motion.h1>
  );
};

export default Header;
