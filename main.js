let buttonOpenMenu = document.querySelector(".button-burger-menu");
let burgerMenu = document.querySelector(".container-burger-menu");
let buttoncloseMenu = document.querySelector(".close-burger-menu");

buttonOpenMenu.addEventListener("click", ()=>{
    burgerMenu.classList.add("show-menu");
    buttonOpenMenu.classList.add("display-none");
    buttoncloseMenu.classList.add("display-block");
});

buttoncloseMenu.addEventListener("click", ()=>{
    burgerMenu.classList.remove("show-menu");
    buttonOpenMenu.classList.add("display-block");
});