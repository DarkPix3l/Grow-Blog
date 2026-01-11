import style from './InsetContainer.module.sass'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  variant: 'fluid' | 'fixed' | 'pure'
}

export default function InsetContainer({ children, className, variant="pure" }: ContainerProps) {
  return <div className={`${className ?? ''} ${style[variant]}`}>{children}</div>
}
