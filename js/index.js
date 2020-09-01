
/**
 * hides intro and show question 1
 */
function startQuiz() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("question1").style.display = "inline-block";
}

/**
 * hides question 1 shows question2
 */
function question2() {
  document.getElementById("question1").style.display = "none";
  document.getElementById("question2").style.display = "inline-block";
}

/**
 * hides question 2 shows question3
 */
function question3() {
  document.getElementById("question2").style.display = "none";
  document.getElementById("question3").style.display = "inline-block";
}

/**
 * hides question 3 shows question4
 */
function question4() {
  document.getElementById("question3").style.display = "none";
  document.getElementById("question4").style.display = "inline-block";
}




function results() {
  calculateResults()
  document.getElementById("question6").style.display = "none";
  document.getElementById("results").style.display = "inline-block";
}


function calculateResults() {
  const radios1 = document.querySelectorAll('input[name="quest1"]');
  let q1Value;
  for (const rb of radios1) {
      if (rb.checked) {
          q1Value = rb.value;
          break;
      }
  }
  
  const radios2 = document.querySelectorAll('input[name="quest2"]');
  let q2Value;
  for (const rb of radios2) {
      if (rb.checked) {
          q2Value = rb.value;
          break;
      }
  }

  
  const radios2 = document.querySelectorAll('input[name="quest2"]');
  let q2Value;
  for (const rb of radios2) {
      if (rb.checked) {
          q2Value = rb.value;
          break;
      }
  }

  
  const radios2 = document.querySelectorAll('input[name="quest3"]');
  let q2Value;
  for (const rb of radios2) {
      if (rb.checked) {
          q2Value = rb.value;
          break;
      }
  }

  
  const radios2 = document.querySelectorAll('input[name="quest4"]');
  let q2Value;
  for (const rb of radios2) {
      if (rb.checked) {
          q2Value = rb.value;
          break;
      }
  }





 let total = Number(q1Value) + Number(q2Value);
  result = total / 2;
  
  if (result > 2) {
    msg = "You answered mostly c you are snorlax!";
  } else if (result >= 1.5) {
    msg = "You answered mostly b, you are pikachu"!;
  } else {
    msg = "You answered mostly a, you are jigglypuff!";
  }

  document.getElementById("result").innerHTML = msg

}

