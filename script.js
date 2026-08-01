// --- 1. CONFIGURACIÓN DEL CONTADOR REGRESIVO ---
const weddingDate = new Date(2026, 8, 26, 15, 0, 0).getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference < 0) {
        clearInterval(countdownInterval);
        const countdownGrid = document.querySelector(".countdown-grid");
        if (countdownGrid) {
            countdownGrid.innerHTML = "<p style='color:#ffffff; font-size:1.1rem;'>¡Hoy es nuestro gran día!</p>";
        }
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const elDays = document.getElementById("days");
    const elHours = document.getElementById("hours");
    const elMinutes = document.getElementById("minutes");
    const elSeconds = document.getElementById("seconds");

    if (elDays) elDays.innerText = days < 10 ? "0" + days : days;
    if (elHours) elHours.innerText = hours < 10 ? "0" + hours : hours;
    if (elMinutes) elMinutes.innerText = minutes < 10 ? "0" + minutes : minutes;
    if (elSeconds) elSeconds.innerText = seconds < 10 ? "0" + seconds : seconds;
}, 1000);

// --- 2. REPRODUCTOR DE AUDIO ---
const music = document.getElementById("bg-music");
const playBtn = document.getElementById("play-pause-btn");

if (playBtn && music) {
    playBtn.addEventListener("click", function() {
        if (music.paused) {
            music.play().then(() => {
                playBtn.innerText = "⏸";
                playBtn.style.backgroundColor = "#d4af37";
                playBtn.style.color = "#ffffff";
            }).catch(error => {
                console.log("El navegador requiere interacción previa del usuario.", error);
            });
        } else {
            music.pause();
            playBtn.innerText = "♥";
            playBtn.style.backgroundColor = "#ffffff";
            playBtn.style.color = "#d4af37";
        }
    });
}

// --- 3. GESTIÓN DE MODALES ---
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "flex";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", function(event) {
    const modal = document.getElementById("bank-modal");
    if (modal && event.target === modal) {
        modal.style.display = "none";
    }
});
