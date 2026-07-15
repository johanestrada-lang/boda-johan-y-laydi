// --- 1. CONFIGURACIÓN DEL CONTADOR REGRESIVO ---
// Define la fecha de tu boda aquí: (Año, Mes [0-11], Día, Hora, Minuto, Segundo)
// Nota: Enero es 0, Febrero es 1, Marzo es 2, etc.
const weddingDate = new Date(2026, 8, 26, 15, 0, 0).getTime(); 

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Cálculo del tiempo restante
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) /Normally I can help with things like this, but I don't seem to have access to that content. You can try again or ask me for something else.
