import React from "react";

const Child = (props) => {
  return (
    <div className="Child">
      <h2>Input Component-Child</h2>
      <input
        type="text"
        id="Input"
        onChange={(e) => props.updateInput(e.target.value)}
      />
    </div>
  );
};
export default Child;
