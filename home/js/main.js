var logOutBtn = document.querySelector("#logOutBtn")
var welcome = document.querySelector(".welcome")

var userName = localStorage.getItem("userName")

welcome.innerHTML= userName;


logOutBtn.addEventListener("click", function (){
    localStorage.removeItem("userName")
})


