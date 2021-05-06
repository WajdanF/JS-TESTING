//changing text

const para = document.querySelector('p'); //first p tag on the page
console.log(para.innerText);

para.innerText= "New txt"; //chaging text here
para.innerText+=" adding text";//adding to the text

const paras = document.querySelectorAll('p');

paras.forEach(para => {//adding new text to every p tag
   console.log(para.innerText);
   para.innerText+=' New text to every p tag' 
});

//Changing HTML
const content = document.querySelector('.content');
console.log(content.innerHTML); //html inside the content div

content.innerHTML=`<H2>NEW HEADER TAG</H2>`;//completely overwrites the content int he div tag
content.innerHTML +=`<p>Adding This</p>`;//adding to the html to the previous

const people = ['wajdan','phil','zhenia','mashrur'];
people.forEach(person => {
    content.innerHTML+=`<p>${person}</p>`
});

