import React, { useContext, useEffect } from "react";
import { CounterContext } from "../context";

function ComponentC() {
  const { count, updateCount } = useContext(CounterContext);

  useEffect(() => {
    console.log("render C");
  });

  return (
    <div>
      Component C: {count}
      <button onClick={() => updateCount("increment")}>increment</button>
      <button onClick={() => updateCount("decrement")}>decrement</button>
    </div>
  );
}

export default ComponentC;
