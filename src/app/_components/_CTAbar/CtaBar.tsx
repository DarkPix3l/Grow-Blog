import style from "./CtaBar.module.sass";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function CtaBar() {
  return (
    <section className={style.ctaBar}>
      <Image
        className={style.ctaLogo}
        src="/img/logo.svg"
        alt="the Blog's Logo"
        width={40}
        height={40}
      />
      <Link href={"/"}>
        <h2>
          <strong>Start Writing!</strong>
        </h2>
        <FiArrowUpRight size={43} />
      </Link>
      <div className={style.tratto}></div>
      <Link href={"/"}>
        <h2>
          <strong>Content, Your Way</strong>
        </h2>
        <FiArrowUpRight size={43} />
      </Link>
    </section>
  );
}
