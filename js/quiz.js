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
const results_container = document.getElementById('results_box');
const next_button = document.getElementById('next_question');
const prev_button = document.getElementById('previous_question');

let question_counter = 0;
let user_selections = [];

function createQuestionElement(question_index) {
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
    return '<div class="question">' + questions_list[question_index].question + '</div>' +
        '<div class="answers">' + answers.join('') + '</div>';

};

function showResults(questions_list, quiz_container, results_container) {
    let answerContainers = quiz_container.querySelectorAll('.answers');
    let userAnswer = '';
    let numCorrect = 0;
    for (let i = 0; i < questions_list.length; i++) {
        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
        if (userAnswer === questions_list[i].correct_answer) {
            numCorrect++;
            answerContainers[i].style.color = 'lightgreen';
        } else {
            answerContainers[i].style.color = 'red';
        }
    }
    results_container.innerHTML = numCorrect + ' out of ' + questions_list.length;
};

function generateQuiz(questions_list, quiz_container, results_container, next_button) {
    let output = [];
    for (let i = 0; i < questions_list.length; i++) {
        output.push('<div class="slide">' + createQuestionElement(i) + '</div>');
    }
    quiz_container.innerHTML = output.join('');
};

next_button.addEventListener('click', function () {
    showResults(questions_list, quiz_container, results_container);
});

generateQuiz(questions_list, quiz_container, results_container, next_button);
