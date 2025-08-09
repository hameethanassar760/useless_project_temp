const buttons = document.querySelectorAll(".button-container button");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let mirroredX = 0;
let mirroredY = 0;

document.addEventListener("mousemove", (e) => {
    mirroredX = screenWidth - e.clientX;
    mirroredY = screenHeight - e.clientY;

    buttons.forEach(btn => {
        const rect = btn.getBoundingClientRect();
        if (
            mirroredX >= rect.left &&
            mirroredX <= rect.right &&
            mirroredY >= rect.top &&
            mirroredY <= rect.bottom
        ) {
            btn.style.background = "rgba(255, 255, 255, 0.35)";
            btn.style.transform = "scale(1.1)";
            btn.style.boxShadow = "0px 12px 30px rgba(255, 255, 255, 0.4)";
        } else {
            btn.style.background = "rgba(255, 255, 255, 0.15)";
            btn.style.transform = "scale(1)";
            btn.style.boxShadow = "0px 5px 20px rgba(255, 255, 255, 0.1)";
        }
    });
});

document.addEventListener("click", () => {
    buttons.forEach(btn => {
        const rect = btn.getBoundingClientRect();
        if (
            mirroredX >= rect.left &&
            mirroredX <= rect.right &&
            mirroredY >= rect.top &&
            mirroredY <= rect.bottom
        ) {
            window.location.href = btn.getAttribute("data-link");
        }
    });
});
