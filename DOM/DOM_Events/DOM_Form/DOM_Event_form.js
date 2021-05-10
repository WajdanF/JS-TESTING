const form = document.querySelector(".signup-form");
const username = document.querySelector("#username");

form.addEventListener('submit',e=>{
    e.preventDefault();//prevents default action -> refreshing page for submit
    //console.log(username.value); //one way of getting the value of the input field
    console.log(form.username.value)//getting reference to username id/nameg
})

