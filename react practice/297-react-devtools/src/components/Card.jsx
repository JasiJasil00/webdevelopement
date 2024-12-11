import React from "react";
import Avatar from"./avatar";
import Detail from "./detail";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
      <Avatar img = {props.img}/>
      </div>
      <div className="bottom">
        <Detail tel={props.tel} />
        <Detail tel={props.email}/>
      </div>
    </div>
  );
}

export default Card;
