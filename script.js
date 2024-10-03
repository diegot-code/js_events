console.log("Hello World");

const form2 = document.getElementById("form2");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");

// console.log(form2);

form2.addEventListener("submit", (event) => {
  console.log(form2);
  event.preventDefault();
});

div1.addEventListener("click", function (event) {
  div1.style.backgroundColor = "yellow";
});
div2.addEventListener("click", function (event) {
  div2.style.backgroundColor = "blue";
});
div3.addEventListener("click", function (event) {
  div3.style.backgroundColor = "green";
});
