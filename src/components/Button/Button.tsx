import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`h-14 w-full bg-orange_color text-very_dark_blue rounded-lg flex items-center justify-center gap-3 shadow-xl shadow-orange_color/30 md:shadow-none hover:bg-orange_color/60 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};
