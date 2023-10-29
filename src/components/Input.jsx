import styled from "styled-components";

function Input({ type, placeholder }) {
  return <StyleInput type={type} placeholder={placeholder} />;
}

const StyleInput = styled.input`
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 15px rgba(31, 3, 135, 0.3);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #444;
  font-size: 1rem;
  font-weight: bold;

  &:focus {
    display: inline-block;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.55);
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #666;
    font-weight: 100;
    font-size: 1rem;
  }

  @media only screen and (min-width: 360px) {
    margin: 1rem;
  }
`;

export default Input;
