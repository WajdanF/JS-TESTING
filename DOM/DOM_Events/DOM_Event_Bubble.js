const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "something new to do";
    ul.appendChild(li);
});

const items = document.querySelectorAll('li')

// items.forEach(item => {
//     item.addEventListener('click',e=>{
//         console.log('event in li');
//         e.stopPropagation();//stops the event from bubbling to the parent
//         item.remove(); 
//     })
// })

ul.addEventListener('click',(e)=>{//event bubling
    //console.log("event in ul");
    if (e.target.tagName==="LI"){
        e.target.remove();  
    }
})

//MORE EVENTS
const copy = document.querySelector('.copy-me')
copy.addEventListener('copy',()=>{
    console.log("naughty naughty dont copy");
})

const box=document.querySelector('.box')
box.addEventListener('mousemove',e=>{
    console.log(e.offsetX,e.offsetY);
})

document.addEventListener('wheel',e=>{
    console.log(e.pageX,e.pageY);
})