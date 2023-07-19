import { BsGithub, BsYoutube } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProjectCard = ({
  data: { github, name, src, description, youtube },
  id,
}) => {
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(`/project/${id}`)}>
      <ImageContainer>
        <ProjectThumbnail src={src} alt="project thumbnail" />
      </ImageContainer>
      <TitleAndIcons>
        <Name>{name}</Name>
      </TitleAndIcons>
      <hr />
      <p>{description}</p>
      <Icons>
        <a href={github} alt="github link" rel="noreferrer" target="_blank">
          <BsGithub size="24px" style={{ margin: "0 .5rem" }} />
        </a>
        {youtube && (
          <a href={youtube} alt="youtube link" rel="noreferrer" target="_blank">
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
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
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
