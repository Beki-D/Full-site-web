let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.add('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}
 
document.querySelector('#close-contact-info').onclick = () =>{
    contactInfo.classList.remove('active');
}

//hides the expanded menu, search form, contact info, login form... when scrolled
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
}

//Initialize Swiper for home screen slider
var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

//Initialize Swiper for review slider
var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        750: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        }
    },
});

//Initialize Swiper for blog slider
var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        750: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        }
    },
});

//Initialize Swiper for logo slider
var swiper = new Swiper(".logo-slider", {
    loop: true,
    grabCursor: true,
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        650: {
            slidesPerView: 3,
        },
        750: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 5,
        }
    },
});

//Initialize AOS animations
AOS.init({
    duration: 1200,
  })
  