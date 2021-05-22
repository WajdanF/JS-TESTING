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
const filteredScore= score.filter((i) => {// does not change the actual array

    return i>20;//if returned true, then keep that item in the list, else remove it
});
console.log(filteredScore); 

const users = [
    { name: "shaun", premium: true },
    { name: "yoshi", premium: false },
    { name: "mario", premium: false },
    { name: "chun-li", premium: true },
];
  
const premiumUsers = users.filter(user=>{
    return user.premium
})
console.log(premiumUsers);

//MAPPING AN ARRAY
const prices = [20,10,30,40,55,15,60]

const salePrices = prices.map((price)=>{ //creates a new array based on the previous array
    return price/2;
})

console.log(salePrices);

const products = [
    { name: "gold star", price: 20 },
    { name: "mushroom", price: 40 },
    { name: "green shells", price: 30 },
    { name: "banana skin", price: 10 },
    { name: "red shells", price: 50 },
];

const sales = products.map(item=>{
    if (item.price >30){
        return {name:item.name,price:item.price/2}
    }
    else{
        return item
    }
})
console.log(sales);

//REDUCING AN ARRAY -> returns a number for the expression passed
const scores = [10,20,304,05,303,432,432,432,4]
const reduced = score.reduce((acc,curr)=>{//acc = running total, curr = current item
    if(curr <50){
        acc++;
    }
    return acc;

},0);//intial value of the acc is second argument

//SORTING
scores.sort((a,b)=>a-b); 

