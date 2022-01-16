import Liquid from "@/components/atoms/skills/liquid";
import { motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import tippy from "tippy.js";

type Props = {
  Id?: string;
  icon: React.ReactNode;
  color: string;
  power: "full" | "almost" | "half" | "low" | "lowest";
};
const variants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Badge = ({ Id, icon, color, power }: Props) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  useEffect(() => {
    tippy("#" + Id, {
      content: Id?.replace("b_", "").replace("_", " "),
    });
  }, []);
  return (
    <motion.div
      variants={variants}
      onMouseOver={() => setIsBeingHovered(true)}
      exit={"exit"}
      className="flex flex-col items-center mx-2"
      id={Id}
    >
      <article className={"badge " + color}>
        <div className="badgeRounded">{icon}</div>
        {!isBeingHovered && <Liquid power={power} />}
      </article>
      <span className="text-indigo-500 font-semibold">
        LVL : <span className="text-white">{power.toUpperCase()}</span>{" "}
      </span>
    </motion.div>
  );
};

export default Badge;
