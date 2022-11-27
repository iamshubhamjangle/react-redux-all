import React from "react";
class ComponentC extends React.Component {
  render() {
    console.log("Render C");
    const { count, increment, decrement } = this.props.store;
    return <div>Component C: {count}</div>;
  }
}

export default ComponentC;
