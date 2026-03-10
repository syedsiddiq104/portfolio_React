// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./COMPONENTS/Hero";
import About from "./COMPONENTS/About";
import Skills from "./COMPONENTS/Skills";
import Projects from "./COMPONENTS/Projects";
import Contact from "./COMPONENTS/Contact";
import Navbar from "./COMPONENTS/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Hero />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Skills />} path="/skills" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      <Navbar />
      </BrowserRouter>
    </>
  );
};

export default App;
