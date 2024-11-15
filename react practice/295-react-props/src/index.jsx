import React from "react";
import ReactDOM from "react-dom";

function Card(props){
  return (
    <div>
      <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
    </div>
  )
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel="+123 456 789" email="b@beyonce.com"/>
    <Card
      name="niranjan"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      email="niranjan_b230466@nitc.ac.in"
      tel="+91-9746002935"
      />
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
