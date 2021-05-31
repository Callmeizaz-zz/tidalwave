import styled from "styled-components";

const Dot = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 2px 0;
  margin: 5px;
  background: #fff;
  background-color: rgb(185, 17, 17);
  color: #ffff;
  text-align: center;
  font: 14px Arial, sans-serif;
  &.completed {
    background-color: rgb(22, 194, 51);
  }
  &.executed {
    background-color: rgb(219, 123, 13);
  }
  &.executing {
    background-color: rgb(240, 198, 10);
  }
`;

const StyledBtn = styled.button`
  height: 50px;
  width: 13vw;
  cursor: pointer;
  border: none;
  margin-right: 2px;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  background-color: #595959;
  &.exe__btn {
    background-color: #262626;
  }
  p {
    font-size: 10px;
    color: #fff;
  }
`;

const Arrow = styled.span`
  position: relative;
  opacity: 1;
  top: 18px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #262626;
`;
export { Dot, StyledBtn, Arrow };
