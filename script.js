// --- 1. CONFIGURACIÓN DEL CONTADOR REGRESIVO ---
// Modifica los parámetros con la fecha de tu evento (Año, Mes [Enero=0, Febrero=1], Día, Hora, Minutos)
const weddingDate = new Date(2026, 8, 26, 15, 0, 0).getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown-grid").innerHTML = "<p style='color:#ffffff; font-size:1.1rem;'>¡Hoy es nuestro gran día!</p>";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}, 1000);

// --- 2. GESTIÓN DEL REPRODUCTOR DE AUDIO ---
const music = document.getElementById("bg-music");
const playBtn = document.getElementById("play-pause-btn");

playBtn.addEventListener("click", function() {
    if (music.paused) {
        music.play().then(() => {
            playBtn.innerText = "⏸";
            playBtn.style.backgroundColor = "#d4af37";
            playBtn.style.color = "#ffffff";
        }).catch(error => {
            console.log("El navegador bloqueó la reproducción sin interacción previa.", error);
        });
    } else {
        music.pause();
        playBtn.innerText = "♥";
        playBtn.style.backgroundColor = "#ffffff";
        playBtn.style.color = "#d4af37";
    }
});

// --- 3. MODALES (VENTANAS EMERGENTES) ---
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Cerrar el modal al hacer clic en cualquier área gris de fondo
window.onclick = function(event) {
    const modal = document.getElementById("bank-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
