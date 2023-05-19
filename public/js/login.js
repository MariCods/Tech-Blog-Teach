const signupFmEventHandler = async (event) => {
event.preventdefault();

const newuserName = document.querySelector('#name-signup').value.trim();
const newuserEmail = document.querySelector('#email-signup').value.trim();
const newuserPassword = document.querySelector('#password-signup').value.trim();

if(newuserName && newuserEmail && newuserPassword) {
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({newuserName, newuserEmail, newuserPassword}),
        headers: {'Content-Type': 'applications/json'}
    });
    if(response.ok){
        document.location.replace('/blog');
    }
        else {
            alert(response.err);
        }
    }
}

const loginFmEventHandler = async (event) => {
    const userName = document.querySelector('#email-login').value.trim();
    const userPassword = document.querySelector('#password-login').value.trim();
    
    if(userName && userPassword) {
        const response = await fetch('/api/users', {
           method: 'POST',
           body: JSON.stringify({userName, userPassword}),
           headers: {'Content-Type': 'applications/json'}
        });
        if(response.ok){
            document.location.replace('/blog');
        }
        else {
            alert('Sign in failure');
        }
    }
}

document 

.querySelector('.signup-form')
.addEventListener('submit', signupFmEventHandler);

document

.querySelector('.login-form')
.addEventListener('submit', loginFmEventHandler);