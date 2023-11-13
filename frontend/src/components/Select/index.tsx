import { ReactNode } from "react";

interface SelectProps {
  children: ReactNode;
  name?: string;
}

export default function Select(props: SelectProps) {
  const { children, name } = props;

  return (
    <select className="block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" name={name}>
      {children}
    </select>
  );
}
