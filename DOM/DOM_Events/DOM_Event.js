const button = document.querySelector("button");

//Event listener
button.addEventListener("click", () => {
    console.log("This button has been clicked");
});

const items = document.querySelectorAll("li");

items.forEach((each) => {
    each.addEventListener("click", (e) => {
        //the "e" is an event object, which contains info on the event that happened
        //each.style.display='none'; -> Can use this to remove the list items
        console.log(e);
        console.log(e.target); //gives us the target that was clicked or use "each"
        each.style.textDecoration = "line-through";
        //each.remove(); //removes the target
    });
});

//deleting elements
const ul = document.querySelector("ul");
//ul.remove();//remove  s this from the webpage

button.addEventListener("click", () => {
    //ul.innerHTML += `<li>Something New</li>`;
    const li = document.createElement('li')//creates a reference for a li tag
    li.textContent='something new to do';
    ul.append(li); //adds to the bottom
    //ul.prepend(li);//adds to the top
});
