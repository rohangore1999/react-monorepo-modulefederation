import React from "react";

import "./App.css";

import { Shell } from "ui";

// Components
import { TopNumber } from "games";

function App() {
  return (
    <Shell title="Top Number">
      <TopNumber />
    </Shell>
  );
}

export default App;
