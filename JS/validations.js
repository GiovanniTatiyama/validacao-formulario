function validateEmptyFields(input, elements) {
    if(!input.value || input.value.length < 3) {
        addErrors(input, elements);
    } else {
        removeErrors(input, elements);
    }
}
function isEmailValid(input, elements) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!regex.test(input.value)) {
        addErrors(input, elements);
    } else {
        removeErrors(input, elements);
    }
}