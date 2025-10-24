"use client"
import { TfiWorld } from 'react-icons/tfi'
import Nav from '../../_nav/Nav'
import Button from '../../Button/Button'
import { BsSun } from 'react-icons/bs'
// import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { useState } from 'react'
import Image from 'next/image'
import style from './mobileHeader.module.sass'

export default function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
        if (!isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }
    return (
        <header
            className={`${style.m_header} ${isOpen ? style.m_header_open : ''}`}
            onClick={toggleMenu}
        >
            <div className={style.m_headerWrapper}>
                <Image
                    src="/img/logo.svg"
                    alt="the Blog's Logo"
                    width={50}
                    height={50}
                />

                <Nav className={style.m_nav}>
                    <Button goTo="/" variant="primary-top">
                        Link 1
                    </Button>
                    <Button goTo="#" variant="primary-top">
                        Link 2
                    </Button>
                    <Button goTo="/" variant="primary-top">
                        Link 3
                    </Button>
                    <div className={style.secondary_button_group}>
                        <Button goTo="/" variant="secondary-inset">
                            <TfiWorld />
                        </Button>
                        <Button goTo="/" variant="secondary-inset">
                            <BsSun />
                        </Button>
                    </div>
                </Nav>
            </div>
        </header>
    )
}
