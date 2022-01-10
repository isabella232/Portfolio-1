import React from "react";
import { FcStart } from "react-icons/fc";
type Props = {
  isBlurred: boolean;
  setIsBlurred: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
};

const Blur = ({ isBlurred, setIsBlurred, children }: Props) => {
  const handleClick = () => {
    setIsBlurred(false);
  };
  return (
    <div className="relative w-max">
      <button
        type="button"
        onClick={handleClick}
        className={
          isBlurred
            ? "absolute py-2 px-4 flex justify-center bg-blue-600 hover:bg-blue-700 text-white transition ease-in duration-300 text-center shadow-md rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"
            : "hidden"
        }
      >
        <a className="text-2xl">
          <FcStart />
        </a>{" "}
        Play
      </button>
      <div className={isBlurred ? "blur-sm" : undefined}>{children}</div>
    </div>
  );
};

export default Blur;
