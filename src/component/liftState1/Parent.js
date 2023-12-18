import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="Parent">
      <h1>Lift State Up 1</h1>
      <h2>Display Component-Parent</h2>
      <p>{inputValue}</p>
      <Child updateInput={setInputValue} />
    </div>
  );
};
export default Parent;
