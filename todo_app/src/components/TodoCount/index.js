import React from "react";

export default ({ count, done }) => (
  <>
    <span style={{ marginRight: "2rem" }}>Task: {count}</span>
    <span>Done: {done}</span>
  </>
);
