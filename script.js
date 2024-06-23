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
            {text : "virat kohli" , correct : true},
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

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
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
    resetState();
  let currentQuestion   = questions[currentQuestionIndex]
  let questionNo = currentQuestionIndex+1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.
  question;


  currentQuestion.answers.forEach(answer=> {
    const button =  document.createElement("button")
    button.innerHTML = answer.text;
    button.classList.add("btn")
    answerButtons.appendChild(button);
    if(answer.correct)
        {
            button.dataset.correct = answer.correct
        }
    button.addEventListener("click" , selectAnswer)
  })
}

function resetState()
{
     nextButton.style.display = "none"
     while(answerButtons.firstChild)
        {
            answerButtons.removeChild(answerButtons.firstChild);
        }
}


function selectAnswer(e)
{
   const selectedBtn = e.target;
   const isCorrect = selectedBtn.dataset.correct==="true";
   if(isCorrect)
    {
        selectedBtn.classList.add("correct")
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true")
            {
                button.classList.add('correct')
            }
            button.disabled = true;

    });
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "play again"
    nextButton.style.display = "block"
} 

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
        {
            showQuestion()
        }
        else{
             showScore();
        }
}

nextButton.addEventListener("click" ,()=>{
    if(currentQuestionIndex < questions.length)
        {
            handleNextButton();
        }
        else{
            startQuiz()
        }
} )
