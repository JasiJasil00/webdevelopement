import React from "react";
import Login from "./login";

var islog=false;

function App() {
  return (
    <div className="container">
    {islog==true? <h1>Hello</h1>: <Login/>}
    </div>
  );
}

export default App;
