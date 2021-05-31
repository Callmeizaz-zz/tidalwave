import React from "react";
import { Dot, StyledBtn } from "../../../styles/navTab";

function Completed() {
  return (
    <div className="completed">
      <StyledBtn disabled>
        <Dot className="completed">4</Dot>
        <p>COMPLETED</p>
      </StyledBtn>
    </div>
  );
}

export default Completed;
