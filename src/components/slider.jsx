import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
// import image from "../images/sliderimg.png"
import { useState } from "react";
import { SliderItems } from "../data";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
width :  100%;
height : 100vh;
display : flex;
// background-color : coral;
// margin-top : 1%;
overflow : hidden;
// position : relative;

`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  position: absolute;
  top: 60%;
  justify-content : center;
//   transform: translateY(-50%);
  ${props => props.direction === "left" ? "left: 10px;" : "right: 10px;"}
  opacity: 0.5;
  z-index: 2;
`
const Wrapper = styled.div`
height : 100%;
display : flex;
transform: translateX(${props => props.sliderIndex * -100}vw);
`
const Slide = styled.div`
display: flex;
align-items: center;
width : 100vw;
height : 100vh;
background-color : #${props => props.bg}
`
const Imgcontainer = styled.div`
flex : 1
height 100%`
const Infocontainer = styled.div`
flex : 1;
padding : 80px;
`
const Image = styled.img`
height : 80%;
top : 40%;
display: flex;
justify-content: center`
const Title = styled.h1`
font-size : 70px`
const Des = styled.p`
margin : 40px 0;
font-size : 20px;
font-weight : 500;
letter-spacing : 3px
`
const Button = styled.button`
padding : 10px;
font-size: 20px;
background-color : transparent;
cursor : pointer;
&:hover{
    background-color: black;
    color : white;
    transform : scale(1.1);
}
`
const Slider = () => {
    const navigate = useNavigate();
    const [sliderIndex, setindex] = useState(0);
    const handleClick1 =() => {
      navigate("/products");
    }
    const handleClick = (direction) => {
        if(direction === "left"){
            setindex(sliderIndex>0 ?sliderIndex-1:2)
        }else
        setindex(sliderIndex<2 ? sliderIndex+1:0)

    }
    return (
        < Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper sliderIndex = {sliderIndex}>
                {SliderItems.map((items) => (

                    <Slide bg={items.bg}>
                        <Imgcontainer>
                            <Image src={items.img} />
                        </Imgcontainer>
                        <Infocontainer>
                            <Title>{items.Title}</Title>
                            <Des>{items.des}</Des>
                            <Button onClick = {handleClick1}>SHOP NOW</Button>
                        </Infocontainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="Right" onClick={() => handleClick("Right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider;
