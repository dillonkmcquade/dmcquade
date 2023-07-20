import styled from "styled-components";
import data from "../data/projectDetails.json";
import { useParams } from "react-router-dom";
const ProjectDetails = () => {
  const { id } = useParams();
  return (
    <Wrapper>
      <Head>{data[id].title}</Head>
      {data[id].sections.map((section, index) => (
        <Section key={section.title}>
          <Flex index={index}>
            <SectionImage src={section.image} />
            <SectionParagraph>
              <SectionTitle>{section.title}</SectionTitle>
              {section.text.split("\n").map((par) => (
                <SectionText key={par}>{par}</SectionText>
              ))}
            </SectionParagraph>
          </Flex>
        </Section>
      ))}
      <Section></Section>
      <Section></Section>
    </Wrapper>
  );
};

export default ProjectDetails;
const Wrapper = styled.article`
  position: relative;
  top: 56px;
  display: flex;
  width: 95vw;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 1000px;

  @media (min-width: 625px) {
    justify-content: center;
  }
`;

const Section = styled.div`
  min-height: 30vh;
  margin: 3rem 0;
`;
const Head = styled.h1`
  font-size: 2.6rem;
`;
const SectionTitle = styled.h1`
  font-size: 1.8rem;
  max-width: 100%;
  text-align: center;
  @media (min-width: 600px) {
    max-width: 75%;
  }
`;
const SectionText = styled.p`
  margin: 0.5rem 0;
  max-width: 100%;
  letter-spacing: 0.03em;
  line-height: 1.5em;
  @media (min-width: 600px) {
    width: 100%;
    padding: 2rem;
  }
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: ${(props) =>
      props.index % 2 === 1 ? "row-reverse" : "row"};
    justify-content: space-evenly;
  }
`;
const SectionImage = styled.div`
  background-image: ${(props) => (props.src ? `url(${props.src})` : "none")};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  width: 100%;
  @media (min-width: 1000px) {
    width: 100%;
    margin: 0 1rem;
  }
`;
const SectionParagraph = styled.div`
  width: 100%;
`;
