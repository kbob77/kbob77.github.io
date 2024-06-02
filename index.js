
const quizData = [
  {
    question: "What is Taylor Swift's middle name?",
    options: ["Allison", "Andrea", "Elisbeth", "Rose"],
    answer: "Allison"
  },
  {
    question: "What was Taylor Swift's first single titled?",
    options: ["Blank Space", "Our Song", "Tim Mcgraw", "Love Story"],
    answer: "Tim Mcgraw"
  },
  {
    question: "What album is 'Love Story' on?",
    options: ["Taylor Swift", "Speak Now", "Lover", "Fearless"],
    answer: "Fearless"
  },
  {
    question: "What is Taylor Swift's brother's name?",
    options: ["Jose", "John", "Alfred", "Austin"],
    answer: "Austin"
  },{
    question: "What is Taylor Swift's zodiac sign?",
    options: ["Leo", "Virgo", "Capricorn", "Saggitarius"],
    answer: "Saggitarius"
  },{
    question: "What day was TTPD released on?",
    options: ["April 18", "April 19", "April 13", "March 19"],
    answer: "April 19"
  }
  
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}
var img = new Image(); 
img.src = "1000.gif"; 
img.alt = "100%"; 
img.classList.add('centered-image')
const img2 = document.createElement('img');
img2.src = "gj.gif"
img2.alt = "Good Job!"
img2.classList.add('centered-image');

var finalScore = score;

function showResult() {
  quiz.innerHTML = `
    <h1>Quiz Completed!</h1>
    <p>Your score: ${score}/${quizData.length}</p>
  `;
  if (score === 6) {
    document.body.appendChild(img)
    
    
  } else {
    document.body.appendChild(img2)
  }
}

showQuestion();
