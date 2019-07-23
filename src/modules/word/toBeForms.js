import { TenseTabs } from "./tenseTabs.js";

const tabs = new TenseTabs();

const langBtn = document.querySelector(".switchLanguageBtn");
langBtn.addEventListener("click", switchLanguage);

function switchLanguage() {
  window.location = "#"; //word page in different language
}

tabs.init("present");
