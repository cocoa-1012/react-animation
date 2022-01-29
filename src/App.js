import * as React from "react";
import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Sample } from "./components/sample/Sample";
import { ScaledElement } from "./components/scaledElement/ScaledElement";

function App() {
  const [count, setCount] = useState(0);
  console.log("Counts ====>>>>>", count);
  return (
    <div className="App">
      <Header />
      <Sample onClick={() => setCount(count + 1)} />
      <ScaledElement />
    </div>
  );
}

export default App;
