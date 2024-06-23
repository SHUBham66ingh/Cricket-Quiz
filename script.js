const questions = [
    {
        question:"who was the player of the tournament in 2019 world cup held in England?",
        answers : [
            {text : "pat cummins" , correct : false},
            {text : "rohit sharma" , correct :  false},
            {text : "kane willamson" , correct :  true},
            {text : "ben stokes" , correct : false},
            
        ]
    },
    {
        question:"who has taken the most wicktes in 2019 world cup held in england?",
        answers : [
            {text : "jasprit bumrah" , correct : false},
            {text : "rashid khan" , correct : false},
            {text : "mark wood" , correct : false},
            {text : "mitchell starc" , correct : true},
        ]
    },
    {
        question:"who was the player of the match in 2023 world cup final?",
        answers: [
            {text : "jasprit bumrah" , correct : false},
            {text : "travis head" , correct : true},
            {text : "pat cummins" , correct : false},
            {text : "mitchell starc" , correct : false},
        ]
    },
    {
        question:"who has won the player of the tournament in the 2023 world cup held in India?",
        answers : [
            {text : "jasprit bumrah" , correct : false},
            {text : "rashid khan" , correct : false},
            {text : "mark wood" , correct : false},
            {text : "virat kohli" , correct : false},
        ]
    },
    {
        question:"what is name of the name of the trophy played between england and australia?",
        answers : [
            {text : "ashes" , correct : true},
            {text : "border gavaskar trophy" , correct : false},
            {text : "nelson mandella trophy" , correct : false},
            {text : "euro cup" , correct : false},
        ]
    },

]

const questionElement = documnet.getElementById("question")
const answerButton = documnet.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex=0
let score=0

function startQuiz(){
    currentQuestionIndex=0
     score=0
     nextButton.innerHTML = "Next"
     showQuestion()
}

function showQuestion()
{
  let currentQuestion   = questions[currentQuestionIndex]
  let questionNo = currentQuestionIndex+1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.
  question;


  currentQuestion.answers.forEach(answer=> {
    const button =  document.createElement("button")
    button.innerHTML = answer.text;
    button.classList.add("btn")
    answerButton.appendChild(button);
  })
}

startQuiz()