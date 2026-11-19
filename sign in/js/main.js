var signInForm = document.querySelector("#signInForm")
var userEmail = document.querySelector("#userEmail")
var userPassword = document.querySelector("#userPassword")
var loginAlert = document.querySelector("#loginAlert")

var allUsers =[];

if (localStorage.getItem("allUsers")){
    var allUsers  = JSON.parse(localStorage.getItem("allUsers")) ;
}


signInForm.addEventListener("submit", function(e){
    e.preventDefault();
    signIn()
})

function signIn(){
    var userData ={
        email : userEmail.value,
        password : userPassword.value,
    }
    if (validateLogin(userData)){

        loginAlert.classList.replace("d-block", "d-none")
        window.location.href = '../home./index.html'

    }else {
        loginAlert.classList.replace("d-none", "d-block")
    }
    

}

function validateLogin(userData){
    for (var i =0 ; i < allUsers.length ; i++){
        if (allUsers[i].email.toLowerCase() == userData.email.toLowerCase() && allUsers[i].password == userData.password){
            localStorage.setItem("userName",allUsers[i].name)
            return true
        }else {
            return false
        }
        
    }
}