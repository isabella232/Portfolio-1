import Header from "@/components/atoms/shared/header";
import SVG from "@/components/atoms/shared/svg";
import Thanks from "@/components/atoms/shared/thanks";
import SmallSkillBadge from "@/components/atoms/skills/small-skill-badge";
import Card from "@/components/molecules/credits/card";
import Credit from "@/components/molecules/credits/credit";
import CreditGhibli from "@/components/molecules/credits/credit-ghibli";
import Lorem from "@/components/molecules/me/lorem";
import Skill from "@/components/molecules/skills/skill";
import Deck from "@/components/organisms/content/deck";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import React, { useEffect } from "react";
import { RiArticleLine } from "react-icons/ri";
import tippy from "tippy.js";

const page: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};
const HowToPage = () => {
  useEffect(() => {
    tippy("[data-tippy-content]");
  }, []);
  return (
    <motion.section
      variants={page}
      initial={"hidden"}
      animate={"show"}
      className="container mx-auto text-gray-900 dark:text-white">
      <Head>
        <title>Credits</title>
      </Head>
      <Header text="Credits" />
      <Credit />
      <p className="mb-8 text-center text-3xl font-semibold">
        Credits <a href="https://tailwindcss.com">Tailwind</a>
      </p>
      <Deck>
        <Card
          Id={1}
          header={
            <Thanks
              source={{
                href: "https://tailblocks.cc/",
                text: "Tailblocks.cc",
              }}
              link={{ href: "/me", text: "Me" }}
            />
          }>
          <div className="mx-auto flex flex-col items-center sm:flex-row">
            <Lorem
              Id={0}
              h2="The Catalyzer"
              p={[
                "Blue bottle rucifix vinyl post-ironic four dollar toast vegan taxidermy.",
                "Gastropub indxgo juice poutine.",
              ]}
              icon={"scissors"}
            />
          </div>
        </Card>
        <Card
          Id={2}
          header={
            <Thanks
              source={{
                href: "https://tailblocks.cc/",
                text: "Tailblocks.cc",
              }}
              link={{ href: "/skills", text: "Skills" }}
            />
          }>
          <Skill Id="1" text="Authentic Cliche Forage" isHowTo={true}>
            <SmallSkillBadge text="First Link" />
            <SmallSkillBadge text="Second Link" />
          </Skill>
        </Card>
        <Card
          Id={3}
          header={
            <Thanks
              source={{
                href: "https://tailblocks.cc/",
                text: "Tailblocks.cc",
              }}
            />
          }>
          <footer className="bg-indigo-600 text-white dark:bg-gray-800">
            <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
              <a className="title-font flex items-center justify-center font-medium text-white md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
                  viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl">Tailblocks</span>
              </a>
              <p className="mt-4 text-sm text-gray-400 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:pl-4">
                © 2020 Tailblocks —
                <a
                  href="https://twitter.com/knyttneve"
                  className="ml-1 text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer">
                  @knyttneve
                </a>
              </p>
              <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
                <a className="text-gray-400">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-400">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24">
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-400">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="h-5 w-5"
                    viewBox="0 0 24 24">
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </footer>
        </Card>
      </Deck>
      <Deck>
        <Card
          Id={1}
          header={
            <Thanks
              source={{
                href: "https://tailwindcomponents.com/component/navbar-hamburger-menu",
                text: "Tailwindcomponents.com",
              }}
            />
          }>
          <div className="group relative w-full p-2">
            <nav className="relative flex items-center justify-between bg-white p-4">
              <a className="text-3xl font-bold leading-none">{SVG.leaf}</a>
              <div className="">
                <button className="navbar-burger flex items-center p-3 text-blue-600">
                  <svg
                    className="block h-4 w-4 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </Card>
        <Card
          Id={2}
          header={
            <Thanks
              source={{
                href: "https://kitwind.io/products/kometa/components/headers",
                text: "Kitwind.io",
              }}
              link={{ href: "/", text: "Home" }}
            />
          }>
          <div className="max-w-xl ">
            <div className="mb-16 flex flex-col sm:mb-0 sm:text-center">
              <a href="/" className="mb-6 sm:mx-auto">
                <div className="bg-teal-accent-400 flex h-12 w-12 items-center justify-center rounded-full">
                  <svg
                    className="h-10 w-10 text-teal-500"
                    stroke="currentColor"
                    viewBox="0 0 52 52">
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </div>
              </a>
              <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
                <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 -mt-8 -ml-20 hidden w-32 text-teal-500 sm:block lg:-ml-28 lg:-mt-10 lg:w-32">
                      <defs>
                        <pattern
                          id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30">
                          <circle cx="1" cy="1" r=".7"></circle>
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                        width="52"
                        height="24"></rect>
                    </svg>
                    <span className="relative">The</span>
                  </span>
                  quick, brown fox jumps over a lazy dog
                </h2>
                <p className="text-base text-indigo-100 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
              </div>
              <div>
                <a className="hover:text-deep-purple-900 hover:bg-deep-purple-accent-100 focus:shadow-outline inline-flex h-12 items-center justify-center rounded bg-teal-400 px-6 font-semibold tracking-wide text-teal-900 shadow-md transition duration-300 focus:outline-none">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </Card>
        <Card
          Id={3}
          header={
            <Thanks
              source={{
                href: "https://www.tailwind-kit.com/components/blog",
                text: "Tailwind-kit.com",
              }}
              link={{ href: "/blogs", text: "Blogs" }}
            />
          }>
          <div className="h-90 m-auto w-60 cursor-pointer overflow-hidden rounded-lg shadow-lg md:w-80">
            <RiArticleLine className="mx-auto text-9xl text-white dark:text-gray-900" />
            <div className="w-full bg-white p-4 dark:bg-gray-800">
              <p className="text-md font-medium text-indigo-500">Article</p>
              <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                Supercharged !
              </p>
              <p className="text-md font-light text-gray-400 dark:text-gray-300">
                The new supercar is here, 543 cv and 140 000$. This is best
                racing GT about 7 years on...
              </p>
              <div className="justify-starts mt-4 flex flex-wrap items-center">
                <div className="mr-2 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                  #Car
                </div>
                <div className="mr-2 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                  #Money
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Deck>
      <CreditGhibli />
    </motion.section>
  );
};

export default HowToPage;
