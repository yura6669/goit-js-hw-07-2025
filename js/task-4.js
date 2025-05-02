const form = document.querySelector('.login-form');
const email = document.querySelector('.login-form input[type="email"]');
const password = document.querySelector('.login-form input[type="password"]');

form.addEventListener('submit', (event) => { 
    event.preventDefault();
    
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    
    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
        return;
    }
    
    const formData = {
        email: emailValue,
        password: passwordValue,
    };
    
    console.log(formData);
    form.reset();
});
