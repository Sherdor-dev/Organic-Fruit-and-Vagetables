"use strict";
const navBar = () => {
    const bar = document.querySelector("#menuBar");
    const nav = document.querySelector(".nav__ul");
    bar.addEventListener('click', () => {
        nav.classList.toggle("nav__active");

        if (bar.classList.contains('hides')) {
            bar.classList.remove('hides')
            bar.innerHTML=`<i class="fa-solid fa-bars fs-5"></i>`;
        }else{
            bar.classList.add('hides')
            bar.innerHTML=`<i class="fa-solid fa-xmark fs-2"></i>`;
        }
    });
} 
navBar();
// ------------->>>> Menu Bar


let btnTop = document.querySelector(".top");
let heroImg = document.querySelector(".hero__item--right");
btnTop.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
window.addEventListener("scroll", () => {
    if(window.scrollY > 200){
        btnTop.classList.add("blck");
        btnTop.classList.remove("nons");
    }else{
        btnTop.classList.add("nons");
        btnTop.classList.remove("blck");
    }

});
// ------------>>>> Top icon

let exitBtn = document.querySelector(".exit");
let modalWindow = document.querySelector(".modals");
let openModal = document.querySelector(".nav__register--btnmodal");

openModal.addEventListener("click", () =>{
    modalWindow.classList.toggle("nons");
    body.style.overflow = "hidden";
})

exitBtn.addEventListener("click", ()=>{
    modalWindow.classList.add("nons")
})


// Modal Window ---------------->>>>>>>>>

// openModal.addEventListener("click",  ()=>{
//     modalWindow.style.display="block";
//      body.style.overflow="hidden";
//      modalWindow.style.overflow="scroll";
// })


