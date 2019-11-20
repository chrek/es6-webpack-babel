let log = document.getElementById("log");

//document.onclick = inputChange;

function inputChange(e) {
  log.textContent = `Position: (${e.clientX}, ${e.clientY})`;
}

let hello = () => {
  document.getElementById("pdemo").innerHTML += this;
};

export { log, inputChange, hello };

