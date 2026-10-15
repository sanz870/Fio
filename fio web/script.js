// ========================================
// GALERI FOTO - POP-UP
// ========================================

const photos = document.querySelectorAll("#galeri img");
const popup = document.getElementById("photoPopup");
const popupImage = document.getElementById("popupImage");
const closeButton = document.getElementById("closePopup");

// Membuka foto saat diklik
photos.forEach((photo) => {
    photo.addEventListener("click", () => {
        popupImage.src = photo.src;
        popupImage.alt = photo.alt;

        popup.classList.add("active");
        popup.setAttribute("aria-hidden", "false");
    });
});

// Menutup pop-up foto
function closePhotoPopup() {
    popup.classList.remove("active");
    popup.setAttribute("aria-hidden", "true");
    popupImage.src = "";
}

closeButton.addEventListener("click", closePhotoPopup);

// Menutup jika area gelap diklik
popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        closePhotoPopup();
    }
});

// Menutup dengan tombol Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closePhotoPopup();
    }
});


// ========================================
// PEMUTAR MUSIK
// ========================================

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

// Memeriksa apakah file musik gagal dimuat
music.addEventListener("error", () => {
    console.error(
        "File musik gagal dimuat. Periksa nama file dan lokasinya.",
        music.error
    );
});

// Memutar atau menjeda musik saat tombol diklik
musicButton.addEventListener("click", async () => {
    if (music.paused) {
        try {
            await music.play();

            musicButton.classList.add("playing");
            musicButton.setAttribute("aria-label", "Jeda musik");
            musicButton.title = "Jeda musik";

            console.log("Musik berhasil diputar.");
        } catch (error) {
            console.error("Musik gagal diputar:", error);

            alert(
                "Musik gagal diputar. Pastikan file MP3 benar, berada di folder yang sama dengan index.html, dan bisa diputar."
            );
        }
    } else {
        music.pause();

        musicButton.classList.remove("playing");
        musicButton.setAttribute("aria-label", "Putar musik");
        musicButton.title = "Putar musik";
    }
});

// Menyesuaikan animasi tombol dengan status musik
music.addEventListener("play", () => {
    musicButton.classList.add("playing");
    musicButton.setAttribute("aria-label", "Jeda musik");
});

music.addEventListener("pause", () => {
    musicButton.classList.remove("playing");
    musicButton.setAttribute("aria-label", "Putar musik");
});