const menu = document.querySelector(".menutogle");
const navL = document.querySelector(".navlinks");
const nav = document.querySelector("nav");

menu.addEventListener('click', () =>{

    navL.classList.toggle('active');

    const icon=menu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');

})

document.addEventListener('click',(e) =>{
    if(!nav.contains(e.target)&&navL.classList.contains('active')){
        navL.classList.remove('active');
        const icon=menu.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    }
})