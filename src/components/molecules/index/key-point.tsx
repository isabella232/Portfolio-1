import React from "react";
import { CgWebsite } from "react-icons/cg";
import { GoDesktopDownload } from "react-icons/go";
import { VscDeviceMobile } from "react-icons/vsc";

type Props = {
  icon: string;
  title: string;
  text: string;
};
const setIcon = (icon: string) => {
  switch (icon) {
    case "GoDesktopDownload":
      return <GoDesktopDownload className="w-7 h-7 text-white" />;
    case "CgWebsite":
      return <CgWebsite className="w-7 h-7 text-white" />;
    case "VscDeviceMobile":
      return <VscDeviceMobile className="w-7 h-7 text-white" />;
  }
};
const KeyPoint = ({ icon, title, text }: Props) => {
  return (
    <div className="p-5 duration-300 transform crystal-card shadow-sm hover:-translate-y-2">
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-500">
        {setIcon(icon)}
      </div>
      <h6 className="mb-2 font-semibold">{title}</h6>
      <p className="text-sm p-4 w-64 h-32">{text}</p>
    </div>
  );
};

export default KeyPoint;
