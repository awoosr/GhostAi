import React, { useState } from "react";

const GhostAI = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
  };

  return (
    <div>
      <h1>Ghost AI</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Hey Boss!"
          value={message}
          onChange={handleChange}
        />
        <button type="submit">Ask</button>
      </form>
    </div>
  );
};

export default GhostAI;