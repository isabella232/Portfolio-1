import React, { useEffect } from "react";

const Page404 = () => {
  useEffect(() => {}, []);
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <p className="font-semibold text-white text-4xl">404, page not found.</p>
    </div>
  );
};

export default Page404;
