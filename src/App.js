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
      <DictionaryForm onDefinitions={handleDefinitions} />
      <DefinitionList definitions={definitions} />
    </div>
  );
}

export default App;
