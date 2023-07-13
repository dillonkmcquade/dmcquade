import styled from "styled-components";
import { sideBarLinks, sideBarIcons } from "../data/arrays.js";
import { ImLocation } from "react-icons/im";
import { NavLink } from "react-router-dom";

export default function Menu({ visible }) {
  return (
    <Nav visible={visible ? "flex" : "none"}>
      <Image src="./assets/black-and-white-headshot.jpg" alt="picture of me" />
      <h1>Dillon McQuade</h1>
      <h2>Full-Stack web developer</h2>
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
  );
}
const Nav = styled.nav`
  display: ${(props) => props.visible};
  position: fixed;
  top: 56px;
  height: calc(100vh - 56px);
  width: 100vw;
  border-radius: 1em;
  z-index: 100;
  margin: 1rem 0;
  background-color: var(--nord0);
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  height: 100px;
  border: 10px solid var(--nord8);
  border-radius: 50%;
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

const ListItem = styled.div`
  padding: 1rem;
`;
const Icons = styled(ListItem)`
  margin: 1.25em 0;
`;

const Location = styled(ImLocation)`
  color: var(--nord14);
`;
