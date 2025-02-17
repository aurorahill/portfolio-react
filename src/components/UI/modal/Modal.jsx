import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import classes from "./Modal.module.scss";
import { FiX } from "react-icons/fi";

const Modal = ({ children, open, onClose, className = "", title }) => {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current; // zalecane przypisanie do stałej!
    if (!modal) return;
    if (open) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [open]);
  return createPortal(
    <dialog
      ref={dialog}
      className={`${classes.modal} ${className}`}
      onClose={onClose}
    >
      <div className={classes.modal__button}>
        <button onClick={onClose}>
          <FiX />
        </button>
      </div>
      <h2 className={classes.modal__title}>{title}</h2>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
  error: PropTypes.string,
  message: PropTypes.string,
};
