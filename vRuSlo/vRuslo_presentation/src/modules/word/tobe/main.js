import { ToBeFormsPast } from "./pastTense.toBeForms.service.js";
new ToBeFormsPast();
let serverDataArray;

const btnForms = document.querySelector(".forms");
const btnUsage = document.querySelector(".usage");
const btnTranslator = document.querySelector(".translator");

btnForms.addEventListener("click", playForms);
btnUsage.addEventListener("click", playUsage);
btnTranslator.addEventListener("click", playTranslator);

function playForms() {
  window.location = "../toBeForms";
}

function playUsage() {
  window.location = "#";
}

function playTranslator() {
  window.location = "#";
}

export function getPastData(data) {
  serverDataArray = data.affirmative;
  const column2 = document.querySelector(".column2");
  column2.innerHTML = `${serverDataArray}`;
}
