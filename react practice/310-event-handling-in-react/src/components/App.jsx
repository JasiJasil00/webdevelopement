import React , {useState} from "react";

function App() {

  const [vibe,setvibe]=useState("white");

  function lett(){
    setvibe("black");
  }

  function back(){
    setvibe("white");
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{background:vibe}} onMouseOver={lett} onMouseOut={back}>Submit</button>
    </div>
  );
}

export default App;
