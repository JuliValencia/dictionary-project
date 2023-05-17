import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>

      {props.meaning.definition}
      <br />
      <Examples examples={props.meaning.example} />
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
