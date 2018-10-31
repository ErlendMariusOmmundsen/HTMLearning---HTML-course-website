function toggleAnswer(question) {
  var answer = question.parentElement.getElementsByClassName("faqanswer")[0];
  var isopen = answer.classList.contains("open");

  if (isopen) {
    answer.classList.remove("open");
  } else {
    answer.classList.add("open");
  }
}
