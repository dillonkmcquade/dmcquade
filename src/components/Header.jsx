import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <InnerContainer>
        <Logo to="/">
          <h1 style={{ fontFamily: "inherit" }}>Dillon McQuade</h1>
        </Logo>
      </InnerContainer>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
  margin: 0 auto;
  padding: 1rem 0;
  height: 56px;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  text-decoration: none;
  border: 2px solid white;
  padding: 0.5em;
  letter-spacing: 0.05em;
  color: white;
  font-family: "Fugaz One", cursive;
  &:hover {
    opacity: 0.8;
  }
`;
