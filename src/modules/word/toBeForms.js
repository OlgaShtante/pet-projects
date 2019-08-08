import { TenseTabs } from "./tenseTabs.js";
import { ToBeFormsPresent } from "./toBePresentTense.sevice.js";
// import { ToBeFormsPast } from "./toBePastTense.service.js";
// import { ToBeFormsFuture } from "./toBeFutureTense.service.js";

const getPresentToBeForms = new ToBeFormsPresent();
// const getPastToBeForms = new ToBeFormsPast();
// const getFutureToBeForms = new ToBeFormsFuture();

let tenseArray;

export function getPresentData(data) {
  tenseArray = data.affirmative;
  checkValue(tenseArray);
}

//One tab is opened by default:

const tabs = new TenseTabs();
tabs.init("present");

//Each button has own function on the page
function ClickButtons(elements) {
  this.checkPresentPositive = function() {
    checkValue(tenseArray);
  };
  this.tryAgain = function(parameter) {
    showInputAndButton(parameter);
  };
  // this.checkPresentNegative = function() {
  //   checkValue(toBePresentNegative);
  // };
  // this.checkPastPositive = function() {
  //   checkValue(toBePastPositive);
  // };
  // this.checkPastNegative = function() {
  //   checkValue(toBePastNegative);
  // };
  // this.checkFuturePositive = function() {
  //   checkValue(toBeFuturePositive);
  // };
  // this.checkFutureNegative = function() {
  //   checkValue(toBeFutureNegative);
  // };
  this.switchTheLanguage = function() {
    window.location = "#"; //word page in different language
    alert("Эта кнопка будет переключать на страницу на русском языке");
  };
  // this.finish = function() {
  //   console.log("finish")  //to be released
  // };

  const self = this;

  elements.onclick = element => {
    const target = element.target;
    const action = target.getAttribute("data-action");
    if (action) {
      self[action]();
    }
  };
}

new ClickButtons(allButtons); //allButtons is body's  id to make all buttons of the form page available for rhis module

const inputs = document.getElementsByTagName("input");

function checkValue(tenseArray) {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i].value;
    if (input !== "") {
      for (let j = 0; j < tenseArray.length; j++) {
        const placeholder = inputs[i].placeholder;
        if (tenseArray.includes(`${placeholder} ${input}`)) {
          const parameter = `${placeholder} ${input}`;
          hideInputandButton();
          showSuccessMessage(parameter);
          break;
        } else {
          showError(inputs[i]);
          inputs[i].value = "";
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
  const spans = document.querySelectorAll(".successText");
  for (let i = 0; i < spans.length; i++) {
    const span = spans[i].childNodes[i].nodeValue;
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
  for (let i = 0; i < inputs.length; i++) {
    if (currentPlaceholder === inputs[i].placeholder) {
      const divOfInput = inputs[i].parentNode;
      divOfInput.style.display = "block";
      inputs[i].value = "";
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
  let timeoutID;
  timeoutID = setTimeout(() => {
    message.remove();
  }, 1500);
}
