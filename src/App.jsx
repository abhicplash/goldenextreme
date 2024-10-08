import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import PreLoader from "./components/Layout/PreLoader";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    LetsLoading();
  }, []);

  const LetsLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2800);
  };
  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/service" element={<Services />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
