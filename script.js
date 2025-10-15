const questions = [
  {
    question: "Un contrat de vente est-il toujours synallagmatique ?",
    options: ["Oui", "Non"],
    // CORRECTION : Un contrat de vente est toujours synallagmatique (Oui = index 0)
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
  userAnswers[current] = selectedIndex;
  
  document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
  document.querySelector(`.option-btn[data-index="${selectedIndex}"]`).classList.add('selected');
}

// Met à jour l'affichage des boutons (Précédent/Suivant)
function updateNavigation() {
  // Récupérer les boutons (nécessaire car ils sont réinjectés dans startReview())
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  if (prevBtn) {
      prevBtn.style.display = current === 0 ? "none" : "inline-block";
  }
  
  if (current === questions.length) {
    navContainer.style.display = "none";
  } else {
    navContainer.style.display = "block";
    if (nextBtn) {
        nextBtn.textContent = current === questions.length - 1 ? "Terminer le Quiz" : "Suivant";
    }
  }
}

// Affiche la progression (Question X/Y)
function updateScoreText() {
    if (current < questions.length) {
        scoreText.textContent = `Question ${current + 1}/${questions.length}`;
        scoreText.style.display = "block";
    } else {
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

// --- GESTION DE LA NAVIGATION ---

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
    current++; 
    endQuiz();
  }
}

// --- NOUVELLE FONCTION POUR LE RETOUR À LA RÉVISION ---
function startReview() {
  current = 0; // Revenir à la première question
  
  // Rétablit le contenu du conteneur de navigation aux boutons standard
  navContainer.innerHTML = `<button id="prev">Précédent</button><button id="next">Suivant</button>`;
  
  // Les écouteurs d'événements DOIVENT être réattachés aux nouveaux boutons
  document.getElementById("prev").addEventListener("click", handlePrevClick);
  document.getElementById("next").addEventListener("click", handleNextClick);
  
  showQuestion();
}

// Gère l'affichage des résultats finaux (avec le Nyan Cat systématique)
function endQuiz() {
  const finalScore = calculateScore();
  const totalQuestions = questions.length;
  
  const message = finalScore === totalQuestions 
    ? "Félicitations ! 🎉" 
    : "Quiz terminé !";
    
  // Utilisez un lien direct vers le Nyan Cat
  const nyanCatGifUrl = "https://media.giphy.com/media/RkMZTfC1rhdMk/giphy.gif"; 
  // Ce lien Giphy est généralement plus stable pour l'affichage direct.

  quizDiv.innerHTML = `
    <h2>${message}</h2>
    <p>Votre score final : ${finalScore}/${totalQuestions}</p>
    
    <img src="${nyanCatGifUrl}" alt="Nyan Cat" style="width: 150px; margin: 20px auto 10px auto; border-radius: 8px;">
    
    <p>${finalScore === totalQuestions ? 'Incroyable, vous avez un score parfait !' : 'Continuez de réviser pour maîtriser le droit des contrats !'}</p>
  `;
  
  scoreText.textContent = ''; // Nettoyer le texte de progression

  // Remplacer les boutons de navigation par le bouton de révision
  navContainer.innerHTML = `<button id="review-btn" onclick="startReview()">Revoir mes réponses</button>`;
  navContainer.style.display = "block"; 
}

// --- ATTACHEMENT INITIAL DES ÉCOUTEURS ---
document.getElementById("prev").addEventListener("click", handlePrevClick);
document.getElementById("next").addEventListener("click", handleNextClick);

// Démarrer le quiz au chargement de la page
showQuestion();
