let questions = [];
let current = 0;
let customCount = 0;

let startBtn = document.querySelector("#start-btn");
let nextBtn = document.querySelector("#next-btn");
let addCustomBtn = document.querySelector("#add-custom-btn");

let customQText = document.querySelector("#custom-q-text");
let currentQuestionText = document.querySelector("#current-question-text");
let questionCounter = document.querySelector("#question-counter");

let customItems = document.querySelectorAll(".custom-item");
let customReviews = document.querySelectorAll(".custom-review");

addCustomBtn.addEventListener("click", function () {
    let text = customQText.value;

    if (text === "") {
        alert("Write the question first.");
    }
    else{

    if (customCount === customItems.length) {
        alert("Maximum 5 custom questions.");
    }

    let box = customItems[customCount];
    box.style.display = "block";
    box.querySelector(".q-check").value = text;
    box.querySelector(".q-check").checked = true;
    box.querySelector("span").textContent = text;

    let review = customReviews[customCount];
    review.style.display = "block";
    review.querySelector("h4").textContent = (13 + customCount) + ". " + text;

    customCount++;
    customQText.value = "";
    }
});

startBtn.addEventListener("click", function () {
    questions = [];
    let checks = document.querySelectorAll(".q-check");

    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            questions.push(checks[i].value);
        }
    }
    
function showQuestion() {
    currentQuestionText.textContent = questions[current];
    questionCounter.textContent = "Question " + (current + 1) + " of " + questions.length;
}
    if (questions.length === 0) {
        alert("Choose at least one question.");
    }

    current = 0;
    showQuestion();
});



nextBtn.addEventListener("click", function () {
    if (questions.length === 0) {
        alert("Press Start Training first.");
    }

    current++;

    if (current < questions.length) {
        showQuestion();
    } else {
        currentQuestionText.textContent = "Training is finished, review your answers below";
        questionCounter.textContent = "Training finished";
        showAnswers();
    }
});

function showAnswers() {
    let checks = document.querySelectorAll(".q-check");
    let answers = document.querySelectorAll(".ans-single");
    let reviewAnswers = document.querySelectorAll(".review-ans");

    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked === false) {
            reviewAnswers[i].textContent = "This question was not selected";
        } else if (answers[i].value === "") {
            reviewAnswers[i].textContent = "No answer written";
        } else {
            reviewAnswers[i].textContent = answers[i].value;
        }
    }
}
