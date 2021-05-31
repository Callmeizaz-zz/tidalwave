import styled from "styled-components";

const StyledTable = styled.div`
  margin: 0 15px;
`;

const StyledOrders = styled.div`
  border-top: 2px solid lightgray;
  margin-top: 2px;
  background-color: #afabaa;
  color: black;
  width: 90%;
  height: 8vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  .vl {
    border-left: 2px solid #fff;
    height: 40px;
    margin-right: 10px;
    padding: 2px;
  }
  .title {
    width: 25%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    input {
      margin-right: 10px;
    }
    h4 {
      margin-right: 20px;
    }
  }
  .listed__by {
    width: 30%;
    display: flex;
    align-items: center;
    .avi {
      margin-right: 10px;
    }
  }
  .attached {
    display: flex;
    width: 15%;
    max-width: 15%;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
`;

export { StyledOrders, StyledTable };
