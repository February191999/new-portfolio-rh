// const hamburger = document.querySelector('.hamburger');
// const navList = document.querySelector('.nav-links');
// const links = document.querySelectorAll('.nav-links li');

// hamburger.addEventListener("click", () => {
//     navList.classList.toggle("open");
// })

const hamburger = document.querySelector('.hamburger');

document.querySelector('.hamburger').addEventListener("click", function() {
    document.getElementById("hamburger-line-1").classList.toggle("active")
    document.getElementById("hamburger-line-2").classList.toggle("active")
    document.getElementById("hamburger-line-3").classList.toggle("active")
})
