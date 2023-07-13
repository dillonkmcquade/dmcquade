import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";
import Projects from "./Projects";
import GlobalStyles from "../GlobalStyles";

const App = () => {
  const location = useLocation();
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    setMenuVisible(false);
  }, [location]);

  return (
    <>
      <GlobalStyles />
      <Header setMenuVisible={setMenuVisible} menuVisible={menuVisible} />
      <Menu visible={menuVisible} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
