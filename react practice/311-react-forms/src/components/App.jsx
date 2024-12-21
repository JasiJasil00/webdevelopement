import React , { useState } from "react";

function App() {
  const [Name,setName]=useState("");
  const [head,sethead]=useState("");
  function handlechange(event){
    setName(event.target.value);
  }
  function handleclick(){
    sethead(Name);
  }
  return (
    <div className="container">
      <h1>Hello {head} </h1>
      <input onChange={handlechange} type="text" placeholder="What's your name?" />
      <button onClick={handleclick}>Submit</button>
    </div>
  );
}

export default App;
