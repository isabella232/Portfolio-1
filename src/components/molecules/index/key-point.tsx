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
      return <GoDesktopDownload className="h-7 w-7 text-white" />;
    case "CgWebsite":
      return <CgWebsite className="h-7 w-7 text-white" />;
    case "VscDeviceMobile":
      return <VscDeviceMobile className="h-7 w-7 text-white" />;
  }
};
const KeyPoint = ({ icon, title, text }: Props) => {
  return (
    <div className="crystal-card transform p-5 shadow-sm duration-300 hover:-translate-y-2">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500">
        {setIcon(icon)}
      </div>
      <h6 className="mb-2 font-semibold">{title}</h6>
      <p className="h-32 w-64 p-4 text-sm">{text}</p>
    </div>
  );
};

export default KeyPoint;
