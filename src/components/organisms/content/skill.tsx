import BigSkillBadge from "@/components/molecules/skills/big-skill-badge";
import SkillDetailsCard from "@/molecules/skills/skill-details-card";
import {
  getElementsBelow,
  hideElementsBelow,
  showElementsBelow,
} from "@/services/skill-slider";
import { motion } from "framer-motion";
import React, { useState } from "react";

type Props = {
  id: string;
  text: string;
  children?: React.ReactNode;
  isHowTo?: boolean;
  setActiveSkill?: React.Dispatch<React.SetStateAction<string>>;
};

const currentColor = (text: string) => {
  switch (text) {
    case "C#":
      return "text-violet-500";
    case "JavaScript":
      return "text-yellow-500";
    case "React":
      return "text-sky-500";
    case "HTML & CSS":
      return "text-orange-500";
    case "Can Read":
      return "text-indigo-500";
    case "Other Skills":
      return "text-lime-500";
    default:
      return false;
  }
};

const Skill = ({ id, text, children, isHowTo, setActiveSkill }: Props) => {
  const color = currentColor(text);
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  const handleHStart = () => {
    setIsBeingHovered(true);

    if (!isHowTo && typeof setActiveSkill !== "undefined") {
      setActiveSkill(id);
    }
    const e = document.getElementById(id) as Element;
    const elementsBelow = getElementsBelow(e, ".skill");
    if (!isBeingHovered) {
      hideElementsBelow(elementsBelow);
    }
  };
  const handleHEnd = () => {
    setIsBeingHovered(false);

    const elements = Array.from(document.querySelectorAll(".skill"));
    showElementsBelow(elements);
  };

  return (
    <motion.div
      id={id}
      className={
        isHowTo
          ? "p-2 w-full cursor-pointer skill"
          : "p-2 w-full md:w-1/2  lg:w-1/3 cursor-pointer skill"
      }
      onHoverStart={() => handleHStart()}
      onHoverEnd={() => handleHEnd()}
      onTap={() => {
        isBeingHovered ? handleHEnd() : handleHStart();
      }}
    >
      <BigSkillBadge color={isBeingHovered && color} text={text}>
        {isBeingHovered && <SkillDetailsCard>{children}</SkillDetailsCard>}
      </BigSkillBadge>
    </motion.div>
  );
};

export default Skill;
