import { log, inputChange, hello } from "./my_module";
import * as m from "./exportall_module";
import sum from './sum';

alert(sum(4, 5)); // will display '9'

m.helloWorld(); // will log Hello world

console.log("Hello ES6 Webpack Babel Project.");

document.getElementById("myButton").onclick = function testMsg() {
  alert("For testing. . .");
};

document.querySelector("#myButton").onclick = function testMsg() {
  alert("For testing querySelector. . .");
};

document.getElementById("demo").onclick = function changeContent() {
  document.getElementById("demo").innerHTML = "Help me";
  document.getElementById("demo").style = "Color: red";
};

document.onclick = inputChange;

//The window object calls the function:
window.addEventListener("load", hello);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);


/* document.body.addEventListener("click", function(event) {
  console.log(this);
  // 'this' will refer to the body element
}); */
document.body.addEventListener("click", event => {
  console.log(this);
  // 'this' will reference the Window object
  // (that is, the context of the parent)
});
