import React from "react";
import { Dot, StyledBtn } from "../../../styles/navTab";

function Executed() {
  return (
    <div className="pending">
      <StyledBtn disabled>
        <Dot className="executed">3</Dot>
        <p>EXECUTED</p>
      </StyledBtn>
    </div>
  );
}

export default Executed;
