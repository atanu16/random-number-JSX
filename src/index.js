import react from "react";
import reactDom from "react-dom";

const luckynum = 7;
const name = "Atanu";
const num1 = 5;
const num2 = 8;
reactDom.render(
  <div>
    <h1> I'm {name}</h1>
    <p> my Lucky number {Math.floor(Math.random() * 9)} </p>
    <p>
      {" "}
      Sum: {num1} + {num2} * Random number ={" "}
      {Math.floor(num1 + num2 * Math.random())}
    </p>
  </div>,
  document.getElementById("root")
);
