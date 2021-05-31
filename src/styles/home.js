import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const SidebarStyle = styled.div`
  height: 100vh;
  overflow: auto;
  flex: 15;
  position: relative;
  color: #ffff;
  background-color: #0a1931;
  margin: 10px;
`;

const HeaderStyle = styled.div`
  display: flex;
  padding: 0 9em;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #a7bbc7;
`;

const StyleContent = styled.div`
  flex: 80;
  padding: 20px;
  margin: 10px;

  h2 {
    margin-bottom: 20px;
  }
`;
const StyledTags = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  padding: 2px;
  align-items: center;
  border-bottom: 2px solid #d0cecf;
  .agri_input {
    width: 30%;
  }
  h4 {
    padding: 2px;
  }
`;

const ChildNav = styled.div`
  padding: 20px 30px;
`;

export {
  Container,
  StyleContent,
  SidebarStyle,
  HeaderStyle,
  StyledTags,
  ChildNav,
};
