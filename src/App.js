import React from "react";
import "./style.css";
import ComponentA from "./Components/ComponentA.js";

import { useSelector, useDispatch } from "react-redux";

function App(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      App Component: {count}
      <button onClick={() => dispatch({ type: "increment", payload: "" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: "" })}>
        Decrement
      </button>
      <ComponentA />
    </div>
  );
}

export default App;
