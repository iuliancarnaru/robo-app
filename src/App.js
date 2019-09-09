import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Robo App</h1>
      <CardList robots={robots} />
    </div>
  );
}

export default App;
