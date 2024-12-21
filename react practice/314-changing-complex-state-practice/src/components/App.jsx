import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handlechange( event ){
    const {name , value}=event.target;

    setContact(prevvalue =>{
      if(name=== "fName"){
        return(
          {
            fName:value,
            lName:prevvalue.lName,
            email:prevvalue.email
          }
        );
      }else  if( name === "lName" ){
        return(
          {
            fName:prevvalue.fName,
            lName:value,
            email:prevvalue.email,
          }
        )
      }else  if( name === "email" ){
        return(
          {
            fName:prevvalue.fName,
            lName:prevvalue.lName,
            email:value,
          }
        )
      }
    })
  }

  function handleclick(){
     
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleclick}>
        <input name="fName" value={contact.fName} onChange={handlechange} placeholder="First Name" />
        <input name="lName" value={contact.lName} onChange={handlechange} placeholder="Last Name" />
        <input name="email" value={contact.email} onChange={handlechange} placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
