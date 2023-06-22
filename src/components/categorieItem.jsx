import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  gap : 10px;
  background-color: lightpink;
  color: brown;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
// props recieved
const CategorieItem = ({ id, img, title, categories, setCategories }) => {
  const navigate = useNavigate();

  

  const handleShopNowClick = () => {
    navigate("/categories");
  }

  return (
    <Container>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
       
        <Button onClick={handleShopNowClick}>SHOP NOW</Button> 
        
      </Info>
    </Container>
  );
}

export default CategorieItem;
