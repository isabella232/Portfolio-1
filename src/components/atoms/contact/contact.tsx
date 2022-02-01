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
      className="m-2 flex flex-col items-center text-indigo-600 sm:m-0"
      href={href}>
      <span className="text-lg font-bold">{text}</span>
      {icon}
    </motion.a>
  );
};

export default Contact;
