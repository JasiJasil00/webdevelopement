import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      
      {notes.map(c => <Note key = {c.key} title = {c.title} content = {c.content}/>)}
      
      
      <Footer />
    </div>
  );
}

export default App;
