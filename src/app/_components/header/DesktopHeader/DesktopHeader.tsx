import Link from 'next/link'
import Image from 'next/image'
import Style from './DesktopHeader.module.sass'
import Button from '../../Button/Button'
import Nav from '../../_nav/Nav'
import { TfiWorld } from 'react-icons/tfi'
import { BsSun } from 'react-icons/bs'

export default function DesktopHeader() {
    return (
        <header className={Style.header}>
            <div className={Style.headerWrapper}>
                <Link href="/">
                    <Image
                        src="/img/logo.svg"
                        alt="the Blog's Logo"
                        width={42}
                        height={42}
                    />
                </Link>
                <Nav>
                <Button goTo="/" variant="primary-top" ariaLabel="link1">
                    Link 1
                </Button>
                <Button goTo="#" variant="primary-top" ariaLabel="link2">
                    Link 2
                </Button>
                <Button goTo="/" variant="primary-top" ariaLabel="link3">
                    Link 3
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
