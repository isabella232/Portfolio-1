import Underline from "@/components/atoms/navbar/underline";
import { Link } from "@/components/atoms/shared/link-on-click";
import { NavBarLinkProps as Props } from "@/data/NavbarLinks";
import React, { useState } from "react";

const NavBarLink = ({ Id, href, route, text }: Props) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <li
      key={Id}
      onMouseEnter={() => setIsBeingHovered(true)}
      onMouseLeave={() => setIsBeingHovered(false)}
      className="group px-3 hover:text-white">
      <Link
        href={href}
        classname={
          //*Is Current Page           True                        False
          (route === href
            ? " text-indigo-500 dark:text-gray-500 "
            : " text-gray-500 dark:text-indigo-500 ") +
          //*Anyway class
          "font-bold text-md group-hover:text-gray-900 dark:group-hover:text-white flex "
        }>
        <span className="relative">
          {text}
          {isBeingHovered && <Underline />}
        </span>
      </Link>
    </li>
  );
};

export default NavBarLink;
