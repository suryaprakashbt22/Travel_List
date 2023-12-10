import React from 'react';


export default function ModalContent({ onClose, clearAll }) {
  return (
    <div className="modal">
      <div><h3>Are you sure?</h3></div>
      <div>
        <button onClick={clearAll}>Yes</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
