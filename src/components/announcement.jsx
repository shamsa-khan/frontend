import { styled } from "styled-components"

const Container = styled.div`
height : 30px;
background-color : teal;
color : white;
display:flex;
justify-content : center;
font-weight : 500
font-size: 14px
`

const Announcement = () => {
  return (
    <Container>
      <marquee>
      Super Deal Free Shipping on Order Over $50</marquee>
    </Container>
  )
}

export default Announcement
