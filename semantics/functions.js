//funcion dec

function greet(){
    console.log("hello");
}
greet(); //calling the func

//function expression
const speak = function(){
    console.log("expression");
};

speak();

//parameters

function speaks(name){ //this name is a local variable
    console.log(`Have a good day ${name}`);
}

speaks("wajdan");

//arrow functions

const calcArea = (radius) =>{
console.log(radius**2);
};

calcArea(3);

//for one line with a return statement:
// cont CalcArea = radius => radius**2

const greets = () => 'hello world';

const bill = (prodcuts,tax) =>{
    let total =0 
    for (let i = 0; i < prodcuts.length; i++) {
        total+=prodcuts[i]*2*tax;
        
    }
    return total;
}

//METHODS
