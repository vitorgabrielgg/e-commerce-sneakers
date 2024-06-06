import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl ${className}`}>{children}</div>
  );
}
