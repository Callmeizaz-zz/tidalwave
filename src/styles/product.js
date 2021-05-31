import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  max-width: 85%;
`;
const Product = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 7vh;
  padding: 2px;
  background-color: #020807;
  color: #ffff;
  margin-bottom: 2px;
  .prod__id {
    width: 5%;
    padding: 5px;
    text-align: center;
  }
  .pro__category {
    width: 30%;
  }
  .pro_img {
    width: 10%;
  }
  .pro_desc {
    width: 30%;
  }
  .quantity {
    width: 10%;
    max-width: 10%;
  }
  .v__line {
    border-right: 1px solid #ffff;
    height: 45px;
    margin: 0 10px;
  }
  .link {
    width: 5%;
    cursor: pointer;
  }
  /* Adding adding css to Product List */
  &.product_list {
    color: #000000;
    &:nth-of-type(odd) {
      background-color: #e7e7e7;
    }
    &:nth-of-type(even) {
      background-color: #cbcbcb;
    }
  }
`;

export { Container, Product };
