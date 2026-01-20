"use client"
import Link from 'next/link'
import Image from 'next/image'
import Style from './DesktopHeader.module.sass'
import Button from '../../../Ui/Button/Button'
import Nav from '../../nav/Nav'
import { TfiWorld } from 'react-icons/tfi'
import { BsSun } from 'react-icons/bs'

export default function DesktopHeader() {
  return (
    <header className={Style.header}>
      <div className={Style.headerWrapper}>
        <Link href="/">
          <Image src="/img/logo.svg" alt="the Blog's Logo" width={42} height={42} />
        </Link>
        <Nav>
          <Button goTo="/" variant="primary-top" ariaLabel="link1">
            <p>Home</p>
          </Button>
          <Button goTo="#categories_section" variant="primary-top" ariaLabel="link2">
            <p>Categories</p>
          </Button>
          <Button goTo="/" variant="primary-top" ariaLabel="link3">
            <p>Mood</p>
          </Button>
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
