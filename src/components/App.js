import { Routes, Route } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import SideBar from "./SideBar";
import Home from "./Home";
import styled from "styled-components";
const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Content>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </Content>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
`;
const Content = styled.main`
  display: flex;
  max-width: 1400px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
