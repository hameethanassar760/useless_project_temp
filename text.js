document.getElementById("inputText").addEventListener("input", function() {
    document.getElementById("mirroredText").textContent = this.value;
});
document.getElementById("inputText").addEventListener("input", function() {
    const original = this.value;
    const flipped = original.split("").reverse().join("");
    document.getElementById("mirroredText").textContent = flipped;
});
