import Nav from "../_nav/Nav";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="headerWrapper">
        <Link href="/">
          <Image className="logo" src="/logo.svg" alt="the Blog's Logo" width={50} height={50} />
        </Link>
        <Nav
          links={[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/blog/create", label: "Create" },
          ]} 
        />
      </div>
    </header>
  );
}
