import styled from "styled-components";
const ProjectCard = ({ data: { url, name, src, description } }) => {
  return (
    <Wrapper>
      <a href={url} alt="link to project on github">
        <Image src={src} alt="project thumbnail" />
        {name}
      </a>
      <p>{description}</p>
    </Wrapper>
  );
};

export default ProjectCard;
const Wrapper = styled.section`
  background-color: var(--nord3);
  border-radius: 1em;
  width: calc(50% - 2em);
  margin: 1em;
  padding: 1em;
  max-height: 350px;
  @media (max-width: 500px) {
    width: calc(100% - 2em);
  }
`;
const Image = styled.img`
  max-width: 100%;
  overflow: hidden;
`;
