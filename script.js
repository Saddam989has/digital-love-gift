
const giftArea = document.getElementById("giftArea");
const giftButton = document.getElementById("giftButton");
const letterButton = document.getElementById("letterButton");
const overlay = document.getElementById("overlay");

giftButton.addEventListener("click", () => {
    giftArea.classList.add("opened");
});

letterButton.addEventListener("click", () => {
    if (giftArea.classList.contains("opened")) {
        overlay.classList.add("show");
    }
});

document.getElementById("close").addEventListener("click", () => {
    overlay.classList.remove("show");
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.remove("show");
    }
});

document.getElementById("yes").addEventListener("click", () => {
    document.getElementById("response").textContent =
        "You just made my day! Thank you for giving this a chance. ♡";
});

document.getElementById("later").addEventListener("click", () => {
    document.getElementById("response").textContent =
        "It's okay. Take your time. I'll respect your feelings. ♡";
});
