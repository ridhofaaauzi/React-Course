import React, { useState } from "react";
import Modal from "./Modal";
import "./Modal.css";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  const onClose = () => {
    setShowModalPopup(false);
  };

  return (
    <>
      <div>
        <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
        {showModalPopup && (
          <Modal
            id={"Custom-id"}
            header={<h1>Customized Header</h1>}
            footer={<h1>Customized Footer</h1>}
            onClose={onClose}
            body={<div>Customized body</div>}
          />
        )}
      </div>
    </>
  );
};

export default ModalTest;
