

var i = 0;
var text = "WELCOME!";
var speed = 90;

function myFunc() {
  if (i < text.length) {
    document.querySelector("p").innerHTML += text.charAt(i);
    i++;

    setTimeout(myFunc, speed);

    document.querySelector("p").onmouseout = function () {
      document.querySelector("p").innerHTML = text.replace(
        "WELCOME!",
        "&#169; SHF, 2022 "
      );
    };
  }
}
