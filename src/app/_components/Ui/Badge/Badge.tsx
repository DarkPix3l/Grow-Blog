import Link from 'next/link'
import style from './Badge.module.sass'

interface BadgeProps {
  icon: React.ReactElement
  goTo: string
  ariaLabel: string
  variant?: 'primary-top' | 'primary-inset'
}

export default function Badge({ icon, goTo, ariaLabel, variant = 'primary-inset' }: BadgeProps) {
  return (
    <Link href={goTo} aria-label={ariaLabel} className={style[variant]}>
      {icon}
    </Link>
  )
}
