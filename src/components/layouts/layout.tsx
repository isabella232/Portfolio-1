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
      <div className="h-full w-full">
        <div className="flex min-h-screen flex-col items-stretch">
          <Navbar />
          <Ghibli />
          <main className="z-20 flex-shrink-0 flex-grow">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
