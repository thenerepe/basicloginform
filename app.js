//Javascript
function login() {
  var email = document.getElementById("email").value;
  if (email == "") {
    alert("Lütfen Email Giriniz!");
  }
   else {
    alert("Thank You for Login & You are Redirecting to Campuslife Website");
    //Redirecting to other page or webste code or you can set your own html page.
    window.location = "mainpage.html";
  }
}
