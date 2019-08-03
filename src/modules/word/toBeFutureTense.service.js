function ToBeFormsFuture() {
  function Data() {}
  const data = new Data();
  const url = "https://db-json-to-be-forms.herokuapp.com/posts/3";

  fetch(url).then(response =>
    response.json().then(data => {
      console.log(data.affirmative);
      console.log(data.negative);
    })
  );
}

export { ToBeFormsFuture };
