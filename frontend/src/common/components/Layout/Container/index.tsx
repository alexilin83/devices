import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode
}

export default function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <div className="w-[1240px] mx-auto py-8 px-10 bg-white rounded-xl">
      {children}
    </div>
  );
}
