let x = ["wajdan", "phil", "marut"]; // array/list with 3 elements
console.log(x);
console.log(x[1]); //getting an element from the list

x[1] = "zhenia"; //changes element of x[1] to zhenia
console.log(x);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ["crystal", 30, "john"]; //dont have to be 1 type in the list

//length property
console.log(x.length);

//aaray functions
let results = x.join(","); //creates a string with the list x and joins them toegther using ","
console.log(results);

results = x.indexOf("wajdan"); //finds index of "wajdan" in x
console.log(results);

results = x.concat(ages); //joining 2 arrays together -> joins the list ages at the end of list x
console.log(results);

results = x.push("mashyc"); //pushes new value 'mashyc' into the list x and returns the length of the new list
//push alters the original value, so x will be changed
console.log(results, x);

results = x.pop(); //removes the last elment and returns that element
console.log(results);

//foreach Loop

x.forEach((i, X) => {
    console.log(i, X);
});

//Filtering through a list
const score = [10, 20, 30, 15, 19, 12, 13, 43];
score.filter(() => {
    return true;//if returned true, then keep that item in the list, else remove it
});
