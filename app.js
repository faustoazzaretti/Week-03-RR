validateName = function () {
    if (inputName.value.length < 6) {
        inputName.className = "error";
        inputName.value = "It needs 6 characters.";
        validatedName = false;
    }
    else {
        validatedName = true;
    }
}

clearCompleteName = function () {
    if (validatedName) {
        console.log('Pass');
    }
    else {
        inputName.className = "normal";
        inputName.value = "";
    }
}

validateEmail = function (valor) {
    valor = document.getElementById('email').value;
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(valor)) {
        intputEmail.className = "error";
        intputEmail.value = "Incorrect Format";
        validatedEmail = false;
    }
    else {
        validatedEmail = true;
    }
}

clearEmail = function () {
    if (validatedEmail) {
        console.log('Pass');
    }
    else {
        intputEmail.className = "normal";
        intputEmail.value = "";
    }
}

validatePassword = function () {
    password = inputPassword.value;
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if ((password.match(letterNumber)) && inputPassword.value.length >= 8) {
        validatedPassword = true;
    }
    else {
        inputPassword.className = "error";
        inputPassword.type = "text";
        inputPassword.value = "Minimum 8 characters letters and numbers.";
        validatedPassword = false;
    }
}

clearPassword = function () {
    if (validatedPassword) {
        console.log('Pass');
    }
    else {
        inputPassword.className = "normal";
        inputPassword.value = "";
        inputPassword.type = "password";
    }
}


validateRepeatPassword = function () {
    RepeatPassword = inputRepeatPassoword.value;
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if ((RepeatPassword.match(letterNumber)) && inputRepeatPassoword.value.length >= 8) {
        validatedRepeatPassword = true;
    }
    else {
        inputRepeatPassoword.className = "error";
        inputRepeatPassoword.type = "text";
        inputRepeatPassoword.value = "Minimum 8 characters letters and numbers.";
        validatedRepeatPassword = false;
    }
}

clearRepeatPassword = function () {
    if (validatedRepeatPassword) {
        console.log('Pass');
    }
    else {
        inputRepeatPassoword.className = "normal";
        inputRepeatPassoword.value = "";
        inputRepeatPassoword.type = "password";
    }
}

validateAge = function () {
    if (inputAge.value < 18 || isNaN(inputAge.value)) {
        inputAge.className = "error";
        inputAge.value = "Over 18 years old.";
        validatedAge = false;
    }
    else {
        validatedAge = true;
    }
}

clearAge = function () {
    if (validatedAge) {
        console.log('Pass');
    }
    else {
        inputAge.className = "normal";
        inputAge.value = "";
    }
}

validatePhone = function () {
    if (isNaN(inputPhone.value) || inputPhone.value.length < 7) {
        inputPhone.className = "error";
        inputPhone.value = "Only numbers and min 7 characters";
        validatedPhone = false;
    }
    else {
        validatedPhone = true;
    }
}

clearPhone = function () {
    if (validatedPhone) {
        console.log('Pass');
    }
    else {
        inputPhone.className = "normal";
        inputPhone.value = "";
    }
}

validateAdress = function () {
    if (inputAdress.value.length < 5) {
        inputAdress.className = "error";
        inputAdress.value = "It needs 5 characters";
        validatedAdress = false;
    }
    else {
        validatedAdress = true;
    }
}

clearAdress = function () {
    if (validatedAdress) {
        console.log('Pass');
    }
    else {
        inputAdress.className = "normal";
        inputAdress.value = "";
    }
}

validateCity = function () {
    if (inputCity.value.length < 3) {
        inputCity.className = "error";
        inputCity.value = "It needs 3 characters";
        validatedCity = false;
    }
    else {
        validatedCity = true;
    }
}

clearCity = function () {
    if (validatedCity) {
        console.log('Pass');
    }
    else {
        inputCity.className = "normal";
        inputCity.value = "";
    }
}

validateCp = function () {
    if (inputCp.value.length < 3) {
        inputCp.className = "error";
        inputCp.value = "It needs 3 characters";
        validatedCp = false;
    }
    else {
        validatedCp = true;
    }
}

clearCp = function () {
    if (validatedCp) {
        console.log('Pass');
    }
    else {
        inputCp.className = "normal";
        inputCp.value = "";
    }
}

validateDNI = function () {
    if (isNaN(inputDNI.value) || inputDNI.value.length < 7 || inputDNI.value.length > 8) {
        inputDNI.className = "error";
        inputDNI.value = "Number between 7 and 8 characters";
        validatedDNI = false;
    }
    else {
        validatedDNI = true;
    }
}

clearDNI = function () {
    if (validatedDNI) {
        console.log('Pass');
    }
    else {
        inputDNI.className = "normal";
        inputDNI.value = "";
    }
}

sendForm = function () {
    if (inputPassword.value == inputRepeatPassoword.value) {
        alert('Sended Form')
    }
    else {
        alert('The passwords needs be the same')
    }
}

window.onload = function () {
    //obtain the inputs
    inputName = document.getElementById('name');
    intputEmail = document.getElementById('email');
    inputPassword = document.getElementById('password');
    inputRepeatPassoword = document.getElementById('repeatPassword');
    inputAge = document.getElementById('age');
    inputPhone = document.getElementById('phone');
    inputAdress = document.getElementById('adress');
    inputCity = document.getElementById('city');
    inputCp = document.getElementById('cp');
    inputDNI = document.getElementById('dni');
    //obtain the button
    sendButton = document.getElementById('sendButton');
    sendButton.addEventListener('click', sendForm);

    //listeners 
    inputName.addEventListener("blur", validateName);
    inputName.addEventListener("focus", clearCompleteName);
    intputEmail.addEventListener("blur", validateEmail);
    intputEmail.addEventListener("focus", clearEmail);
    inputPassword.addEventListener("blur", validatePassword);
    inputPassword.addEventListener("focus", clearPassword);
    inputRepeatPassoword.addEventListener("blur", validateRepeatPassword);
    inputRepeatPassoword.addEventListener("focus", clearRepeatPassword);
    inputAge.addEventListener("blur", validateAge);
    inputAge.addEventListener("focus", clearAge);
    inputPhone.addEventListener("blur", validatePhone);
    inputPhone.addEventListener("focus", clearPhone);
    inputAdress.addEventListener("blur", validateAdress);
    inputAdress.addEventListener("focus", clearAdress);
    inputCity.addEventListener("blur", validateCity);
    inputCity.addEventListener("focus", clearCity);
    inputCp.addEventListener("blur", validateCp);
    inputCp.addEventListener("focus", clearCp);
    inputDNI.addEventListener("blur", validateDNI);
    inputDNI.addEventListener("focus", clearDNI);
}