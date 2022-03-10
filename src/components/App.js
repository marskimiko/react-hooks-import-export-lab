import React from "react";
import About from "./src/components/About.js";
import Home from "./src/componenets/Home.js";
import NavBar from "./src/components/NavBar.js";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
