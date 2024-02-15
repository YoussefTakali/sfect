import React from "react";
import "./popup.css"; // Make sure to include Bootstrap CSS or use Bootstrap CDN in your index.html

function Popup(props) {
  let state = props.state;

  return state === true ? (
    <div className="outer">
      <div className="container">
        <h1>Form</h1>
        <p>content of the form</p>
        <button onClick={props.onClose}>close</button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
