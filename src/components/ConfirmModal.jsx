import React from "react";
import "./ConfirmModal.css";

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
  return (
    <div className={`confirm-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onConfirm}>Yes, Confirm.</button>
        <button onClick={onClose}>Cancel.</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
