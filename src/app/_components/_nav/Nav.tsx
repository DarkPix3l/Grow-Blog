import style from "./Nav.module.sass";

interface NavProps {
  children: React.ReactNode;
}

export default function Nav({ children }: NavProps) {
  return <nav className={style.nav}>{children}</nav>;
}
