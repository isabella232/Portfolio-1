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
            ? "absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 justify-center rounded-lg bg-blue-600 py-2 px-4 text-center text-white shadow-md transition duration-300 ease-in hover:bg-blue-700"
            : "hidden"
        }>
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
