document.getElementById("btnSubmit").addEventListener("click", function () {
  checkEmail();
  validateEmail();
});

function checkEmail() {
  const email = document.getElementById("email");

  if (email.value.length === "0" || !email.checkValidity()) {
    document.getElementById("error-display").innerText = "Please provide a valid email";
    document.getElementById("error-display").style.color = "hsl(0, 93%, 68%)";
    document.getElementById("email").style.border = "2px solid hsl(0, 93%, 68%)";
    document.getElementById('icon-error').style.display = 'block';
  } else {
    document.getElementById("error-display").style.display = "none";
    document.getElementById("error-display").innerHTML = "";
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}