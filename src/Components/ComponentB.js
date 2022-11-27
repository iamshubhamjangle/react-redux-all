import React, { useEffect } from "react";
import ComponentC from "./ComponentC";

function ComponentB() {
  useEffect(() => {
    console.log("Render B");
  });

  return (
    <div>
      Component B
      <ComponentC />
    </div>
  );
}

export default ComponentB;
