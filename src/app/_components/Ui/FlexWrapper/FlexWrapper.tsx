import style from './FlexWrapper.module.sass'

interface FlexWrapperProps {
  className?: string
  addClass?: string
  children: React.ReactNode
}

export default function FlexWrapper({ className, addClass, children }: FlexWrapperProps) {
  const variantClass = addClass ? style[addClass] : ''
  return (
    <div className={`${className ?? ''} ${variantClass}`}>
      {children}
    </div>
  )
}
