import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";
import Projects from "./Projects";
import Contact from "./Contact";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";

const App = () => {
  const location = useLocation();
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    setMenuVisible(false);
  }, [location]);

  return (
    <Wrapper>
      <GlobalStyles />
      <Header setMenuVisible={setMenuVisible} menuVisible={menuVisible} />
      <Menu visible={menuVisible} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
