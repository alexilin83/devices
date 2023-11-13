import { ReactNode } from "react";
import { createPortal } from "react-dom";
import IconButton from '../IconButton';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface PopupProps {
  open: boolean;
  children: ReactNode;
  title?: string;
  onClose: () => void;
}

export default function Popup(props: PopupProps) {
  const { open, children, title, onClose } = props;

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 flex bg-slate-800/50 z-50">
      <div className="flex justify-center items-center grow">
        <div className="relative w-[800px]">
          <div className="py-8 px-10 bg-white rounded-lg shadow-md">
            {title &&
              <h2 className="mb-5">{title}</h2>
            }
            {children}
          </div>
          <div className="absolute top-4 right-4">
            <IconButton variant="secondary" onClick={onClose}>
              <XMarkIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
