import style from "./InsetContainer.module.sass";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function InsetContainer({
  children,
  className,
}: ContainerProps) {
  return <div className={`${style.page} ${className ?? ""}`}>{children}</div>;
}
