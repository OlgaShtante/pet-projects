import { TenseTabs } from "../../tenseTabs.js";
import { ToBeFormsPresent } from "./presentTense.tobeForms.sevice.js";

new TenseTabs().init("present");
new ToBeFormsPresent();
new Buttons(allButtons);
//allButtons is body's  id to make all buttons of the form page available for this module

let toBeFormsPresentTense;
const inputsArr = document.getElementsByTagName("input");

export function getPresentData(data) {
  toBeFormsPresentTense = data.affirmative;
  checkInputValue(toBeFormsPresentTense);
}

//Each button has own function on the page
function Buttons(body) {
  this.checkPresentPositive = function() {
    checkInputValue(toBeFormsPresentTense);
  };
  this.tryAgain = function(parameter) {
    showInputAndButton();
  };
  this.switchTheLanguage = function() {
    window.location = "#"; //word page in different language
    alert("Эта кнопка будет переключать на страницу на русском языке");
  };

  body.onclick = event => {
    const target = event.target;
    const action = target.getAttribute("data-action");
    if (action) {
      this[action]();
    }
  };
}

function checkInputValue(toBeFormsPresentTense) {
  for (let i = 0; i < inputsArr.length; i++) {
    const input = inputsArr[i].value;
    if (input !== "") {
      for (let j = 0; j < toBeFormsPresentTense.length; j++) {
        const placeholder = inputsArr[i].placeholder;
        if (toBeFormsPresentTense.includes(`${placeholder} ${input}`)) {
          const parameter = `${placeholder} ${input}`;
          hideInputandButton();
          showSuccessMessage(parameter);
          break;
        } else {
          showError(inputsArr[i]);
          inputsArr[i].value = "";
          break;
        }
      }
    }
  }
}

function hideInputandButton() {
  const clickedCheckBtn = event.target;
  const divOfCheckBtn = clickedCheckBtn.parentNode;
  divOfCheckBtn.style.display = "none";
}

function showSuccessMessage(parameter) {
  const allSpans = document.querySelectorAll(".successText");
  const spans = Array.prototype.slice.call(allSpans);
  for (let i = 0; i < spans.length; i++) {
    const span = spans[i].textContent;
    const spanText = span.substring(17, span.length - 1);
    if (parameter === spanText) {
      const divOfSpan = spans[i].parentNode;
      divOfSpan.classList.remove("hidden");
      break;
    }
  }
}

function showInputAndButton() {
  const clickedTryAgainBtn = event.target;
  const divOfTryAgainBtn = clickedTryAgainBtn.parentNode;
  divOfTryAgainBtn.classList.add("hidden");
  const elementsOfDiv = divOfTryAgainBtn.children;
  const currentSpan = elementsOfDiv[0].childNodes[0].nodeValue;
  const currentSpanText = currentSpan.substring(17, currentSpan.length - 1);
  const currentPlaceholder = currentSpanText.split(" ")[0];
  for (let i = 0; i < inputsArr.length; i++) {
    if (currentPlaceholder === inputsArr[i].placeholder) {
      const divOfInput = inputsArr[i].parentNode;
      divOfInput.style.display = "block";
      inputsArr[i].value = "";
      inputsArr[i].style.borderColor = "";
      break;
    }
  }
}

function showError(inputParam) {
  inputParam.style.borderColor = "#ff4d4d";
  const message = document.createElement("div");
  message.innerText = "Še enkrat premisli!";
  message.classList.add("error");
  const divWithError = document.querySelector(".tabTitle");
  divWithError.appendChild(message);

  let timeoutID = setTimeout(() => {
    message.remove();
  }, 1500);
}
