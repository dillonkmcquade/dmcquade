import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { IconContext } from "react-icons";
import data from "../data/data.json";
import ProjectCard from "./ProjectCard";
import { ImLocation } from "react-icons/im";

const Home = () => {
  const skills = [
    "JavaScript",
    "Typescript",
    "HTML",
    "CSS",
    "Express.js",
    "MongoDB",
    "Node.js",
    "styled-components",
    "linux",
    "React",
    "Docker",
    "Podman",
  ];
  return (
    <IconContext.Provider value={{ size: "16px", color: "black" }}>
      <Wrapper>
        <Hero />
        <Head>
          <Avatar>
            <Image
              src="./assets/black-and-white-headshot.jpg"
              alt="picture of me"
            />
          </Avatar>
          <AboutContainer>
            <div>
              <Name>Dillon McQuade</Name>
              <Typewriter
                component={Title}
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Adventurer",
                    "Life-long learner",
                    "Husband",
                    "Lawn nerd",
                  ],
                  loop: true,
                  autoStart: true,
                  skipAddStyles: true,
                }}
              />
              <ImLocation style={{ color: "var(--nord14)" }} /> Montreal, QC
            </div>

            <Title>About me</Title>
            <About>
              I'm a Full Stack Developer, life-long learner, adventurer,
              husband, and lawn nerd. I'm intrigued by software and especially
              developer tools and command-line applications.
            </About>
            <About>
              My interests in software are vast and I'm determined to continue
              to broaden my horizons in this field. I'm currently looking for a
              new role to apply the knowledge I've gained and expand my
              skill-set.
            </About>
          </AboutContainer>
        </Head>
        <Rule />
        <Name>Projects</Name>
        <Projects>
          {data.map((project) => (
            <ProjectCard key={project.id} data={project} id={project.id} />
          ))}
        </Projects>
        <Rule />
        <Name>Skills</Name>
        <Skills>
          {skills.map((skill) => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </Skills>
      </Wrapper>
    </IconContext.Provider>
  );
};

export default Home;

const Wrapper = styled.article`
  display: flex;
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
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: var(--nord4);
  background-color: rgba(0, 0, 0, 0.4);
  @media (min-width: 750px) {
    flex-direction: row;
    min-height: 40vh;
  }
`;
const Name = styled.h1`
  font-size: 2em;
  color: var(--nord7);
  margin-top: 20px;
  letter-spacing: 0.05em;
`;
const Title = styled.h2`
  font-size: 1.5em;
  color: var(--nord8);
  margin-bottom: 20px;
  letter-spacing: 0.05em;
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
  text-align: left;
  font-size: 1rem;
  width: 100%;
  padding: 0.5em 1em;
  line-height: 1.25em;
  letter-spacing: 0.05em;
  text-indent: 1rem;
  padding: 1rem;
  @media (min-width: 1000px) {
    max-width: 1000px;
    font-size: 1.1rem;
    letter-spacing: 0.03em;
  }
`;
const Rule = styled.hr`
  width: 30%;
  margin: 2em auto calc(2em - 20px) auto;
  color: var(--nord7);
`;

const Image = styled.img`
  height: 150px;
  margin: 1rem 0;
  border-radius: 0.2em;
  @media (min-width: 550px) {
    height: 300px;
  }
`;

const Hero = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 141px,
      rgba(0, 0, 0, 0) 100%
    ),
    url("./assets/banner.jpg");
  background-size: cover;
  background-position: center;
  position: absolute;
  top: -100px;
  z-index: -1;
  @media (min-width: 750px) {
    height: 90vh;
  }
`;

const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AboutContainer = styled.div`
  text-align: center;
  max-width: 100%;
  @media (min-width: 750px) {
    max-width: 30%;
  }
`;
const Skills = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
`;

const Skill = styled.p`
  font-size: 1.5em;
  margin-top: 20px;
  letter-spacing: 0.05em;
  text-align: center;
`;
