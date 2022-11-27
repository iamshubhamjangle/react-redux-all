import React, { useEffect } from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
  useEffect(() => {
    console.log("Render A");
  });

  return (
    <div>
      Component A
      <ComponentB />
    </div>
  );
}

export default ComponentA;
