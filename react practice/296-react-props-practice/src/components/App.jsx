import React from "react";
import { contacts } from "../contacts";
import ContactCard from "./ContactCard";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact) => <ContactCard prop={contact}/>)}
    </div>
  );
}

export default App;
