const form = document.querySelector("#contactform");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const fromValidated = document.querySelector("#validateForm")


function validateForm(event) {
    event.preventDefault();

    if(checkLenght(fullName.value, 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if(checkLenght(subject.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(checkLenght(adress.value, 25) === true) {
        adressError.style.display = "none";
    } else {
        adressError.style.display = "block";
    }
       
}

form.addEventListener("submit", validateForm);

function checkLenght(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}







