import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import logo from "../greenLogo.png";
import { Image } from "semantic-ui-react";

class Intro extends Component {
  render() {
    return (
      <div class="intro">
        <div class="Wrapper">
          <div class="introduction">
            <Image src={logo} alt="team logo" size="large" floated="right" />
            <br />
            <h1 id="hi">Hi There,</h1>
            <h1 class="title"> Let's take a look at your utilities </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
