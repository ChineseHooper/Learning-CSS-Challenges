const menuIcon = document.getElementsByClassName('menu-icon')[0];
const children = menuIcon.children;

menuIcon.addEventListener('click',() => {
    //js has toggle function for add / remove class;
    menuIcon.classList.toggle("active");
    addClass(children);
})


function addClass(list){
    for(let i = 0; i < list.length; i++){
        list[i].classList.remove("no-animation");
    }
}