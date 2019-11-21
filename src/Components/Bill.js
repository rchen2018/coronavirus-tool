import React, { useState } from "react";

import Happy from "./Happy";

import { Button, Checkbox, Form } from "semantic-ui-react";

import Graph from "./Graph.js";

function Bill() {
  const [bill, setBill] = useState("");
  const cappedValue = Math.min(1000, parseFloat(bill || "0"));
  return (
    <>
      <div class="billform">
        <Form>
          <Form.Field>
            <label id="label" style={{ marginBottom: 24 }}>
              Enter your monthly utility bill:{" "}
            </label>
            <div class="ui labeled input">
              <label for="amount" class="ui label">
                $
              </label>
              <input
                placeholder="0"
                value={bill}
                onChange={e => {
                  if (e.target.value.match(/^\d*\.?\d*$/)) {
                    setBill(e.target.value);
                  }
                }}
              />
            </div>
          </Form.Field>
        </Form>
      </div>
      <Graph value={cappedValue} />
      <Happy value={cappedValue} />
    </>
  );
}

export default Bill;
