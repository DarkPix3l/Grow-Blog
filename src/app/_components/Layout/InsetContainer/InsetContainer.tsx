import style from './InsetContainer.module.sass'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  variant?: 'fluid' | 'fixed'
}

export default function InsetContainer({ children, className, variant="fluid" }: ContainerProps) {
  return <div className={`${className ?? ''} ${style[variant]}`}>{children}</div>
}
