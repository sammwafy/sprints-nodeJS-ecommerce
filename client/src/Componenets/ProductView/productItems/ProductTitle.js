import React from "react";
import styled from "styled-components";

const ProductTitle = ({ title }) => {
  return <ProductTitleWrapper>{title}</ProductTitleWrapper>;
};
const ProductTitleWrapper = styled.div`
  display: block;
  background-color: rgb(41 41 43);
  text-align: center;
  color:rgba(255, 255, 255, 1);
  font-size: 2rem;
  padding:15px 0;
`;
export default ProductTitle;
