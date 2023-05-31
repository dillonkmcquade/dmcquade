import styled from "styled-components";
import { IconContext } from "react-icons";
import {
  SiExpress,
  SiFedora,
  SiFirefox,
  SiGnubash,
  SiGooglechrome,
  SiJavascript,
  SiMongodb,
  SiNeovim,
  SiNodedotjs,
  SiPnpm,
  SiReact,
  SiStyledcomponents,
  SiTmux,
  SiTypescript,
  SiYarn,
} from "react-icons/si";

const Home = () => {
  return (
    <IconContext.Provider value={{ size: "25px" }}>
      <Wrapper>
        <Head>
          <Name>Dillon McQuade</Name>
          <Title>Full Stack Developer</Title>
        </Head>
        <Section>
          Hi, i'm Dillon. I'm a (soon-to-be)full-stack developer from Montreal,
          Quebec.
        </Section>
        <Section>
          I'm a an aspiring software dev, linux enthusiast, and outdoorsman.
          When i'm not customizing my development tools or tinkering with my
          config files, I'm usually out hiking, camping, backpacking or biking.
        </Section>
        <SectionContainer>
          <Section>
            <SubTitle>My stack</SubTitle>
            <ul>
              <ListItem>
                <SiJavascript color="var(--nord13)" /> JavaScript
              </ListItem>
              <ListItem>
                <SiNodedotjs color="var(--nord14)" /> Node.js
              </ListItem>
              <ListItem>
                <SiTypescript color="var(--nord10)" /> Some Typescript
              </ListItem>
              <ListItem>
                <SiReact color="cyan" /> React
              </ListItem>
              <ListItem>
                <SiStyledcomponents /> Styled-Components
              </ListItem>
              <ListItem>
                <SiExpress /> Express.js
              </ListItem>
              <ListItem>
                <SiMongodb /> MongoDB
              </ListItem>
              <ListItem>
                <SiGnubash /> Automating with bash
              </ListItem>
            </ul>
          </Section>
          <Section>
            <SubTitle>My dev environment</SubTitle>
            <ul>
              <ListItem>
                <SiFedora color="var(--nord10)" /> Fedora Workstation 38
              </ListItem>
              <ListItem>
                <SiNeovim color="green" /> NeoVim (my favorite editor)
              </ListItem>
              <ListItem>
                <SiPnpm /> pnpm (sometimes yarn <SiYarn color="var(--nord10)" />
                ){" "}
              </ListItem>
              <ListItem>
                Zsh + <SiTmux /> Tmux
              </ListItem>
              <ListItem>
                <SiGooglechrome /> <SiFirefox /> Chrome/firefox devtools
              </ListItem>
            </ul>
          </Section>
        </SectionContainer>
        <SectionContainer>
          <Section>
            <SubTitle>Other Technologies that I occasionally use</SubTitle>
            <ul>
              <ListItem>Podman, Toolbx, Docker</ListItem>
              <ListItem>Virtual-Machine Manager</ListItem>
            </ul>
          </Section>
          <Section>
            <SubTitle>Things I want to learn</SubTitle>
            <ul>
              <ListItem>Typescript</ListItem>
              <ListItem>Java</ListItem>
              <ListItem>Go</ListItem>
              <ListItem>Rust</ListItem>
              <ListItem>Postgres</ListItem>
            </ul>
          </Section>
        </SectionContainer>
      </Wrapper>
    </IconContext.Provider>
  );
};

export default Home;

const Wrapper = styled.article`
  max-width: calc(1000px - 2em);
  background-color: var(--nord3);
  border-radius: 1em;
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
    min-width: 900px;
  }
  @media (min-width: 1200px) {
    min-width: 800px;
  }
`;
const Head = styled.div`
  text-align: center;
`;
const Name = styled.h1`
  font-size: 2em;
  color: var(--nord7);
`;
const Title = styled.h2`
  font-size: 1.5em;
  color: var(--nord8);
`;

const SubTitle = styled.h3`
  color: var(--nord8);
  margin: 10px 0;
  font-size: 1.5em;
`;
const Section = styled.section`
  margin: 20px;
`;
const ListItem = styled.li`
  margin: 10px;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
