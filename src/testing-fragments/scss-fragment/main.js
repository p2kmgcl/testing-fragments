import './styles.scss';
import React from 'react';

export default function (props) {
  console.log("props", props);

  return <>
    <button className="button-save" type="button">Save</button>
    <button className="button-cancel" type="button">Cancel</button>
    <button className="button-help" type="button">Help</button>
  </>;
}
