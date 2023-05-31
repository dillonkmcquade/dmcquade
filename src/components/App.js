import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import SideBar from "./SideBar";
import Home from "./Home";
import HeroSection from "./HeroSection";
import styled from "styled-components";

const App = () => {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    if (
      document.documentElement.scrollTop >
      document.documentElement.offsetHeight / 2
    ) {
      setBannerVisible(false);
      window.removeEventListener("scroll", handleScroll);
    }
    setOpacity(1 - document.documentElement.scrollTop / 1500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <Route path="/about" element={<Home />} />
            <Route path="/projects" element={<Home />} />
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
  @media (max-width: 500px) {
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

const Image = styled.img`
  height: 1500px;
  z-index: 1000;
  opacity: ${(props) => props.opacity};
  /* animation: fadeOut ease-out 2s;
  @keyframes fadeOut {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  } */
`;
