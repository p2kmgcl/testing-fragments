import React from "react";
import Guitar from "react-guitar";

export default function () {
  return (
    <div style={{ width: "50vw", overflowX: "auto" }}>
      <Guitar strings={[0, 1, 2, 2, 0, -1]} />
    </div>
  );
}
