import Link from "next/link";
import Style from "./NavLinks.module.sass";

interface NavProps {
  links: { href: string; label: string }[];
}

export default function NavLinks({ links }: NavProps) {
  return (
    <nav className={Style.nav}>
      {links.map((link) => (
        <Link key={link.label} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
