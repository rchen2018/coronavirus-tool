import React, { Component } from "react";
import logo from "../covid19.png";
import { Image } from "semantic-ui-react";

function Intro() {
  return (
    <div id="introduction">
      <Image src={logo} id="covid" alt="team logo" size="large" />
      <br />
    </div>
  );
}

export default Intro;
