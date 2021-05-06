//query selector
let para = document.querySelector('p'); //grabs the very first p tag in the html
console.log(para);

para = document.querySelector('#page-title');//gets it by id
console.log(para);  

para = document.querySelector('.error');
console.log(para);

para = document.querySelector('div.error')//div with error class
console.log(para);

//queryselectorAll
para = document.querySelectorAll('p') //everything that is a p tag
console.log(para);
console.log(para[0],para[1]); //can get the elements in the para

para.forEach(i=>{
    console.log(i);
});

para = document.querySelectorAll('.error') //every error class
console.log(para);

//getting an element by ID
const title = document.getElementById('page-title');//grabs id page-title
console.log(title);

//getting element by class name
const error = document.getElementsByClassName('error');//grabs all of the errror class
console.log(error);
console.log(error[0],error[1]); //cannot use forEach on this because its an HTMLcollection and not a nodelist

//getting element by their tag
const tag = document.getElementsByTagName('p');//grabs all of the p tags
