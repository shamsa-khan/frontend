import Announcement from "../components/announcement";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import aboutus1 from "../images/aboutus1.png"
import styled from 'styled-components';

const Container = styled.div`
`
const Wrapper = styled.div`
   flex : 1;
   display : flex;
   justify-content : center;
   align-items : center;
  width: 100%;
 max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
   margin-bottom: 20px;
`;
const TitleContainer = styled.div`
   
  margin-bottom: 20px;
`;

const Description = styled.p`
display : flex;
justify-content : center;
   align-items : center;
  font-size: 18px;
  line-height: 1.5;
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-top: 20px;
`;
const Footercontainer = styled.div`
background-color : teal;
color : white`
const AboutPage = () => {
  return (
    <Container>
      {/* <Announcement />
      <Navbar/> */}
      <Wrapper>
        <TitleContainer><Title>About Us</Title>
      
      <Description>
      Welcome to our clothing website! We are passionate about providing you with stylish and trendy clothing options that are both comfortable and affordable. Whether you're looking for casual everyday wear or something more formal, we have a wide selection to choose from.
      </Description></TitleContainer>
      
      <Image src={aboutus1} alt="About Us" /></Wrapper>
      <Footercontainer><Footer/></Footercontainer>
    </Container>
  );
};

export default AboutPage;
