'use client'
import { TfiWorld } from 'react-icons/tfi'
import Nav from '../../nav/Nav'
import Button from '../../../Ui/Button/Button'
import { BsSun } from 'react-icons/bs'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import style from './mobileHeader.module.sass'

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

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
              <Button goTo="/" variant="primary-top" ariaLabel="placeholder">
                Link 1
              </Button>
              <Button goTo="#" variant="primary-top" ariaLabel="placeholder">
                Link 2
              </Button>
              <Button goTo="/" variant="primary-top" ariaLabel="placeholder">
                Link 3
              </Button>
            </div>
            <div className={style.secondary_button_group}>
              <Button goTo="/" variant="secondary-inset" ariaLabel="language">
                <TfiWorld />
              </Button>
              <Button goTo="/" variant="secondary-inset" ariaLabel="dark-light mode">
                <BsSun />
              </Button>
            </div>
          </Nav>
        )}
      </div>
    </header>
  )
}
