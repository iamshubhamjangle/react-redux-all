import React from "react";
import "./style.css";
import ComponentA from "./Components/ComponentA.js";
import { CounterContext } from "./context";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.increment = () => {
      this.setState((prev) => {
        return {
          count: prev.count + 1,
        };
      });
    };

    this.decrement = () => {
      this.setState((prev) => {
        return {
          count: prev.count - 1,
        };
      });
    };

    this.state = {
      count: 10,
      increment: this.increment,
      decrement: this.decrement,
    };
  }

  render() {
    const { count } = this.state;
    console.log("Render App");
    return (
      <CounterContext.Provider value={this.state}>
        App Component: {count}
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
        <ComponentA />
      </CounterContext.Provider>
    );
  }
}

export default App;
