import React from "react";
import {
  Container,
  SidebarStyle,
  StyleContent,
  StyledTags,
  HeaderStyle,
  ChildNav,
} from "../styles/home";
import Pending from "../components/menu/header/pending";
import Orders from "../components/menu/orders/orders";
import Completed from "../components/menu/header/completed";
import Executed from "../components/menu/header/executed";
import Executing from "../components/menu/header/executing";
import SubMenu from "../components/menu/header/subMenu/subNav";
import SidebarMain from "../components/sidebar/sidebarMain";

function Home() {
  return (
    <Container>
      {/* side bar */}
      <SidebarStyle>
        <SidebarMain />
      </SidebarStyle>

      {/* Sidebar end */}
      <StyleContent>
        <h2>Agri-Input Master Maintenance</h2>
        {/* TOP Nav BUTTONS */}
        <HeaderStyle>
          <Pending />
          <Executing />
          <Executed />
          <Completed />
        </HeaderStyle>
        {/* END OF TOP HEADER */}

        {/* CHILD NAV ITEMS */}
        <ChildNav>
          <SubMenu />
        </ChildNav>

        {/* END OF CHILD NAV ITEMS */}

        {/* Product Table */}

        <div>
          {/* Table Header */}
          <StyledTags>
            <h4 className="agri_input">Executing Agri-Input Orders</h4>
            <h4 className="batched__by">Batched By</h4>
          </StyledTags>
          {/* Order List */}

          <Orders />
        </div>

        {/*PRODUCT TABLE END */}
      </StyleContent>
    </Container>
  );
}

export default Home;
