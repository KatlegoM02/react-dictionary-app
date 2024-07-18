import React, { useState } from "react";
import DictionaryForm from "./DictionaryForm";
import DefinitionList from "./DefinitionList";
import "./App.css";

function App() {
  const [definitions, setDefinitions] = useState([]);

  const handleDefinitions = (defs) => {
    setDefinitions(defs);
  };

  return (
    <div className="container">
      <h1 className="header">Dictionary App</h1>
      <div className="box">
        <DictionaryForm onDefinitions={handleDefinitions} />
        <DefinitionList definitions={definitions} />
      </div>
      <footer>
        This project is coded by{" "}
        <a
          href="https://github.com/KatlegoM02"
          target="_blank"
          rel="noopener noreferrer"
        >
          Katlego Makgatle
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/KatlegoM02/react-dictionary-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://react-dictionary-app.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Render
        </a>
      </footer>
    </div>
  );
}

export default App;
