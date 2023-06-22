import { Search } from '@material-ui/icons';
import { ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Logoimg from '../images/bat.png';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 100px;
  margin-top: 0;
  position: relative;
  border : 1px solid white;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  justtify-content: center;
`;

const Logo = styled.img`
  width: 140px;
  height: 80px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color: black;
`;

const AuthLinks = styled.div`
  display: flex;
  align-items: center;
`;

const AuthLink = styled(Link)`
  font-size: 14px;
  margin-left: 25px;
  text-decoration: none;
  color: black;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>LN</Language>
          <SearchContainer>
            <Input  />
            <Search style={{ color: 'gray' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo src={Logoimg} alt="LOGO" />
        </Center>
        <Right>
          <MenuItem to="/">HOME</MenuItem>
          <MenuItem to="/categories">CATEGORIES</MenuItem>
          <MenuItem to="/products">PRODUCTS</MenuItem>
          <MenuItem to="/about">ABOUTUS</MenuItem>
          <AuthLinks>
            <AuthLink to="/login">LOGIN</AuthLink>
            <AuthLink to="/register">REGISTER</AuthLink>
          </AuthLinks>
          <MenuItem to="/cart">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
