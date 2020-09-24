const faqExpend = document.querySelectorAll(".faq-info__content-question");
const faqClose = document.querySelectorAll(".faq-info__content-question");

function hideQuestions() {
  faqExpend.forEach((el) => {
    console.log(el.nextSibling.nextSibling);
    // el.nextSibling.nextSibling.style.height = "0";
    // el.nextSibling.nextSibling.style.padding = "0";
  });
}

faqExpend.forEach((el) => {
  el.addEventListener("click", (e) => {
    showQuestion(e.target.nextElementSibling);
    hideQuestions();
  });
});

function showQuestion(question) {
  question.style.height = "auto";
  question.style.padding = "20px 30px";
}
