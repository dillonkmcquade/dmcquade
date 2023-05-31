import { AiOutlineArrowDown } from "react-icons/ai";
import styled from "styled-components";
const HeroSection = ({ opacity }) => {
  return (
    <Wrapper>
      <Image src="./assets/bitmap.png" alt="artwork" opacity={opacity} />
      <Arrow
        onClick={() =>
          window.scroll({
            top: document.documentElement.offsetHeight,
            behavior: "smooth",
            left: 0,
          })
        }
      />
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
const Image = styled.img`
  opacity: ${(props) => props.opacity};
  width: 100vw;
  @media (max-width: 500px) {
    width: 100vw;
  }
`;
const Arrow = styled(AiOutlineArrowDown)`
  scale: 3;
  color: var(--nord1);
  z-index: 10;
  position: fixed;
  bottom: 10%;
  right: 50%;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid var(--nord1);
  transition: all ease-in-out 500ms;
  &:hover {
    color: var(--nord8);
    border: 2px solid var(--nord8);
    transform: rotateZ(360deg);
  }
`;
