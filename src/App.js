import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Ending from "./Components/Ending";
import Intro from "./Components/Intro";
import Map from "./Components/Map";
import List from "./Components/List";

function App() {
  return (
    <div className="App">
      <Intro />
      <Map />
      <List />
      <Ending />
    </div>
  );
}

export default App;
