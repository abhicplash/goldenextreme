import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import PreLoader from "./components/Layout/PreLoader";
import About from "./components/Pages/About";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    LetsLoading();
  }, []);

  const LetsLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
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
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
