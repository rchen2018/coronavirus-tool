import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import Logo from "../badges.png";

class Ending extends Component {
  render() {
    return (
      <div id="end">
        <div id="tips">
          <h1>How to Stay Healthy</h1>
          <ul>
            <li>
              Wash your hands often with soap and water for at least 20 seconds
            </li>
            <li>
              Avoid touching your eyes, nose, and mouth with unwashed hands
            </li>
            <li>
              Practice social distancing to avoid contact with people who are
              sick
            </li>
            <li>
              Cover your mouth and nose with a cloth face cover when around
              others
            </li>
            <li>Clean and disinfect frequently touched surfaces daily</li>
          </ul>
          <br />
          <br />
          <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html"
            rel="noopener noreferrer"
            target="_blank"
            id="CDC_link"
          >
            Learn More
          </a>
        </div>

        <div id="created_by">
          <h3>Created by Robert Chen and Ahmad Khan</h3>
        </div>
      </div>
    );
  }
}

export default Ending;
