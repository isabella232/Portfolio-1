import { Link } from "@/atoms/link-on-click";
import React from "react";

type Props = {
  href: string;
  onclick: React.MouseEventHandler<Element>;
  text: string;
};

const HiddenMenuLink = ({ href, onclick, text }: Props) => {
  return (
    <li className="mb-1">
      <Link href={href} classname="navbar-menu-btn" onclick={onclick}>
        {text}
      </Link>
    </li>
  );
};

export default HiddenMenuLink;
