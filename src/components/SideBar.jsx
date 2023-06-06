import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ImLocation } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { sideBarLinks, sideBarIcons } from "../arrays.js";

const SideBar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setVisible(false);
  }, [location]);
  return (
    <Wrapper>
      <Header>
        <Image
          src="./assets/black-and-white-headshot.jpg"
          alt="picture of me"
        />
        <Hamburger size="48px" onClick={() => setVisible(!visible)} />
      </Header>

      <Nav visible={visible ? "block" : "none"}>
        <ListItem>
          <h1>Dillon McQuade</h1>
          <h2>Full-Stack web developer</h2>
        </ListItem>
        {sideBarLinks.map((item) => (
          <ListItem key={item.text}>
            <StyledLink to={item.path} key={item.text}>
              {item.text}
            </StyledLink>
          </ListItem>
        ))}
        <ListItem>
          <Location /> Montreal, QC
        </ListItem>
        <Icons>
          {sideBarIcons.map((item) => (
            <a
              href={item.href}
              aria-label={item.label}
              target="_blank"
              rel="noreferrer"
              key={item.href}
            >
              <item.icon />
            </a>
          ))}
        </Icons>
      </Nav>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.aside`
  position: relative;
  display: flex;
  text-align: center;
  min-width: 200px;
  max-width: 400px;
  flex-direction: column;
  @media (max-width: 500px) {
    margin: 0 auto;
  }
`;
const Image = styled.img`
  margin: 1em;
  width: 15%;
  border: 10px solid var(--nord8);
  border-radius: 50%;
  @media (max-width: 1200px) {
    border: 4px solid var(--nord8);
  }
  @media (min-width: 375px) {
    max-width: 50%;
  }
  @media (min-width: 1000px) {
    width: 200px;
  }
`;

const Nav = styled.ul`
  display: ${(props) => props.visible};
  position: relative;
  border-radius: 1em;
  min-height: 50%;
  min-width: 80%;
  margin: 15px;
  list-style: none;
  padding: 1em;
  animation: slideIn ease-in-out 400ms;
  -webkit-animation: slideIn ease-in-out 400ms;
  @keyframes slideIn {
    0% {
      top: -200px;
    }
    100% {
      top: 0;
    }
  }
  @-webkit-keyframes slideIn {
    0% {
      top: -200px;
    }
    100% {
      top: 0;
    }
  }
  @media (min-width: 1000px) {
    display: block;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
  &.active {
    color: var(--nord8);
    text-decoration: underline;
  }
`;

const ListItem = styled.li`
  margin: 1em 0;
`;
const Icons = styled(ListItem)`
  margin: 1.25em 0;
  min-width: 150px;
`;

const Location = styled(ImLocation)`
  color: var(--nord14);
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1000px) {
    justify-content: center;
  }
`;
const Hamburger = styled(GiHamburgerMenu)`
  margin: 1em;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;
