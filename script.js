
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


function createFloatingHeart(x = Math.random() * window.innerWidth) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = ["💗", "💕", "💖", "💘", "🩷"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = x + "px";
    heart.style.fontSize = (16 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2600);
}

document.addEventListener("click", (e) => {
    createFloatingHeart(e.clientX);
});
