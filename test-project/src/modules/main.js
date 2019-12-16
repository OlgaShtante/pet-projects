let button = document.querySelector(".btn");

button.addEventListener("click", getValue);

function getValue() {
  let value = document.getElementById("input").value;
  alert(`Result is ${value}`);
}
