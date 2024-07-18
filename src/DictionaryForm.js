import React, { useState } from "react";
import axios from "axios";

function DictionaryForm({ onDefinitions }) {
  const [word, setWord] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!word) {
      setError("Please enter a word.");
      return;
    }

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
      const response = await axios.get(url);
      onDefinitions(response.data);
      setError("");
    } catch (error) {
      console.error("Error fetching definitions:", error);
      setError("No definitions found for the entered word.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter word"
        className="form-control"
      />
      <button onClick={handleSearch} className="btn btn-primary mt-2">
        Search
      </button>
      {error && <p className="text-danger mt-2">{error}</p>}
    </div>
  );
}

export default DictionaryForm;
