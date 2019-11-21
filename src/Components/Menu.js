import faker from "faker";
import _ from "lodash";
import React from "react";
import { Dropdown } from "semantic-ui-react";

function Bill() {
  const addressDefinitions = faker.definitions.address;
  const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
    key: addressDefinitions.state_abbr[index],
    text: state,
    value: addressDefinitions.state_abbr[index]
  }));

  return (
    <div>
      <Dropdown
        placeholder={"Select a State"}
        search
        selection
        options={stateOptions}
      />
    </div>
  );
}

export default Bill;
