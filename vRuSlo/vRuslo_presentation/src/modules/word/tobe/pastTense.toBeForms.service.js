import { getPastData } from "./main.js";

function ToBeFormsPast() {
  const url = "https://db-json-to-be-forms.herokuapp.com/posts/2";

  function getJSON(url, response) {
    const request = new XMLHttpRequest();
    request.onload = function() {
      response(this.responseText);
    };
    request.open("GET", url, true);
    request.send();
  }

  class Data {
    constructor() {}
    getUsefulContents(url) {
      return new Promise(response => {
        getJSON(url, data => {
          response(JSON.parse(data));
        });
      });
    }
  }
  const data = new Data();

  data.getUsefulContents(url).then(data => {
    getPastData(data);
  });
}
export { ToBeFormsPast };
