import React, { useEffect } from "react";
import "./style.css";
import ComponentA from "./Components/ComponentA.js";
import { CounterContext } from "./context";

function App() {
  const [count, setCount] = React.useState(10);

  const updateCount = (actionType) => {
    switch (actionType) {
      case "increment":
        setCount(count + 1);
        return;
      case "decrement":
        setCount(count - 1);
        return;
    }
  };

  useEffect(() => {
    console.log("Render App");
  });

  return (
    <CounterContext.Provider value={{ count, updateCount }}>
      App Component: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <ComponentA />
    </CounterContext.Provider>
  );
}

export default App;
