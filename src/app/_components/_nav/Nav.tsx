import Link from "next/link";

interface NavProps {
  links: { href: string; label: string }[];
}

export default function Nav({ links }: NavProps) {
  return (
    <nav className="nav">
      {links.map((link) => (
        <Link key={link.label} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
