import React from "react";

type Props = {
  h2: string;
  children: React.ReactNode;
};

const H2P = ({ h2, children }: Props) => {
  return (
    <div className="text-gray-900 dark:text-white flex-grow sm:text-left text-center mt-6 sm:mt-0 ">
      <h2 className="dark:text-gray-200 text-lg font-medium mb-2">{h2}</h2>
      {children}
    </div>
  );
};

export default H2P;
