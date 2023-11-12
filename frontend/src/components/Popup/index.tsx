import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PopupProps {
  children: ReactNode;
  title?: string;
  onClose?: () => void;
}

export default function Popup(props: PopupProps) {
  const { children, title } = props;

  return createPortal(
    <div className="fixed inset-0 flex bg-slate-800/50 z-50">
      <div className="flex justify-center items-center grow">
        <div className="w-[800px] py-8 px-10 bg-white rounded-lg shadow-md">
          {title &&
            <h2 className="mb-5">{title}</h2>
          }
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
