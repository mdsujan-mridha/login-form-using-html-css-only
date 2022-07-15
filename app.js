document.getElementById("login-btn").addEventListener("click", function () {
  let getInput = [ ];
  const getEmail = document.getElementById("email-field").value;
  getInput.push(getEmail);
  const getPassword = document.getElementById("password-field").value;
  getInput.push(getPassword);
  console.log(getInput);
});
