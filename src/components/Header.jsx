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
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: 56px;
  width: 100vw;
  padding: 0 1rem;
  background-color: var(--nord0);
  border-bottom: 1px solid var(--nord6);
  z-index: 10;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
`;

const Hamburger = styled(GiHamburgerMenu)`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
