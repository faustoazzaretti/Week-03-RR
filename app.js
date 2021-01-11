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
}