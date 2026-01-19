import Link from 'next/link'
import Style from './NavLinks.module.sass'

export interface NavProps {
  links: { href: string; label: string }[]
  title?: string
}

export default function NavLinks({ links, title }: NavProps) {
  return (
    <nav className={Style.nav} aria-label={title}>
      <h3>{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
