import React, {useState} from "react";

function App() {
  const [text,settext] = useState("");

  const [a,seta] = useState([]);

  function handlechange(event){
     settext(event.target.value);
  }

  function handleclick(){
    seta(prevalue=>[...prevalue,text]);
    settext("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handlechange} type="text" value={text} />
        <button onClick={handleclick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {a.map(x=><li>{x}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
