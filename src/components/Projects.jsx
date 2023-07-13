import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import data from "../data/data.json";
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
  position: relative;
  top: 56px;
  display: flex;
  width: 95vw;
  margin: 0 auto;
  flex-wrap: wrap;
  @media (min-width: 1000px) {
    min-width: calc(1000px - 2em);
  }
`;
