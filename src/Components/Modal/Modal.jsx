import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ handleClose, show, children }) => {
  return (
    <div className="showModal">
      <div className="modal-container">
        {children}
        <a
          href="javascript:;"
          className="modal-close"
          onClick={() => handleClose()}
        >
          <span>
            <AiOutlineCloseCircle />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Modal;
