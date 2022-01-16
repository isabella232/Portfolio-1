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
        (color ? color : "text-gray-300") +
        " relative bg-blue-600 dark:bg-gray-800 rounded p-4 flex justify-center"
      }
    >
      <div className="absolute left-5">{svg.BigCheck}</div>
      <span className="font-medium">{text}</span>
      {children}
    </div>
  );
};

export default BigSkillBage;
