import React from "react";

import { useSelector, useDispatch } from "react-redux";

function ComponentC(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      Component C: {count}
      <button onClick={() => dispatch({ type: "increment", payload: "" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: "" })}>
        Decrement
      </button>
    </div>
  );
}

export default ComponentC;
