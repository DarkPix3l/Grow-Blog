interface sectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className, id }: sectionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  )
}
