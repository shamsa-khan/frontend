import React, { useState } from "react";
import styled from "styled-components";
import cat1 from "../images/cat1.webp"
import cat2 from "../images/cat2.jpeg"
import cat3 from "../images/cat3.jpeg"
import CategorieItem from "./categorieItem";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: teal;
  // background-color: gray;
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, img: cat1, title: "SHIRT STYLE!" },
    { id: 2, img: cat2, title: "LONGWEAR LOVE!" },
    { id: 3, img: cat3, title: "LIGHT JACKETS!" },
  ]);
 
  
  return (
    <Container>
      <Title>CATEGORIES</Title>
      <CategoriesContainer>
        {categories.map((item) => (
          <CategorieItem
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            categories={categories}
            setCategories={setCategories}
          />
        ))}
        
      </CategoriesContainer>
    </Container>
  );
        }

export default Categories;
