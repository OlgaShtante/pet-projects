import { getFutureData } from "./toBeForms.js";
function ToBeFormsFuture() {
  const url = "https://db-json-to-be-forms.herokuapp.com/posts/3";

  fetch(url).then(response =>
    response.json().then(data => {
      getFutureData(data);
    })
  );
}

export { ToBeFormsFuture };
