// Hamburger menu

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("#nav-list");

hamburger.addEventListener("click", () => {
    console.log("click");
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
});

document.querySelectorAll("#nav-list").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}));

// Scroll reveal

function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

function hide() {
    let hides = document.querySelectorAll(".hide");
}

window.addEventListener("scroll", reveal);