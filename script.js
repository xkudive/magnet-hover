// Nav Animations

const nav_burger_btn = document.querySelector(".nav_burger_btn");
const nav_menu = document.querySelector(".nav_ul");
const nav_container = document.querySelector(".nav_container");
const nav_inside_container = document.querySelector(".nav__inside_container");

function navOpen() {
    nav_container.style.display = "flex";
        nav_menu.setAttribute("data-visible", "true");
        nav_inside_container.classList.add("nav__container_anim");
        setTimeout( () => {
            nav_menu.classList.add("nav__burger_anim");
            nav_burger_btn.classList.add("burger_active");
            nav_menu.style.display = "flex";
        }, 1600)
}

function navClose() {
    nav_menu.setAttribute("data-visible", "false");
        nav_menu.classList.remove("nav__burger_anim");
        setTimeout( () => {
            nav_inside_container.classList.remove("nav__container_anim");
            nav_burger_btn.classList.remove("burger_active");
            nav_inside_container.classList.add("nav__container_anim_2");
            nav_menu.classList.remove("nav__burger_anim_2");
        }, 1000)
        setTimeout( () => {
            nav_menu.style.display = "none";
            nav_container.style.display = "none";
            nav_inside_container.classList.remove("nav__container_anim_2");
        }, 2600)
        nav_menu.classList.add("nav__burger_anim_2");
}

nav_burger_btn.addEventListener("click", () => {
    let nav_data = nav_menu.getAttribute("data-visible");
    let nav_burger_btn_period = nav_burger_btn.getAttribute("disabled");

    if (nav_burger_btn_period == "false") {   
        nav_burger_btn.setAttribute("disabled", "true")

        if (nav_data === "false") {
            navOpen();
        }else if (nav_data === "true") {
        navClose();
        }
        
        setTimeout ( () => {
            nav_burger_btn.setAttribute("disabled", "false")
        }, 2600)
    }
    
});

nav_menu.querySelectorAll("a").forEach(navLi => navLi.addEventListener("click", navClose));


// Magnet Hover

const links = document.querySelectorAll('.hover-me');
const cursor = document.querySelector('.cursor');
const cursorF = document.querySelector('.cursorF');

window.addEventListener("mousedown", () => {
    cursor.style.scale = "1.5";
});
window.addEventListener("mouseup", () => {
    cursor.style.scale = "";
});

const hoverMe = function(e) {
    const li = this.querySelector('li');

    let hoverTransform = 20;

    const {
        offsetX: x,
        offsetY: y,
    } = e;
    const {
        offsetWidth: width,
        offsetHeight: height,
    } = li;

    moveX = x / width * (hoverTransform * 2) - hoverTransform;
    moveY = y / height * (hoverTransform * 2) - hoverTransform;

    li.style.transform = `translate(${moveX}px, ${moveY}px)`;
    cursor.style.scale = "1.5";
    
    if(e.type === "mouseleave") {
        cursor.style.scale = "";
        li.style.transform = ``;
    }
}

function cursorMove(e){
    const {
        clientX: x,
        clientY: y,
    } = e

    cursor.style.left = x - cursor.offsetWidth/2 + 'px';
    cursor.style.top = y - cursor.offsetHeight/2 + 'px';
    cursorF.style.transform = `translate(${x-cursorF.offsetWidth/2}px, ${y-cursorF.offsetHeight/2}px)`
}

links.forEach(link => link.addEventListener('mousemove', hoverMe));
links.forEach(link => link.addEventListener('mouseleave', hoverMe));

window.addEventListener("mousemove", cursorMove);

window.addEventListener("load", ()=> {
    const preloader = document.querySelector(".wrapper");
    document.querySelector("body").classList.remove("preload");
    preloader.classList.add("wrapper-closer");
    setTimeout(() => {
        preloader.style.display = "none";
    }, 1000)
});