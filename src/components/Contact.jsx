import { AiFillMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <IconContext.Provider value={{ size: "64px" }}>
        <Icons>
          <Anchor
            href="https://linkedin.com/in/dillonkmcquade"
            target="_blank"
            aria-label="Link to my linkedin"
            rel="noreferrer"
          >
            <LinkedIn />
          </Anchor>
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
      </IconContext.Provider>
      <h1 style={{ fontSize: "2em" }}>Get in touch 👆🏼</h1>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.article`
  min-width: calc(100% - 2em);
  background-color: var(--nord3);
  border-radius: 1em;
  margin: 1em;
  padding: 1em;
  animation: fadeIn ease-in 1s;
  -webkit-animation: fadeIn ease-in 1s;
  display: flex;
  align-items: center;
  flex-direction: column;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (min-width: 1000px) {
    min-width: calc(1000px - 2em);
  }
`;
const Icons = styled.div`
  margin: 3em 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const LinkedIn = styled(BsLinkedin)`
  cursor: pointer;
  &:hover {
    color: var(--nord10);
  }
  @media (min-width: 500px) {
    scale: 2;
  }
`;
const GitHub = styled(BsGithub)`
  cursor: pointer;
  &:hover {
    color: var(--nord1);
  }
  @media (min-width: 500px) {
    scale: 2;
  }
`;

const Mail = styled(AiFillMail)`
  cursor: pointer;
  &:hover {
    color: var(--nord15);
  }
  @media (min-width: 500px) {
    scale: 2;
  }
`;
const Anchor = styled.a`
  display: flex;
  min-width: 64px;
  min-height: 64px;
  align-items: center;
  justify-content: center;
`;
