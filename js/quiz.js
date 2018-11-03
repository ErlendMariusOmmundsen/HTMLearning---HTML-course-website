const questions_list = [
    {
        question: 'Which tag would you use to make a heading for your tablerows?',
        answers: {
            a: '&lth1&gt',
            b: '&lttd&gt',
            c: '&ltth&gt',
            d: '&lttablehead&gt'
        },
        correct_answer: 'c'
    },
    {
        question: 'How would you submit a form?',
        answers: {
            a: 'With input type submit',
            b: 'With a button with id submit',
            c: 'With a method declaration',
            d: 'With a buttom with name submit'
        },
        correct_answer: 'a'
    }
];
const quiz_container = document.getElementById('quiz_box');
const next_button = document.getElementById('next_question');
const prev_button = document.getElementById('previous_question');
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
    for (let i = 0; i < questions_list.length; i++) {
        if (questions_list[i].correct_answer === user_selections[i]) {
            results++;
        }
    }
    let additional;
    if (results > Math.ceil(questions_list.length / 2)) {
        additional = 'Good job! You know alot of what this course covers already.';
    } else {
        additional = 'Not too good, you might have need of this course.'
    }
    quiz_container.innerHTML = '<p>Quiz finished!</p> <p>Your score is ' + results + '/' + questions_list.length + '</p> <p>' + additional + '</p>';
};

function saveChoice() {
    user_selections[question_counter] = (quiz_container.querySelector('input[name=question' + question_counter + ']:checked') || {}).value;
}

function showNext() {
    if (question_counter === questions_list.length) {
        showResults();
    } else {
        showQuestion(question_counter);
        if (user_selections[question_counter] !== undefined) {
            quiz_container.querySelector('input[value=' + user_selections[question_counter] + ']').checked = true;
        }
    }
};

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
