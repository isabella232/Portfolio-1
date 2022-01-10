import { Link } from "@/atoms/link-on-click";
import Underline from "@/components/atoms/underline";
import { NavBarLinkProps as Props } from "@/data/NavbarLinks";
import React, { useState } from "react";

const NavBarLink = ({ id, href, route, text }: Props) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <li
      key={id}
      onMouseEnter={() => setIsBeingHovered(true)}
      onMouseLeave={() => setIsBeingHovered(false)}
      className="group hover:text-white px-3"
    >
      <Link
        href={href}
        classname={
          //*Is Current Page           True                        False
          (route === href ? " dark:text-indigo-500 " : " dark:text-gray-500 ") +
          //*Anyway class
          "font-bold text-md dark:group-hover:text-white flex "
        }
      >
        <span className="relative">
          {text}
          {isBeingHovered && <Underline />}
        </span>
      </Link>
    </li>
  );
};

export default NavBarLink;
