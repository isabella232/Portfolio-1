import { motion, Variants } from "framer-motion";
import React from "react";

type Props = {
  icon: React.ReactNode;
  href: string;
  text: string;
};

const item: Variants = {
  hidden: { opacity: 0, x: 200 },
  show: { opacity: 1, x: 0, transition: { ease: "easeInOut" } },
};

const Contact = ({ icon, href, text }: Props) => {
  return (
    <motion.a
      variants={item}
      className="flex flex-col items-center m-2 sm:m-0"
      href={href}
    >
      {icon}
      <span className="text-lg text-white">{text}</span>
    </motion.a>
  );
};

export default Contact;
