const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper')
button.addEventListener('click', e =>{
    popup.style.display="block";
})

const popup_close = document.querySelector('.popup-close');
popup_close.addEventListener("click", (e) => {
    popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
    popup.style.display = "none";
});

