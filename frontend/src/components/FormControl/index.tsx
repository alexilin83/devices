import { ReactNode } from "react";

interface FormControlProps {
  children: ReactNode;
  margin?: "none";
}

export default function FormControl(props: FormControlProps) {
  const { children, margin } = props;

  return (
    <div className={`${margin === "none" ? "" : "mb-5"}`}>{children}</div>
  );
}
