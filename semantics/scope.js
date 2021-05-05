let age = 30;

if (true) {
    console.log("Inside", age);
    age = 40;
}
console.log("outside:", age);

//We can redefine inside the code block
let ages = 30;
if (true) {
    let ages = 40; //can only access this age inside this block
    let name = "wajdan"; //we do not see this in the outside function because it is local to this block only
    console.log("Inside", ages, name); //this will print 40 instead of 30 because its not a global scope but instead only this block of code
    //local scope
    if (true) {
        let ages = 50;//the parent cannot access this 
        console.log("second block:", ages); //takes most recent age defintion because its nested
    }
    console.log(ages);
}
console.log("outside:", ages, name); //this will print 30
