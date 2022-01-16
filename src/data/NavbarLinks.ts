export type NavBarLinkProps = {
  Id: number;
  href: string;
  text: string;
  route?: string;
};
const NavBarLinks: Array<NavBarLinkProps> = [
  { Id: 0, text: "Home", href: "/" },
  { Id: 1, text: "Skills", href: "/skills" },
  { Id: 2, text: "Projects", href: "/projects" },
  { Id: 3, text: "Blogs", href: "/blogs" },
  { Id: 4, text: "Contact", href: "/contact" },
  { Id: 5, text: "Me", href: "/me" },
  { Id: 6, text: "Credits", href: "/howto" },
];

export default NavBarLinks;
