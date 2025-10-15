const questions = [
  {
    question: "1. En droit civil québécois, quel est le principe fondamental dans la formation des contrats qui permet à une entente d'être valide par le seul échange de consentements, sans écrit spécifique ?",
    options: ["A. La restitution des prestations.", "B. L’opposabilité des droits.", "C. Le consensualisme.", "D. Le formalisme contractuel."],
    answer: 2,
    rationales: [
        "La restitution des prestations est une conséquence de l'annulation ou de la résolution d'un contrat, pas un principe de formation.",
        "L’opposabilité des droits est un effet de la publicité des droits, et non un principe de base de la formation.",
        "Réponse correcte. Le principe du **consensualisme** (art. 1385 C.c.Q.) stipule que l'échange des consentements suffit à la formation du contrat.",
        "Le formalisme est l'exception, et non le principe général."
    ]
  },
  {
    question: "2. Dans un contrat de consommation ou d'adhésion au Québec, si une clause externe n'a pas été expressément portée à la connaissance de la partie adhérente, quelle est la sanction juridique de cette clause selon l'article 1435 C.c.Q. ?",
    options: ["A. L’adhérent a droit à des dommages-intérêts punitifs contre l’auteur du contrat.", "B. La clause est frappée de nullité relative, et l’ensemble du contrat est annulé.", "C. La clause est susceptible d’une renégociation obligatoire.", "D. La clause est nulle et réputée non écrite."],
    answer: 3,
    rationales: [
        "Les dommages-intérêts punitifs ne sont pas la sanction prévue par l'art. 1435 C.c.Q.",
        "Seule la clause est sanctionnée, pas l'ensemble du contrat (art. 1435 C.c.Q.).",
        "Il n'y a pas d'obligation légale de renégocier cette clause.",
        "Réponse correcte. La clause est **nulle et réputée non écrite** (art. 1435 C.c.Q.)."
    ]
  },
  {
    question: "3. Quelle est la principale distinction entre la nullité relative et la nullité absolue en termes d'intérêt protégé ?",
    options: ["A. La nullité relative protège un intérêt privé (une partie); la nullité absolue protège l'intérêt général (ordre public).", "B. La nullité relative peut être invoquée par tout intéressé; la nullité absolue seulement par la victime.", "C. La nullité relative sanctionne l'objet ou la cause illégale; la nullité absolue sanctionne les vices de consentement.", "D. La nullité relative s'applique aux contrats synallagmatiques; la nullité absolue aux contrats unilatéraux."],
    answer: 0,
    rationales: [
        "Réponse correcte. La **nullité relative** protège l'intérêt particulier (vices de consentement) tandis que la **nullité absolue** protège l'intérêt général (ordre public, absence de consentement).",
        "C'est l'inverse : la nullité absolue peut être invoquée par tout intéressé.",
        "C'est l'inverse. L'objet ou la cause illégale (intérêt public) mène à la nullité absolue.",
        "La distinction ne repose pas sur la nature du contrat (synallagmatique/unilatéral)."
    ]
  },
  {
    question: "4. Quelles sont les conditions essentielles à la formation valide d'un contrat selon l'article 1385 C.c.Q. ?",
    options: ["A. La capacité de contracter, le droit de propriété, un prix, et la publicité du contrat.", "B. Le consentement (libre et éclairé), la capacité de contracter, un objet et une cause.", "C. La preuve écrite, l’absence de dol, la capacité des parties, et l’objet de l’obligation.", "D. Le consentement, la capacité, la forme solennelle et la clause pénale."],
    answer: 1,
    rationales: [
        "Le droit de propriété et la publicité ne sont pas des conditions *essentielles* à la formation de tous les contrats.",
        "Réponse correcte. L'article 1385 C.c.Q. énonce ces quatre conditions : **Consentement, Capacité, Objet et Cause**.",
        "La preuve écrite n'est pas essentielle à la formation (principe du consensualisme).",
        "La forme solennelle est l'exception, non la règle."
    ]
  },
  {
    question: "5. Un contrat est dit « nommé » en droit civil québécois lorsque :",
    options: ["A. Il est obligatoirement rédigé sous la forme d’un acte notarié en minute.", "B. Il est créé et négocié spécifiquement entre deux parties qui lui donnent un nom.", "C. Il est expressément désigné et réglementé par des dispositions spécifiques dans le Code civil du Québec (C.c.Q.).", "D. Il déroge systématiquement à toutes les règles générales du droit des obligations."],
    answer: 2,
    rationales: [
        "Ceci décrit une exigence formelle, pas la classification de 'nommé'.",
        "Un contrat créé spécifiquement par les parties est un contrat *innomé*.",
        "Réponse correcte. Les contrats **nommés** (vente, louage, mandat) ont des règles spécifiques prévues au C.c.Q.",
        "Les contrats nommés sont d'abord soumis aux règles générales, non l'inverse."
    ]
  },
  {
    question: "6. Quelle est la sanction commune à tous les vices de consentement (erreur, dol, crainte, lésion) en droit québécois ?",
    options: ["A. L’octroi obligatoire de dommages-intérêts punitifs.", "B. La nullité relative du contrat.", "C. La résiliation du contrat pour l’avenir.", "D. La nullité absolue."],
    answer: 1,
    rationales: [
        "L'octroi de dommages-intérêts punitifs n'est jamais obligatoire et n'est pas la sanction principale.",
        "Réponse correcte. Les vices de consentement (art. 1407 C.c.Q.) ont pour sanction la **nullité relative**.",
        "La résiliation est une sanction pour inexécution contractuelle.",
        "La nullité absolue sanctionne la violation de l'ordre public, pas les vices du consentement."
    ]
  },
  {
    question: "7. Quelle condition s’ajoute à l’erreur pour qu’elle puisse entraîner la nullité du contrat (art. 1400 al. 2 C.c.Q.)?",
    options: ["A. Elle doit porter sur la simple valeur économique du bien.", "B. Elle doit être connue du cocontractant.", "C. Elle doit être excusable.", "D. Elle doit être provoquée par un mensonge du cocontractant."],
    answer: 2,
    rationales: [
        "L'erreur portant sur la simple valeur économique n'est jamais une cause de nullité.",
        "Ce critère est souvent un critère de preuve, mais l'art. 1400 al. 2 impose l'excusabilité.",
        "Réponse correcte. L'erreur doit être **excusable**; une erreur inexcusable n'est pas une cause de nullité (art. 1400 al. 2 C.c.Q.).",
        "Si l'erreur est provoquée par un mensonge, on est dans le régime du *dol*."
    ]
  },
  {
    question: "8. Le dol (fraude) est un vice de consentement qui se caractérise par :",
    options: ["A. L’emploi de manœuvres, de mensonges ou d’une réticence dans l’intention de tromper le cocontractant (art. 1401 C.c.Q.).", "B. La contrainte physique ou morale exercée par un tiers.", "C. Une disproportion monétaire significative entre les prestations.", "D. Le fait qu’une clause externe n’ait pas été portée à la connaissance de l’adhérent."],
    answer: 0,
    rationales: [
        "Réponse correcte. Le dol implique une **intention de tromper** par manœuvres, mensonges ou réticence (art. 1401 C.c.Q.).",
        "Ceci est la définition de la *crainte* (violence).",
        "Ceci est la définition de la *lésion*.",
        "Ceci est une sanction liée à la forme de l'accord (art. 1435 C.c.Q.), non un vice de consentement."
    ]
  },
  {
    question: "9. Quel vice de consentement peut entraîner la nullité du contrat même s'il est provoqué par un tiers (une personne non-contractante) ?",
    options: ["A. La lésion.", "B. L’erreur simple.", "C. Le dol.", "D. La crainte."],
    answer: 2,
    rationales: [
        "La lésion est un préjudice économique, non une action de tromperie par un tiers.",
        "L'erreur simple est spontanée et ne résulte pas de l'action d'un tiers.",
        "Réponse correcte. Le **dol** peut être exercé par un tiers si la partie contractante qui en bénéficie le savait (art. 1401 al. 2 C.c.Q.).",
        "Bien que la crainte puisse être exercée par un tiers, le dol est le vice le plus explicitement visé par la loi pour l'action du tiers avec connaissance du cocontractant."
    ]
  },
  {
    question: "10. La lésion (déséquilibre économique) est-elle un vice de consentement généralement disponible à toutes les parties au contrat ?",
    options: ["A. Non, elle est seulement disponible aux mineurs et aux majeurs protégés (art. 1405 C.c.Q.).", "B. Non, elle n’est disponible qu’aux consommateurs dans tous les contrats de consommation.", "C. Oui, tout le monde peut l’invoquer si la disproportion est prouvée.", "D. Oui, mais seulement dans les contrats à titre gratuit."],
    answer: 0,
    rationales: [
        "Réponse correcte. La **lésion** n'est disponible qu'aux **mineurs et majeurs protégés** ou lorsque la loi le prévoit expressément.",
        "Elle n'est pas disponible dans *tous* les contrats de consommation.",
        "Non, le principe est l'inverse : la lésion n'est pas un motif de nullité pour les majeurs autonomes.",
        "La disponibilité de la lésion ne dépend pas de la gratuité du contrat."
    ]
  },
  {
    question: "11. Pourquoi le dol (art. 1401 C.c.Q.) est-il qualifié de « catégorie spéciale d’erreur » ?",
    options: ["A. Parce qu’il est une erreur spontanée portant sur une qualité substantielle.", "B. Parce que c’est une erreur intentionnellement provoquée par le cocontractant (ou un tiers) par malice.", "C. Parce que le dol est le seul vice qui permet une action en nullité absolue.", "D. Parce que le dol est le seul vice qui nécessite un écrit pour être prouvé."],
    answer: 1,
    rationales: [
        "Ceci est la définition de l'erreur simple (art. 1400 C.c.Q.).",
        "Réponse correcte. Le dol est une erreur de la victime, mais celle-ci est **intentionnellement provoquée** par la mauvaise foi du cocontractant (ou du tiers), d'où sa qualification de 'spéciale'.",
        "Le dol entraîne la nullité relative, pas absolue.",
        "Le dol, comme tout fait juridique, peut se prouver par tous les moyens."
    ]
  },
  {
    question: "12. Quelle est la conséquence de la mauvaise foi inhérente au dol quant à l'exigence d'excusabilité de l'erreur chez la victime ?",
    options: ["A. L'excusabilité est présumée; le fraudeur doit prouver l'inexcusabilité de la victime.", "B. L'erreur de la victime doit être excusable, comme dans le cas de l'erreur simple.", "C. La condition d'excusabilité est écartée; la nullité est possible même si l'erreur de la victime était inexcusable (négligente).", "D. Le dol entraîne la nullité uniquement s'il est cumulé avec une crainte."],
    answer: 2,
    rationales: [
        "Ce n'est pas la règle; la condition d'excusabilité est simplement écartée.",
        "Faux. Si l'erreur est dolosive, l'exigence d'excusabilité est écartée.",
        "Réponse correcte. La condition d'excusabilité est **écartée** en cas de dol, car il serait inacceptable de permettre au fraudeur d'invoquer la négligence de sa victime.",
        "Le dol est un motif de nullité autonome."
    ]
  },
  {
    question: "13. La crainte (violence) vicie le consentement en affectant le caractère :",
    options: ["A. Éclairé du consentement.", "B. Personnel du consentement.", "C. Libre du consentement.", "D. Écrit du consentement."],
    answer: 2,
    rationales: [
        "L'erreur affecte le caractère éclairé du consentement.",
        "Le caractère personnel n'est pas un critère de validité du consentement.",
        "Réponse correcte. La **crainte** (violence) vicie le consentement en le rendant non-**libre** (art. 1402 C.c.Q.).",
        "La forme (écrit) n'est pas un critère général de validité du consentement."
    ]
  },
  {
    question: "14. En droit québécois, une menace d'exercer un droit légitime (ex. : menacer de poursuivre en justice pour une dette réelle) peut-elle constituer une crainte menant à la nullité (Art. 1403 C.c.Q.)?",
    options: ["A. Oui, si la victime est un consommateur.", "B. Oui, si l'exercice de ce droit est détourné de son but ou utilisé pour obtenir un avantage excessif et indu.", "C. Oui, car toute menace est considérée comme une violence morale en droit civil.", "D. Non, l'exercice d'un droit légitime ne peut jamais constituer une crainte, même s'il met la pression sur l'autre partie."],
    answer: 1,
    rationales: [
        "Ce n'est pas limité aux consommateurs.",
        "Réponse correcte. L'article 1403 C.c.Q. prévoit que même la menace d'exercer un droit légitime constitue une crainte si elle est utilisée pour obtenir un **avantage excessif et indu**.",
        "Ceci est faux; l'exercice légitime d'un droit est autorisé tant qu'il n'est pas détourné de son but.",
        "Faux. L'art. 1403 C.c.Q. prévoit l'exception de l'avantage excessif et indu."
    ]
  },
  {
    question: "15. Quel aspect du consentement est vicié par l’erreur ?",
    options: ["A. Le consentement n'est pas libre.", "B. Le consentement n'est pas éclairé.", "C. Le consentement est absent.", "D. Le consentement est forcé physiquement."],
    answer: 1,
    rationales: [
        "La crainte (violence) affecte le caractère libre du consentement.",
        "Réponse correcte. L’**erreur** est une fausse représentation de la réalité, ce qui signifie que le consentement n'est pas **éclairé**.",
        "L'absence de consentement est une cause de nullité absolue, non un vice.",
        "Le consentement forcé physiquement est une forme de crainte (violence)."
    ]
  },
  {
    question: "16. La cause d’un contrat devient illégale lorsque :",
    options: ["A. Elle est prohibée par la loi ou contraire à l’ordre public.", "B. Elle n’est pas écrite dans le contrat.", "C. Elle est mal comprise par une partie.", "D. Elle n’a pas d’objet."],
    answer: 0,
    rationales: [
        "Réponse correcte. La **cause** (le motif déterminant) est illégale si elle est **prohibée par la loi ou contraire à l’ordre public** (art. 1411 C.c.Q.).",
        "La cause n'a pas d'exigence formelle d'être écrite.",
        "La mauvaise compréhension de la cause n'est pas un critère d'illégalité.",
        "La cause et l'objet sont deux éléments distincts de la formation du contrat."
    ]
  },
  {
    question: "17. Quelle situation présente une cause illégale ?",
    options: ["A. Prêt pour acheter une voiture d’occasion.", "B. Prêt pour acheter de la drogue.", "C. Vente d’un terrain.", "D. Bail commercial."],
    answer: 1,
    rationales: [
        "Acheter une voiture d'occasion est un motif légal.",
        "Réponse correcte. Le motif (la **cause**) du contrat est illégal lorsque l'intention réelle d'une partie est de financer une activité criminelle (achat de drogue).",
        "Vendre un terrain est un motif légal.",
        "Un bail commercial est un motif légal."
    ]
  },
  {
    question: "18. Quelle situation présente un objet illégal ?",
    options: ["A. Vente d’un bien immobilier.", "B. Contrat de travail avec salaire minimum.", "C. Vente d’un organe humain.", "D. Contrat de location résidentielle."],
    answer: 2,
    rationales: [
        "Vendre un bien immobilier est un objet légal.",
        "Le contrat de travail est un objet légal (respectant la loi).",
        "Réponse correcte. La **vente d’un organe humain** est un **objet illégal** car le corps humain et ses parties sont hors commerce (contraire à l'ordre public).",
        "La location résidentielle est un objet légal."
    ]
  },
  {
    question: "19. L’erreur simple est un vice de consentement qui se caractérise par :",
    options: ["A. La contrainte physique ou morale exercée par un tiers.", "B. Le mensonge ou la rétention d’information.", "C. Une fausse représentation de la réalité.", "D. La capacité du cocontractant."],
    answer: 2,
    rationales: [
        "Ceci est la définition de la crainte (violence).",
        "Ceci est la définition du dol (fraude).",
        "Réponse correcte. L’**erreur simple** (art. 1400 C.c.Q.) est une **fausse représentation spontanée** de la réalité.",
        "La capacité est une condition de formation, non un vice du consentement."
    ]
  },
  {
    question: "20. Selon l’article 1401 C.c.Q., le dol peut-il provenir d’une personne autre que l’autre partie contractante ?",
    options: ["A. Non, le dol doit toujours venir de l’autre partie.", "B. Oui, si la tromperie cause une erreur déterminante.", "C. Oui, si la tromperie est connue du cocontractant qui en profite (art. 1401 al. 2 C.c.Q.).", "D. Non, sauf si la lésion est prouvée."],
    answer: 2,
    rationales: [
        "Faux. L'art. 1401 al. 2 C.c.Q. prévoit explicitement le cas du tiers.",
        "Cette option est incomplète. La loi exige la connaissance du dol par le cocontractant qui en bénéficie.",
        "Réponse correcte. Le dol peut provenir d'un tiers à condition qu'il soit **connu de la partie qui en tire avantage** (art. 1401 al. 2 C.c.Q.).",
        "Le dol et la lésion sont des vices distincts."
    ]
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
    ).join("") + 
    // Ajout d'une zone pour le feedback/rationale
    `<div id="feedback-area"></div>`;

  // 2. Si une réponse a déjà été donnée, afficher immédiatement le feedback (pour la révision)
  if (userAnswers[current] !== null) {
    // Ré-appliquer les classes de couleur et afficher le feedback
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
        const index = parseInt(btn.getAttribute('data-index'));
        if (index === q.answer) {
            btn.classList.add('correct-answer');
        } else if (index === userAnswers[current]) {
            btn.classList.add('selected-incorrect');
        }
    });
    displayFeedback(userAnswers[current]);
  }
  
  // 3. Mettre à jour les boutons de navigation et le texte de progression
  updateNavigation();
  updateScoreText();

  // 4. Ajouter les écouteurs d'événements aux nouvelles options
  document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', function() {
      const selectedIndex = parseInt(this.getAttribute('data-index'));
      selectAnswer(selectedIndex);
      displayFeedback(selectedIndex); // Afficher le feedback immédiatement
    });
  });
}

