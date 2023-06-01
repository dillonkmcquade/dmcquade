import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

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
        <ListItem>
          <StyledLink to="/">~/About</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/projects">~/Projects</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/contact">~/Contact</StyledLink>
        </ListItem>
        <ListItem>
          <Location /> Montreal, QC
        </ListItem>
        <Icons>
          <a
            href="https://linkedin.com/in/dillonkmcquade"
            target="_blank"
            aria-label="Link to my linkedin"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://www.github.com/dillonkmcquade"
            target="_blank"
            aria-label="Link to my github"
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <a aria-label="Email me" href="mailto:dillonkmcquade@gmail.com">
            <Mail />
          </a>
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
const LinkedIn = styled(BsLinkedin)`
  scale: 2;
  margin: 0 1em;
  cursor: pointer;
  &:hover {
    color: var(--nord10);
  }
`;
const GitHub = styled(BsGithub)`
  scale: 2;
  cursor: pointer;
  margin: 0 1em;
  &:hover {
    color: var(--nord1);
  }
`;

const Mail = styled(AiFillMail)`
  scale: 2;
  cursor: pointer;
  margin: 0 1em;
  &:hover {
    color: var(--nord15);
  }
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
