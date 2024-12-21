import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [additem,setadditem] = useState([]);

  function handleclick(element){
    setadditem(prev=>{
      return[
        ...prev,
        element
      ];
    });
  }

  function deletecard(id){
    setadditem(prev=>{
      return(prev.filter((item,index)=>{
        return index != id;
      }));
    })
  }
  return (
    <div>
      <Header />
      <CreateArea click={handleclick} />
      {additem.map((sell,index)=><Note key={index} id={index} title={sell.title} content={sell.content} delete={deletecard}/>)}
      <Footer />
    </div>
  );
}

export default App;
