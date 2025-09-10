import Link from "next/link";
import style from "./Button.module.sass";

interface ButtonProps {
  variant?: "wide" | "circle" | "primary" | "secondary";
  icon?: React.ReactNode;
  children?: React.ReactNode;
  goTo: string;
}

export default function Button({
  variant = "primary",
  icon,
  children,
  goTo,
}: ButtonProps) {
  const className = `${style.button} ${style[variant]}`;
  return (
    <Link href={goTo}>
      <button className={className}>
        {icon ? <span className={style.icon}>{icon}</span> : null}
        {children}
      </button>
    </Link>
  );
}
