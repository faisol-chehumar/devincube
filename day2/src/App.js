import React, { Component } from "react";
import TodoApp from "./components/TodoApp";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ padding: "2rem" }}>
        <TodoApp />
      </div>
    );
  }
}

export default App;
