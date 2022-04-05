let question = document.getElementById('question')
let button1 = document.getElementById('1')
let button2 = document.getElementById('2')
let button3 = document.getElementById('3')
let button4 = document.getElementById('4')
let header3 = document.getElementById('h3')
let scoreBtn = document.getElementById('scoreBtn')
let timer = document.getElementById('timer')
let quizBtnVar = document.getElementById('quizBtn')
let questionSec = document.getElementById('questions')
let questionCont = document.getElementById('question-container')
let displayResults = document.getElementById('displayResults')
let questionNumber = 0
let score = 0
let timerObj;
let timerCounter = 30
let liAppend = document.createElement('li');
let questionArr = [
    {
        q:"Javascript is an _______ language?",
        ch1:"Object-Oriented",
        ch2:"Object-Based",
        ch3:"Procedural",
        ch4:"None of the above",
        answer:"1"
    },
    {
        q:"Which of the following keywords is used to define a variable in Javascript?",
        ch1:"var",
        ch2:"let",
        ch3:"(A) and (B)",
        ch4:"None of the above",
        answer:"3"
    },{
        q:"What are var, let and const declare ________ in Javascript?",
        ch1:"Syntax",
        ch2:"Intervals",
        ch3:"Attribute",
        ch4:"Variables",
        answer:"4"
    }
]

questionCont.style.display = 'none'
displayResults.style.display = 'none'
quizBtnVar.addEventListener('click', startQuiz);

button1.addEventListener('click', rightWrongFunc)
button2.addEventListener('click', rightWrongFunc)
button3.addEventListener('click', rightWrongFunc)
button4.addEventListener('click', rightWrongFunc)

function startQuiz() {

    questionCont.style.display = 'block'
   quizBtnVar.style.display = 'none'
   timerObj = setInterval(function(){
       timer.textContent = timerCounter
       if (timerCounter > 0) {
           timerCounter--
       }
       else {
        timer.textContent = "Time's Up!"
        showScore();
       }
   },1000);
   displayQuestions();
};



function displayQuestions() {
    question.textContent = questionArr[questionNumber].q;
    button1.textContent = questionArr[questionNumber].ch1;
    button2.textContent = questionArr[questionNumber].ch2;
    button3.textContent = questionArr[questionNumber].ch3;
    button4.textContent = questionArr[questionNumber].ch4;
}

function rightWrongFunc() {
    var userAns = this.getAttribute('id');
    if ( userAns === questionArr[questionNumber].answer ){
        score += 10// score = score +10
        header3.textContent = 'Correct';
    }
    else  {
        timerCounter -= 10
        header3.textContent = 'Incorrect'
    }
     if (questionNumber < questionArr.length - 1) {
         questionNumber ++
         displayQuestions();
     }
     else {
         showScore();
     }
        
}

function showScore() {
    questionCont.style.display = 'none';
    clearInterval(timerObj);
    displayResults.style.display = 'block';
}

function addScore() {
    let initInput = document.getElementById('initialsInp').value
    let scoreWithInit = initInput + ' '  + score
    liAppend.appendChild(document.createTextNode(scoreWithInit));
 
    document.querySelector('ul').appendChild(liAppend);
}

scoreBtn.addEventListener('click', addScore)