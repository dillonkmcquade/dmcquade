import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import ProjectDetails from "./ProjectDetails";
import GlobalStyles from "../GlobalStyles";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
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
