// Skeleton-file
db = [["Question 1", "Alternative 1", "Alternative 2", "Alternative 3", "Alternative 4"]];

function next() {
  var j = 0;
  var siteq = document.getElementById("question");
  var sitea1 = document.getElementById("alt1text");
  var sitea2 = document.getElementById("alt2text");
  var sitea3 = document.getElementById("alt3text");
  var sitea4 = document.getElementById("alt4text");
  var quiz = [siteq, sitea1, sitea2, sitea3, sitea4]

  for (let i = 0; i < quiz.length; ++i) {
    console.log(db[j][i]);
    quiz[i].innerHTML = db[j][i];
  }

}

function prev() {

}
