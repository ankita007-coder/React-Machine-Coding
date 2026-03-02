import { createPortal } from "react-dom";
import "./Modal.css";
import { useEffect, useRef } from "react";
import { useFocusTrap } from "../../hooks/useFocusTrap";

const Modal = ({ isOpen, title, onClose,children }) => {
  const modalRef = useRef(null);

  useFocusTrap(modalRef,isOpen)
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        role="dialog"
      >
        {title && <div>{title}</div>}
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
