import NavBarLink from "@/components/molecules/navbar/navbar-link";
import NavBarData, { NavBarLinkProps as Props } from "@/data/NavbarLinks";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import React from "react";

const NavBarListLinks = () => {
  const router = useRouter();

  return (
    <ul className="md:flex md:items-start">
      {NavBarData.map(({ Id, text, href }: Props) => (
        <NavBarLink
          Id={Id}
          key={nanoid()}
          text={text}
          href={href}
          route={router.pathname}
        />
      ))}
    </ul>
  );
};

export default NavBarListLinks;
