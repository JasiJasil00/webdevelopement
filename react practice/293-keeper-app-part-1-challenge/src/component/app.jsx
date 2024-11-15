import React from "react";
import Header from "./header";
import Note from "./note"
import Footer from "./footer";

function app(){
    return (
        <div>
            <header><Header /></header>
            <Note/>
            <Footer/>
        </div>
    )
}

export default app;