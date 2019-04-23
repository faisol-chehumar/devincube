import React, { useState } from "react";

export default ({ action }) => {
  const [inputTxt, setInputTxt] = useState("");

  const addTaskHandle = e => {
    action(inputTxt);
    setInputTxt("");
  };

  return (
    <div style={{ textAlign: "left" }}>
      <input
        type="text"
        value={inputTxt}
        onChange={e => setInputTxt(e.target.value)}
        style={{
          width: "70%",
          display: "inline",
          marginRight: "0.5rem"
        }}
      />
      <button
        onClick={addTaskHandle}
        style={{
          width: "20%",
          display: "inline"
        }}
      >
        Add Task
      </button>
    </div>
  );
};
