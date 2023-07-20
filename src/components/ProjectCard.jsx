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
      <Description>{description}</Description>
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
  border-radius: 0.2em;
  width: 100%;
  margin: 1rem 0;
  padding: 1em;
  font-size: 0.8rem;
  background-color: white;
  cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;r;
  &:hover {
    background-color: #faf5e8;
  }
  @media (min-width: 625px) {
    max-width: 350px;
    margin: 1rem;
  }
`;

const Description = styled.p`
  letter-spacing: 0.05em;
  line-height: 1.25rem;
`;

const TitleAndIcons = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

const Icons = styled.div`
  margin: 1rem 0 0 0;
  align-self: flex-end;
  color: black;
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
