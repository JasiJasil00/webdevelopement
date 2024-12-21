import React from "react";
import { useState } from "react";


function App() {
  const [hour,sethour] = useState(new Date().toLocaleTimeString()); 

function time(){
    sethour(new Date().toLocaleTimeString());
}

setInterval(time,1000);

  return (
    <div className="container">
      <h1>{hour}</h1>
      <button onClick={time}>Get Time</button>
    </div>
  );
}

export default App;
