import styled from "styled-components";
const Home = () => {
  return (
    <Wrapper>
      <Head>
        <Name>Dillon McQuade</Name>
        <Title>Full Stack Developer</Title>
      </Head>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.article`
  min-width: calc(75% - 2em);
  background-color: var(--nord3);
  border-radius: 1em;
  margin: 1em;
  padding: 2em;
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
