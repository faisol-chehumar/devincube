import React, { Component } from "react";
import TodoBoard from "./components/TodoBoard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoBoard />
      </div>
    );
  }
}

export default App;
