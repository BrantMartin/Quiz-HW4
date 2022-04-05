let question = document.getElementById('question')
let button1 = document.getElementById('1')
let button2 = document.getElementById('2')
let button3 = document.getElementById('3')
let button4 = document.getElementById('4')
let header3 = document.getElementById('h3')
let quizBtnVar = document.getElementById('quizBtn')
let questionSec = document.getElementById('questions')
let questionCont = document.getElementById('question-container')
let questionNumber = 0
let questionArr = [
    {
        q1:"Question1",
        ch1:"option1",
        ch2:"option2",
        ch3:"option3",
        ch4:"option4",
        answer:"1"
    },
    {
        q1:"Question2",
        ch1:"option1",
        ch2:"option2",
        ch3:"option3",
        ch4:"option4",
        answer:"1"
    },{
        q1:"Question3",
        ch1:"option1",
        ch2:"option2",
        ch3:"option3",
        ch4:"option4",
        answer:"3"
    }
]
let score = 0
questionCont.style.display = 'none'

quizBtnVar.addEventListener('click', startQuiz);

button1.addEventListener('click', rightWrongFunc)
button2.addEventListener('click', rightWrongFunc)
button3.addEventListener('click', rightWrongFunc)
button4.addEventListener('click', rightWrongFunc)

function startQuiz() {
     questionCont.style.display = 'block'
   quizBtnVar.style.display = 'none'
   displayQuestions()
}



function displayQuestions() {
    question.textContent = questionArr[questionNumber].q1
    button1.textContent = questionArr[questionNumber].ch1
    button2.textContent = questionArr[questionNumber].ch2
    button3.textContent = questionArr[questionNumber].ch3
    button4.textContent = questionArr[questionNumber].ch4
}

function rightWrongFunc() {
    var userAns = this.getAttribute('id')
    if ( userAns === questionArr[questionNumber].answer ){
        score += 10// score = score +10
        header3.textContent = 'Correct'
    }
    else  {
        header3.textContent = 'Incorrect'
    }
     if (questionNumber < questionArr.length - 1) {
         questionNumber ++
         displayQuestions()
     }
     else {
         showScore()
     }
        
}

function showScore() {
    questionCont.style.display = 'none'
    
}