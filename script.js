// --- 1. CONFIGURACIÓN DEL CONTADOR REGRESIVO ---
// Establece la fecha de tu boda aquí: (Año, Mes [Enero es 0, Febrero es 1], Día, Hora, Minutos)
const weddingDate = new Date(2026, 8, 26, 15, 0, 0).getTime();

const interval = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    if (timeLeft < 0) {
        clearInterval(interval);
        document.querySelector(".countdown-display").innerHTML = "<p>¡Hoy es el gran día!</p>";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}, 1000);

// --- 2. CONTROLADOR DE LA MÚSICA DE FONDO ---
const music = document.getElementById("bg-music");
const playBtn = document.getElementById("play-pause-btn");

playBtn.addEventListener("click", function() {
    if (music.paused) {
        music.play().then(() => {
            playBtn.innerText = "⏸";
            playBtn.style.backgroundColor = "#7b92a5";
        }).catch(err => {
            console.log("El navegador bloqueó la reproducción automática, interactúa primero.");
        });
    } else {
        music.pause();
        playBtn.innerText = "♥";
        playBtn.style.backgroundColor = "#3b5266";
    }
});

// --- 3. MODALES (VENTANAS EMERGENTES) ---
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Cierra el modal si se hace clic fuera del recuadro blanco
window.onclick = function(event) {
    const modal = document.getElementById("bank-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
