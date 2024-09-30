import { useState } from "react";
import Example from "./components/heroes-interface/HeroesSection";
import About from "./components/about/About";
import HeroesBase from "./components/heroes-interface/InterfaceHeroe";
import ButtonHeroes from "./components/Button/ButtonHeroes";

function App() {
  return (
    <>
      <Example />
      <HeroesBase>
        <p style={{ color: "red" }}> Hello</p>
      </HeroesBase>
      <About />
    </>
  );
}

export default App;
