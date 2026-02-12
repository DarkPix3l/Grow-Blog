'use client'
import Link from 'next/link'
import Image from 'next/image'
import Style from './DesktopHeader.module.sass'
import Button from '../../../Ui/Button/Button'
import Nav from '../../nav/Nav'
import { TfiWorld } from 'react-icons/tfi'
import { BsSun } from 'react-icons/bs'
import type { HeaderLink } from '@/_lib/HeaderData'
import { useState } from 'react'

interface DesktopHeaderProps {
  links?: HeaderLink[]
}
export default function DesktopHeader({ links = [] }: DesktopHeaderProps) {
  const [theme, setTheme] = useState<string | null>(null)

  const toggleTheme = () => {
    const newTheme = theme === 'theme-light' ? 'theme-dark' : 'theme-light'
    //setting the new theme as the attribute value
    document.body.setAttribute('data-theme', newTheme)
    
    //cookie update with the new theme.
    //an additional precaution. In reality the theme has a "fake persistency"
    //the body doesn't rerender when visiting the other pages
    document.cookie = `theme=${newTheme}; path=/; max-age=604800` //1week
    setTheme(newTheme)
  }
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
          <Button goTo="" variant="secondary-inset" ariaLabel="Toggle theme" onClickF={toggleTheme}>
            <BsSun />
          </Button>
        </Nav>
      </div>
    </header>
  )
}
