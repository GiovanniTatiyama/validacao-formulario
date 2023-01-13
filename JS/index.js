const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const msgError = 'Enter a valid value for';

function initApp() {
    addEventInElements(firstName, `${msgError} First Name`);
    addEventInElements(lastName, `${msgError} Last Name`);
    addEventInElements(password, `${msgError} Password`);
    addEventInElements(email, 'Looks like this is not an valid email');
}


function addEventInElements(element, message) {
    element.addEventListener('blur', function() {
        if(element.type === 'text' || element.type === 'password') {
            validateEmptyFields(element, createObject(element, message));
        } else {
            isEmailValid(element, createObject(element, message));
        }
    })
}


function createObject(input, message) {
    return {
        containerErrors:input.parentNode.children[1],
        message: message
    }
}


initApp();