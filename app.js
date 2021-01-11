validateName = function () {
    if (inputName.value.length < 7) {
        inputName.className = "error";
        inputName.value = "Al menos 6 caracteres";
    }
}

clearCompleteName = function () {
    inputName.className = "normal";
    inputName.value = "";
}

validateEmail = function (valor) {
    valor = document.getElementById('email').value;
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(valor)) {
        intputEmail.className = "error";
        intputEmail.value = "Formato incorrecto";
    }
}

clearEmail = function () {
    intputEmail.className = "normal";
    intputEmail.value = "";
}

validatePassword = function () {
    password = inputPassword.value;
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if ((password.match(letterNumber))) {
        console.log("Works");
    }
    else {
        inputPassword.className = "error";
        inputPassword.type = "text";
        inputPassword.value = "Solo letras y numeros";
    }
}

clearPassword = function () {
    inputPassword.className = "normal";
    inputPassword.value = "";
    inputPassword.type = "password";
}

validateRepeatPassword = function () {
    RepeatPassword = inputRepeatPassoword.value;
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if ((RepeatPassword.match(letterNumber))) {
        console.log("Works");
    }
    else {
        inputRepeatPassoword.className = "error";
        inputRepeatPassoword.type = "text";
        inputRepeatPassoword.value = "Solo letras y numeros";
    }
}

clearRepeatPassword = function () {
    inputRepeatPassoword.className = "normal";
    inputRepeatPassoword.value = "";
    inputRepeatPassoword.type = "password";
}

validateAge = function () {
    if (inputAge.value < 18 || isNaN(inputAge.value)) {
        inputAge.className = "error";
        inputAge.value = "Debe ser mayor de 18 anios";
    }
    else {
        console.log('Works');
    }
}

clearAge = function () {
    inputAge.className = "normal";
    inputAge.value = "";
}

validatePhone = function () {
    if (isNaN(inputPhone.value) || inputPhone.value.length < 8) {
        inputPhone.className = "error";
        inputPhone.value = "Only numbers and min 7 characters";
    }
    else {
        console.log('Works');
    }
}

clearPhone = function () {
    inputPhone.className = "normal";
    inputPhone.value = "";
}

validateAdress = function () {
    if (inputAdress.value.length < 5) {
        inputAdress.className = "error";
        inputAdress.value = "Al menos 5 caracteres";
    }
    else {
        console.log('Works');
    }
}

clearAdress = function () {
    inputAdress.className = "normal";
    inputAdress.value = "";
}

validateCity = function () {
    if (inputCity.value.length < 3) {
        inputCity.className = "error";
        inputCity.value = "Al menos 3 caracteres";
    }
    else {
        console.log('Works');
    }
}

clearCity = function () {
    inputCity.className = "normal";
    inputCity.value = "";
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
    sendButton.addEventListener('click', validateName);

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
}