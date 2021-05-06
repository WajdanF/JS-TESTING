let age = 11;
console.log(age);

//type conversion
let score ="100"
console.log(score+1);//this is concat so will return 1001 not 101

score = Number(score)//converts it into a number
console.log(score+1);
console.log(typeof score);//checks type

let result = Number("hello");
console.log(result);//returns NaN

result = String(50); //converts it to a string
console.log(result);
console.log(typeof result);

let html =``;
people=['wajdan','phil','zhenia','mash'];
people.forEach(element => {
    //create an html template for each one
    html+= `<li style ="color:red"> ${element} </li>`
});