import * as React from "react";

interface ModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  return <div>{children}</div>;
};
