import React from "react";

type Props = {
  h2: string;
  children: React.ReactNode;
};

const H2P = ({ h2, children }: Props) => {
  return (
    <div className="mt-6 flex-grow text-center text-gray-900 dark:text-white sm:mt-0 sm:text-left ">
      <h2 className="mb-2 text-lg font-medium dark:text-gray-200">{h2}</h2>
      {children}
    </div>
  );
};

export default H2P;
