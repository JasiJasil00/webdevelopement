import React from "react";

export default function Todolist(props){
    return <li onClick={() => props.onchecked(props.id)}>{props.txt}</li>
}