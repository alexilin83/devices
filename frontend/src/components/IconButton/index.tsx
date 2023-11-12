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
      className={`flex justify-center items-center transition-all ${
        size === "small"
          ? "w-6 h-6"
          : size === "large"
          ? "w-10 h-10"
          : "w-8 h-8"
      } ${
        variant === "secondary"
          ? "bg-slate-200 text-slate-500 hover:bg-slate-300"
          : "bg-rose-500 text-white"
      } rounded-full`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
