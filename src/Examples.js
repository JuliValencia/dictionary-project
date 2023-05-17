import React from "react";
import "./Examples.css";

export default function Examples(props) {
  if (props.examples) {
    return (
      <div className="Examples">
        <strong>Example:</strong>
        <em> " {props.examples} " </em>
      </div>
    );
  } else {
    return null;
  }
}
