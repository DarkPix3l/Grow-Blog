import style from './FlexWrapper.module.sass'

interface FlexWrapperProps {
  className?: string
  children: React.ReactNode
}

export default function FlexWrapper({ className, children }: FlexWrapperProps) {
  return (
    <div className={className ? style[className] : undefined}>
      {children}
    </div>
  )
}
