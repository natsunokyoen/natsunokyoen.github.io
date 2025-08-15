
var scrolled = false;
const scroll = window.scrollY;
if (scroll > 40) {
    scrolled = true;
    var downArrow = document.getElementById("down-arrow");
    downArrow.style.opacity = 0;
}

document.addEventListener("scroll", () => {
    var scroll = window.scrollY;
    var downArrow = document.getElementById("down-arrow");
    if (scroll >= 80) scroll = 80;
    downArrow.style.opacity = 1 - scroll / 80;
});

