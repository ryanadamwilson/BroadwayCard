import React from "react";
import ReactDOM from "react-dom";

import Card from "./card";
import mockData from "./store/mockData";

import "./card/styles.scss";

function App() {
  return (
    <div className="App">
      <Card {...mockData} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
