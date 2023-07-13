import { BsGithub, BsYoutube } from "react-icons/bs";
import styled from "styled-components";

const ProjectCard = ({ data: { url, name, src, description } }) => {
  return (
    <Wrapper>
      <ImageContainer>
        <ProjectThumbnail src={src} alt="project thumbnail" />
      </ImageContainer>
      <TitleAndIcons>
        <Name>{name}</Name>
      </TitleAndIcons>
      <hr />
      <p>{description}</p>
      <Icons>
        <a href={url} alt="github link">
          <BsGithub size="24px" style={{ margin: "0 .5rem" }} />
        </a>
        <a href={url} alt="youtube link">
          <BsYoutube size="24px" style={{ margin: "0 .5rem" }} />
        </a>
      </Icons>
    </Wrapper>
  );
};

export default ProjectCard;

const Wrapper = styled.section`
  background-color: var(--nord3);
  border-radius: 1em;
  width: 100%;
  margin: 1rem 0;
  padding: 1em;
  font-size: 0.8rem;
`;

const TitleAndIcons = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icons = styled.div`
  margin: 1rem 0 0 0;
  align-self: flex-end;
`;

const Name = styled.div`
  font-size: 1.6rem;
`;

const ImageContainer = styled.div`
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
const ProjectThumbnail = styled.img``;
