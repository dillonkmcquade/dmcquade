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
export const data = [
  {
    subtitle: "My stack",
    array: [
      { text: "JavaScript", icon: SiJavascript, iconColor: "var(--nord13)" },
      { text: "Node.js", icon: SiNodedotjs, iconColor: "var(--nord14)" },
      {
        text: "Typescript",
        icon: SiTypescript,
        iconColor: "var(--nord10)",
      },
      { text: "React", icon: SiReact, iconColor: "cyan" },
      { text: "styled-components", icon: SiStyledcomponents },
      { text: "Express.js", icon: SiExpress },
      { text: "MongoDB", icon: SiMongodb },
      { text: "Unix tools", icon: SiLinux, iconColor: "black" },
    ],
  },
  {
    subtitle: "My development environment",
    array: [
      {
        text: "Fedora Workstation",
        icon: SiFedora,
        iconColor: "var(--nord10)",
      },
      {
        text: "NeoVim (my favorite editor)",
        icon: SiNeovim,
        iconColor: "green",
      },
      { text: "Git", icon: SiGit, iconColor: "var(--nord12)" },
      { text: "pnpm", icon: SiPnpm },
      { text: "Zsh + Tmux", icon: SiTmux },
      { text: "Chrome/firefox devtools", icon: SiGooglechrome },
    ],
  },
  {
    subtitle: "Things I want to learn",
    array: [{ text: "Go" }, { text: "Rust" }, { text: "Postgres" }],
  },
];

export const sideBarLinks = [
  { text: "~/About", path: "#about" },
  { text: "~/Projects", path: "#projects" },
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
