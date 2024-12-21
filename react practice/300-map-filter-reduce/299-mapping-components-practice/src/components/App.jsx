import React from "react";
import Emojepedia from "../emojipedia";
import Card from "./card"; // Make sure the component name is capitalized

function createCard(props) {
  return (
    <Card
      key={props.id} // Ensure each card has a unique key
      emoji={props.emoji}
      name={props.name}
      mean={props.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">
        {/* Dynamically map Emojepedia array */}
        {Emojepedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
