import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
const SideBar = () => {
  return (
    <Wrapper>
      <Nav>
        <ListItem>
          <Image
            src="./assets/black-and-white-headshot.jpg"
            alt="picture of me"
          />
        </ListItem>
        <ListItem>
          <StyledLink to="/">Home</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/about">About</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/projects">Projects</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/contact">Contact me</StyledLink>
        </ListItem>
        <Icons>
          <a href="https://linkedin.com/dillonkmcquade" target="_blank">
            <LinkedIn />
          </a>
          <a href="https://www.github.com/dillonkmcquade" target="_blank">
            <GitHub />
          </a>
          <a href="mailto:dillonkmcquade@gmail.com">
            <Mail />
          </a>
        </Icons>
      </Nav>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.aside`
  text-align: center;
  min-width: 25%;
  max-width: 400px;
  @media (max-width: 500px) {
    margin: 0 auto;
  }
`;
const Image = styled.img`
  max-width: 50%;
  border: 10px solid var(--nord8);
  border-radius: 50%;
`;

const Nav = styled.ul`
  border-radius: 1em;
  /*   background-color: var(--nord1); */
  min-height: 50%;
  min-width: 80%;
  margin: 15px;
  list-style: none;
  padding: 1em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;

const ListItem = styled.li`
  margin: 1em 0;
`;
const Icons = styled(ListItem)`
  margin: 1.25em 0;
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
