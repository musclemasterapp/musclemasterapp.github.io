let currentQuestion = {};
let selectedBones = [];
let score = 0;
let questionCount = 0;
const totalQuestions = 3;

document.getElementById("start-quiz").addEventListener("click", startQuiz);
document.getElementById("restart-quiz").addEventListener("click", restartQuiz);

function startQuiz() {
  document.getElementById("start-screen").classList.add("d-none");
  document.getElementById("quiz-screen").classList.remove("d-none");
  resetQuiz();
  loadQuestion();
}

function resetQuiz() {
  score = 0;
  questionCount = 0;
  updateScore();
  updateQuestionCounter();
}

function loadQuestion() {
  selectedBones = [];
  document.getElementById("feedback").classList.add("d-none");
  document.getElementById("submit-btn").disabled = false;
  document.getElementById("next-question-btn").classList.add("d-none");

  questionCount++;
  updateQuestionCounter();

  currentQuestion = muscles[Math.floor(Math.random() * muscles.length)];
  const isOrigin = Math.random() > 0.5;
  const correctBones = isOrigin
    ? currentQuestion.origin
    : currentQuestion.insertion;
  document.getElementById("muscle-prompt").textContent = `${
    currentQuestion.name
  } (${isOrigin ? "Origin" : "Insertion"})`;

  const boneOptions = getRandomBones(correctBones);
  displayBoneOptions(boneOptions, correctBones);
}

function updateScore() {
  document.getElementById("score").textContent = score;
}

function updateQuestionCounter() {
  document.getElementById("question-number").textContent = questionCount;
  document.getElementById("total-question-number").textContent = totalQuestions;
}

function getRandomBones(correctBones) {
  // Determine the region of the correct bones
  const correctRegion = findRegion(correctBones[0]); // Assume all correct bones are in the same region
  const regionBones = bones[correctRegion];

  // Generate distractors from the same region
  let randomBones = new Set(correctBones);
  while (randomBones.size < 5) {
    const randomBone =
      regionBones[Math.floor(Math.random() * regionBones.length)];
    randomBones.add(randomBone);
  }

  return Array.from(randomBones);
}

function findRegion(bone) {
  for (const [region, boneList] of Object.entries(bones)) {
    if (boneList.includes(bone)) {
      return region;
    }
  }
}

function displayBoneOptions(boneOptions, correctBones) {
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  boneOptions.forEach((bone, index) => {
    const boneButton = document.createElement("button");
    boneButton.classList.add("btn", "btn-primary", "w-100");
    boneButton.textContent = bone;
    boneButton.addEventListener("click", () => selectAnswer(boneButton, bone));
    optionsContainer.appendChild(boneButton);
  });
  currentQuestion.correctBones = correctBones;
}

function selectAnswer(boneButton, bone) {
  if (selectedBones.includes(bone)) {
    selectedBones = selectedBones.filter((b) => b !== bone);
    boneButton.classList.remove("active");
  } else {
    selectedBones.push(bone);
    boneButton.classList.add("active");
  }
}

function submitAnswer() {
  const feedback = document.getElementById("feedback");
  feedback.classList.remove("d-none");

  if (selectedBones.length === 0) {
    // Case when the user skips the question
    feedback.className = "alert alert-warning text-center"; // Different styling for skipped (optional)
    feedback.innerHTML = `Skipped! <br> Correct answer: ${currentQuestion.correctBones.join(
      ", "
    )}`;
  } else {
    // Case when the user provides an answer
    const isCorrect =
      selectedBones.sort().join(",") ===
      currentQuestion.correctBones.sort().join(",");
    if (isCorrect) {
      feedback.className = "alert alert-success text-center";
      feedback.innerHTML = "Correct!";
      score++;
      updateScore();
    } else {
      feedback.className = "alert alert-danger text-center";
      feedback.innerHTML = `Incorrect! <br> Correct answer: ${currentQuestion.correctBones.join(
        ", "
      )}`;
    }
  }

  document.getElementById("submit-btn").disabled = true;
  document.getElementById("next-question-btn").classList.remove("d-none");

  if (questionCount === totalQuestions) {
    // Change "Next Question" to "Finish" on the last question
    const nextButton = document.getElementById("next-question-btn");
    nextButton.classList.remove("d-none");
    nextButton.textContent = "Finish";
    nextButton.onclick = endQuiz; // Set the button to end the quiz
  } else {
    document.getElementById("next-question-btn").classList.remove("d-none");
  }
}

function nextQuestion() {
  if (questionCount < totalQuestions) {
    loadQuestion();
  }
}

function endQuiz() {
  document.getElementById("quiz-screen").classList.add("d-none");
  document.getElementById("end-screen").classList.remove("d-none");
  document.getElementById(
    "final-score"
  ).textContent = `Your score: ${score} / ${totalQuestions}`;
}

function restartQuiz() {
  //document.getElementById("end-screen").classList.add("d-none");
  //document.getElementById("start-screen").classList.remove("d-none");
  location.reload();
}
