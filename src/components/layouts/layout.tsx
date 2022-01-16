import Ghibli from "@/components/molecules/ghibli/ghibli";
import Footer from "@/organisms/footer/footer";
import Navbar from "@/organisms/navbar/navbar";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="h-full bg-indigo-400 dark:bg-gray-900">
        <div className="flex flex-col items-stretch min-h-full">
          <Navbar />
          <Ghibli />
          <main className="flex-shrink-0 flex-grow z-20">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
