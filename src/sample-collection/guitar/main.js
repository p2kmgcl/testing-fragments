import React, { useState } from "react";
import Guitar, { getRenderFingerSpn } from "react-guitar";
import { standard } from "react-guitar-tunings";
import useSound from 'react-guitar-sound';

const samples = ['E2', 'D3', 'G3', 'E4'].reduce(
  (samples, note) => Object.assign(samples, {
    [note]: `https://unpkg.com/react-guitar-sound@0.11.1/resources/${note}.mp3`
  }),
  {}
)

export default function () {
  const [strings, setStrings] = useState([0, 1, 2, 2, 0, -1])
  const {play} = useSound(samples, strings, standard)
  return (
    <Guitar
      strings={strings}
      renderFinger={getRenderFingerSpn(standard)}
      playOnHover
      onChange={setStrings}
      onPlay={play}
    />
  );
}
