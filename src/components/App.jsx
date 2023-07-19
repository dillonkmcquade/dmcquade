import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";
import ProjectDetails from "./ProjectDetails";
import GlobalStyles from "../GlobalStyles";
import Footer from "./Footer";

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
      <Menu setMenuVisible={setMenuVisible} visible={menuVisible} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
