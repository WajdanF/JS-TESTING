let rad = 10;
const pi = 3.14;

//console.log(rad,pi);

//math operators: +,-,*,/,**,% and follows BEDMAS
console.log(10/5);

let result = rad%3 //modulus in python
console.log(result);

result = pi*rad**2
console.log(result);

let likes = 10;
likes=likes+1;
console.log(likes);

//or it follows the same rules as python

likes+=3; //or likes++; for only adding 1
console.log(likes);

//NaN - Not a Number
//Ex. console.log(5*'hello')

let results = "the blog has"+ " "+ likes +" " + "likes";
console.log(results);

//Concatenation way like above
const title = 'lol';
const author='wajdan'
const like = 40;
 result = "the blog called "+title+' by '+author+ ' has '+like+' likes'
 console.log(result)

 //templates string way <- prefer this way
 result = `The blog called ${title} by ${author} has ${like} likes`
 console.log(result);

 //creating html templates
 let html = `
<h2>${title} </h2>
<p>The Author is ${author} </p>
 `;
 console.log(html);

