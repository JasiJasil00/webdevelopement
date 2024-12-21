import React , { useState } from "react";

function App() {

  const [fullname,setfullname]= useState({
    fName:"",
    lName:""
  });

  const [name3,setname3]=useState("")

  function handlechange(event){
     const {name , value} = event.target;

     setfullname(prevvalue =>{
      if(name==="fName"){
        return{
          fName:value,
          lName:prevvalue.lName
        }
      }else if (name === "lName"){
        return{
          fName:prevvalue.fName,
          lName:value
        }
      }
    }
     );
  }


  function handleclick(event){
    setname3(fullname.fName + " " + fullname.lName);
    
    event.preventDefault();

  }
  return (
    <div className="container">
      <h1>Hello {name3} </h1>
      <form onSubmit={handleclick}>
        <input onChange={handlechange} name="fName" placeholder="First Name" value={fullname.fName}/>
        <input onChange={handlechange} name="lName" placeholder="Last Name" value={fullname.lName}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
