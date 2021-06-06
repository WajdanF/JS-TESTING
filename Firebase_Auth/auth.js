//sign up

const signup = document.querySelector('#signup-form');

signup.addEventListener('submit',e=>{
    e.preventDefault();
    console.log('lol');
    console.log(signup['signup-email'].value);
})