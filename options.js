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

  const cursor = document.querySelector('.custom-cursor');

  // Store the center of the screen as the "origin"
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  document.addEventListener('mousemove', (e) => {
    // Calculate offset from center
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    // Flip the movement by multiplying by -1
    const flippedX = centerX - offsetX;
    const flippedY = centerY - offsetY;

    cursor.style.left = flippedX + 'px';
    cursor.style.top = flippedY + 'px';
  });
