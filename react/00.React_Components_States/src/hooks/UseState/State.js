import React, { useState } from "react";

const State = () => {
  const [inputValue, setInputValue] = useState("State");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default State;
