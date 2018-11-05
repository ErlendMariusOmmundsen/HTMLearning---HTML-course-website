
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
    const restart_button = document.getElementById('restart_button');
    const question_length = questions_list.length;
    let question_counter = 0;
    let user_selections = [];

    /** Prepare canvas to draw progress bar on **/
    const canvas = document.getElementById('progress_canvas');
    const context = canvas.getContext('2d');
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight * 0.2;
    let centerY = canvas.height / 2;
    context.lineWidth = 2;
    let qlength = 25 + 100 * question_length - 50;
    let scalefactor = (window.innerWidth - 100) / qlength;
    if (scalefactor < 1) {
        context.scale(scalefactor, scalefactor);
    }
    
    /** Make current question into html **/
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
        if (user_selections[question_counter] !== undefined) {
            quiz_container.querySelector('input[value=' + user_selections[question_counter] + ']').checked = true;
        }
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
            restart_button.style.display = 'inline-block';
        } else {
            showQuestion(question_counter);
            next_button.style.display = 'inline-block';
            restart_button.style.display = 'none';
        }
        drawProgress();
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

    /** Drawing the progress bar on the canvas **/
    function drawLine(fromX, toX) {
        context.beginPath();
        context.moveTo(toX, centerY);
        context.lineTo(fromX, centerY);
        context.closePath();
        context.stroke();
    }

    function drawCircle(x, radius, index) {
        context.beginPath();
        context.arc(x, centerY, radius, 0, 2 * Math.PI, false);
        if (user_selections[index] === undefined) {
            context.fillStyle = 'lightgrey';
        } else if (questions_list[index].correct_answer === user_selections[index]) {
            context.fillStyle = 'green';
        } else {
            context.fillStyle = 'red';
        }
        context.fill();
        context.stroke();
    }

    function drawProgress() {
        for (let i = 0; i < question_length - 1; ++i) {
            drawCircle(50 + 100 * i, 25, i);
            drawLine(50 + 100 * i + 25, 50 + 100 * i + 75);
        }
        drawCircle(50 + 100 * (question_length - 1), 25, question_length - 1);
    }
}
