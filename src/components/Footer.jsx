import styled from "styled-components";
import { sideBarIcons } from "../data/arrays";
export default function Footer() {
  return (
    <Wrapper>
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
  justify-content: center;
  position: relative;
  top: 56px;
  padding-bottom: 1rem;
`;
const Icons = styled.div`
  padding: 1rem;
  margin: 1.25em 0;
`;
