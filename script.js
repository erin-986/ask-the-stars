let displayAnswer = document.querySelector("h1");

function mentalHealthCare() {
  let supportHTML = "";
  displayAnswer.innerHTML =
    supportHTML +
    `Are you okay? If you need support, here's a <a href="https://www.suicidestop.com/call_a_hotline.html">list of hotlines you can call</a>`;
  console.log(supportHTML);
}

function answer(question) {
  if (question.includes("suicide") || question.includes("kill myself")) {
    mentalHealthCare();
  } else {
    let answers = [
      "Yes",
      "Not likely",
      "Most likely",
      "You already know the answer",
      "Ask again later",
      "It is certain",
      "Outlook good",
      "Signs point to yes",
      "Signs point to no",
      "Without a doubt",
      "It is doubtful",
    ];
    let answerNumber = Math.floor(Math.random() * 10) + 1;
    let answerText = answers[answerNumber];
    displayAnswer.innerHTML = `${answerText}`;
  }
}

function askQuestion(event) {
  event.preventDefault();
  let question = document.querySelector("#question-input");
  answer(question.value);
}
