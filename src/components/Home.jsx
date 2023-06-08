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
          <div>
            I'm an aspiring software dev, linux enthusiast, and outdoorsman. I
            mainly use JavaScript to develop full-stack applications. I'm also
            intrigued by developer tools and terminal applications (CLI's). When
            i'm not customizing my development tools or tinkering with my config
            files, I'm usually out hiking, camping, backpacking or biking.
          </div>
        </Head>
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
`;
const Head = styled.div`
  text-align: center;
  align-self: center;
`;
const Name = styled.h1`
  font-size: 2em;
  color: var(--nord7);
`;
const Title = styled.h2`
  font-size: 1.5em;
  color: var(--nord8);
`;

const Lists = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 1000px) {
    justify-content: center;
  }
`;
