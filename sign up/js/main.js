var signUpForm = document.querySelector("#signUpForm")

var userName = document.querySelector("#userName")
var userEmail = document.querySelector("#userEmail")
var userPassword = document.querySelector("#userPassword")

var nameAlert = document.querySelector("#nameAlert")
var emailAlert = document.querySelector("#emailAlert")
var passwordAlert = document.querySelector("#passwordAlert")
var successAlert = document.querySelector("#successAlert")
var emailExist = document.querySelector("#emailExist")

var allUsers;

if(localStorage.getItem("allUsers")!= null){
    allUsers = JSON.parse(localStorage.getItem("allUsers"));
}else {
    allUsers = [];
}


signUpForm.addEventListener("submit", function (e) {
    e.preventDefault()  
    if (checkValidateInputs()){
        addUser()
    }
})

function validateInputs(regex, element, note) {
    if (regex.test(element.value)) {
        element.classList.add("is-valid")
        element.classList.remove("is-invalid") 
        note.classList.replace("d-block", "d-none")
        return true
    }else {
        element.classList.add("is-invalid")
        element.classList.remove("is-valid")
        note.classList.replace("d-none", "d-block")
        return false 
    }
}

function checkValidateInputs () {

    var isNameValid = validateInputs(/^[a-zA-Z0-9_.]{3,20}$/, userName, nameAlert) ;
    var isEmailValid = validateInputs(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, userEmail, emailAlert);
    var isPassWordValid = validateInputs(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, userPassword, passwordAlert);

    if (  isNameValid && isEmailValid && isPassWordValid) {     
        return true 
    }else {
        return false
    }
}


function addUser () {
    var userData = {
        name : userName.value,
        email: userEmail.value,
        password: userPassword.value,
    }

    if (emailIsExist(userData)){
        emailExist.classList.replace("d-none", "d-block")
        successAlert.classList.replace("d-block", "d-none")
        
    } else {
        emailExist.classList.replace("d-block", "d-none")
        successAlert.classList.replace("d-none", "d-block")
        allUsers.push(userData)
        localStorage.setItem("allUsers",(JSON.stringify(allUsers)))
        window.location.href = '../sign in/index.html';
    }  
}

function emailIsExist(userData){
    for (i=0 ; i < allUsers.length ;i++){
        if (allUsers[i].email.toLowerCase() == userData.email.toLowerCase() ){
           return true 
    }
}
}