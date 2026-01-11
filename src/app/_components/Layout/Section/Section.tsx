import style from "./Section.module.sass"
interface sectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className, id }: sectionProps) {
  return (
    <section id={id} className={`${style.section_wrapper} ${className ?? ''}`}>
      {children}
    </section>
  )
}
