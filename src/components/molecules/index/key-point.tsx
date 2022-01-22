import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
};
const KeyPoint = ({ icon, title, text }: Props) => {
  return (
    <div className="p-5 duration-300 transform bg-gray-900/75 border border-gray-700 rounded shadow-sm hover:-translate-y-2">
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-500">
        {icon}
      </div>
      <h6 className="mb-2 font-semibold">{title}</h6>
      <p className="text-sm p-4 w-64 h-32">{text}</p>
    </div>
  );
};

export default KeyPoint;
