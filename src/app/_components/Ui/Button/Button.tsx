import Link from 'next/link'
import style from './Button.module.sass'

interface ButtonProps {
  variant?:
    | 'wide'
    | 'circle'
    | 'primary-inset'
    | 'primary-top'
    | 'secondary-inset'
    | 'secondary-top'
    | 'go-back-btn-inset'
    | 'go-back-btn-top'
  icon?: React.ReactNode
  children?: React.ReactNode
  goTo: string
  ariaLabel: string
  classname?: string
  onClickF?: () => void;
}

export default function Button({ variant = 'primary-inset', icon, children, goTo, ariaLabel, classname, onClickF }: ButtonProps) {
  const className = `${classname ?? ''} ${style[variant]}`

  return (
    <Link href={goTo} className={className} aria-label={ariaLabel} onClick={onClickF}>
      {icon ? <span className={style.icon}>{icon}</span> : null}
      {children}
    </Link>
  )
}
