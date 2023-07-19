import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header({ setMenuVisible, menuVisible }) {
  return (
    <Wrapper>
      <InnerContainer>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Dillon McQuade</h1>
        </Link>
        <Hamburger size="24px" onClick={() => setMenuVisible(!menuVisible)} />
      </InnerContainer>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  height: 56px;
  width: 100vw;
  background-color: var(--nord0);
  border-bottom: 1px solid var(--nord6);
  z-index: 10;
  margin: 0 auto;
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

const Hamburger = styled(GiHamburgerMenu)`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
