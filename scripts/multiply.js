const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("error-audio");

let answer = 0;

function generateEquation() {
  let num1 = Math.floor(Math.random() * 13);
  let num2 = Math.floor(Math.random() * 13);
  let dummyAnswer1 = Math.floor(Math.random() * 13);
  let dummyAnswer2 = Math.floor(Math.random() * 13);
  let allAnswers = [];
  let switchAnswers = [];

  answer = num1 * num2;
  if (
    dummyAnswer1 == answer &&
    dummyAnswer2 == answer &&
    dummyAnswer1 == dummyAnswer2
  ) {
    dummyAnswer1 = Math.floor(Math.random() * 13);
    dummyAnswer2 = Math.floor(Math.random() * 13);
  }

  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;

  allAnswers = [answer, dummyAnswer1, dummyAnswer2];

  for (i = allAnswers.length; i--; ) {
    switchAnswers.push(
      allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
    );
  }

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2];
}

option1.addEventListener("click", () => {
  if (option1.textContent == answer) {
    generateEquation();
  } else {
    audio.play();
  }
});
option2.addEventListener("click", () => {
  if (option2.textContent == answer) {
    generateEquation();
  } else {
    audio.play();
  }
});
option3.addEventListener("click", () => {
  if (option3.textContent == answer) {
    generateEquation();
  } else {
    audio.play();
  }
});

generateEquation();
