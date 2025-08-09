// This will later be used for the mirror break animation
// Canvas glass shatter animation
const canvas = document.getElementById("glassCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 60;

let shards = [];

// Create shards
function createShards() {
    shards = [];
    for (let i = 0; i < 40; i++) {
        shards.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            w: 5 + Math.random() * 10,
            h: 5 + Math.random() * 10,
            speedX: (Math.random() - 0.5) * 4,
            speedY: (Math.random() - 0.5) * 4,
            color: "rgba(255,255,255,0.6)"
        });
    }
}

// Animate shards
function animateShards() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let shard of shards) {
        ctx.fillStyle = shard.color;
        ctx.fillRect(shard.x, shard.y, shard.w, shard.h);
        shard.x += shard.speedX;
        shard.y += shard.speedY;
        shard.speedY += 0.05; // gravity
    }
    requestAnimationFrame(animateShards);
}

// Trigger after delay
setTimeout(() => {
    createShards();
    animateShards();
}, 2000);

console.log("Landing page with shatter effect loaded.");
