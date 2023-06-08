import styled from "styled-components";
import { IconContext } from "react-icons";
import { data } from "../data/arrays";
import Section from "./Section";

const Home = () => {
  return (
    <IconContext.Provider value={{ size: "25px" }}>
      <Wrapper>
        <Head>
          <Name>Dillon McQuade</Name>
          <Title>Full Stack Developer</Title>
          <About>
            I'm an aspiring software dev, linux enthusiast, and outdoorsman.
          </About>
          <About>I use JavaScript to develop full-stack applications.</About>
          <About>
            I'm intrigued by developer tools and terminal applications (CLI's).
          </About>
          <About>
            I like customizing my development tools and tinkering with my config
            files. I'm also into hiking, camping, backpacking or biking.
          </About>
        </Head>
        <Rule />
        <Lists>
          {data.map((item) => (
            <Section section={item} key={item.subtitle} />
          ))}
        </Lists>
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
  -webkit-animation: fadeIn ease-in 1s;
  display: flex;
  align-items: center;
  flex-direction: column;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (min-width: 1000px) {
    min-width: calc(1000px - 2em);
  }
  @media (max-width: 500px) {
    width: calc(100% - 2em);
  }
`;
const Head = styled.ul`
  display: flex;
  flex-direction: column;
  align-self: center;
`;
const Name = styled.h1`
  align-self: center;
  font-size: 2em;
  color: var(--nord7);
  margin-top: 20px;
`;
const Title = styled.h2`
  align-self: center;
  font-size: 1.5em;
  color: var(--nord8);
  margin-bottom: 20px;
`;

const Lists = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 1000px) {
    justify-content: center;
  }
`;
const About = styled.li`
  margin: 1em 3em;
`;
const Rule = styled.hr`
  width: 30%;
  margin: 2em auto calc(2em - 20px) auto;
  color: var(--nord7);
`;
