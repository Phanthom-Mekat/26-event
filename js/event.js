console.log("this is separate file");

//option 2 add onclick event to button
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//option 3  add event listener
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

//option 4 add event listener

const green = document.getElementById("make-green");
green.onclick = function makeGreen() {
  document.body.style.backgroundColor = "green";
};

//option 4 add event listener
const pinkButton = document.getElementById("make-pink");

pinkButton.addEventListener("click", makePink);
function makePink() {
  document.body.style.backgroundColor = "pink";
}

//option 4 add event listener
const makePurple = document.getElementById("make-purple");
makePurple.addEventListener("click", function makePurples() {
  document.body.style.backgroundColor = "purple";
});

// final most use
document.getElementById("make-gold").addEventListener("click", function () {
  document.body.style.backgroundColor = "goldenrod";
});
