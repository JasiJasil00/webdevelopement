import React from "react";
import ReactDom from "react-dom";

 var yourname = "jasil"
 var currentdate = new Date(2022 , 6, 1);
var currentyear = currentdate.getFullYear();
ReactDom.render(
    <div>
        <p>
          Created By {yourname}  
        </p>
        <p>
        Copyright {currentyear}
        </p>
    </div>,
    document.querySelector("#root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
