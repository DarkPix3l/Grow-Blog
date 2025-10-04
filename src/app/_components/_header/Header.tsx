import Link from "next/link";
import Image from "next/image";
import Style from "./Header.module.sass";
import Button from "../Button/Button";
import Nav from "../_nav/Nav";
import { TfiWorld } from "react-icons/tfi";
import { BsSun } from "react-icons/bs";

export default function Header() {
  return (
    <header className={Style.header}>
      <div className={Style.headerWrapper}>
        <Link href="/">
          <Image
            className={Style.logo}
            src="/img/logo.svg"
            alt="the Blog's Logo"
            width={50}
            height={50}
          />
        </Link>
        <Nav>
          <Button goTo="/" variant="primary-top">
            Link 1
          </Button>
          <Button goTo="#" variant="primary-top">
            Link 2
          </Button>
          <Button goTo="/" variant="primary-top">
            Link 3
          </Button>
          <Button goTo="/" variant="secondary-inset">
            <TfiWorld />
          </Button>
          <Button goTo="/" variant="secondary-inset">
            <BsSun />
          </Button>
        </Nav>
      </div>
    </header>
  );
}
