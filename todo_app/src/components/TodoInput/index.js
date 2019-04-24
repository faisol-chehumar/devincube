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
        className="new-todo"
      />
      <button
        onClick={addTaskHandle}
        style={{
          width: "20%",
          display: "block",
          position: "absolute",
          top: 0,
          right: 0,
          backgroundColor: "#eee",
          padding: "0.5rem 1rem",
          marginTop: "15px",
          marginRight: "1rem"
        }}
      >
        Add Task
      </button>
    </div>
  );
};
