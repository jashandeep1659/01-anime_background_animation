"use strict";

const container = document.querySelector(".container");
for (let i = 0; i <= 100; i++) {
    const blocks = document.createElement("div");
    blocks.classList.add("block");
    container.appendChild(blocks);
}

const animateBlocs = () => {
    anime({
        targets: "block",
        translateX: 400,
    });
};
animateBlocs();
