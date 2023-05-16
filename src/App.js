import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://julianavalencia.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Juliana Valencia{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/JuliValencia/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
