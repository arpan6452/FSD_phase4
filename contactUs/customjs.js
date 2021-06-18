function submitForm(){    
    var email = document.getElementById("email");
    if(email.value.includes('@') && email.value.includes('.com')){
        email.classList.add("is-valid");
    }
    else{
        email.classList.add("is-invalid");
        // document.getElementById("email-feedback").style.display="block";
    }

    var phoneNumber = document.getElementById("phoneNumber");
    if(phoneNumber.value.length == 10){
        phoneNumber.classList.add("is-valid");
    }
    else{
        phoneNumber.classList.add("is-invalid");
        // document.getElementById("number-feedback").style.display="block";
    }
    
    var type = document.getElementById("type");
    type.classList.add("is-valid");
    // if(email.value.includes('@') && email.value.includes('.com')){
        
    // }
    // else{
    //     type.classList.add("is-invalid");
    //     document.getElementById("type-feedback").style.display="block";
    // }
    
    var message = document.getElementById("message");
    if(email.value.length > 15){
        message.classList.add("is-valid");
    }
    else{
        message.classList.add("is-invalid");
        // document.getElementById("message-feedback").style.display="block";
    }
    
}