/** Load questions before building quiz **/
const requestURL = 'js/quizdatabase.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    console.log(request.response);
    const questions_list = request.response;
    buildQuiz(questions_list);
}

function buildQuiz(questions_list) {

    const quiz_container = document.getElementById('quiz_box');
    const next_button = document.getElementById('next_question');
    const prev_button = document.getElementById('previous_question');
    const question_length = questions_list.length;
    let question_counter = 0;
    let user_selections = [];

    function showQuestion(question_index) {
        let answers = [];
        for (alt in questions_list[question_index].answers) {
            answers.push(
                '<label>' +
                '<input type="radio" name="question' + question_index + '" value="' + alt + '">' +
                alt + ': ' +
                questions_list[question_index].answers[alt] +
                '</label> <br/>'
            )
        }
        quiz_container.innerHTML = '<div class="question">' + questions_list[question_index].question + '</div>' +
            '<div class="answers">' + answers.join('') + '</div>';
    };

    function showResults() {
        let results = 0;
        for (let i = 0; i < question_length; i++) {
            if (questions_list[i].correct_answer === user_selections[i]) {
                results++;
            }
        }
        let additional;

        if (results > Math.ceil(question_length / 2)) {
            additional = 'Good job! You know alot of what this course covers already.';
        } else {
            additional = 'This was a bit hard for you, you might have need of this course.'
        }
        quiz_container.innerHTML = '<p>Quiz finished!</p> <p>Your score is ' + results + '/' + question_length + '</p> <p>' + additional + '</p>';
    };

    function saveChoice() {
        user_selections[question_counter] = (quiz_container.querySelector('input[name=question' + question_counter + ']:checked') || {}).value;
    }

    function showNext() {
        if (question_counter === question_length) {
            showResults();
            next_button.style.display = 'none';
        } else {
            showQuestion(question_counter);
            next_button.style.display = 'inline-block';
            if (user_selections[question_counter] !== undefined) {
                quiz_container.querySelector('input[value=' + user_selections[question_counter] + ']').checked = true;
            }
        }
    };

    /** Initializing the question, and adding EventListeners **/
    showNext(question_counter);

    next_button.addEventListener('click', function () {
        saveChoice();
        if (user_selections[question_counter] === undefined) {
            alert('You must make a choice.');
        } else {
            question_counter++;
            showNext();
        }
    });

    prev_button.addEventListener('click', function () {
        saveChoice();
        question_counter--;
        if (question_counter < 0) {
            question_counter = 0;
        }
        showNext();
    });

    /** Drawing the progress bar using a canvas **/
    const canvas = document.getElementById('progress_canvas');
    const context = canvas.getContext('2d');
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight * 0.2;
    let centerY = canvas.height / 2;
    context.lineWidth = 2;
    var qlength = 25 + 100 * question_length - 50;
    var scalefactor = (window.innerWidth - 100) / qlength;
    if (scalefactor < 1) {
      context.scale(scalefactor, scalefactor);
    }

    function drawLine(fromX, toX) {
        context.beginPath();
        context.moveTo(toX, centerY);
        context.lineTo(fromX, centerY);
        context.closePath();
        context.stroke();
    }

    function drawCircle(x, radius, color = 'lightgrey') {
        context.beginPath();
        context.arc(x, centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = color;
        context.fill();
        context.stroke();
    }


    for (let i = 0; i < question_length - 1; ++i) {
      drawCircle(50+100*i, 25);
      drawLine(50+100*i+25, 50+100*i + 75);
    }
    drawCircle(50+100*(question_length-1), 25);

    function drawProgress() {}
}
