import styled from "styled-components";
import pic1 from "../images/regpic.jpg";
import { useState } from "react";
import { addUser } from "../service/api.js";
import { useEffect } from "react";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${pic1});
    background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
`
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;




  

const Register = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleInputChange = (e) => {
    console.log(e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister =  (e) => {
    alert('User added successfully');
    console.log("user");
    e.preventDefault();
    addUser(user);
    

  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleRegister}>
          <Input type="text" name="name" placeholder="Uname" value={user.name}
           />
          <Input type="text" name="lastname" placeholder="lastname" value={user.lastname}
           />
          <Input type="text" name="username" placeholder="Username" value={user.username}
             />
          <Input type="Email" name="email" value={user.email} onChange={handleInputChange}  placeholder="email" />
          <Input  type="password" name="password" placeholder="Password" value={user.password}   
           onChange={handleInputChange} />
          <Input  type="password" name="password" placeholder="confirmPassword" value={user.password}   
           onChange={handleInputChange}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;