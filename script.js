const questions = [
  {
    question: "Un contrat de vente est-il toujours synallagmatique ?",
    options: ["Oui", "Non"],
    answer: 0
  },
  {
    question: "Quel élément n'est pas essentiel à la formation d’un contrat ?",
    options: ["Le consentement", "L’objet", "La cause", "Le témoin"],
    answer: 3
  }
];

let current = 0;
let score = 0;

const quizDiv = document.getElementById("quiz");
const nextBtn = document.getElementById("next");
const scoreText = document.getElementById("score");

function showQuestion() {
  const q = questions[current];
  quizDiv.innerHTML = `<h2>${q.question}</h2>` + 
    q.options.map((opt, i) => 
      `<button onclick="checkAnswer(${i})">${opt}</button>`
    ).join("");
}

function checkAnswer(i) {
  if (i === questions[current].answer) score++;
  current++;
  if (current < questions.length) showQuestion();
  else endQuiz();
}

function endQuiz() {
  quizDiv.innerHTML = `<h2>Quiz terminé !</h2>`;
  nextBtn.style.display = "none";
  scoreText.textContent = `Score : ${score}/${questions.length}`;
}

nextBtn.addEventListener("click", showQuestion);
showQuestion();
