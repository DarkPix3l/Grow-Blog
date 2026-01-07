import style from "./Nav.module.sass";

interface NavProps {
  children: React.ReactNode;
  className?:string;
}

export default function Nav({ children, className }: NavProps) {
  return <nav className={`${style.nav} ${className ?? ''}`}>{children}</nav>;
}
