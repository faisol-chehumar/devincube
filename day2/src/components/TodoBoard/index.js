import React, { useState } from "react";

import TodoList from "../TodoList";
import TodoInput from "../TodoInput";

export default () => {
  const [data, setData] = useState([
    {
      title: "Make react demo",
      isDone: false
    },
    {
      title: "test",
      isDone: false
    }
  ]);
  const handleSubmit = newData => {
    setData([
      ...data,
      {
        title: newData,
        isDone: false
      }
    ]);
  };

  const handleRemove = index => {
    setData(
      data.map((item, k) => {
        return index === k ? { title: item.title, isDone: !item.isDone } : item;
      })
    );
  };

  return (
    <div
      style={{
        width: 400,
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#eee",
        textAlign: "center",
        borderRadius: "4px"
      }}
    >
      <h2>To do lists</h2>
      <TodoInput action={handleSubmit} />
      <TodoList data={data} action={handleRemove} />
    </div>
  );
};
