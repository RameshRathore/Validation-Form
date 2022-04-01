 var nameError=document.getElementById('name-error');
var phoneError=document.getElementById('phone-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');

function validateName(){
    var name=document.getElementById('contact-name').value;
    if(name.length == 0){
    nameError.innerHTML='Name is required!';
    return false;
}
if(name.match(/^[A-za]*\${1}[A-za]*&/)){
    nameError.innerHTML='Write Full Name';
    return false;
 }
 nameError.innerHTML='valid';
 return true;
}

function validatePhone(){
    var phone=document.getElementById('contact-phone').value;
    if(phone.length == 0){
        phoneError.innerHTML='Phone No Is required';
        return false;
    }
    if(phone.length == 11){
        phoneError.innerHTML='Phone no should be 11 digits only';
        return false;
    }
    if(phone.match(/^[0-9]*\${11}$/)){
        phoneError.innerHTML='valid';
        return true;
    }
}

function validateEmail(){
    var email=document.getElementById('contact-email').value;
    if(email.length == 0){
    nameError.innerHTML='Email is required!';
    return false;
}

if(email.match(/^[A-za]*\${1}[A-za]*&/)){
    emailError.innerHTML='Write Full email';
    return false;
 }
 eamilError.innerHTML='valid';
 return true;
}

function validateMessage(){
    var message=document.getElementById('contact-message').value;
    var required=30;
    var left=required-message.length;
    if(left > 0){
    messageError.innerHTML=left +'More character required';
    return false;

}
messageError.innerHTML='valid';
return false;
}
function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
submitError.style.display ='block';
submitError.innerHTML='please fix error to submit';
setTimeout(function() {submitError.style.display='none'},3000);
return false;
    } 
    
