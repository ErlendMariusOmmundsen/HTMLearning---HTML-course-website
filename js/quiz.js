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

function generateQuiz(questions_list, quiz_container, results_container, submit_button) {

    function showQuestions(questions_list, quiz_container) {
        let output = [];
        let answers;
        for (let i = 0; i < questions_list.length; i++) {
            answers = [];
            for (alt in questions_list[i].answers) {
                answers.push(
                    '<label>' +
                    '<input type="radio" name="question' + i + '" value="' + alt + '">' +
                    alt + ': ' +
                    questions_list[i].answers[alt] +
                    '</label> <br/>'
                )
            }
            output.push(
                '<div class="question">' + questions_list[i].question + '</div>' +
                '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quiz_container.innerHTML = output.join('');
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

    showQuestions(questions_list, quiz_container);

    submit_button.onclick = function () {
        showResults(questions_list, quiz_container, results_container);
    };
};


let quiz_container = document.getElementById('quiz_box');
let results_container = document.getElementById('results_box');
let submit_button = document.getElementById('next_question');
generateQuiz(questions_list, quiz_container, results_container, submit_button);
