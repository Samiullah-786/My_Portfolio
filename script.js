// 1. Dynamic Typing Effect for Roles
const roles = [
    "Web Developer",
    "Web Designer",
    "Database Administrator"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const dynamicTextSpan = document.getElementById("dynamic-text");

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        dynamicTextSpan.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        dynamicTextSpan.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}

// 2. Navigation Active Link on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// 3. Theme Toggle Functionality (Dark / Light Mode)
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = themeToggleBtn.querySelector("i");

// Check for previously saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    document.body.setAttribute("data-theme", "light");
    themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggleBtn.addEventListener("click", () => {
    const isLight = document.body.getAttribute("data-theme") === "light";

    if (isLight) {
        document.body.removeAttribute("data-theme");
        themeIcon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.setAttribute("data-theme", "light");
        themeIcon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "light");
    }
});

// Animations load up
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

// 4. Mobile Hamburger Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuIcon.classList.replace("fa-bars", "fa-times");
    } else {
        menuIcon.classList.replace("fa-times", "fa-bars");
    }
});

// Jab koi user link par click kare to menu automatically band ho jaye
const mobileLinks = document.querySelectorAll("nav a");
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuIcon.classList.replace("fa-times", "fa-bars");
    });
});
