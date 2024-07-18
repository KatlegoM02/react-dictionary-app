import React from "react";

function DefinitionItem({ definition }) {
  return (
    <div className="definition-item">
      <h4>{definition.word}</h4>
      {definition.meanings.map((meaning, index) => (
        <div key={index}>
          <strong>{meaning.partOfSpeech}</strong>
          <p>{meaning.definitions[0].definition}</p>
        </div>
      ))}
    </div>
  );
}

export default DefinitionItem;
