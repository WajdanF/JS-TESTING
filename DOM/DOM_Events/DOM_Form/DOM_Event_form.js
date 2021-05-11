const form = document.querySelector(".signup-form");
const username = document.querySelector("#username");
const userpattern = /^[a-zA-z]{6,12}$/;
const feedback = document.querySelector(".feedback");

form.addEventListener("submit", (e) => {
    e.preventDefault(); //prevents default action -> refreshing page for submit
    //console.log(username.value); //one way of getting the value of the input field
    const tagName = form.username.value; //getting reference to username id/nameg

    if (userpattern.test(tagName)) {
        feedback.textContent = "This username is valid";
    } else {
        feedback.textContent = "Not a valid username";
    }
});

//testing regex
const name = "wajdan";
const pattern = /^[a-zA-Z0-9]{6,}$/; //the ^ $ = it must be in the beginning and the end, so symbols wont work

let results = pattern.test(name);
console.log(results);

if (results) {
    console.log("the regex test passed");
} else {
    console.log("the regex token has failed");
}

//ANOTHER WAY TO TEXT THE REGEX
results = name.search(pattern); //0 = match and -1 = not a match
console.log(results);

//LIVE FEEDBACK
form.username.addEventListener("keyup", (e) => {
    console.log(e.target.value); //getting value of the form
    if (userpattern.test(e.target.value)) {
        username.style.border = "3px solid limegreen";
        username.style.outline = "none";
        username.style.borderRadius = "40px";
    } else {
        username.style.border = "3px solid red";
        username.style.outline = "none";
        username.style.borderRadius = "40px";
    }
});
