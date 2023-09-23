import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience"; // Import the correct component
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio"; 
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Portfolio /> 
      <Contact/>
      <SocialLinks />
    </div>
  );
}

export default App;
