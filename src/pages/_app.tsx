import Layout from "@/layouts/layout";
import "@/styles/badge.scss";
import "@/styles/darkmode-btn.scss";
import "@/styles/ghibli.scss";
import "@/styles/global.scss";
import "@/styles/howtodeck.scss";
import "@/styles/liquid-btn.scss";
import "@/styles/loader.scss";
import "@/styles/projects/clock.scss";
import "@/styles/projects/kana.scss";
import "@egjs/react-flicking/dist/flicking.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import "tippy.js/dist/tippy.css";

function App({ Component, pageProps }: AppProps) {
  const fonts = ["Montserrat", "Montserrat Alternates"];
  let rng = Math.floor(Math.random() * fonts.length);
  useEffect(() => {
    document.documentElement.style.fontFamily = fonts[rng];
  }, []);
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter={true}>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default App;
