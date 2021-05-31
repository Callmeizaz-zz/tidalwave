import React from "react";
import { Line, Sidebar, ListItem } from "../../styles/sidebar";

function SidebarMain() {
  return (
    <Sidebar>
      <div className="title">
        <h4>Agri-Purchase Management</h4>
      </div>
      <Line />
      <ListItem>
        <div className="agri__mm">
          <p>Agri-Input Master Maintenance</p>
        </div>
        <Line />
        <div className="agri__sm">
          <p>Supplier Master Maintenance</p>
        </div>
        <Line />
        <div className="agri__ip">
          <p>Agri-Input Purchase Request</p>
        </div>
        <Line />
      </ListItem>

      <div className="tax">
        <Line />
        <h5>Tax Master Maintence</h5>
      </div>
    </Sidebar>
  );
}

export default SidebarMain;
