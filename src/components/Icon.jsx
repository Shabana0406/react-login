import styled from "styled-components";

function Icon({ color, children }) {
  return <StyleIcon background={color}>{children}</StyleIcon>;
}

const StyleIcon = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: #fff;
  cursor: pointer;
  background: ${(props) => props.background};
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }

  @media only screen and (max-width: 320px) {
    width: 2.3rem;
    height: 2.3rem;
    svg {
      width: 1.1rem;
      height: 1.1rem;
    }
  }

  @media only screen and (max-width: 411px) {
    width: 2.5rem;
    height: 2.5rem;
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

export default Icon;
