//Strings
console.log("lol");
let lol = "LOL how are you doing?";
console.log(lol);

//string concatenation

let firstName = "Wajdan";
let lastName = "Faheem";

let fullName = firstName + " " + lastName;

console.log(firstName, lastName, fullName);

//getting letter

console.log(fullName[2]);

//length of string

console.log(fullName.length);

//Functions
let x = fullName.toUpperCase();
console.log(x, fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

let index = fullName.indexOf("a");
console.log(index);

//Common String methods

let email = "wajdanf02@gmail.com";
let results = email.lastIndexOf("a");
console.log(results);

results = email.slice(0, 3); //start index, end index
console.log(results);

result = email.substr(1, 3); //start index, how many letters you want after -> from position 1 returns 1,2,3
console.log(result);

result = email.replace("a", "b"); //Replace the first letter -> wanted to change, what to change to
console.log(result);
