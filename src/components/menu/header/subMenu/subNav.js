import React from "react";
import styled from "styled-components";

function SubNav() {
  return (
    <ChildNav>
      <button className="undoBtn" disabled>
        Undo Batch
      </button>
      <button className="supplyBtn" disabled>
        Assign Supplies{" "}
      </button>
      <button disabled>Generate Po</button>
    </ChildNav>
  );
}

const ChildNav = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 10px 0;
  justify-content: center;
  button {
    color: white;
    padding: 10px 20px;
    margin-right: 10px;
    border-radius: 5px;
    background-color: #d0cecf;
    border: none;
    &.undoBtn,
    &.supplyBtn {
      background-color: #595959;
    }
  }
`;

export default SubNav;
