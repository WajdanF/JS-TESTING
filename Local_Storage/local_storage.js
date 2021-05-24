//store data in local storage
localStorage.setItem('name','wajdan')//first one is the name of the key and second argument is the value of the key
localStorage.setItem('age',50);

//get data from local storage
let name = localStorage.getItem('name');//arugment is key we want
let age = localStorage.getItem('age');

console.log(name,age);

//updating data
localStorage.setItem('name','faheem');//to update just override the previous one
name = localStorage.getItem('name');
console.log(name);
//OR
localStorage.age = 10;//different method of overriding
age= localStorage.getItem('age')
console.log(age);

//removing an item
localStorage.removeItem('name');

localStorage.clear()//clears everything

//adding complex stuff
const todos = [
    { text: "Play mariokart", author: "Wajdan" },
    { text: "Buy bread", author: "Wajdan1" },
    { text: "Play lol", author: "Wajdan2" },
];

console.log(JSON.stringify(todos));

localStorage.setItem('todos',JSON.stringify(todos)) //appending to local sotrage

let stored = localStorage.getItem('todos');
stored = JSON.parse(stored);

console.log(stored);
