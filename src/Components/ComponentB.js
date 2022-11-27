import React from "react";
import ComponentC from "./ComponentC";
import { CounterContext } from "../context";

class ComponentB extends React.Component {
  render() {
    console.log("Render B");
    return (
      <div>
        Component B
        <CounterContext.Consumer>
          {(state) => <ComponentC store={state} />}
        </CounterContext.Consumer>
      </div>
    );
  }
}

export default ComponentB;
