//We use querySelectorAll() method : to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc)

const display = document.querySelector(".display");
const buttonsOp = document.querySelectorAll(".operator");
const buttonsN = document.querySelectorAll(".number");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Defino las funciones para calcular en base a : on button clicked
const calculate = (btnValue) => {
  if (btnValue === "=" && btnValue !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    // AC = All Clear
    output = "";
  } else if (btnValue === "DEL") {
    //Si presionamos DEL, elimina el ultimo carácter
    output = output.toString().slice(0, -1);
  } else {
    //si la salida está vacía y el botón es specialChars, entonces regresa
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttonsOp.forEach((operator) => {
  operator.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

buttonsN.forEach((number) => {
  number.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
