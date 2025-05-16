// Referencia al contenedor de anuncios
const adContainer = document.getElementById('ad-container');

// Mostrar anuncio cada 5 minutos
setInterval(() => {
  adContainer.style.display = 'block';

  // Ocultar después de 15 segundos
  setTimeout(() => {
    adContainer.style.display = 'none';
  }, 15000);
}, 5 * 60 * 1000); // 5 minutos