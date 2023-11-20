import React from "react";
import "./ConfirmModal.css";

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <div className={`confirm-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <p>Are you sure you want to delete?</p>
        <button onClick={onConfirm}>Yes, Delete</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
