import React from "react";
import ReactDOM from "react-dom";
import Tip from "./Tip.jsx";

const App = () => (
  <div>
    <h1>Hello World</h1>
    <Tip />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
