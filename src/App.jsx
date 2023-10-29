import styled from "styled-components";
import Input from "./components/Input";
import Button from "./components/Button";
import Icon from "./components/Icon";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function App() {
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #663FB6  100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C  40%, #F0A853 100% )";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE  50%)";
  return (
    <Container>
      <Text>welcome</Text>
      <InputContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button text="Sign up" />
      </ButtonContainer>
      <LoginWith>or login with</LoginWith>
      <HorizontalRule />
      <IconContainer>
        <Icon color={FacebookBackground}>
          <FaFacebook />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
   flex-direction: column;
  align-items : center;
  height: 60vh;
  width: 30vw;
  background: #fff;
  box-shadow : 0 0 30px 3px #222;
  backdrop-filter : blur(1px);
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing : 0.3rem
  box-shadow: 0 8px 32px  0 rgba(31,38,135,0.55);
  color : #222;


  @media only screen and (max-width : 320px){
    width : 80vw;
    height : 90vh;
    
     hr{
       margin-bottom : 0.3rem;
    }
    h4{
      font-size : small
    }
  }

  @media only screen and (min-width:360px){
    height :60vh;
    width : 80vw;
  }

  @media only screen and (min-width : 411px){
    width : 80vw;
    height: 55vh;
    
  }

  

  @media only screen and (min-width : 768px){
    width : 80vw;
    height: 50vh;
  }

  @media only screen and (min-width : 1024px){
    width : 70vw;
    height: 90vh;
  }

  @media only screen and (min-width : 1280px){
    width : 30vw;
    height: 65vh;
`;

const Text = styled.h2`
  margin: 1rem 0 2rem 0;
  letter-spacing: 0.2rem;
  text-align: center;

  @media only screen and (min-width: 320px) {
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: 1rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2.1rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-item: center;

  @media only screen and (min-width: 360px) {
    padding-top: 1rem;
  }
`;

const LoginWith = styled.h5`
  cursor: pointer;
  letter-spacing: 0.05rem;
  font-weight: bold;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  margin: 1.5rem 0 1rem 0;
  background: linear-gradient(to right, #100a3c 0%, #9999 79%);
  backdrop-filter: blur(25px);
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
  margin: 1rem;
`;
const ForgotPassword = styled.h4`
  cursor: pointer;
  letter-spacing: 0.15rem;
  padding: 1rem;
`;

export default App;
