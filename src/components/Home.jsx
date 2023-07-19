import styled from "styled-components";
import { IconContext } from "react-icons";
import data from "../data/data.json";
import ProjectCard from "./ProjectCard";
import { ImLocation } from "react-icons/im";

const Home = () => {
  return (
    <IconContext.Provider value={{ size: "16px" }}>
      <Wrapper id="about">
        <Head>
          <Image
            src="./assets/black-and-white-headshot.jpg"
            alt="picture of me"
          />
          <Name>Dillon McQuade</Name>
          <Title>Full Stack Developer</Title>
          <div>
            <Location /> Montreal, QC
          </div>
          <About>
            I'm a Full Stack Developer, life-long learner, ex back-country
            caretaker in the mountains of Vermont, husband, and lawn nerd. I'm
            intrigued by software and especially developer tools and
            command-line applications.
          </About>

          <About>
            My interests in software are vast and I'm determined to continue to
            broaden my horizons in this field. I'm currently looking for a new
            role to apply the knowledge I've gained and expand my skill-set.
          </About>
        </Head>
        <span id="projects" />
        <Rule />
        <Name>Projects</Name>
        <Projects>
          {data.map((project) => (
            <ProjectCard key={project.id} data={project} id={project.id} />
          ))}
        </Projects>
      </Wrapper>
    </IconContext.Provider>
  );
};

export default Home;

const Wrapper = styled.article`
  display: flex;
  position: relative;
  top: 56px;
  width: 95vw;
  margin: 1rem auto 0 auto;
  font-size: 0.8rem;
  align-items: center;
  flex-direction: column;
  @media (min-width: 625px) {
    max-width: 1400px;
  }
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--nord3);
  border-radius: 1em;
  width: 100%;
  align-items: center;
`;
const Name = styled.h1`
  font-size: 2em;
  color: var(--nord7);
  margin-top: 20px;
`;
const Title = styled.h2`
  font-size: 1.5em;
  color: var(--nord8);
  margin-bottom: 20px;
`;

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
`;
const About = styled.p`
  font-size: 1.1rem;
  width: 100%;
  padding: 1em 1em;
  text-align: justify;
  text-indent: 1rem;
  @media (min-width: 1000px) {
    max-width: 1000px;
  }
`;
const Rule = styled.hr`
  width: 30%;
  margin: 2em auto calc(2em - 20px) auto;
  color: var(--nord7);
`;

const Image = styled.img`
  height: 100px;
  border: 2px solid var(--nord8);
  border-radius: 50%;
  margin: 1rem 0;
`;
const Location = styled(ImLocation)`
  color: var(--nord14);
`;
