import styled from "styled-components";

function Button({ text }) {
  return <StyleButton>{text}</StyleButton>;
}

const StyleButton = styled.button`
  background: linear-gradient(to right, #1f15dc 30%, #15a3ba 70%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border-radius: 2rem;
  cursor: pointer;
  border: none;
  color: #fff;
`;

export default Button;
