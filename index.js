const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const SubmitError = document.getElementById("submit-error");

function validateName() {
    const name = document.getElementById("contact-name").value;

    if(name.length === 0 ) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Enter Full Name"
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}

function validatePhone (){
    const phone = document.getElementById("contact-phone").value;

    if(phone.length === 0){
        phoneError.innerHTML = "Phone number is required";
        return false
    }
    if(phone.length !== 10){
        phoneError.innerHTML = "Email must be of 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Only digits please";
        return false;
    }
    phoneError.innerHTML = "valid";
    return true;
}