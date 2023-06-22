import ProductContext from "../components/productarray";
import React, { useContext } from "react";

import styled from "styled-components";
import Product from "./product";


const Container = styled.div`
  padding: 20px;
`;

const Title1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: teal;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Products = ({}) => {
  
  const { products } = useContext(ProductContext);

  if (!products) {
    return null; 
  }
  return (
    <Container>
      <Title1>PRODUCTS</Title1>
      <ProductContainer>
        {products.map((item) => (
          <Product key={item.id} img={item.img} />
        ))}
      </ProductContainer>
    </Container>
  );
};

export default Products;
