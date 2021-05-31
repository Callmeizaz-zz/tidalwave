import React from "react";
import { Dot, StyledBtn } from "../../../styles/navTab";

function Pending() {
  return (
    <div className="pending">
      <StyledBtn disabled>
        <Dot>1</Dot>
        <p>PENDING</p>
      </StyledBtn>
    </div>
  );
}

export default Pending;
