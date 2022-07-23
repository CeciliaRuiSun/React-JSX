//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

const name = "Cecilia";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p> Created by {name} </p>
    <p> Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
