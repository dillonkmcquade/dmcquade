import styled from "styled-components";
const ProjectCard = ({ data: { url, name, src, description } }) => {
  return (
    <Wrapper>
      <Head>
        <a href={url} alt="link to project on github">
          <Image src={src} alt="project thumbnail" />
        </a>
      </Head>
      <Name>{name}</Name>
      <hr />
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
  @media (max-width: 500px) {
    width: calc(100% - 2em);
  }
`;

const Name = styled.h1`
  font-size: 2rem;
`;

const Head = styled.div`
  max-height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
`;
