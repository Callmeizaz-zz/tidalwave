import styled from "styled-components";

const Sidebar = styled.div`
  margin: 10px;
  .title {
    margin: 10px;
    h4 {
      font-size: 25px;
      font-weight: 500;
    }
  }
  .tax {
    position: absolute;
    bottom: 10px;
    margin: 10px;
    text-align: center;
    h5 {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  color: #ffff;
  .agri__ip {
    color: #23d997;
  }
  div {
    &:hover {
      color: #23d997;
    }
    margin-bottom: 10px;
  }
`;

const Line = styled.div`
  margin: 15px 20px;
  border-bottom: 1px solid #ffff;
`;

export { Line, ListItem, Sidebar };
