//boolean and comparison
console.log(true, false);

//Functions and methods
let email = "Wajdan@gmail.com";

let result = email.includes("@"); //checks if the character is in the string and returns true or false
console.log(result);

let names = ["wajdan", "phil", "marut"];

result = names.includes("wajdan"); //checks if the element is in the list or not
console.log(result);

//comparison operators
let age = 25;
console.log(age == 12); //"==" -> if they are the same or not
console.log(age != 12); //"!=" -> if age is not equal to 12
console.log(age > 12); //">" -> greater than
console.log(age < 12); //"<" -> less than
console.log(age <= 12); //"<=" -> less than or equal to
console.log(age >= 12); //">=" -> greater than or equal to

let name = "wajdan";
console.log(name == "wajdan");//checks if the string is equal to or not 
console.log(name != "wajdan");//not equal to
console.log(name > "crystal"); //checks if the first letter is further down the alaphabet -> lowercase > uppercase


//Lose comparisons -> Different types can still be equal
console.log(age==25);
console.log(age == "25"); //still says its equal

//strict comparison -> Different types cannot be equal
console.log(age===25); //is age the value and type
console.log(age==="25");//not equal because not the same type
console.log(age !==25);//still checks the type
console.log(age!=="25");//checks the type as well


