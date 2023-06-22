import { Send } from "@material-ui/icons";
import { useMemo, useRef } from "react";
import { styled } from "styled-components"

const Container = styled.div`
height : 60vh;
display : flex;
align-items: center;
justify-content: center;
background-color: #fcf5f5; 
flex-direction: column;
`;
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

`;
const Inputcontainer= styled.div`
width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`;
const Buttons = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
`;

const Newsletter = () => {
  const inputref = useRef();
  const handleClick = useMemo(() => {
    return () => {
      console.log(inputref.current.value);
      inputref.current.focus();
      inputref.current.value = "";
    };
  }, []);
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>Get timely updates for your favourite product.</Description>
      <Inputcontainer>
      <Input placeholder="Your email" ref={inputref}/>
      <Buttons onClick={handleClick}>
        <Send/>
      </Buttons>
      </Inputcontainer>
    </Container>
  )
}

export default Newsletter
