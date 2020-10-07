import React from "react";
import Guitar, { getRenderFingerSpn } from "react-guitar";
import { standard } from "react-guitar-tunings";

export default function () {
  return (
    <Guitar
      strings={[0, 1, 2, 2, 0, -1]}
      renderFinger={getRenderFingerSpn(standard)}
    />
  );
}
