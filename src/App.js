import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Ending from "./Components/Ending";
import Intro from "./Components/Intro";
import Menu from "./Components/Menu";
import Map from "./Components/Map";

function App() {
  return (
    <div className="App">
      <Intro />
      <Menu />
      <Map />
      <Ending />
    </div>
  );
}

export default App;
