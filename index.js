var switchGroups = document.querySelectorAll(".switch-flex");
var buttons = document.querySelectorAll(".button");

switchGroups.forEach(function (group) {
  group.addEventListener("click", function (event) {
    group.classList.toggle("green-bg");
  });

 
});

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    switchGroups.forEach(function (group) {
      group.classList.remove("green-bg");
    });
  });
});
