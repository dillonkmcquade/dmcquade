import { BsGithub, BsYoutube } from "react-icons/bs";
import styled from "styled-components";

const ProjectCard = ({
  data: { url, github, name, src, description, youtube },
}) => {
  return (
    <Wrapper>
      <a href={url || github} alt="Website link" rel="noopener" target="_blank">
        <ImageContainer>
          <ProjectThumbnail src={src} alt="project thumbnail" />
        </ImageContainer>
      </a>
      <TitleAndIcons>
        <Name>{name}</Name>
      </TitleAndIcons>
      <hr />
      <p>{description}</p>
      <Icons>
        <a href={github} alt="github link" rel="noopener" target="_blank">
          <BsGithub size="24px" style={{ margin: "0 .5rem" }} />
        </a>
        {youtube && (
          <a href={youtube} alt="youtube link" rel="noopener" target="_blank">
            <BsYoutube size="24px" style={{ margin: "0 .5rem" }} />
          </a>
        )}
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
  @media (min-width: 625px) {
    max-width: 350px;
    margin: 1rem;
  }
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
