interface TextBodyProps {
  children: React.ReactNode
  className?: string
}

export default function TextBody({ children, className }: TextBodyProps) {
  return <p className={className}>{children}</p>
}
