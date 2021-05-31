//rest parameter
const double = (...nums )=>{//takes input and puts them in an array because we dont know how many are going to be used
console.log(nums);
return nums.map(num=>{
    return num*2});
};

const result = double(1,2,3,4,5,6,7);

console.log(result);

//spread syntax (arrays)
const ppl = ['wajdan','phil','zhenia','mashrur'];
console.log(...ppl);//spreads it out

const mem = ['1','2','3',...ppl];//adds the array ppl to the list
console.log(mem);

//spread with objects
const person ={
    name:'wajdan',
    age:18,
    job:'idiot'
}

const person1 = {...person,location:'sauga'}//created an entire clone of an object without chanigng the other one
//also works with list

//SETS - Does not allow duplicates works on int and string 
const array=['1','2','2','3','4'];
console.log(array);

const nameSet = new Set(array); //no duplicates
console.log(nameSet);

const unique = [...nameSet]//using spread to make a list with no duplicates

const lisst = [...new Set([1,1,2,3,4,1])]//creates a list with no duplicates
console.log(lisst);

//sets use ".add(value)" to add value to a set
//".delete(value)" removes it from the set
//".size" tells the size of the set
//".has(value)" checks if value is in the list and returns true/false
//".clear()" to clear the set


//SYMBOLS - no 2 symbols are the same
const symbol1 = Symbol();
const symbol2 = Symbol();
console.log(symbol1,symbol2);
console.log(symbol1==symbol2);//returns false because no 2 are the same

const symbol3 = Symbol('wajdan');
const symbol4 = Symbol('wajdan');
console.log(symbol3===symbol4);//still returns false
