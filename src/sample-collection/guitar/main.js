import React, { useState } from "react";
import Guitar, { getRenderFingerSpn } from "react-guitar";
import { standard } from "react-guitar-tunings";

export default function () {
  const [strings, setStrings] = useState([0, 1, 2, 2, 0, -1])
  return (
    <Guitar
      strings={strings}
      renderFinger={getRenderFingerSpn(standard)}
      onChange={setStrings}
    />
  );
}
