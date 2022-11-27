import React from "react";
import { connect } from "react-redux";

class ComponentC extends React.Component {
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
        Component C: {count}
        <button onClick={() => this.handleClick("increment")}>Increment</button>
        <button onClick={() => this.handleClick("decrement")}>Decrement</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ComponentC);
