import React from "react";

import axios from "axios";

const API = "https://covidtracking.com/api/states";

class List extends React.Component {
  state = {
    states: [],
  };

  componentDidMount() {
    axios.get(API).then((response) => {
      const states = response.data;
      this.setState({ states });
    });
  }

  render() {
    return (
      <ul>
        {this.state.states.map((state) => (
          <li>
            {state.state}: {state.positive}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
