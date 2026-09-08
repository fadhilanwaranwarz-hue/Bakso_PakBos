// ==========================================
// NOMOR WHATSAPP WARUNG
// ==========================================

// GANTI dengan nomor WhatsApp Bakso Pak Bos
const nomorWhatsApp = "6281234567890";


// ==========================================
// TOMBOL PESAN
// ==========================================

const tombolPesan = document.querySelectorAll(".menu-bottom button");

tombolPesan.forEach((button) => {

    button.addEventListener("click", function () {

        const card = this.closest(".menu-card");

        const namaMenu = card.querySelector("h3").textContent;
        const hargaMenu = card.querySelector("strong").textContent;

        const pesan =
            `Halo Pak Bos 👋%0A%0A` +
            `Saya mau pesan:%0A` +
            `🍜 ${namaMenu}%0A` +
            `💰 ${hargaMenu}%0A%0A` +
            `Mohon diproses ya. Terima kasih!`;

        const linkWhatsApp =
            `https://wa.me/${nomorWhatsApp}?text=${pesan}`;

        window.open(linkWhatsApp, "_blank");
    });

});


// ==========================================
// ANIMASI SAAT SCROLL
// ==========================================

const cards = document.querySelectorAll(".menu-card");
const sections = document.querySelectorAll(
    ".about-content, .location-box"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


// ==========================================
// SETUP ANIMASI
// ==========================================

cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s ease";

    observer.observe(card);

});


sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "0.7s ease";

    observer.observe(section);

});


// ==========================================
// NAVBAR SAAT SCROLL
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 5, 5, 0.95)";

    } else {

        navbar.style.background =
            "rgba(10, 10, 10, 0.85)";

    }

});
