import Link from "next/link";
import style from "./Button.module.sass";

interface ButtonProps {
  variant?: "wide" | "circle" | "primary-inset" | "primary-top" | "secondary-inset" | "secondary-top";
  icon?: React.ReactNode;
  children?: React.ReactNode;
  goTo: string;
}

export default function Button({ variant = "primary-inset", icon, children, goTo }: ButtonProps) {
  const className = `${style.button} ${style[variant]}`;
  return (
    <Link
      href={goTo}
      className={className}>
      {icon ?
        <span className={style.icon}>{icon}</span>
      : null}
      {children}
    </Link>
  );
}
