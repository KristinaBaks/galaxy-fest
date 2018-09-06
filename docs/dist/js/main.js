
const form = document.querySelector('#form');
const inputName = document.querySelector('.name-input');
const inputEmail = document.querySelector('.email-input');
const message = document.querySelector('.contact-form__textarea');

send();

function send() {
    form.addEventListener('submit', validate);
}

function validate(e) {
    if(inputName.value === ''){
        e.preventDefault();
        alert('Whoops! You forgot to tell us your name! You know, that\'s just bad manners.');
        return false;
    } 
    if(inputEmail.value === ''){
        e.preventDefault();
        alert('Whoops! You forgot to tell us your email! How the hell are we gonna get back to you?');
        return false;
    } 
    if(message.value === ''){
        e.preventDefault();
        alert('Whoops! You forgot to tell us... whatever it was that you wanted to say.');
        return false;
    } else {
        return true;
    }
}