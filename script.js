// Referencia al video
const video = document.getElementById('videoPlayer');

// Referencia al contenedor de anuncios
const adContainer = document.getElementById('ad-container');

// Tiempo entre anuncios (en milisegundos, 5 minutos en este caso)
const adInterval = 5 * 60 * 1000;

// Variable para rastrear si el anuncio está visible
let isAdVisible = false;

// Mostrar anuncio
function showAd() {
  if (!isAdVisible) {
    adContainer.style.display = 'block';
    isAdVisible = true;
    setTimeout(hideAd, 15000); // Ocultar después de 15 segundos
  }
}

// Ocultar anuncio
function hideAd() {
  adContainer.style.display = 'none';
  isAdVisible = false;
}

// Reiniciar el video cuando termine (bucle infinito)
video.addEventListener('ended', () => {
  video.currentTime = 0;
  video.play();
});

// Iniciar temporizador para mostrar anuncios
setInterval(showAd, adInterval);