'use client'
import Link from 'next/link'
import Image from 'next/image'
import Style from './DesktopHeader.module.sass'
import Button from '../../../Ui/Button/Button'
import Nav from '../../nav/Nav'
import { TfiWorld } from 'react-icons/tfi'
import { BsSun } from 'react-icons/bs'
import type { HeaderLink } from "@/_lib/HeaderData";
interface DesktopHeaderProps {
  links?: HeaderLink[]
}
export default function DesktopHeader({links = []}:DesktopHeaderProps) {
  return (
    <header className={Style.header}>
      <div className={Style.headerWrapper}>
        <Link href="/">
          <Image src="/img/logo.svg" alt="the Blog's Logo" width={42} height={42} />
        </Link>
        <Nav>
          {links.map((link, index) => (
            <Button key={index} goTo={link.href} variant="primary-top" ariaLabel={link.label}>
              <p>{link.label}</p>
            </Button>
          ))}
          <Button goTo="/" variant="secondary-inset" ariaLabel="Change language">
            <TfiWorld />
          </Button>
          <Button goTo="/" variant="secondary-inset" ariaLabel="Toggle theme">
            <BsSun />
          </Button>
        </Nav>
      </div>
    </header>
  )
}
