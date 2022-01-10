import Footer from "@/organisms/footer/footer";
import Navbar from "@/organisms/navbar/navbar";
import { AnimatePresence } from "framer-motion";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="h-full bg-indigo-400 dark:bg-gray-900">
      <div className="flex flex-col items-stretch min-h-full">
        <Navbar />
        <main className="flex-shrink-0 flex-grow">
          <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
