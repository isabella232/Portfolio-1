import svg from "@/atoms/shared/svg";
import React from "react";

type Props = {
  text: string;
  color: string | boolean;
  children?: React.ReactNode;
};

const BigSkillBage = ({ text, color, children }: Props) => {
  return (
    <div
      className={
        (color ? color : "text-gray-900 dark:text-gray-300") +
        " crystal-card relative flex justify-center p-4"
      }>
      <div className="absolute left-5">{svg.BigCheck}</div>
      <span className="font-medium">{text}</span>
      {children}
    </div>
  );
};

export default BigSkillBage;
