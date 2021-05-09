const article = document.querySelector('article');
console.log(article.children);

//Array.from() turns stuff into lists
console.log(Array.from(article.children)); //does not alter the HTMLcollection but instead returns a new value

Array.from(article.children).forEach(child=>{
    child.classList.add('article-element')
})

const title = document.querySelector('h2')
console.log(title.parentElement); //finding the parent of the child h2
console.log(title.parentElement.parentElement);//finding the parent of the parent   

console.log(title.nextElementSibling);//gets the sibling next to it
console.log(title.previousElementSibling);//gets the previous sibling

//chaining
title.nextElementSibling.parentElement.children;