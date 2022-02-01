import React from "react";

type Link = {
  href: string;
  text: string;
};
export type ThankProps = {
  source: Link;
  link?: Link;
};
const Thanks = ({ source, link }: ThankProps) => {
  return (
    <p className="m-5 text-xl">
      <a
        className="hover:cursor-pointer hover:text-indigo-500"
        href={source.href}>
        {source.text}
      </a>
      {link && (
        <>
          {" ( "}
          <a
            className="hover:cursor-pointer hover:text-blue-700"
            href={link.href}>
            {link.text}
          </a>
          {" )"}
        </>
      )}
    </p>
  );
};

export default Thanks;
