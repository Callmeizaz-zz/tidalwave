import React, { useState } from "react";
import { ExpandMore, GetApp, Attachment, ExpandLess } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { StyledOrders, StyledTable } from "../../../styles/orders";
import OrderDetails from "./orderHeader";
import { CSVLink } from "react-csv";

function Order() {
  const fakeData = [
    {
      name: "lorem ipsum",
      image: "random image url",
      description: "lorem lorem lorem",
      quantity: "10",
    },
  ];
  // States
  const [expand, setExpand] = useState(false);
  return (
    <StyledTable>
      <StyledOrders>
        {/* Order Detail */}
        <div className="title" onClick={() => setExpand(!expand)}>
          <input type="radio" checked={expand} />
          <h5>Batched By</h5>
          {expand ? <ExpandLess /> : <ExpandMore />}
        </div>
        <div className="vl"></div>
        {/* Listed BY */}
        <div className="listed__by">
          <div className="avi">
            <Avatar />
          </div>
          <div className="user_details">
            <h5>Batched By</h5>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="vl"></div>
        {/* Attached Document */}
        <div className="attached">
          <Attachment />
          <p>File Name </p>
          <CSVLink data={fakeData} filename={"my-file.csv"}>
            <GetApp />
          </CSVLink>
        </div>
      </StyledOrders>
      {expand ? (
        <div className="expandView">
          <OrderDetails />
        </div>
      ) : (
        ""
      )}
    </StyledTable>
  );
}

export default Order;
