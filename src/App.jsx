import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header.jsx";
import Body from "./body.jsx";
import GlobalStyle from "./global-style.js";
import "./App.scss";
import Project1Page from "./project1.jsx";
import Project2Page from "./project2.jsx";
import Project3Page from "./project3.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/projects/project1" element={<Project1Page />} />
          <Route path="/projects/project2" element={<Project2Page />} />
          <Route path="/projects/project3" element={<Project3Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
