import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';
import './App.css';

import Intro from './Components/Intro';
import Graph from './Components/Graph';
import Ending from './Components/Ending';
import Bill from './Components/Bill';

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
