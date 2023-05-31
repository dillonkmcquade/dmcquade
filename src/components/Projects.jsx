import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import data from "./data.json";
const Projects = () => {
  return (
    <Wrapper>
      {data.map((project) => (
        <ProjectCard key={project.id} data={project} />
      ))}
    </Wrapper>
  );
};

export default Projects;
const Wrapper = styled.article`
  display: flex;
  min-width: calc(75% - 2em);
  flex-wrap: wrap;
  margin: 1em;
  animation: fadeIn ease-in 1s;
  @keyframes fadeIn {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  @media (min-width: 1400px) {
    min-width: 1000px;
  }
  @media (min-width: 1200px) {
    min-width: 800px;
  }
`;
