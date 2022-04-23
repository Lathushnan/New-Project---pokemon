const navLinks = document.querySelectorAll(".header--menu__item>a");
const nav_toggler = document.querySelector(".nav-toggler");
nav_toggler.addEventListener("click", changeMenuState);
function changeMenuState() {
   const menu_items = document.querySelector("ul.header--menu");
   let navIcons = document.querySelectorAll(".navIcons");

   // show Programatically
   menu_items.classList.toggle("show");

   navIcons.forEach((icon) => {
      icon.classList.toggle("hidden");
   });
}

function navBarFixed() {
   const header = document.querySelector(".header");
   const offset_top = header.clientHeight + 50;
   window.addEventListener("scroll", () => {
      let scroll = window.pageYOffset || document.documentElement.scrollTop;
      if (scroll >= offset_top) {
         header.classList.add("navbar-fixed");
      } else {
         header.classList.remove("navbar-fixed");
      }
   });
}
function setMenuActive() {
   const sections = document.querySelectorAll("section");
   const navLinks = document.querySelectorAll(".header--menu__item>a");

   window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
         const sectionTop = section.offsetTop;
         const sectionHeight = section.clientHeight;

         if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
          
         }
      });

      navLinks.forEach((li) => {
         li.classList.remove("active");

         if (current == li.getAttribute("href").split("#")[1]) {
            li.classList.add(`active`);
         }
      });
   });
}
function onMenuClick() {
   for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", changeMenuState);
   }
}

onMenuClick();

setMenuActive();
navBarFixed();
