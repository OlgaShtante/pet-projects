import { TenseTabs } from "./tenseTabs.js";
// import { ToBeFormsPast } from "./toBePastTense.service.js";
// import { ToBeFormsFuture } from "./toBeFutureTense.service.js";
import { ToBeFormsPresent } from "./toBePresentTense.sevice.js";

const toBePresentTense = new ToBeFormsPresent();
// const toBePastTense = new ToBeFormsPast();
// const toBeFutureTense = new ToBeFormsFuture();

let arr;

//One tab is opened by default:

const tabs = new TenseTabs();
tabs.init("present");

//Each button has own function on the page
function ClickButtons(elements) {
  this.checkPresentPositive = function() {
    checkValue(arr);
  };
  this.tryAgain = function(parameter) {
    showInputAndButton(parameter);
  };
  // this.checkPresentNegative = function() {
  //   checkValue(toBePresentNegative);
  // };
  // this.checkPastPositive = function() {
  //   checkValue(arr);
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

function checkValue(arr) {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i].value;
    if (input !== "") {
      for (let j = 0; j < arr.length; j++) {
        const placeholder = inputs[i].placeholder;
        if (arr.includes(`${placeholder} ${input}`)) {
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

export function getPresentData(data) {
  arr = data.affirmative;
  checkValue(arr);
}

// export function getPastData(data) {
//   arr = data.affirmative;
//   console.log(arr);
// }

// export function getFutureData(data) {
//   arr = data.affirmative;
//   console.log(arr);
// }
