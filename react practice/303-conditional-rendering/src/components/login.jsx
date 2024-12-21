import React from "react";
import Input from "./input";
export default function Login(){
    return(
        <form className="form">
        <Input txt="text" v="Username"/>
        <Input txt="password" v="Password"/>
        <button type="submit">Login</button>
      </form>
    );
}