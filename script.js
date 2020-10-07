// Questions are here
var q1 = "What is your name?"
var q2 = "How to do this?"
var q3 = "Why this happened?"
var q4 = "What is your city?"
var q5 = "Who are you?"

var myVar;

function showQstn() {
  myVar = setTimeout(hideOthers, 1500);
}

function hideOthers() {
  document.getElementById("loadingAni").style.display = "none";
  document.getElementById("qstnTxt").style.display = "flex";
  console.log('question printed.');
}

function triggerCall() {
  console.log('triger called, waiting...');
  document.getElementById("callBtn").style.display = "none";
  document.getElementById("hintTxt").style.display = "none";
  document.getElementById("loadingAni").style.display = "flex";
  showQstn()
  randomQstn()
}

function randomQstn() {
  var chooseQstn = Math.floor((Math.random() * 5) + 1);
  if (chooseQstn == 1) {
    document.getElementById("mainQstn").innerHTML = q1;
  }
  else if (chooseQstn == 2) {
    document.getElementById("mainQstn").innerHTML = q2;
  }
  else if (chooseQstn == 3) {
    document.getElementById("mainQstn").innerHTML = q3;
  }
  else if (chooseQstn == 4) {
    document.getElementById("mainQstn").innerHTML = q4;
  }
  else if (chooseQstn == 5) {
    document.getElementById("mainQstn").innerHTML = q5;
  }
}
