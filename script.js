document.querySelector(".LogingForm").addEventListener("submit",function(event){
  event.preventDefault();

  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;

  console.log("Username:",username);
  console.log("password:",password);
});