validateName = function () {
    if (inputName.value < 7) {
        alert('El nombre completo debe tener al menos 6 letras.')
    }
}

validateEmail = function () {
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor))) {
        console.log('Debe ingresar un email correcto');
    }
}

window.onload = function () {
    //obtain the inputs
    inputName = document.getElementById('name');
    intputEmail = document.getElementById('email');
    valor = document.getElementById('email').value;
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
    intputEmail.addEventListener("blur", validateEmail);
}