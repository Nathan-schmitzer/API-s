var button = document.querySelector("#answer");
var button2 = document.querySelector("#answer2");
var button3 = document.querySelector("#answer3");
var button4 = document.querySelector("#answer4");

var startQuiz = document.querySelector("#start-quiz");

var questionsArr = 0;
var selectQuestion = document.querySelector("#questions");

var questions = [{
    question: "What is the skeleton of a website?",
    answer: "HTML",
    answer2: "Jquery",
    answer3: "C++",
    answer4: "CSS",
    answerRight: 1
},
{
    question: "What is the muscle/interactivity of a website?",
    answer: "Python",
    answer2: "CSS",
    answer3: "Javascript",
    answer4: "HTML",
    answerRight: 1

}, {
    question: "Which element creates the larger font?",
    answer: "<h3>",
    answer2: "<h6>",
    answer3: "<h2>",
    answer4: "<h1>",
    answerRight: 1
}, {
    question: "How do you create a variable?",
    answer: "select",
    answer2: "verieble",
    answer3: "var",
    answer4: "condition",
    answerRight: 1
},
{
    question: "Where can you find the title of the website?",
    answer: "Top of the page",
    answer2: "Bottom of the page",
    answer3: "In CSS",
    answer4: "The tab the website's in",
    answerRight: 1
}, {
    question: "What holds more importance?",
    answer: "An ID",
    answer2: "A class",
    answer3: "A button",
    answer4: "The footer",
    answerRight: 1
}, {
    question: "How do you submit changes to Github?",
    answer: "Save code in file save as",
    answer2: "Git add",
    answer3: "Git commit",
    answer4: "None, it automatically saves",
    answerRight: 1
}, {
    question: "What is used to describe an image on a website?",
    answer: "Alt",
    answer2: "Src",
    answer3: "Value",
    answer4: "Img",
    answerRight: 1
}, {
    question: "What is an array?",
    answer: "A number",
    answer2: "Styling in CSS",
    answer3: "Object that holds multiple values",
    answer4: "An endless loop through 1000",
    answerRight: 1
}, {
    question: "How do you reference and link sources?",
    answer: "<a>",
    answer2: "<div>",
    answer3: "<header>",
    answer4: "<body>",
    answerRight: 1
}];

// WHEN quiz starts, timer count down from 75 seconds
var getTime = document.querySelector("#timer");
 var timeDown = 76; 

var correctAnswer = 0;

var questionsAnswered = 0;

function startTime(){
    var timeInterval = setInterval(function() {
        timeDown--;
        getTime.textContent = timeDown;

        if(timeDown === 0) {
            // show end page
        }
    }, 1000)
}


button.addEventListener("click", beginQuiz)
function beginQuiz() {

    console.log("You started the quiz!");
    if(startQuiz === "click") {
        $("#remove.elements").remove();
    }
}

button.addEventListener("click", answerClick)

function answerClick(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("You clicked button 1!");
    checkAnswer(event);
    giveQuestion();
}

button2.addEventListener("click", answerClick2)

function answerClick2(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("You clicked button 2!")
    checkAnswer(event);
    giveQuestion();
}

button3.addEventListener("click", answerClick3)
function answerClick3(event){
    event.preventDefault();
    event.stopPropagation();
    console.log("You clicked button 3!")
    checkAnswer(event);
    giveQuestion();
}

button4.addEventListener("click", answerClick4)
function answerClick4(event){
    event.preventDefault();
    event.stopPropagation();
    console.log("You clicked button 4!")
    console.log(event);
    checkAnswer(event);
    giveQuestion();
}

function giveQuestion() {
    let q = questions[questionsArr] 
    selectQuestion.textContent = q.question
    button.textContent = q.answer
    button2.textContent = q.answer2
    button3.textContent = q.answer3
    button4.textContent = q.answer4
    
}

function checkAnswer(event) {
    console.log("Youre in check answer");

    let q = questions[questionsArr]
    let answerArr = q.answerRight
    var userChoice = event.target.dataset.value
    if(userChoice === answerArr ) {
        
    } else { timeDown--;

    }
    questionsArr++;
    
}
startTime();
