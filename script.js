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

var score = 0;
var i = 0;


function displayQ () {
  var location = document.getElementById('quiz');
  var q = allQuestions[i].question;
  var writeQ = document.createTextNode(q);
  location.appendChild(writeQ);
  location.appendChild(document.createElement("br"));
  location.appendChild(document.createElement("br"));
  
      for(var j in allQuestions[i].choices) {
      var a =allQuestions[i].choices[j];
      var selectAns = document.createElement("input");
      selectAns.setAttribute("type", "radio");
      selectAns.setAttribute("value", j);
      selectAns.setAttribute("name", i);
      var writeA = document.createTextNode(a);
      location.appendChild(selectAns);
      location.appendChild(writeA);
      location.appendChild(document.createElement("br"));
      } 
}

function nextQ() {
  var location = document.getElementById('quiz');
  var selectedAns = document.querySelector('#quiz input[type="radio"]:checked');
  if(selectedAns === null) {
    alert("Please pick an answer.");
    return;
  }
  else if (selectedAns.value == allQuestions[i].correctAnswer) {
    score++;
    var wrapSpan = document.createElement("span");
    var sayCorrect = document.createTextNode("Correct!");
    wrapSpan.appendChild(sayCorrect);
    location.appendChild(wrapSpan);
  }

  else {
    var wrapSpan = document.createElement("span");
    var sayWrong = document.createTextNode("Wrong! The correct answer is " +allQuestions[i].choices[allQuestions[i].correctAnswer]+".");
    wrapSpan.appendChild(sayWrong);
    location.appendChild(wrapSpan);
  }

setTimeout(function() {
  while(location.firstChild) {
    location.removeChild(location.firstChild);
  }

  if(i < allQuestions.length-1) {
  i++;
  displayQ();
  }
  else {
    var elem = document.getElementById('next');
    var elem2 = document.getElementById('intro');
    var wrapH2 = document.createElement("h2");
    var end1 = document.createTextNode("Grade: " +Math.round((score/allQuestions.length)*100) + "%"); 
    var end2 = document.createTextNode("You answered " + score + " out of " + allQuestions.length +" questions correctly.");
    wrapH2.appendChild(end1);
    location.appendChild(wrapH2);
    location.appendChild(end2); 
    elem.parentNode.removeChild(elem); 
    elem2.parentNode.removeChild(elem2);     
  }
}, 2500);
}

