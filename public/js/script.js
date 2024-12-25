//membuat navbar fixed by sandhika
window.onscroll = function() {
   const header = document.querySelector('header');
   const fixedNav = header.offsetTop;

   if(window.scrollY > fixedNav) {
      header.classList.add('navbar-fixed');
   } else {
      header.classList.remove('navbar-fixed');
   }
   
}


  


// membuat variabel
let toggleThemeButton = document.getElementById("toggle-theme-button");
let lightModeIcon = document.getElementById("light-mode-icon"); // light mode = sun
let darkModeIcon = document.getElementById("dark-mode-icon"); // dark mode = moon
let htmlTag = document.querySelector("html");
let hamburgerMenuButton = document.getElementById('hamburger-menu');
let navbarMenu = document.getElementById('nav-menu');

//menjalankan listener ketika tombol toggle theme ditekan
// toggleThemeButton.addEventListener("click", () => {
//    htmlTag.classList.toggle("dark");
//    lightModeIcon.classList.toggle("hidden");
//    darkModeIcon.classList.toggle("hidden");
// });

//menjalankan listener ketika tombol hamburger ditekan
hamburgerMenuButton.addEventListener('click', () => {
   hamburgerMenuButton.classList.toggle('hamburger-active');
   navbarMenu.classList.toggle('invisible');
   navbarMenu.classList.toggle('translate-x-0');
   navbarMenu.classList.toggle('translate-x-full');


});

// fitur ada garis loading di bawah navbar
// let progress = 0;
// const loadingBar = document.getElementById("loading-bar");

// let coba = document.getElementById('coba');
// coba.addEventListener('mouseover', () => {
// progress = 0;
// const interval = setInterval(() => {
//    if (progress >= 90) {
//       clearInterval(interval);
//    } else {
//       progress += 2;

//       loadingBar.style.width = `${progress}%`;
//    }
//    }, 1);
// })

// coba.addEventListener('mouseout', () => {
// loadingBar.style.width = `0%`
// })



