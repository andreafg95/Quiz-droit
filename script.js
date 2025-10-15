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

// Récupération des éléments du DOM
const quizDiv = document.getElementById("quiz");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const scoreText = document.getElementById("score");
const navContainer = document.getElementById("navigation-buttons");

// Affiche la question actuelle et met à jour l'état de la navigation
function showQuestion() {
  const q = questions[current];
  
  // 1. Générer le HTML de la question et des options (tuiles)
  quizDiv.innerHTML = `<h2>${q.question}</h2>` + 
    q.options.map((opt, i) => 
      // Ajout de la classe 'selected' si cette option a déjà été choisie
      `<button class="option-btn ${userAnswers[current] === i ? 'selected' : ''}" data-index="${i}">${opt}</button>`
    ).join("");

  // 2. Mettre à jour les boutons de navigation et le texte de progression
  updateNavigation();
  updateScoreText();

  // 3. Ajouter les écouteurs d'événements aux nouvelles options
  document.querySelectorAll('.option-btn').forEach(button => {
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
  
  // 2. Mettre à jour visuellement le choix
  document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
  document.querySelector(`.option-btn[data-index="${selectedIndex}"]`).classList.add('selected');
}

// Met à jour l'affichage des boutons (Précédent/Suivant)
function updateNavigation() {
  // Le bouton Précédent est caché sur la première question
  prevBtn.style.display = current === 0 ? "none" : "inline-block";
  
  // Le conteneur de navigation est caché à la fin du quiz
  if (current === questions.length) {
    navContainer.style.display = "none";
  } else {
    navContainer.style.display = "block";
    // Mettre à jour le texte du bouton Suivant (Terminer ou Suivant)
    nextBtn.textContent = current === questions.length - 1 ? "Terminer le Quiz" : "Suivant";
  }
}

// Affiche la progression (Question X/Y) ou le score final
function updateScoreText() {
    if (current < questions.length) {
        scoreText.textContent = `Question ${current + 1}/${questions.length}`;
        scoreText.style.display = "block";
    } else {
        // Le score final est affiché par endQuiz(), mais nous assurons que le texte est visible
        scoreText.style.display = "block";
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

// --- NOUVELLE FONCTION POUR LE RETOUR À LA RÉVISION ---
function startReview() {
  // Définir l'index pour revenir à la première question
  current = 0; 
  // Rétablit le contenu du conteneur de navigation aux boutons standard
  navContainer.innerHTML = `<button id="prev">Précédent</button><button id="next">Suivant</button>`;
  
  // Les écouteurs d'événements doivent être réattachés aux nouveaux boutons
  document.getElementById("prev").addEventListener("click", handlePrevClick);
  document.getElementById("next").addEventListener("click", handleNextClick);
  
  // Afficher la première question
  showQuestion();
}


// Gère l'affichage des résultats finaux (avec le GIF si parfait)
function endQuiz() {
  const finalScore = calculateScore();
  const totalQuestions = questions.length;
  let quizResultHTML = "";
  
  if (finalScore === totalQuestions) {
    // Si le score est parfait
    quizResultHTML = `
      <h2>Félicitations ! 🎉</h2>
      <p>Vous avez un score parfait ! ( ${finalScore}/${totalQuestions} )</p>
      <img src="https://media.tenor.com/tC7I0Q-kUkwAAAAd/damana.gif" alt="Chat qui tape du poing" style="width: 150px; margin-top: 20px; border-radius: 8px;">
    `;
  } else {
    // Si le score n'est pas parfait
    quizResultHTML = `
      <h2>Quiz terminé !</h2>
      <p>Continuez à réviser !</p>
      <p style="margin-top: 15px;">Votre score : ${finalScore}/${totalQuestions}</p>
    `;
  }
  
  quizDiv.innerHTML = quizResultHTML;
  scoreText.textContent = `Score final : ${finalScore}/${totalQuestions}`;
  
  // Remplacer les boutons de navigation par le bouton de révision
  navContainer.innerHTML = `<button id="review-btn" onclick="startReview()">Revoir mes réponses</button>`;
  navContainer.style.display = "block"; 
}


// --- ÉCOUTEURS D'ÉVÉNEMENTS DE NAVIGATION (Fonctions nommées pour réutilisation) ---

function handlePrevClick() {
  if (current > 0) {
    current--;
    showQuestion();
  }
}

function handleNextClick() {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  } else if (current === questions.length - 1) {
    // Si c'est la dernière question
    current++; 
    endQuiz();
  }
}

// Attacher les écouteurs au démarrage
document.getElementById("prev").addEventListener("click", handlePrevClick);
document.getElementById("next").addEventListener("click", handleNextClick);


// Démarrer le quiz au chargement de la page
showQuestion();
