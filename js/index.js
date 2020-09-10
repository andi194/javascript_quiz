
function startQuiz() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("question1").style.display = "inline-block";
}

function question2() {
  document.getElementById("question1").style.display = "none";
  document.getElementById("question2").style.display = "inline-block";
}

function question3() {
  document.getElementById("question2").style.display = "none";
  document.getElementById("question3").style.display = "inline-block";
}

 function question4(){
 document.getElementById("question3").style.display = "none";
 document.getElementById("question4").style.display = "inline-block";
 }
function results() {
 calculateResults()
 document.getElementById("question4").style.display = "none";
 document.getElementById("results").style.display = "inline-block";
}


  const radios1 = document.querySelectorAll('input[name="question1"]');
  let q1Value;
  for (const rb of radios1) {
      if (rb.checked) {
          q1Value = rb.value;
          break;
      }
  }
  
  const radios2 = document.querySelectorAll('input[name="question2"]');
  let q2Value;
  for (const rb of radios2) {
      if (rb.checked) {
          q2Value = rb.value;
          break;
      }
  }

  const radios3 = document.querySelectorAll('input[name="question3"]');
  let q3Value;
  for (const rb of radios3) {
      if (rb.checked) {
          q2Value = rb.value;
          break;
      }
  }

  const radios4 = document.querySelectorAll('input[name="question4"]');
  let q4Value;
  for (const rb of radios4) {
      if (rb.checked) {
          q2Value = rb.value;
          break;
      }
  }

  let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value)
  result = total / 4;
  
  if (result > 8) {
    msg = "You answered mostly c you are Jigglypuff!";
  } else if (result > 4 ) {
    msg = "You answered mostly b, you are Snorlax!";
  } else {
    msg = "You answered mostly a, you are Pikachu!";
  }

  document.getElementById("result").innerHTML = msg


function calculateResults() {}


function hideElement(id) {
 document.getElementById(id).style.display = "none";
}


function showElement(id){
 document.getElementById("ifYes").style.display = "block";
}


function nextQuestion(questionNo){
 questionId = "question" + questionNo
 hideElement(questionId)
 questiionNo ++
 nextId =  "question" + questionNo
}

function getRadioVal(form, name) {
 var val;

 var radios = form.elements[name];
 
 
 for (var i=0, len=radios.length; i<len; i++) {
     if ( radios[i].checked ) { 
         val = radios[i].value; 
         break; 
     }
 }
 return val; 
}


