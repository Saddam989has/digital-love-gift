
// ===================================
// ELEMENT WEBSITE
// ===================================

const giftArea = document.getElementById("giftArea");
const giftButton = document.getElementById("giftButton");
const letterButton = document.getElementById("letterButton");
const overlay = document.getElementById("overlay");

const closeButton = document.getElementById("close");
const yesButton = document.getElementById("yes");
const laterButton = document.getElementById("later");
const response = document.getElementById("response");

// ===================================
// PENGATURAN WHATSAPP
// ===================================

const nomorWhatsApp = "6285856577194";

// ===================================
// PENGATURAN MUSIK
// ===================================

const music = new Audio("beautiful.mp3");

music.loop = true;
music.volume = 0.5;

// ===================================
// ANIMASI LOVE
// ===================================

function createFloatingHeart(x) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";

    heart.textContent = [
        "💗", "💕", "💖", "💘", "🩷"
    ][Math.floor(Math.random() * 5)];

    heart.style.left = x + "px";

    heart.style.fontSize =
        (16 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2600);
}

function loveEffect(event) {
    const x = event.clientX || window.innerWidth / 2;

    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFloatingHeart(
                x + (Math.random() * 100 - 50)
            );
        }, i * 100);
    }
}

// ===================================
// BUKA HADIAH + PUTAR MUSIK
// ===================================

giftButton.addEventListener("click", (e) => {

    giftArea.classList.add("opened");

    loveEffect(e);

    if (music.paused) {
        music.play().catch(() => {
            console.log("Musik belum bisa diputar.");
        });
    }

});

// ===================================
// BUKA SURAT
// ===================================

letterButton.addEventListener("click", (e) => {

    if (giftArea.classList.contains("opened")) {

        overlay.classList.add("show");

        loveEffect(e);

    }

});

// ===================================
// TUTUP SURAT
// ===================================

closeButton.addEventListener("click", () => {

    overlay.classList.remove("show");

});

overlay.addEventListener("click", (e) => {

    if (e.target === overlay) {

        overlay.classList.remove("show");

    }

});

// ===================================
// TOMBOL YES + WHATSAPP
// ===================================

yesButton.addEventListener("click", (e) => {

    loveEffect(e);

    response.textContent =
        "You just made my day! Thank you for giving this a chance. ♡";

    if (nomorWhatsApp === "628XXXXXXXXXX") {

        alert("Masukkan nomor WhatsApp tujuan terlebih dahulu!");

        return;

    }

    const pesan =
        "Hai! Aku sudah membaca suratmu. Terima kasih sudah menyampaikan semuanya. ♡";

    const linkWhatsApp =
        "https://wa.me/" +
        nomorWhatsApp +
        "?text=" +
        encodeURIComponent(pesan);

    setTimeout(() => {

        window.location.href = linkWhatsApp;

    }, 500);

});

// ===================================
// TOMBOL LATER
// ===================================

laterButton.addEventListener("click", (e) => {

    loveEffect(e);

    response.textContent =
        "It's okay. Take your time. I'll respect your feelings. ♡";

});
