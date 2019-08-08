import { getPresentData } from "./toBeForms.js";

function ToBeFormsPresent() {
  const url = "https://db-json-to-be-forms.herokuapp.com/posts/1";

  fetch(url)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    })
    .catch(e => {
      console.log("Error: " + e.message);
      console.log(e.response);
    })
    .then(response => response.json())
    .then(data => {
      getPresentData(data);
    });
}

export { ToBeFormsPresent };
