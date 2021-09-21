const hamburger = document.querySelector(".navbar__hamburger");
const navbarLinks = document.querySelector(".navbar__links");
const navContainer = document.querySelector('.nav-container')

// Responsive menu
const mobileMenu = () => {
    hamburger.classList.toggle("active");
    navbarLinks.classList.toggle("active");
}

hamburger.addEventListener("click", mobileMenu);

// Navbar background 

window.onscroll = () => {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        navContainer.classList.add('on-scroll');
  } else if (document.body.scrollTop < 70 || document.documentElement.scrollTop < 70) {
        navContainer.classList.remove('on-scroll');
  }
}


