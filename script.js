const slides = document.querySelector(".slides");
const imgs = document.querySelectorAll(".slides img");
const dots = document.querySelector(".dots");

let index = 0;

imgs.forEach((_, i) => {
    const d = document.createElement("div");
    d.className = "dot";
    if (i === 0) d.classList.add("active");
    d.onclick = () => { index = i; update(); };
    dots.appendChild(d);
});
function update() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll(".dot").forEach(d => d.classList.remove("active"));
    document.querySelectorAll(".dot")[index].classList.add("active");
}
document.querySelector(".next").onclick = () => {
    index = (index + 1) % imgs.length;
    update();
};
document.querySelector(".prev").onclick = () => {
    index = (index - 1 + imgs.length) % imgs.length;
    update();
};
setInterval(() => {
    index = (index + 1) % imgs.length;
    update();
}, 5000);