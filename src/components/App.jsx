import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import SideBar from "./SideBar";
import Home from "./Home";
import HeroSection from "./HeroSection";
import styled from "styled-components";
import Projects from "./Projects";

const App = () => {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    setOpacity(1 - document.documentElement.scrollTop / 1500);
  };

  useEffect(() => {
    if (opacity <= 0) {
      setBannerVisible(false);
      window.removeEventListener("scroll", handleScroll);
    }
  }, [opacity]);
  useEffect(() => {
    if (window.location.pathname === "/") {
      setBannerVisible(true);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [bannerVisible]);

  return (
    <Wrapper height={bannerVisible ? "300vh" : "100vh"}>
      <GlobalStyles />
      {bannerVisible && (
        <HeroSection setBannerVisible={setBannerVisible} opacity={opacity} />
      )}
      {!bannerVisible && (
        <Content>
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Content>
      )}
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${(props) => props.height};
  width: 100vw;
`;
const Content = styled.main`
  display: flex;
  align-self: center;
  max-width: 1400px;
  animation: fadeIn ease-in 2s;
  @media (max-width: 1000px) {
    align-items: center;
    flex-direction: column;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
