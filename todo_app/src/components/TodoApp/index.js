import React, { useState } from "react";

import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

import TodoList from "../TodoList";
import TodoInput from "../TodoInput";
import TodoCount from "../TodoCount";

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
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoInput action={handleSubmit} />
      </header>
      <section className="main">
        <TodoList data={data} action={handleRemove} />
      </section>
      <footer className="footer">
        <TodoCount
          count={data.length}
          done={data.filter(item => item.isDone === true).length}
        />
      </footer>
    </div>
  );
};
