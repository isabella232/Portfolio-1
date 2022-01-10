import NextLink from "next/link";
import { MouseEventHandler } from "react";

type Props = {
  href: string;
  children?: React.ReactNode;
  onclick?: MouseEventHandler;
  classname?: string;
};

const Link = ({ href, children, classname, onclick }: Props) => {
  return (
    <NextLink href={href}>
      <a className={classname} onClick={onclick}>
        {children}
      </a>
    </NextLink>
  );
};

export { Link };
