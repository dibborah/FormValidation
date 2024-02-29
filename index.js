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

function validateEmail() {
    const email = document.getElementById('contact-email').value;

    if(email.length === 0){
      emailError.innerHTML = 'Email is required';
      return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Enter a valid email"
        return false
    }
    emailError.innerHTML = "valid";
    return true;
}

function validateMessage() {
    const message = document.getElementById('contact-message').value;

    const required = 30;
    let left = required - message.length;

    if(message.length === 0){
        messageError.innerHTML = "Message is required";
        return false;
    }
    if(left > 0){
        messageError.innerHTML = `${left} word is required`
        return false;
    }
    messageError.innerHTML = "valid";
    return true;
}

function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        SubmitError.style.display = "block";// block makes an element visible taking full width of the container
        SubmitError.innerHTML = "Please fix error";
        setTimeout(() => {
            SubmitError.style.display = "none";    
        },2000)
        return false;        
    }
}