function addErrors(input, elements) {
    input.classList.add('error-active');
    elements.containerErrors.style.display = 'flex';
    elements.containerErrors.children[1].innerHTML = elements.message || ' ';
}

function removeErrors(input, elements) {
    input.classList.remove('error-active');
    elements.containerErrors.style.display = 'none';
}