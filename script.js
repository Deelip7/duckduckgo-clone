//----- Toggle Navbar Social Menu -----
document.querySelector(".social__icon").addEventListener("click", (e) => {
  document.querySelector(".social__dropdown").classList.toggle("dropdown-show");
});

//----- find which question was clicked -----
document.querySelectorAll(".faq-info__content-question").forEach((el) => {
  el.addEventListener("click", (e) => {
    showQuestion(e.target.nextElementSibling);
  });
});

//----- Call Show/Hide function -----
document.querySelectorAll(".faq-info__content-btn").forEach((el) => {
  el.addEventListener("click", (e) => {
    showQuestion(el.parentElement.children[2]);
  });
});

//----- Show FAQ selection -----
function showQuestion(question) {
  if (!question.classList.contains("faq-info__answer-show")) {
    hideQuestions();
    question.classList.add("faq-info__answer-show");
    question.parentElement.classList.add("hidden-pointer");
    question.parentElement.children[0].classList.add("faq-info__content-btn-rotate");
  }
}

//----- Hide FAQ selection -----
function hideQuestions() {
  document.querySelectorAll(".faq-info__content-answer").forEach((el) => {
    el.classList.remove("faq-info__answer-show");
    el.parentElement.classList.remove("hidden-pointer");
    el.parentElement.children[0].classList.remove("faq-info__content-btn-rotate");
  });
}
