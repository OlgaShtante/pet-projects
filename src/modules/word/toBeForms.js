import { TenseTabs } from "./tenseTabs.js";
// import { AllTense } from "./toBeAllTense.js"; - //module with data
// const allTense = new AllTense();

//One tab is opened by default:

const tabs = new TenseTabs();
tabs.init("present");

//Each button has own function on the page
function ClickButtons(el) {
  this.checkPresentPositive = function() {
    checkValue(toBePresentPositive);
  };
  this.tryAgain = function() {
    renderInput();
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

  el.onclick = element => {
    const target = element.target;
    const action = target.getAttribute("data-action");
    if (action) {
      self[action]();
    }
  };
}

new ClickButtons(allButtons); //allButtons is body's  id to make all buttons of the form page available for rhis module

const inputs = document.getElementsByTagName("input");

const toBePresentPositive = [
  "Jaz sem",
  "Ti si",
  "On/Ona/Ono je",
  "Midva/Midve sva",
  "Vidva/Vidve sta",
  "Onadva/Onidve sta",
  "Mi/Me smo",
  "Vi/Ve ste",
  "Oni/One so"
];

function checkValue(arrayParam) {
  let i = 0,
    j = 0;

  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].value !== "") {
      const input = inputs[i].value;

      for (j = 0; j < arrayParam.length; j++) {
        const placeholder = inputs[i].placeholder;
        if (arrayParam.includes(`${placeholder} ${input}`)) {
          const parameter = `${placeholder} ${input}`;
          removeInputAndButton();
          createSuccessMessage(parameter);
          break;
        } else {
          showError(inputs[i]);
          break;
        }
      }
    }
  }
}

function removeInputAndButton() {
  const divToRemove = document.querySelector(".checkForm");
  divToRemove.remove();
}

function createSuccessMessage(parameter) {
  const divMarg = document.createElement("div");
  divMarg.classList.add("marg");
  const divchik = document.createElement("div");
  divchik.innerHTML = `" ${parameter} " - to je pravilno!`;
  divchik.classList.add("success");
  divchik.style.textAlign = "center";
  const container = document.getElementById("column1");
  container.appendChild(divMarg);
  divMarg.appendChild(divchik);

  const btn = document.createElement("button");
  btn.innerHTML = "Še enkrat!";
  btn.classList.add("successButton");
  btn.addEventListener("click", renderInput);
  btn.setAttribute("data-action", "tryAgain");
  divchik.appendChild(btn);
}

function showError(inputParam) {
  inputParam.style.borderColor = "red";
  const message = document.createElement("span");
  message.innerText = "Še enkrat premisli!";
  message.style.color = "red";
  const divWithError = document.querySelector(".tabTitle");
  divWithError.appendChild(message);
  timeoutID = setTimeout(() => {
    message.remove();
  }, 2000);
}

function renderInput() {
  let removeDiv = this.parentElement;
  removeDiv.remove();
  const container = document.getElementById("column1");
  const input = document.createElement("input");
  container.appendChild(input);
  const button = document.createElement("button");
  button.innerHTML = "Preveri!";
  container.appendChild(button);
  getPlaceholder();
}

function getPlaceholder(parameter) {
  // to be realized;
}
