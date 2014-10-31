var allQuestions = [
  {question: "Who is Prime Minister of the United Kingdom?", 
   choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer:0},
   {question: "What is the most prominent gas in the Earth's atmosphere?", 
   choices: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"], correctAnswer:1},
   {question: "A heptagon has how many sides?", 
   choices: ["Six", "Seven", "Nine", "Eleven"], correctAnswer:1},
   {question: "What is the capital of China?", 
   choices: ["Nanjing", "Shanghai", "Taipei", "Beijing"], correctAnswer:3},
   {question: "True or false: A turtle is an amphibian.", 
   choices: ["True", "False"], correctAnswer:1},
   {question: "If you have a gross of pencils, you have how many?", 
   choices: ["10", "25", "144", "250"], correctAnswer:2},
   {question: "What is the reciprocal of 3/4?", 
   choices: ["4/3", "3", "4", "1"], correctAnswer:0},
   {question: "Which is the correct spelling of a certain prehistoric member of the elephant family?", 
   choices: ["Mastodon", "Mastadon", "Mastedon", "Mastidon"], correctAnswer:0},
   {question: "How long is one regular term for a US representative?", 
   choices: ["1 year", "2 years", "4 years", "8 years"], correctAnswer:1},
   {question: "What force is responsible for the formation of waves?", 
   choices: ["Sun", "Moon", "Gravity", "Wind"], correctAnswer:3},
   {question: "Electrons have what kind of charge?", 
   choices: ["Positive", "Negative", "Neutral"], correctAnswer:1}   
];

var curQuestionIndex = 0;
var score = 0;

function displayCurrentQuestion () {
  var location = document.getElementById('quiz');
  var q = allQuestions[curQuestionIndex].question;
  var writeQ = document.createTextNode(q);
  $(location).hide().fadeIn('slow');
  location.appendChild(writeQ);
  location.appendChild(document.createElement("br"));
  location.appendChild(document.createElement("br"));
  
    for(var j in allQuestions[curQuestionIndex].choices) {
      var a = allQuestions[curQuestionIndex].choices[j];
      var selectAns = document.createElement("input");
      selectAns.type="radio";
      selectAns.value = j;
      selectAns.name = curQuestionIndex;
      var writeA = document.createTextNode(a);
      location.appendChild(selectAns);
      location.appendChild(writeA);
      location.appendChild(document.createElement("br"));
    } 
}

function handleAnswer() {
  var location = document.getElementById('quiz');
  var wrapSpan = document.createElement("span");
  var selectedAns = document.querySelector('#quiz input[type="radio"]:checked');
  if(selectedAns === null) {
    alert("Please pick an answer.");
    return;
  }
  else if (selectedAns.value == allQuestions[curQuestionIndex].correctAnswer) {
    score++;
    var sayCorrect = document.createTextNode("Correct!");
    document.getElementById("next").disabled=true;
    wrapSpan.appendChild(sayCorrect);
    location.appendChild(wrapSpan);
  }
  else {
    var sayWrong = document.createTextNode("Wrong! The correct answer is " +allQuestions[curQuestionIndex].choices[allQuestions[curQuestionIndex].correctAnswer]+".");
    document.getElementById("next").disabled=true;
    wrapSpan.appendChild(sayWrong);
    location.appendChild(wrapSpan);
  }

  setTimeout(function() {
    location.innerHTML="";
  
    if(curQuestionIndex < allQuestions.length-1) {
      curQuestionIndex++;
      displayCurrentQuestion();
      document.getElementById("next").disabled=false;
    }
    else {
      var elem = document.getElementById('next');
      var elem2 = document.getElementById('intro');
      var wrapH2 = document.createElement("h2");
      var tellGrade = document.createTextNode("Grade: " +Math.round((score/allQuestions.length)*100) + "%"); 
      var tellScore = document.createTextNode("You answered " + score + " out of " + allQuestions.length +" questions correctly.");
      wrapH2.appendChild(tellGrade);
      $(location).hide().fadeIn('slow');
      location.appendChild(wrapH2);
      location.appendChild(tellScore); 
      elem.parentNode.removeChild(elem); 
      elem2.parentNode.removeChild(elem2);
    }
  }, 1000);
}

