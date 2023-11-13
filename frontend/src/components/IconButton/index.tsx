import { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  size?: "small" | "middle" | "large";
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export default function IconButton(props: IconButtonProps) {
  const { children, size, variant, onClick } = props;

  return (
    <button
      className={`flex justify-center items-center rounded-full transition-all ${
        size === "small"
          ? "w-6 h-6 p-1"
          : size === "large"
          ? "w-10 h-10 p-2"
          : "w-8 h-8 p-1.5"
      } ${
        variant === "primary"
          ? "bg-rose-500 text-white hover:bg-rose-600"
          : variant === "secondary"
          ? "bg-slate-200 text-slate-500 hover:bg-slate-300"
          : "hover:bg-slate-200"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
