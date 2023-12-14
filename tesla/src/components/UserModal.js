// UserModal.js

import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const UserModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="User Modal"
      className="modal-content"
    >
      <div className="bg-violet-200 w-[500px] h-[500px]">
        {/* Your modal content goes here */}
        <p>User Modal Content</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </Modal>
  );
};

export default UserModal;
