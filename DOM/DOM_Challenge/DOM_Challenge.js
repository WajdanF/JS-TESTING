const para = document.querySelectorAll('p');
para.forEach(p => {
    if (p.textContent.includes('error')){//textContent gives us hidden text as well
        p.classList.add('error')
    }
    else{
        p.classList.add('success')
    }
});

console.log((para));

const title = document.querySelector('.title');
title.classList.toggle('test');//adds the test class
title.classList.toggle('test');//removes the test class beacause it is ran again