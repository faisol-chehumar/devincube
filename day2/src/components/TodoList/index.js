import React from "react";

import CheckList from "../CkeckList";

export default ({ data, action }) => (
  <ul className="todo-list">
    {data &&
      data.map((item, index) => (
        <li style={{ textAlign: "left" }} key={index}>
          <CheckList
            text={item.title}
            isDone={item.isDone}
            action={action}
            index={index}
          />
        </li>
      ))}
  </ul>
);
