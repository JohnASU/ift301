var visitorName;
var greeting;

function idVisitor() {
  visitorName = document.getElementById("visitorName").value;
  greeting = "Hello, " + visitorName + ". We are glad to meet you.";
}

document.getElementById("greeting").innerHTML = greeting;
