import React, { useState } from "react";
import { Dropdown, Option } from "./Dropdown";

function App() {
  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  };
  return (
    <div>
      <h1>Which service are you interested in?</h1>
      <Dropdown
        fromLabel="Choose a service"
        buttonText="Send form"
        onChange={handleSelect}
        action="/"
      >
        <Option slected value="Click to see options" />
        <Option value="option 1" />
        <Option value="option 2" />
        <Option value="option 3" />
      </Dropdown>
      <p>You selected {optionValue}</p>
    </div>
  );
}

export default App;