// Fonction pour afficher le feedback
function displayFeedback(selectedIndex) {
    const q = questions[current];
    const isCorrect = selectedIndex === q.answer;
    const rationaleText = q.rationales[selectedIndex];
    const feedbackArea = document.getElementById('feedback-area');

    // Déterminer la classe et le titre
    const statusClass = isCorrect ? 'correct' : 'incorrect';
    const statusTitle = isCorrect ? '✅ Bonne réponse' : '❌ Mauvaise réponse';
    
    // Afficher le contenu du feedback
    feedbackArea.innerHTML = `
        <div class="feedback-box ${statusClass}">
            <h3>${statusTitle}</h3>
            <p>${rationaleText}</p>
        </div>
    `;

    // Mettre à jour la classe du bouton pour le feedback visuel final
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true; // Désactiver les autres clics une fois la réponse donnée
        const index = parseInt(btn.getAttribute('data-index'));
        if (index === q.answer) {
            btn.classList.add('correct-answer');
        } else if (index === selectedIndex) {
            btn.classList.add('selected-incorrect');
        }
    });

    updateNavigation();
}


// Enregistre et met en évidence la réponse sélectionnée
function selectAnswer(selectedIndex) {
  userAnswers[current] = selectedIndex;
  
  // Réinitialiser l'état visuel avant de sélectionner la nouvelle réponse
  document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected', 'correct-answer', 'selected-incorrect'));
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
    // Si la question actuelle n'est pas encore répondue, désactiver le bouton Suivant
    if (nextBtn && userAnswers[current] === null && current < questions.length - 1) {
        nextBtn.disabled = true;
    } else if (nextBtn) {
        nextBtn.disabled = false;
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
