import styled from "styled-components";
import data from "../data/data.json";
import { useParams } from "react-router-dom";
const ProjectDetails = () => {
  const { id } = useParams();
  return <Wrapper>{data[id].url}</Wrapper>;
};

export default ProjectDetails;
const Wrapper = styled.article`
  position: relative;
  top: 56px;
  display: flex;
  width: 95vw;
  margin: 0 auto;
  flex-wrap: wrap;
  @media (min-width: 625px) {
    justify-content: center;
  }
`;
