import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = `485cb8bac1atfac9f3b46bfdodfc3a40`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>Dictionary</h1>
        <h3>What word do you want to look up?</h3>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search for a word"
            className="form-control"
            onChange={handleKeywordChange}
          />{" "}
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
