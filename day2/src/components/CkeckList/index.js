import React, { useState } from "react";

export default ({ text, isDone, action, index }) => {
  const [isCheck, setCheck] = useState(false);

  const checktHandle = e => {
    setCheck(!isCheck);
    action(index);
  };

  return (
    <>
      <input
        type="checkbox"
        onClick={checktHandle}
        defaultChecked={isCheck}
        className="toggle"
      />
      <label
        style={{
          textDecoration: isDone && "line-through"
        }}
      >
        {text}
      </label>
    </>
  );
};
