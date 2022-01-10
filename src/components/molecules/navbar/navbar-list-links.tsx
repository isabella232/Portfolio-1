import NavBarLink from "@/components/molecules/navbar/navbar-link";
import NavBarData, { NavBarLinkProps as Props } from "@/data/NavbarLinks";
import { useRouter } from "next/router";
import React from "react";

const NavBarListLinks = () => {
  const router = useRouter();

  return (
    <ul className="md:flex md:items-start">
      {NavBarData.map(({ id, text, href }: Props) => (
        <NavBarLink id={id} text={text} href={href} route={router.pathname} />
      ))}
    </ul>
  );
};

export default NavBarListLinks;
