import styled from "styled-components";
import { AiFillMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const LinkedIn = styled(BsLinkedin)`
  scale: 2;
  margin: 0 1em;
  cursor: pointer;
  color: black;
  &:hover {
    color: var(--nord10);
  }
`;
const GitHub = styled(BsGithub)`
  scale: 2;
  cursor: pointer;
  margin: 0 1em;
  color: black;
  &:hover {
    color: var(--nord1);
  }
`;

const Mail = styled(AiFillMail)`
  scale: 2;
  cursor: pointer;
  margin: 0 1em;
  color: black;
  &:hover {
    color: var(--nord15);
  }
`;
export const sideBarIcons = [
  {
    href: "https://linkedin.com/in/dillonkmcquade",
    label: "Link to my linkedin",
    icon: LinkedIn,
  },
  {
    href: "https://github.com/dillonkmcquade",
    label: "Link to my github",
    icon: GitHub,
  },
  {
    href: "mailto:dillonkmcquade@gmail.com",
    label: "Email me",
    icon: Mail,
  },
];
