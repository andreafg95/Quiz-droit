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

// Tableau pour stocker l'index de la réponse choisie par l'utilisateur pour chaque question.
let userAnswers = new Array(questions.length).fill(null);
let current = 0; // Index de la question actuelle

// Récupération des nouveaux éléments HTML (y compris le bouton Précédent)
const quizDiv = document.getElementById("quiz");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev"); // NOUVEAU
const scoreText = document.getElementById("score");
const navContainer = document.getElementById("navigation-buttons"); // NOUVEAU

// Affiche la question actuelle et met à jour l'état de la navigation
function showQuestion() {
  const q = questions[current];
  
  // 1. Générer le HTML de la question et des options
  quizDiv.innerHTML = `<h2>${q.question}</h2>` + 
    q.options.map((opt, i) => 
      // Ajout de la classe 'selected' si cette option a déjà été choisie
      // Utilisation d'un attribut data-index pour récupérer l'index de l'option
      `<button class="option-btn ${userAnswers[current] === i ? 'selected' : ''}" data-index="${i}">${opt}</button>`
    ).join("");

  // 2. Mettre à jour les boutons de navigation et le texte de score/progression
  updateNavigation();
  updateScoreText();

  // 3. Ajouter les écouteurs d'événements aux options
  document.querySelectorAll('.option-btn').forEach(button => {
    // Utiliser un écouteur d'événement au lieu de onclick dans le HTML pour plus de propreté
    button.addEventListener('click', function() {
      const selectedIndex = parseInt(this.getAttribute('data-index'));
      selectAnswer(selectedIndex);
    });
  });
}

// Enregistre et met en évidence la réponse sélectionnée
function selectAnswer(selectedIndex) {
  // 1. Enregistrer la réponse dans l'historique
  userAnswers[current] = selectedIndex;
  
  // 2. Mettre à jour visuellement le choix (retirer la sélection précédente et ajouter la nouvelle)
  document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
  document.querySelector(`.option-btn[data-index="${selectedIndex}"]`).classList.add('selected');
}

// Met à jour l'affichage des boutons (Précédent/Suivant) et gère la fin du quiz
function updateNavigation() {
  // Le bouton Précédent est caché sur la première question
  prevBtn.style.display = current === 0 ? "none" : "inline-block";
  
  // Le conteneur de navigation est caché à la fin du quiz
  if (current === questions.length) {
    navContainer.style.display = "none";
  } else {
    // Affiche le bouton "Terminer le Quiz" sur la dernière question, sinon "Suivant"
    navContainer.style.display = "block";
    nextBtn.textContent = current === questions.length - 1 ? "Terminer le Quiz" : "Suivant";
  }
}

// Affiche la progression (Question X/Y)
function updateScoreText() {
    if (current < questions.length) {
        scoreText.textContent = `Question ${current + 1}/${questions.length}`;
    }
}

// Calcule le score final
function calculateScore() {
  let finalScore = 0;
  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      finalScore++;
    }
  }
  return finalScore;
}

// Gère l'affichage des résultats finaux (avec le GIF si vous l'ajoutez)
function endQuiz() {
  const finalScore = calculateScore();
  const totalQuestions = questions.length;
  
  quizDiv.innerHTML = `<h2>Quiz terminé !</h2>`;
  scoreText.textContent = `Score final : ${finalScore}/${totalQuestions}`;
  
  updateNavigation(); // Cache les boutons de navigation
}


// --- ÉCOUTEURS D'ÉVÉNEMENTS DE NAVIGATION ---

// Événement pour le bouton Précédent
prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    showQuestion();
  }
});

// Événement pour le bouton Suivant (ou Terminer)
nextBtn.addEventListener("click", () => {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  } else if (current === questions.length - 1) {
    // Si c'est la dernière question
    current++; // On passe à l'état de fin de quiz
    endQuiz();
  }
});


// Démarrer le quiz
showQuestion();
