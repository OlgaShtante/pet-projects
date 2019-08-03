function ToBeFormsPast() {
  const data = new Data();
  const url = "https://db-json-to-be-forms.herokuapp.com/posts/2";

  function getJSON(url, response) {
    const request = new XMLHttpRequest();
    request.onload = function() {
      response(this.responseText);
    };
    request.open("GET", url, true);
    request.send();
  }

  function Data() {}

  Data.prototype.getUsefulContents = function(url) {
    return new Promise(response => {
      getJSON(url, data => {
        response(JSON.parse(data));
      });
    });
  };

  data.getUsefulContents(url).then(data => {
    const toBeFormsPositivePastTense = data.affirmative;
    const toBeFormsNegativePastTense = data.negative;
    console.log(toBeFormsPositivePastTense, toBeFormsNegativePastTense);
  });
}
export { ToBeFormsPast };
