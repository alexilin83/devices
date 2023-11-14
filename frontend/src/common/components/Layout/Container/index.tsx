import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode
}

const containerStyle: React.CSSProperties = {
  width: '1240px',
  margin: 'auto',
  padding: '20px 0',
};

export default function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
}
