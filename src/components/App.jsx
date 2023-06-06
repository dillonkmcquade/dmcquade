import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./SideBar";
import Home from "./Home";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Contact from "./Contact";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";

const App = () => {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [opacity, setOpacity] = useState(1);

  //decrease opacity of banner on scrolldown
  const handleScroll = () => {
    setOpacity(1 - document.documentElement.scrollTop / 500);
  };

  //remove banner when achieved scroll depth
  useEffect(() => {
    if (
      opacity <= 0 ||
      document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
    ) {
      setBannerVisible(false);
      window.removeEventListener("scroll", handleScroll);
    }
  }, [opacity]);

  //if root path and first load, show banner
  useEffect(() => {
    if (
      window.location.pathname === "/" &&
      !window.localStorage.getItem("animation")
    ) {
      setBannerVisible(true);
      window.localStorage.setItem("animation", true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //scroll to top of page after removing banner
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
            <Route path="/contact" element={<Contact />} />
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
  -webkit-animation: fadeIn ease-in 2s;
  @media (max-width: 1000px) {
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 500px) {
    width: 100vw;
  }
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
`;
