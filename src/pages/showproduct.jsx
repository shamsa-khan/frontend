import React, { useState } from "react";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import { Categoriesarray } from "../data";
import CategorieItem from "../components/categorieItem";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 100px 20px;
`;

const Title = styled.h1`
  font-weight: 500;
  color: teal;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer1 = styled.div`
  padding: 20px 20px;
  margin-right: 100px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-left: 150px;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: teal;
    color: white;
    cursor: pointer;
  }
`;

const ShowProduct = (props) => {
  
  const navigate = useNavigate();
   const handleChange = () =>{
   navigate("/cart");
   }
 

 

  

  return (
    <Container>
     
      <Wrapper id="1">
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Whether you're going for a casual day out, attending a music festival,
            or want to make a fashion statement, the denim jumpsuit offers a comfortable
            and fashionable option. Its timeless appeal and ability to effortlessly elevate
            any outfit make it a wardrobe staple for many fashion enthusiasts.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AmountContainer>
            <Remove />
            <Amount>1</Amount>
            <Add />
          </AmountContainer>
          <AddContainer1>
            <Button onClick = {handleChange}>ADD TO CART</Button>
          

          </AddContainer1>
        </InfoContainer>
      </Wrapper>
      <CategoriesContainer>
        {Categoriesarray.map((item) => (
          <CategorieItem
            key={item.id}
            img={item.img}
            title={item.title}
            categories={Categoriesarray}
          />
        ))}
      </CategoriesContainer>
      <Newsletter />
      <Footer />
    </Container>
  );
}
export default ShowProduct;
