import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Modal, ModalClose, ModalContent } from "../../styles/modal";

function ModalBox({ open, close }) {
  return (
    <Modal open={open}>
      <ModalContent>
        <div className="header">
          <h1>Product Name</h1>
        </div>
        <div className="modal__body">
          <img src="../../../images/wheat1.jpg" alt="" />
          <p>
            <b>Category:</b>Product Category
          </p>
          <p className="product__desc">
            <b>Description:</b>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            molestiae culpa cumque voluptatum!
          </p>
          <p className="quantity">
            <b>Quantity:</b>1
          </p>
        </div>
        <ModalClose>
          <CloseIcon onClick={() => close(!open)} />
        </ModalClose>
      </ModalContent>
    </Modal>
  );
}

export default ModalBox;
