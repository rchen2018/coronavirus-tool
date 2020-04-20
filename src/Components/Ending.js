import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import { List } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import Logo from "../badges.png";

class Ending extends Component {
  render() {
    return (
      <div class="end">
        <div class="tips">
          <h1>Here are some tips on reducing usage</h1>
          <ul>
            <li>Unplug your devices when not in use</li>
            <li>Switch to LED lightbulbs </li>
            <li>Switch to energy efficient appliances </li>
            <li>Invest in a smart thermostat </li>
            <li>Take shorter showers</li>
          </ul>
        </div>

        <div class="facts">
          <h1>Everything Counts </h1>
          <ul>
            <li>
              On average 10 gallons of your water footprint is lost daily due to
              leaks
            </li>
            <li>
              You can save 15 gallons of water in 10 minutes by switching to a
              low-flow showerhead
            </li>
            <li>2.5 billion people lack reliable access to electricity</li>
            <li>2.8 billion people live in areas of high water scarcity</li>
          </ul>
        </div>

        <div class="badges">
          <Image src={Logo} alt="Badge Collection" size="huge" centered />
          <h2>Almost there! Earn 2 more badges to unlock more rewards!</h2>
          <br />
          <br />
          <h2>The Green Path plants a tree for every badge that you earn :)</h2>
          <br />
          <h2> Earn 5 badges to qualify for a rebate!</h2>
        </div>
      </div>
    );
  }
}

export default Ending;
