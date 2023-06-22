import styled from "styled-components";
import pic1 from "../images/loginpic.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../redux/api";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${pic1});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 const [error , setError] = useState(0);
  // const dispatch = useDispatch();
  // const { isFetching, error } = useSelector((state) => state.user);
  
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   login(dispatch, { username, password });
  // };

  const handleClick = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      navigate("/"); 
    } else {
      setError("Invalid username or password"); 
    }
  };

  const handleCreateAccount = () => {
    navigate("/register"); 
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form >
          <Input
            type="text" name="username" placeholder="Username" value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password" name="password" placeholder="Password" value={password}   
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" onClick={handleClick} >LOGIN</Button>
          {error && <p>{error}</p>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link onClick={handleCreateAccount}>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
// disabled={isFetching}