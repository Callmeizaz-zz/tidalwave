import React, { useState } from "react";
import { Product as Container } from "../../../styles/product";
import LaunchIcon from "@material-ui/icons/Launch";
import ModalBox from "../../modal/modal";

function ProductList() {
  const [modal, setModal] = useState(false);

  return (
    <Container className="product_list">
      <div className="prod__id">
        <span>1</span>
      </div>
      <div className="v__line"></div>
      <div className="pro__category">
        <h5>Agri-Input Category</h5>
      </div>
      <div className="v__line"></div>
      <div className="pro_img">
        <img src="" alt="fd" />
      </div>
      <div className="v__line"></div>
      <div className="pro_desc">
        <h5>Product Description</h5>
      </div>
      <div className="v__line"></div>
      <div className="quantity">
        <h5>Order Quantity</h5>
      </div>
      <div className="v__line"></div>
      <div className="link" onClick={() => setModal(!modal)}>
        <LaunchIcon />
      </div>
      <ModalBox close={setModal} open={modal} />
    </Container>
  );
}

export default ProductList;
