unction validation() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(name.length < 5 ){
        text = "Please correct text";
        error_message.innerHTML = text;
        return false;
    }
    if(subject.length < 5 ){
        text = "Please correct subject";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length <6){
        text = "Please correct email";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <= 140 ){
        text = "Please enter more than 140 text";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submit Success!")
    return true;
}