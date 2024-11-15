import React from "react";
import ReactDOM from "react-dom";
import * as Pi from "./app.jsx";

ReactDOM.render(
  <ul>
    <li>{Pi.default}</li>
    <li>{Pi.doublepi()}</li>
    <li>{Pi.triplepi()}</li>
  </ul>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
