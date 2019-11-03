import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Bill from "./Components/Bill";
import Ending from "./Components/Ending";
import Intro from "./Components/Intro";

function App() {
  return (
    <div className="App">
      <Intro />
      <Bill />
      <Ending />
    </div>
  );
}

export default App;
