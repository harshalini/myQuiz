var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Siddhi",
    score: 5,
  },

  {
    name: "Shashank",
    score: 4,
  },
]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Yeola"
}, {
  question: "What do I do? ",
  answer: "Engineering"
},
{
  question: "What is my favourite food? ",
  answer: "Pav Bhaji"
},
{
  question: "What is  my birthdate? (DD-MM-YYYY) ",
  answer: "29-10-2002"
},
{
  question: "In which state I live? ",
  answer: "Maharashtra"
},
{
  question: "What I want to do in future, web development or artificial intelligence? ",
  answer: "Web development"
} 
  ];

function welcome() {
   var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Harshalini?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
game();
showScores();
