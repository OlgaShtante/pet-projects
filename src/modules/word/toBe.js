const btnForms = document.querySelector(".forms");
const btnUsage = document.querySelector(".usage");
const btnTranslator = document.querySelector(".translator");

btnForms.addEventListener("click", playForms);
btnUsage.addEventListener("click", playUsage);
btnTranslator.addEventListener("click", playTranslator);

function playForms() {
  window.location = "toBeForms.html";
}

function playUsage() {
  window.location = "#"; //toBeUsage.html
}

function playTranslator() {
  window.location = "#"; //toBeTranslator.html
}
