import React from "react";
import ProductList from "./productList";
import { Container, Product as ProHeader } from "../../../styles/product";

function OrderDetails() {
  return (
    <Container>
      {/* Product header */}
      <ProHeader>
        <div className="prod__id">
          <span></span>
        </div>
        <div className="v__line"></div>
        <div className="pro__category">
          <h5>Agri-Input Category</h5>
        </div>
        <div className="v__line"></div>
        <div className="pro_img">
          <h5>Product Image</h5>
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
        <div className="link"></div>
      </ProHeader>

      {/* Product List */}

      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
    </Container>
  );
}

export default OrderDetails;
