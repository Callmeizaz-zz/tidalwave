import React, { useState } from "react";
import { Arrow, Dot, StyledBtn } from "../../../styles/navTab";

function Executing() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <StyledBtn className="exe__btn" onClick={() => setClicked(!clicked)}>
        <Dot className="executing">2</Dot>
        <p>EXECUTING</p>
        <Arrow />
      </StyledBtn>
    </>
  );
}

export default Executing;
