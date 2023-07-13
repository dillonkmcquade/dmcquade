import styled from "styled-components";
import { IconContext } from "react-icons";
import { data } from "../data/arrays";
import Section from "./Section";

const Home = () => {
  return (
    <IconContext.Provider value={{ size: "16px" }}>
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
          <About>I'm also into hiking, camping, backpacking and biking.</About>
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
  display: flex;
  position: relative;
  top: 56px;
  width: 95vw;
  margin: 1rem auto 0 auto;
  font-size: 0.8rem;
  align-items: center;
  flex-direction: column;
  @media (min-width: 625px) {
    max-width: 1000px;
  }
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--nord3);
  border-radius: 1em;
  width: 100%;
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

const Lists = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const About = styled.p`
  margin: 1em 3em;
`;
const Rule = styled.hr`
  width: 30%;
  margin: 2em auto calc(2em - 20px) auto;
  color: var(--nord7);
`;
