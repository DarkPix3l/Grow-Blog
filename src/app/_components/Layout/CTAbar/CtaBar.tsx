"use client"
import style from "./CtaBar.module.sass";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { useConditionalRendering } from "@/_hooks/ConditionalRendering";

export default function CtaBar() {

  const isMobile = useConditionalRendering("(max-width: 767px)")
  if(isMobile) return null

  return (
    <section className={style.ctaBar}>
      <Image
        className={style.ctaLogo}
        src="/img/logo.svg"
        alt="the Blog's Logo"
        width={40}
        height={40}
      />
      <Link href={"/"} aria-label="start writing">
        <h2>
          <strong>Start Writing!</strong>
        </h2>
        <FiArrowUpRight size={43} />
      </Link>
      <div className={style.tratto}></div>
      <Link href={"/"} aria-label="content your way">
        <h2>
          <strong>Content, Your Way</strong>
        </h2>
        <FiArrowUpRight size={43} />
      </Link>
    </section>
  );
}
