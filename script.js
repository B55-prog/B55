const light = document.querySelector(".cursor-light");

document.addEventListener("mousemove", (e) => {
    light.style.left = e.clientX + "px";
    light.style.top = e.clientY + "px";
});

/* Animation d'apparition */

const buttons = document.querySelectorAll(".link-btn");

buttons.forEach((button, index) => {

    button.style.opacity = "0";
    button.style.transform = "translateY(25px)";

    setTimeout(() => {
        button.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        button.style.opacity = "1";
        button.style.transform = "translateY(0)";
    }, 300 + index * 180);

});

/* Effet de tilt premium */

const card = document.querySelector(".glass-card");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 35;
    const y = (window.innerHeight / 2 - e.clientY) / 35;

    card.style.transform =
        `rotateY(${-x}deg) rotateX(${y}deg)`;
});

document.addEventListener("mouseleave", () => {
    card.style.transform =
        "rotateY(0deg) rotateX(0deg)";
});