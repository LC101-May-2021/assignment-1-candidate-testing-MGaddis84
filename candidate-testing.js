const input = require('readline-sync');

let candidateName = "";

let question = "Who was the first American woman in space? \n";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? \n", "True or false: 5 kilometer == 5000 meters? \n", "(5 + 3)/2 * 10 = ? \n", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? \n", "What is the minimum crew size for the ISS? \n"];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  candidateName = input.question("What is your name? \n");
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    let candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
    console.log("Your answer: ", candidateAnswers[i]);
    console.log("Correct answer: ", correctAnswers[i]);
  }
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let numcorrect = 0; 
  for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numcorrect = numcorrect + 1;
    }
  }
  let grade = numcorrect/candidateAnswers.length * 100;  
  if (grade < 80) {
   console.log(">>> Status: FAILED <<<");
    } else {
   console.log(">>> Status: PASSED <<<");
   }
    console.log(`>>> Overall Grade:${grade}% (${numcorrect} out of ${questions.length}) correct <<< `);
    return grade;
  
}


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello, " + candidateName + " Let's begin: \n");

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}








// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};