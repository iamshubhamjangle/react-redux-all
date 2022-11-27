import React from "react";
import "./style.css";
import ComponentA from "./Components/ComponentA.js";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  handleClick(type) {
    this.props.modify({ type: type, payload: "" });
  }

  render() {
    const { count } = this.props;

    return (
      <div>
        App Component: {count}
        <button onClick={() => this.handleClick("increment")}>Increment</button>
        <button onClick={() => this.handleClick("decrement")}>Decrement</button>
        <ComponentA />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modify: (action) => dispatch(action),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
