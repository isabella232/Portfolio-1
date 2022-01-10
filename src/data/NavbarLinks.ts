export type NavBarLinkProps = {
  id: number;
  href: string;
  text: string;
  route?: string;
};
const NavBarLinks: Array<NavBarLinkProps> = [
  { id: 0, text: "Home", href: "/" },
  { id: 1, text: "Skills", href: "/skills" },
  { id: 2, text: "Projects", href: "/projects" },
  { id: 3, text: "Blogs", href: "/blogs" },
  { id: 4, text: "Contact", href: "/contact" },
  { id: 5, text: "Me", href: "/me" },
  { id: 6, text: "How to", href: "/howto" },
];

export default NavBarLinks;
