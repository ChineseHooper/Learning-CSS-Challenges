const menuIcon = document.getElementsByClassName('menu-icon')[0];
const children = menuIcon.children;

menuIcon.addEventListener('click',() => {
    //js has toggle function for add / remove class;
    menuIcon.classList.toggle("active");
    addClass(children);
});

function addClass(list){
    for(let i = 0; i < list.length; i++){
        list[i].classList.remove("no-animation");
    }
}


//Day5
const header = document.getElementsByClassName('main-window-header');
const notification = document.getElementsByClassName('main-window')[0];
const slider = document.getElementsByClassName('slider')[0];
const icon = header[0].children[0];

icon.addEventListener('click',() => {
    console.log(slider.classList)
    slider.classList.toggle("move-left");
    notification.classList.toggle("show-menu");
})