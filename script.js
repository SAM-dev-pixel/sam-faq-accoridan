const questions = document.querySelectorAll(".question-contain");
const answerTexts = document.querySelectorAll(".answer-text");
const faqItems = document.querySelectorAll(".faq-item");

questions.forEach((q, i) => {
  //set .faqItem height by its .questionContain
  faqItems[i].style.height = q.clientHeight + 48 + "px";
  //faq accordian click action
  q.addEventListener("click", () => {
    q.parentElement.classList.toggle("collapse");
    //when it's clicked, set .faqItem height by its children's height
    const height =
      faqItems[i].children[0].clientHeight +
      q.nextElementSibling.clientHeight +
      48 +
      "px";
    faqItems[i].style.height = height;
    //set the faq icons plus or minus
    if (q.parentElement.classList.contains("collapse")) {
      q.children[1].src = "assets/images/icon-minus.svg";
    } else {
      q.children[1].src = "assets/images/icon-plus.svg";
    }
  });
});
