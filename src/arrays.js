import styled from "styled-components";
import { AiFillMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {
  SiExpress,
  SiFedora,
  SiGit,
  SiGooglechrome,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNeovim,
  SiNodedotjs,
  SiPnpm,
  SiReact,
  SiStyledcomponents,
  SiTmux,
  SiTypescript,
} from "react-icons/si";

export const myStack = [
  { text: "JavaScript", icon: SiJavascript, iconColor: "var(--nord13)" },
  { text: "Node.js", icon: SiNodedotjs, iconColor: "var(--nord14)" },
  { text: "Some Typescript", icon: SiTypescript, iconColor: "var(--nord10)" },
  { text: "React", icon: SiReact, iconColor: "cyan" },
  { text: "Styled-Components", icon: SiStyledcomponents },
  { text: "Express.js", icon: SiExpress },
  { text: "MongoDB", icon: SiMongodb },
  { text: "Unix tools", icon: SiLinux, iconColor: "black" },
];
export const myDevEnvironment = [
  { text: "Fedora Workstation", icon: SiFedora, iconColor: "var(--nord10)" },
  { text: "NeoVim (my favorite editor)", icon: SiNeovim, iconColor: "green" },
  { text: "Git", icon: SiGit, iconColor: "var(--nord12)" },
  { text: "pnpm", icon: SiPnpm },
  { text: "Zsh + Tmux", icon: SiTmux },
  { text: "Chrome/firefox devtools", icon: SiGooglechrome },
];
export const wantToLearn = ["Typescript", "Java", "Go", "Rust", "Postgres"];

export const sideBarLinks = [
  { text: "~/About", path: "/" },
  { text: "~/Projects", path: "/projects" },
  { text: "~/Contact", path: "/contact" },
];

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
