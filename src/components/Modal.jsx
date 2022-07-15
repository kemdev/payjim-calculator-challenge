import React, { useState, useEffect } from "react";
import './modal.css'

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

export default function Modal({ modalStatus, setModalStatus }) {
  // const { open, text } = modal;
  const { code } = modalStatus;
  const [centredModal, setCentredModal] = useState(false);
  const [text, setText] = useState("");

  const toggleShow = () => {
    setCentredModal(false);
    setModalStatus({});
  };

  useEffect(() => {
    switch (code) {
      case 1:
        setCentredModal(true);
        setText("Too much input");
        break;
      case 2:
        setCentredModal(true);
        setText("Please select an Operator");
    }
  }, [code]);
  return (
    <>
      <MDBModal className="modal" tabIndex="-1" show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader className="border-0 m-0">
                Error
              <MDBBtn
                className="btn-close btn-close-white my-0"
                color="none"
                onClick={toggleShow}
                ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className="py-0">
              <p>{text}</p>
            </MDBModalBody>
          </MDBModalContent>

        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
