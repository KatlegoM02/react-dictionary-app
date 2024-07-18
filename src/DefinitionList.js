import React from "react";
import DefinitionItem from "./DefinitionItem";

function DefinitionList({ definitions }) {
  return (
    <div>
      {definitions.map((definition, index) => (
        <DefinitionItem key={index} definition={definition} />
      ))}
    </div>
  );
}

export default DefinitionList;
