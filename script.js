const faqExpend = document.querySelectorAll(".faq-info__content-question");
const faqExpendBtn = document.querySelectorAll(".faq-info__content-btn");

faqExpend.forEach((el) => {
  el.addEventListener("click", (e) => {
    showQuestion(e.target.nextElementSibling);
    e.target.classList.add("hidden-pointer");
  });
});

faqExpendBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    showQuestion(el.parentElement.children[2]);
  });
});

function showQuestion(question) {
  if (!question.classList.contains("faq-info__answer-show")) {
    hideQuestions();
    question.classList.add("faq-info__answer-show");
  }
}

function hideQuestions() {
  document.querySelectorAll(".faq-info__content-answer").forEach((el) => {
    el.classList.remove("faq-info__answer-show");
    el.parentElement.children[1].classList.remove("hidden-pointer");
    el.parentElement.children[0].classList.remove("faq-info__content-btn-rotate");
  });
}

function showNavMenu() {}

document.querySelector(".social__icon").addEventListener("click", (e) => {
  document.querySelector(".social__dropdown").classList.toggle("dropdown-show");
});
