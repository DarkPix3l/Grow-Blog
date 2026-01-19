import style from './FlexWrapper.module.sass'


interface FlexWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string
  children: React.ReactNode
}

export default function FlexWrapper({ className, children, ...rest }: FlexWrapperProps) {
  return (
    <div className={style[className]} {...rest}>
      {children}
    </div>
  )
}
