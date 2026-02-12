'use client'
import { TfiWorld } from 'react-icons/tfi'
import Nav from '../../nav/Nav'
import Button from '../../../Ui/Button/Button'
import { BsSun } from 'react-icons/bs'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import style from './mobileHeader.module.sass'
import type { HeaderLink } from '@/_lib/HeaderData'

interface MobileHeaderProps {
  links?: HeaderLink[]
}

export default function MobileHeader({ links = [] }: MobileHeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState<string | null>(null)

  //______________

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
  //_______________

  const toggleMenu = () => {
    if (!isOpen) {
      // opening
      setIsMounted(true)
      setIsOpen(true)
      document.body.style.overflow = 'hidden'
    } else {
      setIsOpen(false)
      document.body.style.overflow = 'unset'
    }
  }

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setIsMounted(false), 2000) // delay unmount
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  return (
    <header className={`${style.m_header} ${isOpen ? style.m_header_open : ''}`} onClick={toggleMenu}>
      <div className={style.m_headerWrapper}>
        <div className={style.icons}>
          <Image src="/img/logo.svg" alt="the Blog's Logo" width={42} height={42} />
          {isOpen ? <RxCross2 size={35} /> : <RxHamburgerMenu size={35} />}
        </div>
        {isMounted && (
          <Nav className={style.m_nav}>
            <div className={style.primay_button_group}>
              {links.map((link, index) => (
                <Button key={index} goTo={link.href} variant="primary-top" ariaLabel={link.label}>
                  <p>{link.label}</p>
                </Button>
              ))}
            </div>
            <div className={style.secondary_button_group}>
              <Button goTo="/" variant="secondary-inset" ariaLabel="language">
                <TfiWorld />
              </Button>
              <Button goTo="" variant="secondary-inset" ariaLabel="dark-light mode" onClickF={toggleTheme}>
                <BsSun />
              </Button>
            </div>
          </Nav>
        )}
      </div>
    </header>
  )
}
