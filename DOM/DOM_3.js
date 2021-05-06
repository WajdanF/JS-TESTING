const link = document.querySelector('a');
console.log(link.getAttribute('href'));//getting attribute

link.setAttribute('href', 'https://gmail.com');//changing attribute of href from google to gmail
link.innerText="gmail NOW" //changing text 

const msg = document.querySelector('p.error');
console.log(msg.getAttribute('class'));//getting the class
msg.setAttribute('class','success');//chagning class from error to success
console.log(msg.getAttribute('class'));

const p=document.querySelector('p');
p.setAttribute('class','success')
p.setAttribute('style','color: green')//This sets the entire style to this and overrides everything previous on it
console.log(p.getAttribute('class'),p.getAttribute('style'));

//not overriding previous styles
console.log(p.style);
console.log(p.style.color);//grabbing color style 

p.style.margin='50px';//adding to previous style instead of overriding
p.style.color='crimson';