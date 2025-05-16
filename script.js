// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Reproducir video en bucle
  const video = document.getElementById('videoPlayer');
  if (video) {
    video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.play();
    });
  }

  // Buscar anuncio cada segundo y simular clic
  const checkAdsInterval = setInterval(() => {
    const adContainer = document.getElementById('ad-slot');

    if (adContainer) {
      const adLink = adContainer.querySelector('a'); // Busca un <a> dentro del contenedor

      if (adLink) {
        clearInterval(checkAdsInterval); // Deja de buscar una vez encontrado

        // Simula un clic en el anuncio (abre en nueva pestaña)
        const adWindow = window.open(adLink.href, '_blank');

        if (adWindow) {
          // Genera un tiempo aleatorio entre 15 y 30 segundos
          const randomTime = Math.floor(Math.random() * (30000 - 15000 + 1)) + 15000;

          // Cierra la ventana emergente después del tiempo aleatorio
          setTimeout(() => {
            if (!adWindow.closed) {
              adWindow.close();
            }
          }, randomTime);
        } else {
          console.warn("El navegador bloqueó la ventana emergente.");
        }
      }
    }
  }, 1000); // Verificar cada 1 segundo si el anuncio está cargado
});