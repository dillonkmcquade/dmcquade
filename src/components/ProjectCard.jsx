import { BsGithub, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjectCard = ({
  data: { noInfo, github, name, src, description, youtube, url },
  id,
}) => {
  return (
    <Wrapper>
      <ImageContainer>
        <ProjectThumbnail src={src} alt="project thumbnail" />
      </ImageContainer>
      <TitleAndIcons>
        <Name>
          {name}{" "}
          <span style={{ fontSize: "1rem" }}>
            {url && <a href={url}>Live</a>}
          </span>
        </Name>
      </TitleAndIcons>
      <hr />
      <Content>
        <Description>{description}</Description>
        <Icons>
          <div>
            <a href={github} alt="github link" rel="noreferrer" target="_blank">
              <BsGithub size="24px" style={{ margin: "0 .5rem" }} />
            </a>
            {youtube && (
              <a
                href={youtube}
                alt="youtube link"
                rel="noreferrer"
                target="_blank"
              >
                <BsYoutube size="24px" style={{ margin: "0 .5rem" }} />
              </a>
            )}
          </div>
          {noInfo ? null : (
            <LearnMore to={`/project/${id}`}>Project Details</LearnMore>
          )}
        </Icons>
      </Content>
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
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  &:hover {
    background-color: #faf5e8;
  }
  @media (min-width: 625px) {
    max-width: 350px;
    margin: 1rem;
  }
`;

const LearnMore = styled(Link)`
  color: black;
  text-underline-offset: 5px;
  font-weight: bold;
  line-height: 1.5rem;
  &:hover {
    color: var(--nord10);
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
  display: flex;
  justify-content: space-between;
  color: black;
  padding: 1rem 0;
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

const Content = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
