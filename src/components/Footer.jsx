import styled from "styled-components";
import { sideBarIcons } from "../data/arrays";
export default function Footer() {
  return (
    <Wrapper>
      <Title>Get in touch with me</Title>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 56px;
  padding-bottom: 1rem;
  border-top: 2px solid black;
`;
const Icons = styled.div`
  padding: 1rem;
  margin: 1.25em 0;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin: 1rem;
`;
